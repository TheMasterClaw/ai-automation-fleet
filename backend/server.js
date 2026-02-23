const express = require('express');
const cors = require('cors');
const { createServer } = require('http');
const { Server } = require('socket.io');
const { v4: uuidv4 } = require('uuid');
const { generateAIResponse } = require('./src/ai');
const store = require('./src/store');

const app = express();

app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/api/agents/:id', (req, res) => {
  res.json(store.getAgent(req.params.id));
});

app.put('/api/agents/:id', (req, res) => {
  const updated = store.updateAgent(req.params.id, req.body);
  res.json(updated);
});

app.get('/api/workflows', (req, res) => {
  res.json(store.getWorkflows());
});

app.post('/api/workflows', (req, res) => {
  const workflow = store.createWorkflow(req.body);
  res.json(workflow);
});

app.put('/api/workflows/:id', (req, res) => {
  const updated = store.updateWorkflow(req.params.id, req.body);
  if (!updated) return res.status(404).json({ error: 'Workflow not found' });
  res.json(updated);
});

app.delete('/api/workflows/:id', (req, res) => {
  store.deleteWorkflow(req.params.id);
  res.json({ success: true });
});

app.get('/api/activities', (req, res) => {
  const limit = parseInt(req.query.limit) || 50;
  res.json(store.getActivities(limit));
});

app.get('/api/stats', (req, res) => {
  res.json(store.getStats());
});

app.post('/api/integrations/:platform/connect', (req, res) => {
  const { platform } = req.params;
  
  // Simulate async connection
  setTimeout(() => {
    store.connectIntegration(platform);
  }, 1500);
  
  res.json({ success: true, message: `Connecting to ${platform}...` });
});

app.post('/api/integrations/:platform/disconnect', (req, res) => {
  const { platform } = req.params;
  store.disconnectIntegration(platform);
  res.json({ success: true });
});

// Export app for testing
module.exports = app;
module.exports.generateAIResponse = generateAIResponse;
module.exports.store = store;

// Start server only if not in test environment
if (process.env.NODE_ENV !== 'test' && require.main === module) {
  const httpServer = createServer(app);
  const io = new Server(httpServer, {
    cors: { origin: "*", methods: ["GET", "POST"] }
  });
  
  // Socket.IO handling
  io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);
    
    const conversationId = uuidv4();
    const conversation = {
      id: conversationId,
      socketId: socket.id,
      messages: [],
      startedAt: new Date().toISOString()
    };
    store.conversations.set(conversationId, conversation);
    
    const agent = store.getAgent('default');
    socket.emit('message', {
      id: uuidv4(),
      type: 'bot',
      content: agent.welcomeMessage,
      timestamp: new Date().toISOString()
    });
    
    socket.on('message', async (data) => {
      const userMessage = {
        id: uuidv4(),
        type: 'user',
        content: data.content,
        timestamp: new Date().toISOString()
      };
      
      conversation.messages.push(userMessage);
      socket.emit('message', userMessage);
      
      socket.emit('typing', { isTyping: true });
      
      const agentConfig = store.getAgent('default');
      await new Promise(resolve => setTimeout(resolve, agentConfig.typingDelay));
      
      const botResponse = generateAIResponse(data.content, agentConfig);
      const botMessage = {
        id: uuidv4(),
        type: 'bot',
        content: botResponse,
        timestamp: new Date().toISOString()
      };
      
      conversation.messages.push(botMessage);
      socket.emit('typing', { isTyping: false });
      socket.emit('message', botMessage);
      
      store.logActivity('message_received', `New message: "${data.content.substring(0, 30)}..."`);
    });
    
    socket.on('disconnect', () => {
      console.log('Client disconnected:', socket.id);
      store.conversations.delete(conversationId);
    });
  });
  
  const PORT = process.env.PORT || 3001;
  httpServer.listen(PORT, () => {
    console.log(`🤖 Claw Bot server running on port ${PORT}`);
  });
}

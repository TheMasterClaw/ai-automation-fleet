// In-memory data store
const { v4: uuidv4 } = require('uuid');

const defaultAgent = {
  id: 'default',
  name: 'Claw Bot',
  personality: 'friendly',
  tone: 'professional',
  responseStyle: 'detailed',
  integrations: {
    whatsapp: { enabled: false, connected: false },
    telegram: { enabled: false, connected: false },
    slack: { enabled: false, connected: false }
  },
  welcomeMessage: 'Hello! I\'m Claw Bot. How can I help you today?',
  autoReply: true,
  typingDelay: 1000
};

class DataStore {
  constructor() {
    this.agents = new Map();
    this.conversations = new Map();
    this.workflows = new Map();
    this.activities = [];
    
    // Initialize with default agent
    this.agents.set('default', { ...defaultAgent });
  }

  getAgent(id) {
    return this.agents.get(id) || this.agents.get('default');
  }

  updateAgent(id, data) {
    const existing = this.getAgent(id);
    const updated = { ...existing, ...data, id };
    this.agents.set(id, updated);
    this.logActivity('agent_updated', `Agent "${updated.name}" configuration updated`);
    return updated;
  }

  getWorkflows() {
    return Array.from(this.workflows.values());
  }

  createWorkflow(data) {
    const workflow = {
      id: uuidv4(),
      ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    this.workflows.set(workflow.id, workflow);
    this.logActivity('workflow_created', `Workflow "${workflow.name}" created`);
    return workflow;
  }

  updateWorkflow(id, data) {
    const existing = this.workflows.get(id);
    if (!existing) return null;
    
    const updated = { ...existing, ...data, updatedAt: new Date().toISOString() };
    this.workflows.set(id, updated);
    return updated;
  }

  deleteWorkflow(id) {
    return this.workflows.delete(id);
  }

  getActivities(limit = 50) {
    return this.activities.slice(0, limit);
  }

  logActivity(type, message) {
    this.activities.unshift({
      id: uuidv4(),
      type,
      message,
      timestamp: new Date().toISOString()
    });
  }

  getStats() {
    return {
      totalConversations: this.conversations.size,
      totalMessages: Array.from(this.conversations.values())
        .reduce((sum, conv) => sum + (conv.messages?.length || 0), 0),
      activeWorkflows: this.getWorkflows().filter(w => w.active).length,
      totalWorkflows: this.workflows.size,
      activities: this.getActivities(10)
    };
  }

  connectIntegration(platform) {
    const agent = this.getAgent('default');
    agent.integrations[platform] = { ...agent.integrations[platform], connected: true };
    this.logActivity('integration_connected', `${platform.charAt(0).toUpperCase() + platform.slice(1)} integration connected`);
    return agent.integrations[platform];
  }

  disconnectIntegration(platform) {
    const agent = this.getAgent('default');
    agent.integrations[platform] = { ...agent.integrations[platform], connected: false };
    this.logActivity('integration_disconnected', `${platform.charAt(0).toUpperCase() + platform.slice(1)} integration disconnected`);
    return agent.integrations[platform];
  }
}

module.exports = new DataStore();

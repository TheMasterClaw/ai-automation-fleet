import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Send, 
  Bot, 
  User,
  Crown,
  Loader2,
  Sparkles,
  MoreVertical,
  Activity
} from 'lucide-react';
import { subAgents } from './SubAgents';

// Mock messages database per agent
const agentMessages = {};

function SubAgentChat() {
  const { agentId } = useParams();
  const navigate = useNavigate();
  const [agent, setAgent] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const foundAgent = subAgents.find(a => a.id === agentId);
    if (foundAgent) {
      setAgent(foundAgent);
      // Load existing messages or create welcome message
      if (!agentMessages[agentId]) {
        agentMessages[agentId] = [{
          id: 'welcome',
          type: 'bot',
          content: `Hello! I'm ${foundAgent.name}, your ${foundAgent.role}. How can I assist you today?`,
          timestamp: new Date().toISOString(),
          agent: foundAgent
        }];
      }
      setMessages(agentMessages[agentId]);
    }
  }, [agentId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const generateAgentResponse = (agentType, message) => {
    const lowerMsg = message.toLowerCase();
    
    const responses = {
      alpha: {
        default: "I'll design the optimal system architecture for this. What's your scalability requirement?",
        help: "As System Architect, I can help you design microservices, choose databases, and plan your infrastructure. What are you building?",
        greeting: "Ready to architect something amazing. What's the project scope?"
      },
      beta: {
        default: "I can code that for you. Which language/framework would you prefer?",
        help: "I'm here to help with full-stack development. React, Node, Python - you name it. What's the task?",
        greeting: "Hey! Ready to write some clean code. What are we building?"
      },
      gamma: {
        default: "I'll create a beautiful UI for that. Any design preferences or brand guidelines?",
        help: "I specialize in UI/UX design. Wireframes, mockups, or frontend components - what do you need?",
        greeting: "Hello! Ready to make something beautiful. What's the design challenge?"
      },
      delta: {
        default: "I can set up the data pipeline. What volume of data are we handling?",
        help: "I handle databases, data pipelines, and analytics. SQL, NoSQL, or data warehousing - what's your need?",
        greeting: "Hi! Ready to wrangle some data. What are we working with?"
      },
      epsilon: {
        default: "I'll automate that deployment. Which cloud platform are you using?",
        help: "DevOps is my specialty. CI/CD, Docker, Kubernetes - what needs automating?",
        greeting: "Ready to deploy! What infrastructure are we working with?"
      },
      zeta: {
        default: "I'll run a security audit. Are there specific compliance requirements?",
        help: "Security is critical. I can audit code, check for vulnerabilities, or help with compliance. What do you need?",
        greeting: "Hello! Let's make your system secure. What would you like me to review?"
      },
      eta: {
        default: "I can build that integration. What APIs are we connecting to?",
        help: "I specialize in API integrations. REST, GraphQL, webhooks - what's the connection?",
        greeting: "Ready to connect! What systems need to talk to each other?"
      },
      theta: {
        default: "I can build an ML model for that. What type of prediction or analysis do you need?",
        help: "I work with AI/ML. NLP, computer vision, predictive models - what intelligence do you need?",
        greeting: "Greetings! Ready to add some AI magic. What problem should we solve?"
      }
    };

    const agentResponses = responses[agentType] || responses.beta;
    
    if (lowerMsg.match(/hi|hello|hey/)) return agentResponses.greeting;
    if (lowerMsg.match(/help|assist/)) return agentResponses.help;
    return agentResponses.default;
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim() || !agent) return;

    const userMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date().toISOString(),
      agent: agent
    };

    const newMessages = [...messages, userMessage];
    agentMessages[agentId] = newMessages;
    setMessages(newMessages);
    setInput('');

    // Simulate agent typing
    setIsTyping(true);
    
    setTimeout(() => {
      const agentResponse = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: generateAgentResponse(agent.id, userMessage.content),
        timestamp: new Date().toISOString(),
        agent: agent
      };
      
      const finalMessages = [...newMessages, agentResponse];
      agentMessages[agentId] = finalMessages;
      setMessages(finalMessages);
      setIsTyping(false);
    }, 1500);
  };

  const handleBack = () => {
    navigate('/subagents');
  };

  const handleMasterClaw = () => {
    navigate('/chat');
  };

  if (!agent) {
    return (
      <div className="subagent-chat">
        <div className="loading-state">
          <Loader2 size={32} className="animate-spin" />
          <p>Loading agent...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="subagent-chat">
      <header className="chat-header">
        <div className="header-left">
          <button className="btn-icon" onClick={handleBack}>
            <ArrowLeft size={20} />
          </button>
          
          <div 
            className="agent-avatar-small"
            style={{ background: `${agent.color}20`, color: agent.color }}
          >
            <agent.icon size={20} />
          </div>
          
          <div className="agent-info-header">
            <h2>{agent.name}</h2>
            <span className="agent-role-small">{agent.role}</span>
          </div>
        </div>

        <div className="header-right">
          <div className={`status-badge ${agent.status}`}>
            <span className="status-dot-small"></span>
            {agent.status}
          </div>
          
          <button className="btn btn-secondary masterclaw-small" onClick={handleMasterClaw}>
            <Crown size={14} />
            MasterClaw
          </button>
        </div>
      </header>

      <div className="chat-messages">
        {messages.length === 0 && (
          <div className="welcome-message">
            <div className="welcome-avatar" style={{ color: agent.color }}>
              <agent.icon size={48} />
            </div>
            <h3>Chat with {agent.name}</h3>
            <p>{agent.description}</p>
            <div className="quick-prompts">
              <button onClick={() => setInput('Hello!')} className="prompt-btn">👋 Say hello</button>
              <button onClick={() => setInput('I need help with...')} className="prompt-btn">🆘 Get help</button>
              <button onClick={() => setInput('Can you show me an example?')} className="prompt-btn">💡 Example</button>
            </div>
          </div>
        )}

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`message ${msg.type === 'user' ? 'message-user' : 'message-bot'}`}
          >
            <div 
              className="message-avatar"
              style={msg.type === 'bot' ? { background: `${agent.color}20`, color: agent.color } : {}}
            >
              {msg.type === 'user' ? <User size={16} /> : <agent.icon size={16} />}
            </div>
            
            <div className="message-content">
              <p>{msg.content}</p>
              <span className="message-time">
                {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="message message-bot">
            <div 
              className="message-avatar"
              style={{ background: `${agent.color}20`, color: agent.color }}
            >
              <agent.icon size={16} />
            </div>
            <div className="message-content typing">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      <form className="chat-input" onSubmit={sendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message ${agent.name}...`}
          className="input"
        />
        
        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={!input.trim()}
          style={{ background: agent.color }}
        >
          <Send size={18} />
        </button>
      </form>

      <style>{`
        .subagent-chat {
          display: flex;
          flex-direction: column;
          height: 100vh;
          max-height: 100vh;
        }

        .chat-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 24px;
          background: var(--bg-card);
          border-bottom: 1px solid var(--border);
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .btn-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          border: none;
          background: var(--bg-hover);
          color: var(--text-secondary);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }

        .btn-icon:hover {
          background: var(--border);
          color: var(--text-primary);
        }

        .agent-avatar-small {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .agent-info-header h2 {
          font-size: 16px;
          font-weight: 600;
        }

        .agent-role-small {
          font-size: 12px;
          color: var(--text-secondary);
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .status-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          text-transform: uppercase;
          font-weight: 600;
          padding: 6px 12px;
          background: var(--bg-dark);
          border-radius: 20px;
        }

        .status-badge.online {
          color: var(--success);
        }

        .status-badge.busy {
          color: var(--warning);
        }

        .status-badge.offline {
          color: var(--text-muted);
        }

        .status-dot-small {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: currentColor;
        }

        .masterclaw-small {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          font-size: 13px;
        }

        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .welcome-message {
          text-align: center;
          padding: 40px;
          color: var(--text-secondary);
        }

        .welcome-avatar {
          width: 80px;
          height: 80px;
          background: var(--bg-card);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
        }

        .welcome-message h3 {
          font-size: 20px;
          color: var(--text-primary);
          margin-bottom: 8px;
        }

        .quick-prompts {
          display: flex;
          gap: 8px;
          justify-content: center;
          margin-top: 24px;
          flex-wrap: wrap;
        }

        .prompt-btn {
          padding: 8px 16px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 20px;
          color: var(--text-secondary);
          font-size: 13px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .prompt-btn:hover {
          border-color: var(--primary);
          color: var(--text-primary);
        }

        .message {
          display: flex;
          gap: 12px;
          max-width: 80%;
          animation: fadeIn 0.2s ease-out;
        }

        .message-user {
          align-self: flex-end;
          flex-direction: row-reverse;
        }

        .message-bot {
          align-self: flex-start;
        }

        .message-avatar {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          background: var(--bg-hover);
          color: var(--text-primary);
        }

        .message-content {
          background: var(--bg-card);
          padding: 12px 16px;
          border-radius: 12px;
          border: 1px solid var(--border);
        }

        .message-user .message-content {
          background: var(--primary);
          border-color: var(--primary);
          color: white;
        }

        .message-content p {
          font-size: 14px;
          line-height: 1.5;
        }

        .message-time {
          display: block;
          font-size: 11px;
          margin-top: 4px;
          opacity: 0.7;
        }

        .typing-indicator {
          display: flex;
          gap: 4px;
          padding: 4px 8px;
        }

        .typing-indicator span {
          width: 8px;
          height: 8px;
          background: var(--text-secondary);
          border-radius: 50%;
          animation: typing 1s infinite;
        }

        .typing-indicator span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing-indicator span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes typing {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        .chat-input {
          display: flex;
          gap: 12px;
          padding: 20px 24px;
          background: var(--bg-card);
          border-top: 1px solid var(--border);
        }

        .chat-input .input {
          flex: 1;
        }

        .loading-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          gap: 16px;
          color: var(--text-secondary);
        }

        .animate-spin {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default SubAgentChat;

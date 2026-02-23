import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Users, 
  Crown, 
  Zap, 
  Code, 
  Palette, 
  Database,
  Globe,
  Shield,
  Sparkles,
  MessageCircle,
  Activity,
  Clock
} from 'lucide-react'

const subAgents = [
  {
    id: 'alpha',
    name: 'Alpha',
    role: 'System Architect',
    description: 'Infrastructure, deployment, and system design',
    icon: Shield,
    color: '#ef4444',
    status: 'online',
    lastActive: 'Now',
    specialty: 'Architecture'
  },
  {
    id: 'beta', 
    name: 'Beta',
    role: 'Code Specialist',
    description: 'Full-stack development and code review',
    icon: Code,
    color: '#3b82f6',
    status: 'online',
    lastActive: 'Now',
    specialty: 'Development'
  },
  {
    id: 'gamma',
    name: 'Gamma', 
    role: 'UI/UX Designer',
    description: 'Visual design, user experience, and frontend',
    icon: Palette,
    color: '#ec4899',
    status: 'busy',
    lastActive: '2m ago',
    specialty: 'Design'
  },
  {
    id: 'delta',
    name: 'Delta',
    role: 'Data Engineer',
    description: 'Databases, analytics, and data pipelines',
    icon: Database,
    color: '#22c55e',
    status: 'online',
    lastActive: 'Now',
    specialty: 'Data'
  },
  {
    id: 'epsilon',
    name: 'Epsilon',
    role: 'DevOps Lead',
    description: 'CI/CD, cloud infrastructure, and automation',
    icon: Zap,
    color: '#f59e0b',
    status: 'online',
    lastActive: 'Now',
    specialty: 'DevOps'
  },
  {
    id: 'zeta',
    name: 'Zeta',
    role: 'Security Expert',
    description: 'Security audits, penetration testing, compliance',
    icon: Shield,
    color: '#8b5cf6',
    status: 'offline',
    lastActive: '1h ago',
    specialty: 'Security'
  },
  {
    id: 'eta',
    name: 'Eta',
    role: 'Integration Specialist',
    description: 'APIs, third-party integrations, webhooks',
    icon: Globe,
    color: '#06b6d4',
    status: 'online',
    lastActive: 'Now',
    specialty: 'Integration'
  },
  {
    id: 'theta',
    name: 'Theta',
    role: 'AI/ML Engineer',
    description: 'Machine learning, NLP, and AI models',
    icon: Sparkles,
    color: '#f97316',
    status: 'busy',
    lastActive: '5m ago',
    specialty: 'AI/ML'
  }
];

function SubAgents() {
  const navigate = useNavigate();
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAgents = subAgents.filter(agent => 
    agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    agent.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    agent.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const onlineCount = subAgents.filter(a => a.status === 'online').length;
  const busyCount = subAgents.filter(a => a.status === 'busy').length;

  const handleAgentClick = (agentId) => {
    navigate(`/subagents/${agentId}`);
  };

  const handleMasterClawClick = () => {
    navigate('/chat');
  };

  return (
    <div className="subagents-page">
      <header className="subagents-header">
        <div className="header-title">
          <Crown size={28} className="crown-icon" />
          <div>
            <h1>MasterClaw Sub-Agents</h1>
            <p>Your AI automation fleet - {onlineCount} online, {busyCount} busy</p>
          </div>
        </div>
        
        <button className="btn btn-primary masterclaw-btn" onClick={handleMasterClawClick}>
          <MessageCircle size={18} />
          Switch to MasterClaw
        </button>
      </header>

      <div className="subagents-stats">
        <div className="stat-item">
          <div className="stat-value">{subAgents.length}</div>
          <div className="stat-label">Total Agents</div>
        </div>
        <div className="stat-item">
          <div className="stat-value online">{onlineCount}</div>
          <div className="stat-label">Online</div>
        </div>
        <div className="stat-item">
          <div className="stat-value busy">{busyCount}</div>
          <div className="stat-label">Busy</div>
        </div>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search agents by name, role, or specialty..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input search-input"
        />
      </div>

      <div className="agents-grid">
        {filteredAgents.map((agent, index) => (
          <div
            key={agent.id}
            className={`agent-card ${agent.status}`}
            onClick={() => handleAgentClick(agent.id)}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="agent-header">
              <div 
                className="agent-avatar"
                style={{ background: `${agent.color}20`, color: agent.color }}
              >
                <agent.icon size={24} />
              </div>
              
              <div className="agent-status-badge">
                <span className={`status-indicator ${agent.status}`}></span>
                <span className="status-text">{agent.status}</span>
              </div>
            </div>

            <div className="agent-info">
              <h3>{agent.name}</h3>
              <p className="agent-role">{agent.role}</p>
              <p className="agent-description">{agent.description}</p>
            </div>

            <div className="agent-footer">
              <span className="specialty-tag" style={{ color: agent.color }}>
                {agent.specialty}
              </span>
              
              <div className="last-active">
                <Clock size={12} />
                {agent.lastActive}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .subagents-page {
          padding: 32px;
          max-width: 1200px;
        }

        .subagents-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .header-title {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .crown-icon {
          color: var(--secondary);
        }

        .header-title h1 {
          font-size: 28px;
          font-weight: 700;
          background: linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .header-title p {
          color: var(--text-secondary);
          margin-top: 4px;
        }

        .masterclaw-btn {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .subagents-stats {
          display: flex;
          gap: 24px;
          margin-bottom: 24px;
          padding: 20px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
        }

        .stat-item {
          text-align: center;
          min-width: 80px;
        }

        .stat-value {
          font-size: 32px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .stat-value.online {
          color: var(--success);
        }

        .stat-value.busy {
          color: var(--warning);
        }

        .stat-label {
          font-size: 12px;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .search-bar {
          margin-bottom: 24px;
        }

        .search-input {
          padding: 14px 20px;
          font-size: 15px;
        }

        .agents-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }

        .agent-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 20px;
          cursor: pointer;
          transition: all 0.2s;
          animation: fadeIn 0.3s ease-out forwards;
          opacity: 0;
        }

        .agent-card:hover {
          border-color: var(--primary);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }

        .agent-card.online {
          border-left: 3px solid var(--success);
        }

        .agent-card.busy {
          border-left: 3px solid var(--warning);
        }

        .agent-card.offline {
          border-left: 3px solid var(--text-muted);
          opacity: 0.8;
        }

        .agent-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }

        .agent-avatar {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .agent-status-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          text-transform: uppercase;
          font-weight: 600;
          padding: 4px 10px;
          background: var(--bg-dark);
          border-radius: 20px;
        }

        .status-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .status-indicator.online {
          background: var(--success);
          box-shadow: 0 0 8px var(--success);
        }

        .status-indicator.busy {
          background: var(--warning);
        }

        .status-indicator.offline {
          background: var(--text-muted);
        }

        .agent-info h3 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .agent-role {
          font-size: 13px;
          color: var(--primary-light);
          font-weight: 500;
          margin-bottom: 8px;
        }

        .agent-description {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .agent-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid var(--border);
        }

        .specialty-tag {
          font-size: 11px;
          font-weight: 600;
          padding: 4px 10px;
          background: var(--bg-dark);
          border-radius: 20px;
        }

        .last-active {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 11px;
          color: var(--text-muted);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .agents-grid {
            grid-template-columns: 1fr;
          }

          .subagents-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
        }
      `}</style>
    </div>
  );
}

export default SubAgents;
export { subAgents };

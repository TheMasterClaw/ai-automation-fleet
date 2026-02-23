import { Routes, Route, NavLink } from 'react-router-dom'
import { 
  MessageSquare, 
  Settings, 
  Workflow, 
  LayoutDashboard, 
  Bot,
  Zap,
  Users,
  Crown
} from 'lucide-react'
import Chat from './components/Chat'
import Dashboard from './components/Dashboard'
import AgentConfig from './components/AgentConfig'
import WorkflowBuilder from './components/WorkflowBuilder'
import Integrations from './components/Integrations'
import SubAgents from './components/SubAgents'
import SubAgentChat from './components/SubAgentChat'

function App() {
  return (
    <div className="app">
      <nav className="sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <Bot className="logo-icon" />
            <span>Claw Bot</span>
          </div>
          <div className="version">Rex Deus v2.0</div>
        </div>
        
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </NavLink>
          
          <NavLink to="/chat" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <MessageSquare size={20} />
            <span>Live Chat</span>
          </NavLink>
          
          <NavLink to="/configure" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <Settings size={20} />
            <span>Configure</span>
          </NavLink>
          
          <NavLink to="/workflows" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <Workflow size={20} />
            <span>Workflows</span>
          </NavLink>
          
          <NavLink to="/integrations" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <Zap size={20} />
            <span>Integrations</span>
          </NavLink>

          <div className="nav-section">
            <span className="nav-section-title">
              <Crown size={14} /> MasterClaw
            </span>
          </div>
          
          <NavLink to="/subagents" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <Users size={20} />
            <span>Sub-Agents</span>
            <span className="nav-badge">8</span>
          </NavLink>
        </div>
        
        <div className="sidebar-footer">
          <div className="connection-status">
            <span className="status-dot online"></span>
            <span>Rex Deus Online</span>
          </div>
        </div>
      </nav>
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/configure" element={<AgentConfig />} />
          <Route path="/workflows" element={<WorkflowBuilder />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/subagents" element={<SubAgents />} />
          <Route path="/subagents/:agentId" element={<SubAgentChat />} />
        </Routes>
      </main>
      
      <style>{`
        .app {
          display: flex;
          min-height: 100vh;
        }
        
        .sidebar {
          width: 260px;
          background: var(--bg-card);
          border-right: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          position: fixed;
          height: 100vh;
        }
        
        .sidebar-header {
          padding: 24px;
          border-bottom: 1px solid var(--border);
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 20px;
          font-weight: 700;
        }
        
        .logo-icon {
          width: 32px;
          height: 32px;
          color: var(--primary);
        }
        
        .version {
          font-size: 11px;
          color: var(--text-muted);
          margin-top: 4px;
          margin-left: 44px;
        }
        
        .nav-links {
          flex: 1;
          padding: 16px 12px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          overflow-y: auto;
        }
        
        .nav-section {
          margin-top: 16px;
          padding: 0 16px;
        }
        
        .nav-section-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--secondary);
        }
        
        .nav-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 8px;
          color: var(--text-secondary);
          text-decoration: none;
          transition: all 0.2s;
          position: relative;
        }
        
        .nav-link:hover {
          background: var(--bg-hover);
          color: var(--text-primary);
        }
        
        .nav-link.active {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(236, 72, 153, 0.1) 100%);
          color: var(--primary-light);
        }
        
        .nav-badge {
          margin-left: auto;
          background: var(--secondary);
          color: white;
          font-size: 10px;
          padding: 2px 8px;
          border-radius: 12px;
          font-weight: 600;
        }
        
        .sidebar-footer {
          padding: 16px;
          border-top: 1px solid var(--border);
        }
        
        .connection-status {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--text-secondary);
        }
        
        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--error);
        }
        
        .status-dot.online {
          background: var(--success);
          box-shadow: 0 0 8px var(--success);
        }
        
        .main-content {
          flex: 1;
          margin-left: 260px;
          min-height: 100vh;
        }
        
        @media (max-width: 768px) {
          .sidebar {
            width: 100%;
            position: relative;
            height: auto;
          }
          
          .main-content {
            margin-left: 0;
          }
          
          .app {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}

export default App

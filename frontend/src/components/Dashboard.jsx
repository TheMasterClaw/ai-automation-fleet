import { useEffect, useState } from 'react'
import { 
  MessageCircle, 
  Workflow, 
  Zap, 
  TrendingUp, 
  Clock,
  Bot,
  Users,
  Activity
} from 'lucide-react'

function Dashboard() {
  const [stats, setStats] = useState({
    totalConversations: 0,
    totalMessages: 0,
    activeWorkflows: 0,
    totalWorkflows: 0,
    activities: []
  })

  useEffect(() => {
    fetchStats()
    const interval = setInterval(fetchStats, 5000)
    return () => clearInterval(interval)
  }, [])

  const fetchStats = async () => {
    try {
      const res = await fetch('/api/stats')
      const data = await res.json()
      setStats(data)
    } catch (err) {
      console.error('Failed to fetch stats:', err)
    }
  }

  const statCards = [
    { 
      title: 'Total Conversations', 
      value: stats.totalConversations, 
      icon: MessageCircle, 
      color: '#6366f1',
      change: '+12%'
    },
    { 
      title: 'Messages Exchanged', 
      value: stats.totalMessages, 
      icon: Bot, 
      color: '#ec4899',
      change: '+8%'
    },
    { 
      title: 'Active Workflows', 
      value: stats.activeWorkflows, 
      icon: Workflow, 
      color: '#22c55e',
      change: '+3'
    },
    { 
      title: 'Integrations', 
      value: '3', 
      icon: Zap, 
      color: '#f59e0b',
      change: 'Active'
    },
  ]

  const getActivityIcon = (type) => {
    switch (type) {
      case 'message_received': return MessageCircle
      case 'agent_updated': return Bot
      case 'workflow_created': return Workflow
      case 'integration_connected': return Zap
      default: return Activity
    }
  }

  const getActivityColor = (type) => {
    switch (type) {
      case 'message_received': return '#6366f1'
      case 'agent_updated': return '#ec4899'
      case 'workflow_created': return '#22c55e'
      case 'integration_connected': return '#f59e0b'
      default: return '#94a3b8'
    }
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome to your Claw Bot command center</p>
      </header>

      <div className="stats-grid">
        {statCards.map((card, idx) => (
          <div key={idx} className="stat-card animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
            <div className="stat-icon" style={{ background: `${card.color}20`, color: card.color }}>
              <card.icon size={24} />
            </div>
            <div className="stat-content">
              <div className="stat-value">{card.value}</div>
              <div className="stat-title">{card.title}</div>
            </div>
            <div className="stat-change" style={{ color: card.change.startsWith('+') ? '#22c55e' : card.color }}>
              {card.change}
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card activity-feed">
          <div className="card-header">
            <Activity size={20} />
            <h3>Recent Activity</h3>
          </div>
          
          <div className="activity-list">
            {stats.activities.length === 0 ? (
              <div className="empty-state">
                <Clock size={48} className="empty-icon" />
                <p>No recent activity</p>
              </div>
            ) : (
              stats.activities.map((activity, idx) => {
                const Icon = getActivityIcon(activity.type)
                const color = getActivityColor(activity.type)
                return (
                  <div key={activity.id} className="activity-item animate-fade-in" style={{ animationDelay: `${idx * 0.05}s` }}>
                    <div className="activity-icon" style={{ background: `${color}20`, color }}>
                      <Icon size={16} />
                    </div>
                    <div className="activity-content">
                      <p>{activity.message}</p>
                      <span className="activity-time">
                        {new Date(activity.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                  </div>
                )
              })
            )}
          </div>
        </div>

        <div className="dashboard-card quick-actions">
          <div className="card-header">
            <Zap size={20} />
            <h3>Quick Actions</h3>
          </div>
          
          <div className="action-buttons">
            <a href="#/chat" className="action-btn">
              <MessageCircle size={20} />
              <span>Test Chat</span>
            </a>
            
            <a href="#/configure" className="action-btn">
              <Bot size={20} />
              <span>Configure Agent</span>
            </a>
            
            <a href="#/workflows" className="action-btn">
              <Workflow size={20} />
              <span>Create Workflow</span>
            </a>
            
            <a href="#/integrations" className="action-btn">
              <Zap size={20} />
              <span>Connect Integrations</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .dashboard {
          padding: 32px;
        }
        
        .dashboard-header {
          margin-bottom: 32px;
        }
        
        .dashboard-header h1 {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 8px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .dashboard-header p {
          color: var(--text-secondary);
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
          margin-bottom: 32px;
        }
        
        .stat-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          transition: all 0.2s;
        }
        
        .stat-card:hover {
          border-color: var(--primary);
          transform: translateY(-2px);
        }
        
        .stat-icon {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .stat-content {
          flex: 1;
        }
        
        .stat-value {
          font-size: 28px;
          font-weight: 700;
          color: var(--text-primary);
        }
        
        .stat-title {
          font-size: 13px;
          color: var(--text-secondary);
        }
        
        .stat-change {
          font-size: 13px;
          font-weight: 600;
        }
        
        .dashboard-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 24px;
        }
        
        @media (max-width: 1024px) {
          .dashboard-grid {
            grid-template-columns: 1fr;
          }
        }
        
        .dashboard-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 24px;
        }
        
        .card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          color: var(--text-primary);
        }
        
        .card-header h3 {
          font-size: 16px;
          font-weight: 600;
        }
        
        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .activity-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px;
          background: var(--bg-dark);
          border-radius: 8px;
        }
        
        .activity-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .activity-content p {
          font-size: 14px;
          color: var(--text-primary);
          margin-bottom: 4px;
        }
        
        .activity-time {
          font-size: 12px;
          color: var(--text-muted);
        }
        
        .empty-state {
          text-align: center;
          padding: 40px;
          color: var(--text-secondary);
        }
        
        .empty-icon {
          margin-bottom: 12px;
          opacity: 0.5;
        }
        
        .action-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .action-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: var(--bg-dark);
          border: 1px solid var(--border);
          border-radius: 8px;
          color: var(--text-primary);
          text-decoration: none;
          transition: all 0.2s;
        }
        
        .action-btn:hover {
          background: var(--bg-hover);
          border-color: var(--primary);
        }
        
        .action-btn span {
          font-size: 14px;
          font-weight: 500;
        }
      `}</style>
    </div>
  )
}

export default Dashboard

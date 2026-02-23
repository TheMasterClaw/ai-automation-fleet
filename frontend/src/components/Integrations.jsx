import { useState, useEffect } from 'react'
import { 
  Zap, 
  MessageCircle,
  CheckCircle,
  XCircle,
  RefreshCw,
  ExternalLink,
  Smartphone,
  Bot,
  AlertCircle
} from 'lucide-react'

function Integrations() {
  const [integrations, setIntegrations] = useState({
    whatsapp: { enabled: false, connected: false, loading: false },
    telegram: { enabled: false, connected: false, loading: false },
    slack: { enabled: false, connected: false, loading: false }
  })

  useEffect(() => {
    fetchIntegrations()
  }, [])

  const fetchIntegrations = async () => {
    try {
      const res = await fetch('/api/agents/default')
      const data = await res.json()
      if (data.integrations) {
        setIntegrations(prev => ({
          whatsapp: { ...prev.whatsapp, ...data.integrations.whatsapp },
          telegram: { ...prev.telegram, ...data.integrations.telegram },
          slack: { ...prev.slack, ...data.integrations.slack }
        }))
      }
    } catch (err) {
      console.error('Failed to fetch integrations:', err)
    }
  }

  const toggleIntegration = async (platform) => {
    const current = integrations[platform]
    
    if (current.connected) {
      // Disconnect
      setIntegrations(prev => ({
        ...prev,
        [platform]: { ...prev[platform], loading: true }
      }))
      
      try {
        await fetch(`/api/integrations/${platform}/disconnect`, { method: 'POST' })
        setIntegrations(prev => ({
          ...prev,
          [platform]: { enabled: false, connected: false, loading: false }
        }))
      } catch (err) {
        console.error('Failed to disconnect:', err)
        setIntegrations(prev => ({
          ...prev,
          [platform]: { ...prev[platform], loading: false }
        }))
      }
    } else {
      // Connect
      setIntegrations(prev => ({
        ...prev,
        [platform]: { ...prev[platform], enabled: true, loading: true }
      }))
      
      try {
        await fetch(`/api/integrations/${platform}/connect`, { method: 'POST' })
        
        // Simulate connection delay
        setTimeout(() => {
          setIntegrations(prev => ({
            ...prev,
            [platform]: { enabled: true, connected: true, loading: false }
          }))
        }, 1500)
      } catch (err) {
        console.error('Failed to connect:', err)
        setIntegrations(prev => ({
          ...prev,
          [platform]: { ...prev[platform], loading: false }
        }))
      }
    }
  }

  const integrationCards = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      description: 'Connect your AI agent to WhatsApp Business API',
      icon: MessageCircle,
      color: '#22c55e',
      features: ['Send/receive messages', 'Media support', 'Group chat', 'Quick replies']
    },
    {
      id: 'telegram',
      name: 'Telegram',
      description: 'Integrate with Telegram Bot API',
      icon: Smartphone,
      color: '#0088cc',
      features: ['Bot commands', 'Inline queries', 'Webhook support', 'Rich media']
    },
    {
      id: 'slack',
      name: 'Slack',
      description: 'Add your agent to Slack workspaces',
      icon: Zap,
      color: '#4a154b',
      features: ['Slash commands', 'App mentions', 'Channel messages', 'DM support']
    }
  ]

  return (
    <div className="integrations-page">
      <div className="integrations-header">
        <div className="integrations-title">
          <Zap size={28} />
          <div>
            <h1>Integrations</h1>
            <p>Connect your AI agent to messaging platforms</p>
          </div>
        </div>
      </div>

      <div className="integrations-grid">
        {integrationCards.map(card => {
          const status = integrations[card.id]
          return (
            <div key={card.id} className="integration-card">
              <div className="integration-header">
                <div 
                  className="integration-icon"
                  style={{ background: `${card.color}20`, color: card.color }}
                >
                  <card.icon size={28} />
                </div>
                
                <div className="integration-status">
                  {status.connected ? (
                    <span className="badge badge-success">
                      <CheckCircle size={12} /> Connected
                    </span>
                  ) : status.enabled ? (
                    <span className="badge badge-warning">
                      <AlertCircle size={12} /> Setup Required
                    </span>
                  ) : (
                    <span className="badge badge-error">
                      <XCircle size={12} /> Not Connected
                    </span>
                  )}
                </div>
              </div>

              <div className="integration-content">
                <h3>{card.name}</h3>
                <p>{card.description}</p>

                <div className="integration-features">
                  {card.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>
              </div>

              <div className="integration-actions">
                <button
                  className={`btn ${status.connected ? 'btn-secondary' : 'btn-primary'}`}
                  onClick={() => toggleIntegration(card.id)}
                  disabled={status.loading}
                >
                  {status.loading ? (
                    <><RefreshCw size={18} className="animate-spin" /> Connecting...</>
                  ) : status.connected ? (
                    <><XCircle size={18} /> Disconnect</>
                  ) : (
                    <><ExternalLink size={18} /> Connect</>
                  )}
                </button>
              </div>

              {status.connected && (
                <div className="integration-config">
                  <div className="config-item">
                    <span>Webhook URL:</span>
                    <code>https://api.clawbot.io/webhooks/{card.id}</code>
                  </div>
                  
                  <div className="config-item">
                    <span>Status:</span>
                    <span className="status-active"><span className="pulse-dot" /> Active</span>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="integration-tips">
        <div className="tips-icon">
          <Bot size={24} />
        </div>
        <div>
          <h4>Pro Tip</h4>
          <p>You can connect multiple integrations at once. Your AI agent will respond through all connected channels simultaneously.</p>
        </div>
      </div>

      <style>{`
        .integrations-page {
          padding: 32px;
        }
        
        .integrations-header {
          margin-bottom: 32px;
        }
        
        .integrations-title {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .integrations-title h1 {
          font-size: 24px;
          font-weight: 700;
        }
        
        .integrations-title p {
          color: var(--text-secondary);
        }
        
        .integrations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 24px;
        }
        
        .integration-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 24px;
          transition: all 0.2s;
        }
        
        .integration-card:hover {
          border-color: var(--primary);
          transform: translateY(-2px);
        }
        
        .integration-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }
        
        .integration-icon {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .integration-content h3 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 8px;
        }
        
        .integration-content p {
          color: var(--text-secondary);
          font-size: 14px;
          margin-bottom: 16px;
        }
        
        .integration-features {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }
        
        .feature-tag {
          font-size: 12px;
          padding: 4px 10px;
          background: var(--bg-dark);
          border-radius: 20px;
          color: var(--text-secondary);
        }
        
        .integration-actions {
          margin-bottom: 16px;
        }
        
        .integration-actions .btn {
          width: 100%;
          justify-content: center;
        }
        
        .integration-config {
          padding: 16px;
          background: var(--bg-dark);
          border-radius: 8px;
          font-size: 13px;
        }
        
        .config-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }
        
        .config-item:last-child {
          margin-bottom: 0;
        }
        
        .config-item code {
          font-family: monospace;
          background: var(--bg-card);
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 11px;
        }
        
        .status-active {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--success);
        }
        
        .pulse-dot {
          width: 8px;
          height: 8px;
          background: var(--success);
          border-radius: 50%;
          animation: pulse 1.5s ease-in-out infinite;
        }
        
        .integration-tips {
          margin-top: 32px;
          padding: 20px 24px;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .tips-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        
        .integration-tips h4 {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 4px;
        }
        
        .integration-tips p {
          font-size: 13px;
          color: var(--text-secondary);
        }
        
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export default Integrations

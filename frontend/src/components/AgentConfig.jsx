import { useState, useEffect } from 'react'
import { 
  Bot, 
  Save, 
  CheckCircle,
  MessageSquare,
  Sliders,
  Clock
} from 'lucide-react'

function AgentConfig() {
  const [config, setConfig] = useState({
    name: 'Claw Bot',
    personality: 'friendly',
    tone: 'professional',
    responseStyle: 'detailed',
    welcomeMessage: 'Hello! I\'m Claw Bot. How can I help you today?',
    autoReply: true,
    typingDelay: 1000
  })
  const [saved, setSaved] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchConfig()
  }, [])

  const fetchConfig = async () => {
    try {
      const res = await fetch('/api/agents/default')
      const data = await res.json()
      setConfig(prev => ({ ...prev, ...data }))
    } catch (err) {
      console.error('Failed to fetch config:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    try {
      await fetch('/api/agents/default', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(config)
      })
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } catch (err) {
      console.error('Failed to save config:', err)
    }
  }

  const personalities = [
    { value: 'friendly', label: '😊 Friendly', desc: 'Warm, approachable, and conversational' },
    { value: 'professional', label: '💼 Professional', desc: 'Formal, precise, and business-focused' },
    { value: 'playful', label: '🎉 Playful', desc: 'Fun, energetic, and uses emojis' },
    { value: 'expert', label: '🎯 Expert', desc: 'Knowledgeable, detailed, and authoritative' }
  ]

  const tones = [
    { value: 'professional', label: 'Professional' },
    { value: 'casual', label: 'Casual' },
    { value: 'enthusiastic', label: 'Enthusiastic' },
    { value: 'calm', label: 'Calm & Supportive' }
  ]

  const responseStyles = [
    { value: 'concise', label: 'Concise', desc: 'Short, direct answers' },
    { value: 'detailed', label: 'Detailed', desc: 'Comprehensive explanations' },
    { value: 'balanced', label: 'Balanced', desc: 'Moderate length responses' }
  ]

  if (loading) {
    return (
      <div className="config-page">
        <div className="loading">Loading configuration...</div>
      </div>
    )
  }

  return (
    <div className="config-page">
      <div className="config-header">
        <div className="config-title">
          <Bot size={28} />
          <div>
            <h1>Agent Configuration</h1>
            <p>Customize how your AI agent behaves and responds</p>
          </div>
        </div>
        
        <button 
          className={`btn btn-primary save-btn ${saved ? 'saved' : ''}`}
          onClick={handleSave}
        >
          {saved ? <><CheckCircle size={18} /> Saved!</> : <><Save size={18} /> Save Changes</>}
        </button>
      </div>

      <div className="config-grid">
        <div className="config-section">
          <div className="section-header">
            <MessageSquare size={20} />
            <h3>Basic Settings</h3>
          </div>
          
          <div className="form-group">
            <label>Agent Name</label>
            <input
              type="text"
              className="input"
              value={config.name}
              onChange={(e) => setConfig({ ...config, name: e.target.value })}
              placeholder="Enter agent name"
            />
          </div>
          
          <div className="form-group">
            <label>Welcome Message</label>
            <textarea
              className="input"
              rows={3}
              value={config.welcomeMessage}
              onChange={(e) => setConfig({ ...config, welcomeMessage: e.target.value })}
              placeholder="Enter welcome message"
            />
          </div>
        </div>

        <div className="config-section">
          <div className="section-header">
            <Sliders size={20} />
            <h3>Personality & Tone</h3>
          </div>
          
          <div className="form-group">
            <label>Personality</label>
            <div className="personality-grid">
              {personalities.map(p => (
                <div
                  key={p.value}
                  className={`personality-card ${config.personality === p.value ? 'selected' : ''}`}
                  onClick={() => setConfig({ ...config, personality: p.value })}
                >
                  <div className="personality-label">{p.label}</div>
                  <div className="personality-desc">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Tone of Voice</label>
              <select
                className="select"
                value={config.tone}
                onChange={(e) => setConfig({ ...config, tone: e.target.value })}
              >
                {tones.map(t => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label>Response Style</label>
              <select
                className="select"
                value={config.responseStyle}
                onChange={(e) => setConfig({ ...config, responseStyle: e.target.value })}
              >
                {responseStyles.map(r => (
                  <option key={r.value} value={r.value}>{r.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="config-section">
          <div className="section-header">
            <Clock size={20} />
            <h3>Behavior Settings</h3>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <div className="toggle-label">
                <label>Auto-Reply</label>
                <div 
                  className={`toggle ${config.autoReply ? 'active' : ''}`}
                  onClick={() => setConfig({ ...config, autoReply: !config.autoReply })}
                />
              </div>
              <p className="help-text">Automatically respond to incoming messages</p>
            </div>
            
            <div className="form-group">
              <label>Typing Delay (ms)</label>
              <input
                type="number"
                className="input"
                value={config.typingDelay}
                onChange={(e) => setConfig({ ...config, typingDelay: parseInt(e.target.value) || 0 })}
                min="0"
                max="5000"
                step="100"
              />
              <p className="help-text">Simulate natural typing delay</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .config-page {
          padding: 32px;
          max-width: 900px;
        }
        
        .config-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
        }
        
        .config-title {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .config-title h1 {
          font-size: 24px;
          font-weight: 700;
        }
        
        .config-title p {
          color: var(--text-secondary);
          font-size: 14px;
        }
        
        .save-btn {
          transition: all 0.3s;
        }
        
        .save-btn.saved {
          background: var(--success);
        }
        
        .config-grid {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        
        .config-section {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 24px;
        }
        
        .section-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border);
        }
        
        .section-header h3 {
          font-size: 16px;
          font-weight: 600;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group:last-child {
          margin-bottom: 0;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        
        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }
        
        label {
          display: block;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 8px;
          color: var(--text-primary);
        }
        
        .help-text {
          font-size: 12px;
          color: var(--text-muted);
          margin-top: 6px;
        }
        
        .personality-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        
        @media (max-width: 600px) {
          .personality-grid {
            grid-template-columns: 1fr;
          }
        }
        
        .personality-card {
          padding: 16px;
          background: var(--bg-dark);
          border: 2px solid var(--border);
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .personality-card:hover {
          border-color: var(--primary-light);
        }
        
        .personality-card.selected {
          border-color: var(--primary);
          background: rgba(99, 102, 241, 0.1);
        }
        
        .personality-label {
          font-weight: 600;
          margin-bottom: 4px;
        }
        
        .personality-desc {
          font-size: 12px;
          color: var(--text-secondary);
        }
        
        .toggle-label {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 4px;
        }
        
        .toggle-label label {
          margin-bottom: 0;
        }
        
        .loading {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 400px;
          color: var(--text-secondary);
        }
      `}</style>
    </div>
  )
}

export default AgentConfig

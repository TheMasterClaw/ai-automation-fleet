import { useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client'
import { 
  Send, 
  Bot, 
  User, 
  Sparkles,
  Loader2
} from 'lucide-react'

function Chat() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [connected, setConnected] = useState(false)
  const socketRef = useRef(null)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    socketRef.current = io()
    
    socketRef.current.on('connect', () => {
      setConnected(true)
    })
    
    socketRef.current.on('disconnect', () => {
      setConnected(false)
    })
    
    socketRef.current.on('message', (msg) => {
      setMessages(prev => [...prev, msg])
    })
    
    socketRef.current.on('typing', ({ isTyping }) => {
      setIsTyping(isTyping)
    })

    return () => {
      socketRef.current?.disconnect()
    }
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const sendMessage = (e) => {
    e.preventDefault()
    if (!input.trim() || !connected) return
    
    socketRef.current.emit('message', { content: input })
    setInput('')
  }

  return (
    <div className="chat-page">
      <div className="chat-header">
        <div className="chat-header-info">
          <div className="chat-avatar">
            <Bot size={24} />
          </div>
          <div>
            <h2>Claw Bot</h2>
            <div className="chat-status">
              <span className={`status-dot ${connected ? 'online' : ''}`}></span>
              <span>{connected ? 'Online' : 'Connecting...'}</span>
            </div>
          </div>
        </div>
        
        <div className="chat-badges">
          <span className="badge badge-info">
            <Sparkles size={12} />
            AI Powered
          </span>
        </div>
      </div>

      <div className="chat-messages">
        {messages.length === 0 && (
          <div className="welcome-message">
            <div className="welcome-icon">
              <Bot size={48} />
            </div>
            <h3>Welcome to Claw Bot! 👋</h3>
            <p>I can help you with:</p>
            <ul>
              <li>🎯 Answering questions about our services</li>
              <li>💡 Providing product recommendations</li>
              <li>🔧 Troubleshooting common issues</li>
              <li>📊 Explaining pricing and features</li>
            </ul>
            <p className="welcome-hint">Try asking about pricing, features, or just say hello!</p>
          </div>
        )}

        {messages.map((msg, idx) => (
          <div 
            key={msg.id} 
            className={`message ${msg.type === 'user' ? 'message-user' : 'message-bot'} animate-fade-in`}
            style={{ animationDelay: `${idx * 0.05}s` }}
          >
            <div className={`message-avatar ${msg.type}`}>
              {msg.type === 'user' ? <User size={16} /> : <Bot size={16} />}
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
            <div className="message-avatar bot">
              <Bot size={16} />
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
          placeholder={connected ? "Type your message..." : "Connecting..."}
          disabled={!connected}
          className="input"
        />
        
        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={!input.trim() || !connected}
        >
          {connected ? <Send size={18} /> : <Loader2 size={18} className="animate-spin" />}
        </button>
      </form>

      <style>{`
        .chat-page {
          display: flex;
          flex-direction: column;
          height: 100vh;
          max-height: 100vh;
        }
        
        .chat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          background: var(--bg-card);
          border-bottom: 1px solid var(--border);
        }
        
        .chat-header-info {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .chat-avatar {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        
        .chat-header h2 {
          font-size: 18px;
          font-weight: 600;
        }
        
        .chat-status {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: var(--text-secondary);
        }
        
        .chat-status .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--error);
        }
        
        .chat-status .status-dot.online {
          background: var(--success);
          box-shadow: 0 0 8px var(--success);
        }
        
        .chat-badges {
          display: flex;
          gap: 8px;
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
        
        .welcome-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          color: white;
        }
        
        .welcome-message h3 {
          font-size: 20px;
          color: var(--text-primary);
          margin-bottom: 16px;
        }
        
        .welcome-message ul {
          list-style: none;
          text-align: left;
          max-width: 300px;
          margin: 16px auto;
        }
        
        .welcome-message li {
          padding: 8px 0;
        }
        
        .welcome-hint {
          margin-top: 24px;
          padding: 12px 20px;
          background: var(--bg-card);
          border-radius: 8px;
          display: inline-block;
        }
        
        .message {
          display: flex;
          gap: 12px;
          max-width: 80%;
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
        }
        
        .message-avatar.user {
          background: var(--bg-hover);
          color: var(--text-primary);
        }
        
        .message-avatar.bot {
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          color: white;
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
        
        .chat-input .btn {
          padding: 12px 20px;
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

export default Chat

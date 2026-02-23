import { useState, useEffect } from 'react'
import { 
  Workflow, 
  Plus, 
  Trash2, 
  Play, 
  Pause,
  Save,
  MessageSquare,
  Mail,
  Bell,
  Database,
  Webhook,
  Clock,
  ArrowRight,
  GripVertical
} from 'lucide-react'

function WorkflowBuilder() {
  const [workflows, setWorkflows] = useState([])
  const [selectedWorkflow, setSelectedWorkflow] = useState(null)
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    fetchWorkflows()
  }, [])

  const fetchWorkflows = async () => {
    try {
      const res = await fetch('/api/workflows')
      const data = await res.json()
      setWorkflows(data)
    } catch (err) {
      console.error('Failed to fetch workflows:', err)
    }
  }

  const createWorkflow = () => {
    const newWorkflow = {
      id: Date.now().toString(),
      name: 'New Workflow',
      description: 'Describe your workflow',
      active: false,
      nodes: [
        { id: 'start', type: 'trigger', label: 'Message Received', icon: MessageSquare, x: 50, y: 50 }
      ],
      connections: []
    }
    setSelectedWorkflow(newWorkflow)
    setIsEditing(true)
  }

  const saveWorkflow = async () => {
    try {
      const method = workflows.find(w => w.id === selectedWorkflow.id) ? 'PUT' : 'POST'
      const url = method === 'PUT' ? `/api/workflows/${selectedWorkflow.id}` : '/api/workflows'
      
      await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(selectedWorkflow)
      })
      
      await fetchWorkflows()
      setIsEditing(false)
    } catch (err) {
      console.error('Failed to save workflow:', err)
    }
  }

  const deleteWorkflow = async (id) => {
    try {
      await fetch(`/api/workflows/${id}`, { method: 'DELETE' })
      await fetchWorkflows()
      if (selectedWorkflow?.id === id) {
        setSelectedWorkflow(null)
        setIsEditing(false)
      }
    } catch (err) {
      console.error('Failed to delete workflow:', err)
    }
  }

  const toggleWorkflow = async (workflow) => {
    const updated = { ...workflow, active: !workflow.active }
    try {
      await fetch(`/api/workflows/${workflow.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updated)
      })
      await fetchWorkflows()
    } catch (err) {
      console.error('Failed to toggle workflow:', err)
    }
  }

  const addNode = (type) => {
    const icons = {
      message: MessageSquare,
      email: Mail,
      notify: Bell,
      database: Database,
      webhook: Webhook,
      delay: Clock
    }
    
    const labels = {
      message: 'Send Message',
      email: 'Send Email',
      notify: 'Send Notification',
      database: 'Update Database',
      webhook: 'Webhook Call',
      delay: 'Wait Delay'
    }

    const newNode = {
      id: `node-${Date.now()}`,
      type,
      label: labels[type],
      icon: icons[type],
      x: 200 + (selectedWorkflow.nodes.length * 50),
      y: 150 + (selectedWorkflow.nodes.length * 30)
    }

    setSelectedWorkflow({
      ...selectedWorkflow,
      nodes: [...selectedWorkflow.nodes, newNode]
    })
  }

  const nodeTypes = [
    { type: 'message', label: 'Send Message', icon: MessageSquare, color: '#6366f1' },
    { type: 'email', label: 'Send Email', icon: Mail, color: '#ec4899' },
    { type: 'notify', label: 'Notification', icon: Bell, color: '#f59e0b' },
    { type: 'database', label: 'Database', icon: Database, color: '#22c55e' },
    { type: 'webhook', label: 'Webhook', icon: Webhook, color: '#8b5cf6' },
    { type: 'delay', label: 'Delay', icon: Clock, color: '#64748b' }
  ]

  if (isEditing && selectedWorkflow) {
    return (
      <div className="workflow-builder">
        <div className="builder-header">
          <div className="builder-title">
            <Workflow size={24} />
            <input
              type="text"
              value={selectedWorkflow.name}
              onChange={(e) => setSelectedWorkflow({ ...selectedWorkflow, name: e.target.value })}
              className="workflow-name-input"
            />
          </div>
          
          <div className="builder-actions">
            <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
            <button className="btn btn-primary" onClick={saveWorkflow}>
              <Save size={18} /> Save Workflow
            </button>
          </div>
        </div>

        <div className="builder-content">
          <div className="node-palette">
            <h4>Add Nodes</h4>
            {nodeTypes.map(nodeType => (
              <button
                key={nodeType.type}
                className="palette-item"
                onClick={() => addNode(nodeType.type)}
                style={{ '--node-color': nodeType.color }}
              >
                <nodeType.icon size={18} style={{ color: nodeType.color }} />
                <span>{nodeType.label}</span>
              </button>
            ))}
          </div>

          <div className="canvas">
            <div className="canvas-grid">
              {selectedWorkflow.nodes.map((node, idx) => (
                <div
                  key={node.id}
                  className={`workflow-node ${node.type}`}
                  style={{ left: node.x, top: node.y }}
                >
                  <div className="node-drag-handle">
                    <GripVertical size={14} />
                  </div>
                  
                  <div className="node-icon">
                    <node.icon size={18} />
                  </div>
                  
                  <div className="node-content">
                    <div className="node-label">{node.label}</div>
                    {idx < selectedWorkflow.nodes.length - 1 && (
                      <div className="node-connector">
                        <ArrowRight size={16} />
                      </div>
                    )}
                  </div>
                  
                  <button 
                    className="node-delete"
                    onClick={() => {
                      setSelectedWorkflow({
                        ...selectedWorkflow,
                        nodes: selectedWorkflow.nodes.filter(n => n.id !== node.id)
                      })
                    }}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
              
              <div className="workflow-end">
                <div className="end-dot" />
                <span>End</span>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .workflow-builder {
            display: flex;
            flex-direction: column;
            height: 100vh;
          }
          
          .builder-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 24px;
            background: var(--bg-card);
            border-bottom: 1px solid var(--border);
          }
          
          .builder-title {
            display: flex;
            align-items: center;
            gap: 12px;
          }
          
          .workflow-name-input {
            background: transparent;
            border: none;
            color: var(--text-primary);
            font-size: 18px;
            font-weight: 600;
            padding: 4px 8px;
            border-radius: 4px;
          }
          
          .workflow-name-input:focus {
            outline: none;
            background: var(--bg-dark);
          }
          
          .builder-actions {
            display: flex;
            gap: 12px;
          }
          
          .builder-content {
            display: flex;
            flex: 1;
            overflow: hidden;
          }
          
          .node-palette {
            width: 240px;
            background: var(--bg-card);
            border-right: 1px solid var(--border);
            padding: 20px;
          }
          
          .node-palette h4 {
            margin-bottom: 16px;
            font-size: 14px;
            color: var(--text-secondary);
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          
          .palette-item {
            display: flex;
            align-items: center;
            gap: 12px;
            width: 100%;
            padding: 12px;
            margin-bottom: 8px;
            background: var(--bg-dark);
            border: 1px solid var(--border);
            border-radius: 8px;
            color: var(--text-primary);
            cursor: pointer;
            transition: all 0.2s;
          }
          
          .palette-item:hover {
            border-color: var(--node-color, var(--primary));
            background: rgba(99, 102, 241, 0.1);
          }
          
          .palette-item span {
            font-size: 13px;
          }
          
          .canvas {
            flex: 1;
            background: var(--bg-dark);
            position: relative;
            overflow: auto;
          }
          
          .canvas-grid {
            min-height: 100%;
            min-width: 100%;
            padding: 40px;
            background-image: 
              radial-gradient(var(--border) 1px, transparent 1px);
            background-size: 20px 20px;
          }
          
          .workflow-node {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 16px;
            background: var(--bg-card);
            border: 2px solid var(--border);
            border-radius: 10px;
            position: absolute;
            min-width: 180px;
            box-shadow: var(--shadow);
            transition: all 0.2s;
          }
          
          .workflow-node:hover {
            border-color: var(--primary);
            transform: translateY(-2px);
          }
          
          .workflow-node.trigger {
            border-color: var(--success);
          }
          
          .node-drag-handle {
            color: var(--text-muted);
            cursor: grab;
          }
          
          .node-icon {
            width: 32px;
            height: 32px;
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
          }
          
          .node-content {
            flex: 1;
          }
          
          .node-label {
            font-size: 14px;
            font-weight: 500;
          }
          
          .node-connector {
            position: absolute;
            right: -30px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--text-muted);
          }
          
          .node-delete {
            opacity: 0;
            background: none;
            border: none;
            color: var(--error);
            cursor: pointer;
            padding: 4px;
            transition: opacity 0.2s;
          }
          
          .workflow-node:hover .node-delete {
            opacity: 1;
          }
          
          .workflow-end {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            position: absolute;
            left: 50%;
            top: 400px;
            color: var(--text-muted);
            font-size: 12px;
          }
          
          .end-dot {
            width: 24px;
            height: 24px;
            background: var(--border);
            border-radius: 50%;
            border: 3px solid var(--bg-card);
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="workflows-page">
      <div className="workflows-header">
        <div className="workflows-title">
          <Workflow size={28} />
          <div>
            <h1>Workflows</h1>
            <p>Build automated sequences for your AI agent</p>
          </div>
        </div>
        
        <button className="btn btn-primary" onClick={createWorkflow}>
          <Plus size={18} /> Create Workflow
        </button>
      </div>

      <div className="workflows-list">
        {workflows.length === 0 ? (
          <div className="empty-workflows">
            <Workflow size={64} className="empty-icon" />
            <h3>No workflows yet</h3>
            <p>Create your first automation workflow to get started</p>
            <button className="btn btn-primary" onClick={createWorkflow}>
              <Plus size={18} /> Create Your First Workflow
            </button>
          </div>
        ) : (
          workflows.map(workflow => (
            <div key={workflow.id} className="workflow-card">
              <div className="workflow-info">
                <div className={`workflow-status ${workflow.active ? 'active' : ''}`}>
                  {workflow.active ? <Play size={14} /> : <Pause size={14} />}
                </div>
                
                <div>
                  <h3>{workflow.name}</h3>
                  <p>{workflow.description || `${workflow.nodes?.length || 1} nodes`}</p>
                </div>
              </div>
              
              <div className="workflow-actions">
                <button 
                  className={`btn ${workflow.active ? 'btn-secondary' : 'btn-primary'}`}
                  onClick={() => toggleWorkflow(workflow)}
                >
                  {workflow.active ? <><Pause size={16} /> Pause</> : <><Play size={16} /> Activate</>}
                </button>
                
                <button 
                  className="btn btn-secondary"
                  onClick={() => {
                    setSelectedWorkflow(workflow)
                    setIsEditing(true)
                  }}
                >
                  Edit
                </button>
                
                <button 
                  className="btn btn-outline"
                  onClick={() => deleteWorkflow(workflow.id)}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <style>{`
        .workflows-page {
          padding: 32px;
        }
        
        .workflows-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
        }
        
        .workflows-title {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .workflows-title h1 {
          font-size: 24px;
          font-weight: 700;
        }
        
        .workflows-title p {
          color: var(--text-secondary);
        }
        
        .empty-workflows {
          text-align: center;
          padding: 80px 40px;
          background: var(--bg-card);
          border: 2px dashed var(--border);
          border-radius: var(--radius);
        }
        
        .empty-icon {
          margin-bottom: 24px;
          opacity: 0.3;
        }
        
        .empty-workflows h3 {
          font-size: 20px;
          margin-bottom: 8px;
        }
        
        .empty-workflows p {
          color: var(--text-secondary);
          margin-bottom: 24px;
        }
        
        .workflows-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .workflow-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          transition: all 0.2s;
        }
        
        .workflow-card:hover {
          border-color: var(--primary);
        }
        
        .workflow-info {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .workflow-status {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: var(--bg-hover);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
        }
        
        .workflow-status.active {
          background: rgba(34, 197, 94, 0.2);
          color: var(--success);
        }
        
        .workflow-info h3 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 4px;
        }
        
        .workflow-info p {
          font-size: 13px;
          color: var(--text-secondary);
        }
        
        .workflow-actions {
          display: flex;
          gap: 8px;
        }
      `}</style>
    </div>
  )
}

export default WorkflowBuilder

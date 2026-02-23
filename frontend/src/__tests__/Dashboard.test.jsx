import { describe, test, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Dashboard from '../components/Dashboard'

// Mock fetch globally
global.fetch = vi.fn()

describe('Dashboard Component', () => {
  const mockStats = {
    totalConversations: 42,
    totalMessages: 156,
    activeWorkflows: 3,
    totalWorkflows: 5,
    activities: [
      { id: '1', type: 'message_received', message: 'Test message', timestamp: new Date().toISOString() },
      { id: '2', type: 'workflow_created', message: 'Workflow created', timestamp: new Date().toISOString() }
    ]
  }

  beforeEach(() => {
    vi.clearAllMocks()
    fetch.mockResolvedValue({
      json: async () => mockStats
    })
  })

  test('renders dashboard header', () => {
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    )
    
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Welcome to your Claw Bot command center')).toBeInTheDocument()
  })

  test('fetches and displays stats', async () => {
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    )
    
    // Wait for stats to load
    await waitFor(() => {
      expect(screen.getByText('42')).toBeInTheDocument()
    })
    
    // Check all stats are displayed
    expect(screen.getByText('42')).toBeInTheDocument() // Conversations
    expect(screen.getByText('156')).toBeInTheDocument() // Messages
  })

  test('displays stat card titles', () => {
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    )
    
    expect(screen.getByText('Total Conversations')).toBeInTheDocument()
    expect(screen.getByText('Messages Exchanged')).toBeInTheDocument()
    expect(screen.getByText('Active Workflows')).toBeInTheDocument()
    expect(screen.getByText('Integrations')).toBeInTheDocument()
  })

  test('displays recent activity section', () => {
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    )
    
    expect(screen.getByText('Recent Activity')).toBeInTheDocument()
  })

  test('displays quick actions', () => {
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    )
    
    expect(screen.getByText('Quick Actions')).toBeInTheDocument()
    expect(screen.getByText('Test Chat')).toBeInTheDocument()
    expect(screen.getByText('Configure Agent')).toBeInTheDocument()
    expect(screen.getByText('Create Workflow')).toBeInTheDocument()
    expect(screen.getByText('Connect Integrations')).toBeInTheDocument()
  })
})

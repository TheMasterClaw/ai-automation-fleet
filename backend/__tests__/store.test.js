const store = require('../src/store');

describe('DataStore', () => {
  // Reset store before each test
  beforeEach(() => {
    store.agents.clear();
    store.workflows.clear();
    store.activities.length = 0;
    
    // Re-add default agent
    store.agents.set('default', {
      id: 'default',
      name: 'Claw Bot',
      personality: 'friendly',
      integrations: {
        whatsapp: { enabled: false, connected: false },
        telegram: { enabled: false, connected: false },
        slack: { enabled: false, connected: false }
      }
    });
  });

  describe('Agent Operations', () => {
    test('getAgent should return default agent', () => {
      const agent = store.getAgent('default');
      expect(agent).toHaveProperty('id', 'default');
      expect(agent).toHaveProperty('name', 'Claw Bot');
    });

    test('getAgent should return default for unknown id', () => {
      const agent = store.getAgent('unknown');
      expect(agent).toHaveProperty('id', 'default');
    });

    test('updateAgent should update agent properties', () => {
      const updated = store.updateAgent('default', { name: 'Updated Bot' });
      expect(updated.name).toBe('Updated Bot');
      expect(updated.id).toBe('default');
    });

    test('updateAgent should log activity', () => {
      store.updateAgent('default', { name: 'Test Bot' });
      const activities = store.getActivities();
      expect(activities.length).toBeGreaterThan(0);
      expect(activities[0].type).toBe('agent_updated');
    });
  });

  describe('Workflow Operations', () => {
    test('getWorkflows should return empty array initially', () => {
      const workflows = store.getWorkflows();
      expect(Array.isArray(workflows)).toBe(true);
      expect(workflows.length).toBe(0);
    });

    test('createWorkflow should create new workflow', () => {
      const workflow = store.createWorkflow({
        name: 'Test Workflow',
        description: 'Test',
        active: false
      });
      
      expect(workflow).toHaveProperty('id');
      expect(workflow.name).toBe('Test Workflow');
      expect(workflow).toHaveProperty('createdAt');
    });

    test('createWorkflow should log activity', () => {
      store.createWorkflow({ name: 'Test Workflow' });
      const activities = store.getActivities();
      expect(activities[0].type).toBe('workflow_created');
    });

    test('updateWorkflow should update existing workflow', () => {
      const created = store.createWorkflow({ name: 'Original' });
      const updated = store.updateWorkflow(created.id, { name: 'Updated' });
      
      expect(updated.name).toBe('Updated');
      expect(updated.id).toBe(created.id);
    });

    test('updateWorkflow should return null for non-existent', () => {
      const result = store.updateWorkflow('non-existent', { name: 'Test' });
      expect(result).toBeNull();
    });

    test('deleteWorkflow should remove workflow', () => {
      const workflow = store.createWorkflow({ name: 'To Delete' });
      const deleted = store.deleteWorkflow(workflow.id);
      
      expect(deleted).toBe(true);
      expect(store.getWorkflows().length).toBe(0);
    });
  });

  describe('Activity Operations', () => {
    test('logActivity should add activity', () => {
      store.logActivity('test_event', 'Test message');
      const activities = store.getActivities();
      
      expect(activities.length).toBeGreaterThan(0);
      expect(activities[0].type).toBe('test_event');
      expect(activities[0].message).toBe('Test message');
      expect(activities[0]).toHaveProperty('timestamp');
    });

    test('getActivities should respect limit', () => {
      // Add 10 activities
      for (let i = 0; i < 10; i++) {
        store.logActivity('event', `Message ${i}`);
      }
      
      const limited = store.getActivities(5);
      expect(limited.length).toBe(5);
    });
  });

  describe('Stats Operations', () => {
    test('getStats should return statistics object', () => {
      const stats = store.getStats();
      
      expect(stats).toHaveProperty('totalConversations');
      expect(stats).toHaveProperty('totalMessages');
      expect(stats).toHaveProperty('activeWorkflows');
      expect(stats).toHaveProperty('totalWorkflows');
      expect(stats).toHaveProperty('activities');
      expect(Array.isArray(stats.activities)).toBe(true);
    });

    test('getStats should count active workflows', () => {
      store.createWorkflow({ name: 'Active', active: true });
      store.createWorkflow({ name: 'Inactive', active: false });
      
      const stats = store.getStats();
      expect(stats.activeWorkflows).toBe(1);
      expect(stats.totalWorkflows).toBe(2);
    });
  });

  describe('Integration Operations', () => {
    test('connectIntegration should set connected to true', () => {
      const result = store.connectIntegration('whatsapp');
      expect(result.connected).toBe(true);
    });

    test('connectIntegration should log activity', () => {
      store.connectIntegration('telegram');
      const activities = store.getActivities();
      expect(activities[0].type).toBe('integration_connected');
    });

    test('disconnectIntegration should set connected to false', () => {
      store.connectIntegration('slack');
      const result = store.disconnectIntegration('slack');
      expect(result.connected).toBe(false);
    });

    test('disconnectIntegration should log activity', () => {
      store.disconnectIntegration('whatsapp');
      const activities = store.getActivities();
      expect(activities[0].type).toBe('integration_disconnected');
    });
  });
});

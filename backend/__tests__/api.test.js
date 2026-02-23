const request = require('supertest');
const app = require('../server');

describe('Health Endpoint', () => {
  test('GET /api/health should return status ok', async () => {
    const response = await request(app)
      .get('/api/health')
      .expect('Content-Type', /json/)
      .expect(200);
    
    expect(response.body).toHaveProperty('status', 'ok');
    expect(response.body).toHaveProperty('timestamp');
    expect(new Date(response.body.timestamp)).toBeInstanceOf(Date);
  });
});

describe('Agent Endpoints', () => {
  test('GET /api/agents/default should return default agent config', async () => {
    const response = await request(app)
      .get('/api/agents/default')
      .expect('Content-Type', /json/)
      .expect(200);
    
    expect(response.body).toHaveProperty('id', 'default');
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('personality');
    expect(response.body).toHaveProperty('integrations');
  });

  test('PUT /api/agents/default should update agent config', async () => {
    const updateData = {
      name: 'Test Bot',
      personality: 'professional'
    };
    
    const response = await request(app)
      .put('/api/agents/default')
      .send(updateData)
      .expect('Content-Type', /json/)
      .expect(200);
    
    expect(response.body.name).toBe('Test Bot');
    expect(response.body.personality).toBe('professional');
    expect(response.body.id).toBe('default');
  });
});

describe('Workflow Endpoints', () => {
  test('GET /api/workflows should return array', async () => {
    const response = await request(app)
      .get('/api/workflows')
      .expect('Content-Type', /json/)
      .expect(200);
    
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('POST /api/workflows should create new workflow', async () => {
    const workflowData = {
      name: 'Test Workflow',
      description: 'Test description',
      active: false,
      nodes: []
    };
    
    const response = await request(app)
      .post('/api/workflows')
      .send(workflowData)
      .expect('Content-Type', /json/)
      .expect(200);
    
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe('Test Workflow');
    expect(response.body).toHaveProperty('createdAt');
  });
});

describe('Stats Endpoint', () => {
  test('GET /api/stats should return statistics', async () => {
    const response = await request(app)
      .get('/api/stats')
      .expect('Content-Type', /json/)
      .expect(200);
    
    expect(response.body).toHaveProperty('totalConversations');
    expect(response.body).toHaveProperty('totalMessages');
    expect(response.body).toHaveProperty('activeWorkflows');
    expect(response.body).toHaveProperty('totalWorkflows');
    expect(response.body).toHaveProperty('activities');
    expect(Array.isArray(response.body.activities)).toBe(true);
  });
});

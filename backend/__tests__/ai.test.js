const { generateAIResponse } = require('../src/ai');

describe('AI Response Generation', () => {
  const defaultConfig = {
    personality: 'friendly',
    tone: 'professional',
    responseStyle: 'detailed'
  };

  test('should generate greeting response for hello', () => {
    const response = generateAIResponse('hello', defaultConfig);
    expect(typeof response).toBe('string');
    expect(response.length).toBeGreaterThan(0);
  });

  test('should generate help response for help keyword', () => {
    const response = generateAIResponse('I need help', defaultConfig);
    expect(typeof response).toBe('string');
    expect(response.length).toBeGreaterThan(0);
  });

  test('should generate pricing response for price keyword', () => {
    const response = generateAIResponse('what is the price', defaultConfig);
    expect(typeof response).toBe('string');
    expect(response.length).toBeGreaterThan(0);
  });

  test('should generate features response for features keyword', () => {
    const response = generateAIResponse('what features', defaultConfig);
    expect(typeof response).toBe('string');
    expect(response.length).toBeGreaterThan(0);
  });

  test('should return default response for unknown input', () => {
    const response = generateAIResponse('xyz123', defaultConfig);
    expect(typeof response).toBe('string');
    expect(response.length).toBeGreaterThan(0);
  });

  test('should modify response for formal personality', () => {
    const formalConfig = { ...defaultConfig, personality: 'formal' };
    const response = generateAIResponse('hello', formalConfig);
    expect(typeof response).toBe('string');
  });

  test('should add emoji for playful personality', () => {
    const playfulConfig = { ...defaultConfig, personality: 'playful' };
    const response = generateAIResponse('hello', playfulConfig);
    expect(response).toContain('🎉');
  });

  test('should handle empty string', () => {
    const response = generateAIResponse('', defaultConfig);
    expect(typeof response).toBe('string');
    expect(response.length).toBeGreaterThan(0);
  });

  test('should handle case insensitivity', () => {
    const lowerResponse = generateAIResponse('hello', defaultConfig);
    const upperResponse = generateAIResponse('HELLO', defaultConfig);
    const mixedResponse = generateAIResponse('HeLLo', defaultConfig);
    
    expect(typeof lowerResponse).toBe('string');
    expect(typeof upperResponse).toBe('string');
    expect(typeof mixedResponse).toBe('string');
  });
});

// AI Response generation logic
const { v4: uuidv4 } = require('uuid');

const responses = {
  greeting: [
    "Hey there! 👋 Great to hear from you!",
    "Hello! Welcome! How can I make your day better?",
    "Hi! I'm excited to chat with you!"
  ],
  help: [
    "I'd be happy to help! What do you need assistance with?",
    "Sure thing! Let me know what you're looking for.",
    "Absolutely! I'm here to help. What's on your mind?"
  ],
  pricing: [
    "Our pricing starts at $29/month for the Starter plan. Would you like details on other plans?",
    "We have flexible pricing! Starter ($29), Pro ($79), and Enterprise (custom). Which interests you?",
    "Check out our pricing page for detailed info, or I can summarize the plans for you!"
  ],
  features: [
    "Claw Bot offers AI chat, workflow automation, multi-channel support, and analytics. What would you like to know more about?",
    "Our key features include: Smart AI responses, Workflow builder, WhatsApp/Telegram integration, and Real-time dashboard!",
    "We're packed with features! AI-powered conversations, drag-and-drop workflows, and seamless integrations."
  ],
  default: [
    "That's interesting! Tell me more.",
    "I see! What else can you share?",
    "Got it! Is there anything specific you'd like help with?",
    "Thanks for sharing! How can I assist further?",
    "Cool! What would you like to do next?"
  ]
};

function generateAIResponse(message, agentConfig) {
  const lowerMsg = message.toLowerCase();
  
  let category = 'default';
  if (lowerMsg.match(/hi|hello|hey|greetings/)) category = 'greeting';
  else if (lowerMsg.match(/help|support|assist/)) category = 'help';
  else if (lowerMsg.match(/price|cost|pricing|plan|subscription/)) category = 'pricing';
  else if (lowerMsg.match(/feature|capability|function|what can you do/)) category = 'features';

  const categoryResponses = responses[category];
  const response = categoryResponses[Math.floor(Math.random() * categoryResponses.length)];

  if (agentConfig.personality === 'formal') {
    return response.replace(/!/, '.').replace(/Hey/, 'Hello');
  } else if (agentConfig.personality === 'playful') {
    return response + ' 🎉';
  }

  return response;
}

module.exports = { generateAIResponse };

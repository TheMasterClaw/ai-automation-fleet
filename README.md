# AI Automation Fleet

A full-stack demo application showcasing an AI agent platform with real-time chat, workflow automation, multi-platform integrations, and a fleet of specialized sub-agents.

![AI Automation Fleet](https://img.shields.io/badge/Demo-Live-success)
![React](https://img.shields.io/badge/React-18-blue)
![Node.js](https://img.shields.io/badge/Node.js-18-green)
![Socket.io](https://img.shields.io/badge/Socket.io-4.0-black)

## 🚀 Features

- 🤖 **Live Chat Interface** - Real-time AI agent conversation with WebSocket
- 👥 **Sub-Agent Fleet** - Specialized agents for research, coding, DevOps, security, QA, and content
- ⚙️ **Agent Configuration** - Customize personality, tone, and behavior
- 🔗 **Integrations** - Mock connections for WhatsApp, Telegram, Slack, and Discord
- 🔄 **Workflow Builder** - Visual drag-and-drop automation builder
- 📊 **Activity Dashboard** - Monitor agent performance and activity
- 🎨 **Modern UI** - Dark theme with gradient accents

## 📁 Project Structure

```
/
├── backend/          # Express + Socket.io server
│   ├── server.js     # Main server file
│   ├── package.json
│   └── src/          # API routes and logic
├── frontend/         # React + Vite frontend
│   ├── src/
│   │   ├── components/   # React components
│   │   │   ├── Chat.jsx
│   │   │   ├── SubAgents.jsx
│   │   │   ├── SubAgentChat.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── AgentConfig.jsx
│   │   │   ├── WorkflowBuilder.jsx
│   │   │   └── Integrations.jsx
│   │   ├── App.jsx
│   │   └── index.css
│   ├── index.html
│   └── package.json
├── vercel.json       # Vercel deployment config
└── README.md
```

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Socket.io-client, Recharts
- **Backend**: Node.js, Express, Socket.io
- **Styling**: Custom CSS with CSS variables
- **Icons**: Lucide React
- **Testing**: Vitest (frontend), Jest (backend)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/TheMasterClaw/ai-automation-fleet.git
cd ai-automation-fleet

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### Running Locally

```bash
# Terminal 1: Start backend (port 3001)
cd backend
npm run dev

# Terminal 2: Start frontend (port 5173)
cd frontend
npm run dev
```

Open http://localhost:5173 to view the application.

## 🌐 Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=3001
NODE_ENV=development
OPENAI_API_KEY=your_api_key_here
```

## 📡 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Health check |
| `/api/agents/:id` | GET/PUT | Agent configuration |
| `/api/subagents` | GET | List all sub-agents |
| `/api/subagents/:id/chat` | POST | Chat with specific sub-agent |
| `/api/workflows` | GET/POST | List/create workflows |
| `/api/workflows/:id` | PUT/DELETE | Update/delete workflow |
| `/api/stats` | GET | Dashboard statistics |
| `/api/activities` | GET | Recent activity |
| `/api/integrations/:platform/connect` | POST | Connect integration |

## 🔌 WebSocket Events

- `message` - Send/receive chat messages
- `typing` - Typing indicators
- `subagent-message` - Sub-agent specific messages

## 👥 Sub-Agent Fleet

| Agent | Specialty | Description |
|-------|-----------|-------------|
| 🔬 **Research Agent** | Information gathering | Web search, data analysis, trend monitoring |
| 💻 **Coding Agent** | Software development | Code generation, debugging, architecture |
| 🚀 **DevOps Agent** | Infrastructure | CI/CD, cloud deployment, monitoring |
| 🔒 **Security Agent** | Cybersecurity | Vulnerability scanning, compliance, alerts |
| 🧪 **QA Agent** | Testing | Automated testing, bug tracking, coverage |
| ✍️ **Content Agent** | Content creation | Writing, editing, SEO optimization |

## 🧪 Testing

```bash
# Run frontend tests
cd frontend
npm test

# Run backend tests
cd backend
npm test
```

## 📄 License

MIT

---

Built with ❤️ by AI Automation Fleet

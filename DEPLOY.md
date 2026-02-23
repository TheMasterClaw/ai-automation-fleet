# Claw Bot Demo - Deployment Guide

## Deploy to Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
cd /home/ubuntu/.openclaw/workspace/clawbot-demo
vercel --prod
```

### Option 2: Git + Vercel Dashboard

1. Push code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/clawbot-demo.git
git push -u origin main
```

2. Import project in Vercel dashboard
3. Deploy automatically

## Local Development

```bash
# Terminal 1: Backend
cd backend
npm install
npm run dev

# Terminal 2: Frontend  
cd frontend
npm install
npm run dev
```

App will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:3001

## Features

- ✅ Real-time chat with AI agent
- ✅ Agent configuration panel
- ✅ WhatsApp/Telegram mock integrations
- ✅ Visual workflow builder
- ✅ Activity dashboard
- ✅ Dark mode UI

## Project Structure

```
clawbot-demo/
├── backend/          # Express + Socket.io server
├── frontend/         # React + Vite app
├── vercel.json       # Vercel deployment config
└── README.md         # Documentation
```

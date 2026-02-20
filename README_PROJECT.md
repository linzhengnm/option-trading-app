# CoveredCall Pro - Option Trading Analysis Platform

A mobile-friendly web application that helps users find the best moments to sell covered calls on stocks they own, using real-time market data and AI-powered analysis.

## 🎯 Project Goals

- **Help traders** identify optimal times to sell covered calls for premium income
- **Support multiple strategies** starting with covered calls, with plans for LEAPS and other options strategies
- **Be mobile-first** for on-the-go analysis and decision making
- **Use free services** for MVP development (Firebase, Tradier API, GitHub Pages)

## 🏗️ Architecture

### Tech Stack

**Frontend:**
- React 19 + Vite for fast development
- Material-UI (MUI) for mobile-responsive design
- React Router for navigation
- TypeScript for type safety

**Backend:**
- Firebase Cloud Functions (Node.js serverless)
- Firestore for real-time database
- Firebase Auth for Google login

**Testing:**
- Vitest for unit tests
- Playwright for E2E tests

**CI/CD & Deployment:**
- GitHub Actions for automated testing and deployment
- GitHub Pages for frontend hosting
- Firebase for backend and database

**Data Source:**
- Tradier API for real-time stock and options data

### Project Structure

```
option-trading-app/
├── apps/
│   ├── web/                 # React web app (main UI)
│   └── web-e2e/            # Playwright E2E tests
├── libs/
│   ├── ui/                 # Shared MUI components
│   ├── auth/               # Firebase authentication
│   ├── api/                # Tradier API wrapper
│   └── models/             # Domain models & types
├── .github/workflows/      # GitHub Actions CI/CD
├── package.json            # Monorepo dependencies
├── nx.json                 # NX configuration
└── tsconfig.base.json      # Root TypeScript config
```

## 🚀 Getting Started

### Prerequisites

- Node.js 22+
- npm
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd option-trading-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your Firebase and Tradier API credentials:
   - Firebase: Create a project at https://console.firebase.google.com
   - Tradier: Get a free API key at https://apiforge.tradier.com

4. **Start development server**
   ```bash
   cd apps/web && npm start
   # or
   npx vite
   ```

   Open http://localhost:4200 in your browser

5. **Run tests**
   ```bash
   npx nx test                    # Run all unit tests
   npx nx e2e web-e2e            # Run E2E tests
   ```

## 📚 Features

### Current (MVP)
- ✅ Mobile-responsive UI with MUI
- ✅ Stock quote search with real-time data
- ✅ Display available option expirations (weekly/biweekly)
- ✅ Bid/ask spread visualization
- ✅ Clean, modern dashboard

### In Progress
- 🔄 Firebase authentication (Google login)
- 🔄 User authentication and profiles
- 🔄 Firestore data persistence

### Planned
- 📋 Covered call analysis and recommendations
- 📊 Historical analysis and performance tracking
- 🎯 Alert system for optimal strike/expiration combos
- 💾 Watchlist management
- 🔐 Support for additional option strategies (LEAPS, spreads, etc.)
- 📱 Mobile app (React Native)

## 🔧 Development Workflow

### Adding a new feature

1. Create a branch: `git checkout -b feature/feature-name`
2. Make changes and test locally
3. Commit: `git commit -m "feat: description"`
4. Push: `git push origin feature/feature-name`
5. Create a Pull Request on GitHub

### Building for production

```bash
cd apps/web
npm run build
```

### Deploying

- **Frontend:** GitHub Pages (automatic via GitHub Actions)
- **Backend:** Firebase Cloud Functions

## 📁 Key Files

- [apps/web/app/app.tsx](apps/web/app/app.tsx) - Main app component
- [libs/api/src/lib/tradier.ts](libs/api/src/lib/tradier.ts) - Tradier API integration
- [libs/auth/src/lib/firebase-config.ts](libs/auth/src/lib/firebase-config.ts) - Firebase setup
- [libs/models/src/lib/domain-models.ts](libs/models/src/lib/domain-models.ts) - Type definitions
- [.env.example](.env.example) - Environment variables template

## 🔐 Environment Variables

See [.env.example](.env.example) for the full list. Required variables:

- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_TRADIER_API_KEY`

## 📖 Documentation

- [SETUP.md](SETUP.md) - Detailed setup instructions
- [Tradier API Documentation](https://documentation.tradier.com/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [NX Documentation](https://nx.dev/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📝 License

MIT

## 🆘 Troubleshooting

### Port 4200 already in use
```bash
# Kill the process using port 4200
lsof -ti:4200 | xargs kill -9
# Or use a different port
npx vite --port 3000
```

### Module resolution errors
Make sure all libraries are built:
```bash
npx nx build ui && npx nx build auth && npx nx build api && npx nx build models
```

### Firebase connection issues
- Verify .env file has correct Firebase credentials
- Check Firebase project has Firestore and Auth enabled
- Ensure CORS is properly configured in Firebase

## 🐛 Known Issues

- SSR module resolution with monorepo libraries (workaround: use direct imports)

## 📅 Roadmap

### Phase 1 (Current)
- [x] Project setup & scaffolding
- [x] UI framework & components
- [ ] Firebase integration
- [ ] Basic API integration

### Phase 2
- [ ] Covered call analysis algorithm
- [ ] User authentication & profiles
- [ ] Historical data storage

### Phase 3
- [ ] Advanced analysis & ML recommendations
- [ ] Mobile app
- [ ] Trading alerts

---

**Last Updated:** February 2026

For questions or issues, please open a GitHub issue.

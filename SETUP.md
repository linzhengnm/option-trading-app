# Option Trading App - Setup Guide

This is a mobile-friendly web application to help users find the best time to sell covered calls on stocks they own.

## Tech Stack

- **Frontend**: React (Vite), MUI, React Router
- **Backend**: Firebase Cloud Functions, Firestore
- **APIs**: Tradier for options data
- **Testing**: Vitest (unit), Playwright (e2e)
- **CI/CD**: GitHub Actions
- **Hosting**: GitHub Pages (frontend), Firebase (backend)
- **Monorepo**: NX

## Project Structure

```
.
├── apps/
│   ├── web/                    # Main React app
│   └── web-e2e/                # E2E tests
├── libs/
│   ├── auth/                   # Firebase Auth + Google login
│   ├── api/                    # External APIs (Tradier, etc.)
│   ├── models/                 # Shared types and interfaces
│   └── ui/                     # Shared MUI components
├── .github/
│   └── workflows/              # GitHub Actions CI/CD
└── nx.json                     # NX configuration
```

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repo>
cd option-trading-app
npm install
```

### 2. Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Firebase Authentication (Google sign-in method)
3. Create a Firestore database
4. Get your Firebase config:
   - Go to Project Settings → Service Accounts
   - Copy the config values
5. Create a `.env.local` file in the root with:

```bash
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 3. Tradier API Setup

1. Register at [Tradier Developers](https://apiforge.tradier.com/)
2. Get your API key
3. Add to `.env.local`:

```bash
VITE_TRADIER_API_KEY=your_tradier_api_key
```

### 4. Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:4200`

### 5. Run Tests

```bash
# Unit tests
npm run test

# E2E tests
npm run e2e

# Watch mode
npm run test:watch
```

### 6. Build for Production

```bash
npm run build
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run unit tests
- `npm run e2e` - Run E2E tests
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Features

### Current

- Google OAuth login with Firebase Auth
- User watchlist management
- Tradier API integration for options data
- Stock quote and option chain viewing
- Mobile-friendly MUI components

### Planned

- Covered call strategy recommendations
- Weekly/biweekly option expiration filtering
- P&L calculations
- Historical data analysis
- LEAPS strategy support
- Multiple option strategies framework

## Deployment

### Frontend (GitHub Pages)

```bash
npm run build
# Push to GitHub - GitHub Actions will auto-deploy
```

### Backend (Firebase Cloud Functions)

```bash
firebase deploy --only functions
```

## Environment

- Node.js 18+
- npm 9+

## License

MIT

## Support

For issues or questions, please open an issue on GitHub.

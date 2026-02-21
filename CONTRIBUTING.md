# Contributing Guide

This guide describes the development workflow for the Option Trading App project.

## 🌳 Branching Strategy

We use a **feature-branch workflow** for solo development. This approach balances speed with code quality.

### Branch Types

- **`main`** - Production-ready code (always deployable)
- **`feature/*`** - New features (e.g., `feature/firebase-auth`)
- **`bugfix/*`** - Bug fixes (e.g., `bugfix/api-errors`)
- **`docs/*`** - Documentation updates
- **`chore/*`** - Maintenance tasks (e.g., `chore/update-deps`)

### Workflow

#### 1. Starting New Work

```bash
# Create a feature branch from main
git checkout -b feature/your-feature-name main

# Or for bug fixes
git checkout -b bugfix/issue-description main

# Or for documentation
git checkout -b docs/what-you-are-documenting main
```

#### 2. During Development

```bash
# Make changes and commit frequently
git add .
git commit -m "feat: add Firebase authentication"

# Push to backup branch regularly
git push origin feature/your-feature-name
```

#### 3. Before Merging to Main

```bash
# Run all checks locally
npm run lint        # Check code style
npm run test        # Run unit tests
npm run build       # Build the project

# If everything passes, you're ready to merge
```

#### 4. Merging to Main

```bash
# Switch to main and ensure it's up to date
git checkout main
git pull origin main

# Merge your feature
git merge feature/your-feature-name

# Push to GitHub
git push origin main

# Delete the feature branch
git branch -d feature/your-feature-name
git push origin --delete feature/your-feature-name
```

---

## 📝 Commit Message Conventions

Use semantic commit messages to keep history clear:

```
feat: add new feature
fix: fix a bug
docs: update documentation
style: format code (no logic changes)
refactor: restructure code (no behavior changes)
perf: improve performance
test: add or update tests
chore: maintenance tasks (deps, config, etc.)
ci: CI/CD configuration changes
```

### Examples

```bash
git commit -m "feat: add Firebase Firestore integration"
git commit -m "fix: resolve CORS issues with Tradier API"
git commit -m "docs: add Firebase setup instructions"
git commit -m "chore: update Material-UI to latest version"
```

---

## 🧪 Testing Before Merge

**Always test your code before merging to main:**

```bash
# 1. Run linter
npm run lint

# 2. Run unit tests
npx nx test

# 3. Run E2E tests (when available)
npx nx e2e web-e2e

# 4. Build the project
npm run build

# 5. Manual testing
cd apps/web && npx vite
# Test in browser at http://localhost:4200
```

---

## 📦 Project Structure

```
option-trading-app/
├── apps/
│   ├── web/              # Main React app
│   └── web-e2e/          # E2E tests
├── libs/
│   ├── ui/               # UI components
│   ├── auth/             # Authentication
│   ├── api/              # API integrations
│   └── models/           # Domain models
├── .github/workflows/    # CI/CD pipelines
├── package.json          # Root dependencies
└── nx.json              # NX config
```

---

## 🚀 Useful Commands

```bash
# View what you've changed
git status
git diff

# View commit history
git log --oneline -10

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Stash work temporarily
git stash
git stash pop

# View branches
git branch -a
git branch -v
```

---

## ✅ Pre-Merge Checklist

Before merging to `main`, ensure:

- [ ] Code follows ESLint rules (`npm run lint`)
- [ ] All tests pass (`npx nx test`)
- [ ] Project builds successfully (`npm run build`)
- [ ] Manual testing completed in browser
- [ ] Commit messages are clear and semantic
- [ ] `.env` file is NOT committed (check `.gitignore`)
- [ ] New dependencies are added to `package.json`

---

## 🔄 If Something Goes Wrong

### Abort a merge
```bash
git merge --abort
```

### Undo last commit (keep changes)
```bash
git reset --soft HEAD~1
```

### Undo last commit (discard changes)
```bash
git reset --hard HEAD~1
```

### Switch branches without committing
```bash
git stash
git checkout other-branch
git stash pop
```

---

## 📚 Learning Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Commit Message Best Practices](https://cbea.ms/git-commit/)
- [NX Documentation](https://nx.dev/docs)

---

## 🤝 Questions?

Refer to this guide or check the main README for setup instructions.

Happy coding! 🚀

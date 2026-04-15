# 🚀 Chefify Deployment & Setup Guide

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Development Setup

### Requirements
- Node.js 16+ 
- npm or yarn package manager
- Git

### Environment Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/NguyennHoangg/Tuan08.git
   cd 23679011
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will run at `http://localhost:5173`

## Project Configuration

### Vite Configuration
The project uses Vite for fast development and optimized builds.

**Key settings in `vite.config.js`:**
- React plugin enabled
- ESM module format
- HMR (Hot Module Replacement) enabled

### Tailwind CSS Configuration
Custom colors and fonts are configured in `tailwind.config.js`:

```javascript
colors: {
  primary: '#F0326A',      // Hot pink
  secondary: '#FFC107',    // Golden
  'neutral-dark': '#1A1A2E', // Dark background
}

fonts: {
  'playfair': ['Playfair Display', 'serif'],
  'dm-sans': ['DM Sans', 'sans-serif']
}
```

### PostCSS Configuration
Configured in `postcss.config.js` to process Tailwind CSS.

## Building for Production

### Create production build
```bash
npm run build
```

This generates:
- Minified JavaScript in `/dist`
- Optimized CSS bundles
- Asset fingerprinting for caching

### Output structure
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── images/
└── favicon.svg
```

### Deployment options

#### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
netlify deploy --prod --dir=dist
```

#### GitHub Pages
```bash
# Update vite.config.js base: '/Tuan08/'
npm run build
# Push dist folder to gh-pages branch
```

#### Traditional Server
```bash
# Build the project
npm run build

# Upload dist folder to your server
# Configure server to serve index.html for all routes
```

## Environment Variables

Create a `.env.local` file for local development:

```env
VITE_API_URL=http://localhost:3000
VITE_API_KEY=your_api_key_here
```

## Browser DevTools

### React DevTools
- Install React Developer Tools extension
- Inspect component hierarchy and state
- Debug context changes in real-time

### Vite DevTools
- Built-in performance profiling
- Module graph visualization
- Module hot reload tracking

## Performance Optimization

### Bundle Analysis
```bash
# Install rollup-plugin-visualizer
npm install -D rollup-plugin-visualizer

# Add to vite.config.js:
import { visualizer } from 'rollup-plugin-visualizer';

export default {
  plugins: [visualizer()]
}

# Build and open stats.html
```

### Lazy Loading Routes
Routes are already code-split via React Router:
- HomePage loads only when `/` is visited
- SearchResultsPage loads when `/search` is visited
- Etc.

### Image Optimization
- Use compressed images from Unsplash (already done)
- Implement lazy loading for recipe images
- Use WebP format for better compression

## Testing

### Manual Testing Checklist
- [ ] Home page loads without errors
- [ ] Search functionality works
- [ ] Recipe filtering works correctly
- [ ] Save/bookmark functionality works
- [ ] Login modal appears
- [ ] Responsive design on mobile
- [ ] All links navigate correctly
- [ ] Animations are smooth
- [ ] No console errors

### Automated Testing Setup (Optional)
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

## Troubleshooting

### Common Issues

**Port already in use**
```bash
# Find process on port 5173
netstat -ano | findstr :5173

# Kill process
taskkill /PID [PID] /F

# Or use different port
npm run dev -- --port 3000
```

**Module not found errors**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Tailwind CSS not applying**
- Check tailwind.config.js `content` paths
- Restart dev server
- Clear `.vite` cache

**CORS errors in development**
- Configure dev server proxy in vite.config.js
- Or add CORS headers to backend

## Monitoring & Logging

### Client-side error tracking
Consider adding services like:
- Sentry for error tracking
- LogRocket for session replay
- Google Analytics for user behavior

### Performance monitoring
- Use Web Vitals
- Monitor Core Web Vitals
- Track API response times

## Security Checklist

- [ ] No hardcoded API keys
- [ ] Use HTTPS in production
- [ ] Validate all user inputs
- [ ] Sanitize user-generated content
- [ ] Implement rate limiting
- [ ] Use secure headers
- [ ] Regular dependency updates
- [ ] Security scanning tools

## Updating Dependencies

```bash
# Check for outdated packages
npm outdated

# Update packages
npm update

# Update to latest versions
npm upgrade

# Check for security vulnerabilities
npm audit
npm audit fix
```

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "feat: add new feature"

# Push to remote
git push origin feature/new-feature

# Create Pull Request on GitHub
# Merge after review
```

## Continuous Integration/Deployment

### GitHub Actions Setup
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - name: Deploy
        run: npm run deploy
```

## Support & Resources

### Documentation
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion)
- [React Router Documentation](https://reactrouter.com)

### Useful Tools
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Contact & Support

For issues or questions:
- GitHub Issues: [Project Issues](https://github.com/NguyennHoangg/Tuan08/issues)
- Email: dev@chefify.com

---

**Last Updated**: April 2026
**Version**: 1.0.0

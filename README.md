# 🚀 DevWise Next.js Starter Template

**The ultimate Next.js starter template for rapid, high-quality web development.**

Built with modern best practices, automated code quality, and DevWise Core integration. Get from idea to production faster with enterprise-grade tooling and zero configuration hassle.

## 🚀 Quick Start

1. **Clone or download this template**
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **Open [http://localhost:3000](http://localhost:3000)** to view your application

## ✨ What Makes This Template Special

### 🏗️ **Modern Foundation**
- **Next.js 15.4** with App Router - Latest React Server Components
- **TypeScript** - Full type safety with strict configuration
- **Tailwind CSS v4** - Latest CSS-first approach with auto-scanning
- **DevWise Core** - Enterprise-grade component library

### 🤖 **Zero-Config Automation**
- **Husky Git Hooks** - Pre-commit/pre-push quality gates
- **Lint-staged** - Only lint changed files for speed
- **Conventional Commits** - Automated changelog and versioning
- **GitHub Actions CI** - Automated testing, linting, and building
- **Release Please** - Automatic semantic versioning and releases

### 🎯 **Developer Experience**
- **Hot Reload** - Instant feedback during development
- **Type Safety** - Catch errors before they reach production
- **Auto Formatting** - Prettier runs on save and commit
- **Smart Linting** - ESLint with Next.js and accessibility rules
- **Testing Setup** - Jest + React Testing Library pre-configured

### 🎨 **Production-Ready Design**
- **DevWise Design System** - Consistent, accessible components
- **Dark/Light Mode** - Built-in theme switching
- **Responsive Design** - Mobile-first approach
- **Performance Optimized** - Image optimization, font loading, SEO ready

### 🔒 **Enterprise Features**
- **Security Headers** - Next.js security best practices
- **SEO Optimization** - Meta tags, sitemap, structured data
- **Error Boundaries** - Graceful error handling
- **Accessibility** - WCAG 2.1 AA compliant components

## 🛠️ Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format code with Prettier
npm run format:check # Check formatting
npm run type:check   # Run TypeScript compiler

# Testing
npm test             # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage
```

### Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Project-specific components
├── lib/               # Utility functions
│   ├── config.ts      # Site configuration
│   └── utils.ts       # Utility functions
└── types/             # TypeScript type definitions
```

## 🎨 Styling

The template uses **Tailwind CSS v4** with modern configuration approach:

- CSS-based configuration using `@import "tailwindcss"`
- `@source` directive for scanning external packages like `@devwise/core`
- CSS custom properties for theming
- DevWise Core component integration
- Light/dark mode support with consistent color palette

## 🧪 Testing

The template includes Jest and React Testing Library setup:

- Component testing examples
- Utility function tests
- Test configuration matching DevWise Core standards
- Coverage reporting

## 📋 Configuration

### Site Configuration

Update `src/lib/config.ts` with your project details:

```typescript
export const siteConfig = {
  name: 'Your Project Name',
  description: 'Your project description',
  url: 'https://your-domain.com',
  keywords: ['Next.js', 'React', 'TypeScript'] as string[],
  links: {
    github: 'https://github.com/your-username/repo' as const,
    docs: 'https://your-docs-url.com' as const,
  },
} as const;
```

### Client Components

Components using React hooks or interactive features need the `'use client';` directive:

```typescript
'use client';

import { useState } from 'react';
// Your component code
```

### Environment Variables

Create a `.env.local` file for local development:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# Add your environment variables here
```

## 🚢 Deployment

This template is ready for deployment on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **Railway**
- **Docker** containers

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy!

## 📚 Resources

- [DevWise Core Documentation](https://devwise.co.uk/core/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 🤝 Contributing

1. Follow the existing code style and conventions
2. Run tests before submitting changes
3. Use conventional commit messages
4. Update documentation as needed

## 📄 License

This template is provided by [DevWise](https://devwise.co.uk) for building modern web applications.

---

Built with ❤️ by [DevWise](https://devwise.co.uk)

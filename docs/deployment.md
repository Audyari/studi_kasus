# Deployment Guide

This document provides instructions for deploying the Next.js application to various platforms.

## Prerequisites

Before deploying, ensure you have:

- A production-ready build of the application
- All environment variables configured for the target environment
- A deployment platform account (Vercel, Netlify, etc.)

## Building for Production

To create a production build:

```bash
npm run build
```

This will generate an optimized build in the `.next/` directory.

## Environment Variables

Before deployment, configure the following environment variables in your deployment platform:

### Required Variables

- `NEXT_PUBLIC_SITE_URL` - The URL where the application will be hosted
- `NODE_ENV` - Should be set to `production`

### Optional Variables

- `NEXT_PUBLIC_GOOGLE_VERIFICATION` - Google Search Console verification
- `NEXT_PUBLIC_YAHOO_VERIFICATION` - Yahoo verification
- `NEXT_PUBLIC_YANDEX_VERIFICATION` - Yandex verification

## Deployment Platforms

### Vercel (Recommended)

1. Install the Vercel CLI:

   ```bash
   npm i -g vercel
   ```

2. Login to your Vercel account:

   ```bash
   vercel login
   ```

3. Deploy from the project root:

   ```bash
   vercel
   ```

4. Follow the prompts to configure your project

Alternatively, connect your GitHub repository to Vercel for automatic deployments on push.

### Netlify

1. Install the Netlify CLI:

   ```bash
   npm i -g netlify-cli
   ```

2. Login to your Netlify account:

   ```bash
   netlify login
   ```

3. Deploy the application:
   ```bash
   netlify deploy --prod
   ```

### GitHub Pages (with some limitations)

1. Install nextjs-plugin-github-pages:

   ```bash
   npm install --save-dev nextjs-plugin-github-pages
   ```

2. Update your `next.config.js`:

   ```js
   const withGithubPages = require('nextjs-plugin-github-pages');

   module.exports = withGithubPages({
     // Your config
   });
   ```

3. Build and deploy using GitHub Actions or Netlify CLI.

### Self-Hosting

1. Build the application:

   ```bash
   npm run build
   ```

2. Install serve globally:

   ```bash
   npm install -g serve
   ```

3. Serve the application:
   ```bash
   serve -s .next
   ```

### Docker Deployment

1. Create a Dockerfile in the project root:

   ```Dockerfile
   FROM node:18-alpine AS base
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci

   FROM base AS builder
   COPY . .
   RUN npm run build

   FROM base AS runner
   COPY --from=builder /app/.next ./.next
   COPY --from=builder /app/public ./public
   COPY --from=builder /app/package*.json ./
   RUN npm install --production
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

2. Build the image:

   ```bash
   docker build -t nextjs-app .
   ```

3. Run the container:
   ```bash
   docker run -p 3000:3000 nextjs-app
   ```

## Post-Deployment Tasks

### Google Search Console

1. Register your site with [Google Search Console](https://search.google.com/search-console/)
2. Add the verification code to your `next.config.js` or as an environment variable

### Analytics Setup

1. Configure your preferred analytics provider
2. Add tracking codes to your application
3. Test analytics collection

### SSL Certificate

Ensure your domain has a valid SSL certificate if serving over HTTPS
Most deployment platforms handle this automatically

## Troubleshooting

### Common Issues

#### Assets Not Loading

- Check the `basePath` configuration in `next.config.js`
- Verify that `NEXT_PUBLIC_SITE_URL` is correctly set

#### API Routes Not Working

- Ensure the server environment has access to required environment variables
- Check server logs for specific error messages

#### Build Failures

- Verify all dependencies are correctly installed
- Check that environment variables are available during build
- Ensure Node.js version is compatible

### Performance Issues

- Monitor Core Web Vitals
- Optimize images and static assets
- Review bundle size and implement code splitting if needed

---
name: vektor-deploy
description: Configure deployment, Docker, CI/CD, and hosting for the VEKTOR marketing website. Use when working with Dockerfiles, Vercel, GitHub Actions, environment configuration, or production deployment.
---

# VEKTOR Deployment

## Recommended Hosting

### Vercel (Preferred)

Zero-config for Next.js. Push to main and it deploys.

```bash
npm i -g vercel
vercel --prod
```

### Docker (Self-hosted)

```dockerfile
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --prefer-offline

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

Requires `output: "standalone"` in `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: "standalone",
};
```

## GitHub Actions CI

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
      - run: npm ci
      - run: npm run build
```

## Static Export (Optional)

For CDN-only hosting (no SSR features needed):

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  output: "export",
};
```

Then deploy `out/` to any static host (S3, Cloudflare Pages, Nginx).

## Environment

This is a static marketing site — no environment variables needed. No API keys, no secrets, no `.env` files.

## .gitignore

```gitignore
node_modules/
.next/
out/
*.log
.env
.env.local
```

## Performance Checklist

- [ ] Images optimized (if any added later — use `next/image`)
- [ ] Fonts use `display: swap` (already configured via next/font)
- [ ] No unused dependencies
- [ ] Build completes without TypeScript errors
- [ ] Lighthouse score > 90 on all metrics

## Key Rules

1. **No secrets to manage** — this is a static marketing site
2. **Always use multi-stage Docker builds** for smaller images
3. **Pin major versions** of base images (node:20)
4. **`output: "standalone"`** for Docker, `"export"` for static CDN
5. **CI must run `npm run build`** — catches TypeScript and build errors
6. **Never commit `node_modules/` or `.next/`**

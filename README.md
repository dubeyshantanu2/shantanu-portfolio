# Shantanu's Portfolio

A dark, terminal-inspired Next.js portfolio website built for a fully static export.

## Tech Stack
- Next.js (App Router, Static Export)
- TypeScript
- Tailwind CSS (v4)
- Framer Motion

## Content Setup (V2)
To update the portfolio for your V2 deployment, you only need to modify `src/data/content.ts`.

Checklist of things to supply:
- [ ] Update `profile` (email, github link, linkedin link, resume URL)
- [ ] Place your `resume.pdf` in the `public` folder
- [ ] Update `skills` items
- [ ] Fill in your actual `projects` (last 6 months)
- [ ] Add your full `experiences` history
- [ ] Update the `about` section facts and bio
- [ ] Replace `fly.toml` app name with your unique Fly.io app name

## Local Development

```bash
npm install
npm run dev
```

To build and test the static export locally:

```bash
npm run build
npx serve out
```

## Docker Build

To verify the Docker image locally:

```bash
docker build -t shantanu-portfolio .
docker run -p 8080:80 shantanu-portfolio
```

Then visit `http://localhost:8080`.

## Deployment (Fly.io)

This project is configured to run on Fly.io using a `shared-cpu-1x` (256MB) instance via Nginx.

1. Authenticate with Fly CLI:
   ```bash
   fly auth login
   ```
2. Update the `app` name in `fly.toml` to a globally unique name.
3. Deploy the application:
   ```bash
   fly deploy
   ```
4. For future redeployments after editing `content.ts`:
   ```bash
   fly deploy
   ```

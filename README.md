# DreamPrompts

Production-ready editorial website built with Next.js 14, Tailwind CSS, and Sanity Studio.

## Local development

1. Copy `.env.example` to `.env.local` and add your Sanity project ID.
2. Run `npm install` and `npm run dev`.
3. Open `http://localhost:3000`; Studio lives at `/studio`.

The site uses polished demo content when Sanity is not configured, so the UI can be reviewed immediately.

## Sanity setup

Create a project at sanity.io/manage with a `production` dataset. Add both `http://localhost:3000` and the final Vercel URL to Sanity API CORS origins with credentials enabled. Add the project ID to Vercel and deploy. The Studio schemas include posts, categories, rich text, embedded prompt cards, images, code blocks, and video metadata.

## Deployment checklist

- Import the GitHub repository in Vercel and copy all variables from `.env.example`.
- Set `NEXT_PUBLIC_SITE_URL=https://dreamprompts.net`.
- Enable GitHub Discussions, install Giscus, and add its repo IDs to the environment.
- Keep `NEXT_PUBLIC_ADS_ENABLED=false` until AdSense approval. Add the AdSense client and switch it to `true` when ready.
- Add the Search Console verification value, verify the domain, and submit `https://dreamprompts.net/sitemap.xml`.
- Set the production custom domain in Vercel and redirect `www` to the canonical hostname.

## Content publishing

Create categories first, then prompts and posts in `/studio`. A post becomes public after publishing. The site revalidates Sanity content every 60 seconds. Draft/published state is managed natively by Studio.

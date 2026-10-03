# Shantanu Portfolio

A terminal-inspired, Next.js static export personal portfolio.

## Tech Stack
- Next.js 16 (App Router, Static Export)
- Tailwind CSS v4
- Framer Motion
- Fly.io & Nginx
- GitHub Actions

## Session Logs

## 2026-09-28 14:52 · Built and deployed V1 and V2 of portfolio

Built a fully static, single-page scroll portfolio with a dark terminal theme. Deployed via GitHub Actions and Fly.io local-only builders. Populated V2 data from the user's resume PDF.

**Decisions**
- Chose Next.js static export (`output: "export"`) with unoptimized images for lightweight Fly.io deployment.
- Implemented Tailwind v4 custom colors via `@theme inline` in `globals.css` rather than a tailwind.config.ts file.
- Used `framer-motion` for subtle scroll-into-view animations.
- Set up GitHub Actions using `flyctl deploy --local-only` to bypass Fly's remote builder timeout issues.
- Extracted OCR resume text into typed `src/data/content.ts` arrays/objects for V2 data ingestion.

**TODOs**
- [ ] User needs to upload the actual `resume.pdf` to the `public/` directory.
- [ ] Finalize tweaks for V3.

## 2026-10-02 01:10 · Added Writing / Blog Section & Linked Medium Post

Added a dedicated technical writing section to showcase engineering blog posts and articles.

**Decisions**
- Created `BlogPost` interface in `src/types/index.ts` supporting title, description, url, tags, read time, date, platform, and featured status.
- Added Medium article: *How to Give Your Algorithmic Trading System Common Sense Using TypeSafe AI* (`https://medium.com/@dubeyshantanu2/how-to-give-your-algorithmic-trading-system-common-sense-using-typesafe-ai-b52ecd45c627`).
- Implemented `BlogSection.tsx` and `BlogCard.tsx` matching terminal theme with tag filters, platform badges, and direct external reading links.
- Updated `Navbar.tsx` with smooth scroll anchor (`#writing`).
- Added Medium social icon and profile link to `Hero.tsx` and `Footer.tsx`.
- Resolved TypeScript and ESLint warnings in layout and theme toggle.

## 2026-10-04 02:07 · React Native Portfolio Overhaul

Updated the Mobile App Development section to align with the latest PDF resume, significantly expanding the scope of showcased mobile engineering work.

**Decisions**
- Added Walmart Global Tech project (*Sidekick*) as a featured entry with Play Store link.
- Populated six additional professional and independent React Native projects (*The Draft*, *Platform*, *Greenspace Golf*, *Path Truck and Trailer*, *Suggaa*, *VBN Official*, and *B2BDock*).
- Ensured tags reflect the specific technical stacks (React Navigation, Redux Toolkit, Expo, Skia, Appium, Bitrise, etc.) for each respective project.

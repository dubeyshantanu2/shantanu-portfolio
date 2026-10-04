# TASK-ANALYTICS-001 Microsoft Clarity Integration & Interaction Analytics
**Date:** 2026-10-04
**Status:** complete
**Assigned to:** Code Generator Agent

## Goal
Integrate Microsoft Clarity analytics into the Next.js portfolio website to track visitor geographic locations, session recordings, heatmaps, section views, external link clicks, and resume interactions without performance degradation.

## Acceptance Criteria
- [x] Microsoft Clarity script loaded asynchronously via `next/script` using project ID `ysc70r044q`.
- [x] Automatic tracking of visitor locations (country, region, city), session replays, cursor movements, and scroll depth.
- [x] Outbound link click tracking (GitHub, LinkedIn, Medium, App Store, Play Store, Email).
- [x] Resume download/view interaction event tracking.
- [x] Static export compatibility (`output: 'export'`) maintained with zero hydration or build errors.
- [x] Non-intrusive, zero-cookie/privacy-compliant setup for lightweight portfolio needs.

## Inputs Required
- Microsoft Clarity Project ID: `ysc70r044q`.
- Next.js root layout: `src/app/layout.tsx`.
- Analytics client component / helper: `src/components/MicrosoftClarity.tsx` or `src/lib/analytics.ts`.

## Expected Output
- `src/components/MicrosoftClarity.tsx`: Client component loading Microsoft Clarity script.
- Updated `src/app/layout.tsx`: Embedding the analytics script component.
- Updated documentation in `docs/ARCHITECTURE.md` and Obsidian.

## Edge Cases / Constraints
- Must not block initial page render (use `afterInteractive` strategy).
- Must work in Next.js static export without server-side dependencies.
- Production-only or env-configurable execution so development builds don't pollute analytics data.

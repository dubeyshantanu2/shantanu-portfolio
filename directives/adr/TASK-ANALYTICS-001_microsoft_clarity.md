# Architecture Decision Record — TASK-ANALYTICS-001
**Date:** 2026-10-04
**Decision Status:** APPROVED

## Problem Statement
The portfolio needs lightweight, free analytics to capture visitor geographic location (city/country), session replays, click heatmaps, section navigation, and outbound link engagements (such as resume views and app store links) primarily focused on recruiters and profile visitors.

## Decision Made
Implement Microsoft Clarity using Next.js `next/script` with `strategy="afterInteractive"`. Create a dedicated client component `MicrosoftClarity.tsx` initialized with Project ID `ysc70r044q`. Additionally, export utility functions (`trackEvent`, `setCustomTag`) to allow explicit tracking for resume downloads and key outbound actions.

## Rationale
- **Zero Cost & Unlimited Replays:** Microsoft Clarity provides unlimited session recordings, heatmaps, and geographic telemetry at zero financial cost.
- **Async & Non-blocking:** `next/script` with `strategy="afterInteractive"` ensures the tracking script does not impede Core Web Vitals or first contentful paint (FCP).
- **Static Export Compatible:** Fully client-side execution that functions cleanly with `output: "export"` static deployments.
- **Rich Interaction Insights:** Captures rage clicks, dead clicks, scroll depth, cursor tracks, device details, and geographic breakdown out of the box.

## Alternatives Considered & Rejected
1. **Google Analytics 4 (GA4):** Clunky dashboard, steep learning curve, no session recordings or visual heatmaps on the free tier.
2. **PostHog:** Excellent, but limited to 5,000 recordings/month on the free tier, whereas Clarity has no quota limits.
3. **Plausible / Umami:** Good privacy metrics, but lack visual session replay and heatmaps to observe recruiter interaction details.

## Component Boundaries
| File Path | Responsibility | Dependencies |
|---|---|---|
| `src/components/MicrosoftClarity.tsx` | Clarity Script initialization & client mounting | `next/script` |
| `src/lib/analytics.ts` | Type-safe custom event & tag helper functions | `window.clarity` |
| `src/app/layout.tsx` | Mount `MicrosoftClarity` in root HTML layout | `src/components/MicrosoftClarity.tsx` |

## API Contracts
```typescript
// src/lib/analytics.ts
export function trackEvent(eventName: string): void;
export function setTag(key: string, value: string | string[]): void;
export function identifyUser(customId: string, customSessionId?: string, customPageId?: string): void;
```

## Definition of Done
- [x] `MicrosoftClarity` component created and rendered in `RootLayout`.
- [x] TypeScript declarations provided for `window.clarity`.
- [x] Production build passes (`npm run build`).
- [x] Linting passes (`npm run lint`).
- [x] Documentation updated in `docs/` and Obsidian vault.

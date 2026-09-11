# Sponsor Tracks implementation

This branch includes the Sponsor Tracks section shown in the supplied design reference.

## Changes

- Added `src/components/SponsorTracks/SponsorTracks.tsx`
- Added `src/config/sponsorTracks.ts`
- Added `public/sponsor-wood-texture.png` for the wood-grain ground
- Updated `src/app/page.tsx` to render `<SponsorTracks />` after `<Team />`
- Reused the existing design tokens and `folder.png` artwork from `public/`
- Added responsive behavior for mobile/tablet while preserving the 1440px desktop composition

## Run locally

```bash
yarn install
yarn dev
```

Then open `http://localhost:3000`.

## Validation

The modified TypeScript files pass the repository's local ESLint and TypeScript checks. A full `next build` could not be run in the validation environment because the uploaded Yarn 4 project requires the Yarn executable/Corepack download, and network access to fetch Yarn was unavailable.

# UGAHacks Website

Official repository for [ugahacks.com](https://ugahacks.com) — built with [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com), and love.

## 🚀 Getting Started

From this directory in the monorepo, install dependencies:

```bash
yarn install
```

Run the development server:

```bash
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser. The site will auto-reload when you save changes.

## 🛠 Development Notes

- Main entry point: `app/page.tsx`
- Styling: [Tailwind CSS](https://tailwindcss.com) with custom animations
- Fonts: Uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) for [Geist](https://vercel.com/font)
  - We use [Raleway](https://fonts.google.com/specimen/Raleway) as well!
- Components and sections live under the `components/` and `app/` directories

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs) — framework documentation
- [Tailwind CSS Docs](https://tailwindcss.com/docs) — utility-first CSS framework
- [Learn Next.js](https://nextjs.org/learn) — interactive tutorial

## 🚢 Deployment

The monorepo's production workflow builds this application as a container
and deploys it to Cloud Run when files in this directory change on `master`.

---

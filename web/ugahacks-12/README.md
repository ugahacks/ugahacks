# UGAHacks 12

The UGAHacks 12 site: [Next.js](https://nextjs.org) (App Router, React Compiler),
React 19, Tailwind CSS 4, TypeScript, ESLint, and Prettier.

## Getting Started

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts: `yarn build`, `yarn start`, `yarn lint`, `yarn format`,
`yarn format:check`.

## Project layout

- `src/app` - App Router routes, plus `robots.ts` / `sitemap.ts` and the
  Tailwind entrypoint `globals.css`.
- `src/lib/site.ts` - canonical site name, description, and origin. Metadata,
  the sitemap, and robots.txt all read from here.
- `src/components` - shared components. `~/*` maps to `src/*`.

## Yarn setup

This is a **standalone** Yarn project, like `web/cadathon-26`: it has its own
`yarn.lock`, uses the `node-modules` linker rather than the repo root's PnP, and
is excluded from the root `workspaces` globs. Run Yarn from this directory.

It also pins its own Yarn release (`.yarn/releases/yarn-4.18.0.cjs`) instead of
inheriting the root's 4.3.0, because [catalogs](https://yarnpkg.com/features/catalogs)
need Yarn >= 4.10.

### Catalogs

Shared dependency versions live in one place - the `catalog` block in
[`.yarnrc.yml`](.yarnrc.yml) - and `package.json` references them with the
`catalog:` protocol:

```json
{ "dependencies": { "next": "catalog:" } }
```

To bump a shared dependency, edit the range in `.yarnrc.yml` and re-run
`yarn install`. Project-specific dependencies that aren't part of the shared
stack should keep a literal range in `package.json`.

Yarn merges `.yarnrc.yml` files up the directory tree, so once every site in the
repo runs Yarn >= 4.10 this `catalog` block can move verbatim to the repo root
and be shared across projects. It lives here for now because Yarn 4.3.0 - which
the root and the older sites still use - rejects the `catalog` key outright.

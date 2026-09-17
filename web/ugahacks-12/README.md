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

## Deploy to Google Cloud Run

The production domain is `https://12.ugahacks.com`. The Docker image uses
Node.js 22, the committed Yarn release, and an immutable dependency install.
It runs lint and the production build, then serves the standalone output
as a non-root user on `0.0.0.0:$PORT` (default `8080`). Public images and
Next.js static assets are included in the runtime image.

From the repository root, build and test locally:

```bash
docker build -t ugahacks-12 web/ugahacks-12
docker run --rm -p 8080:8080 ugahacks-12
```

Open `http://localhost:8080`, `/robots.txt`, and `/sitemap.xml`.
The build downloads Google Fonts, so it needs outbound internet access.
To use another canonical URL, supply
`--build-arg NEXT_PUBLIC_SITE_URL=https://your-domain.example` when building.
This value is embedded at build time; changing only the Cloud Run runtime
environment will not update the pre-rendered metadata and sitemap.

The **UGAHacks 12 Cloud Run** GitHub Actions workflow builds and smoke-tests
the container on pull requests affecting this site. To deploy, merge the
files to `master`, then select **Actions → UGAHacks 12 Cloud Run → Run workflow**
on `master`. Manual runs on other branches only build and test.
There is no automatic production deployment on push.

The workflow uses the existing `GCP_PROJECT_ID` and `GCP_SA_KEY` repository
secrets, the `ugahacks` Artifact Registry repository in `us-east1`, and the
Cloud Run service `ugahacks-12-prod` in `us-east1`. The repository must exist,
and the service account must be able to push images, deploy Cloud Run services,
act as the runtime service account, and allow public access.

After deployment, configure the hosting/domain mapping and DNS for
`12.ugahacks.com` to point to this service and provision HTTPS. The canonical
URL in the code does not create a domain mapping or DNS record.

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

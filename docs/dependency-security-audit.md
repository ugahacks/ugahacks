# Dependency security audit

Audit date: 2026-09-06

Each application was audited independently against the npm advisory database.
Yarn 4 projects used `yarn npm audit --recursive --environment production`; Yarn
Classic projects used `yarn audit --groups dependencies`.

## Actively maintained applications

| Application | Result | Action |
| --- | --- | --- |
| `cadathon-26` | No remaining production advisories | Updated direct dependencies and pinned the patched `nanoid` 3.3.18 transitive dependency. |
| `ugahacks-12` | No production advisories | Replaced catalog references with current direct versions and updated the lockfile. |
| `ugahacks-org` | Audit deferred to its history-import PR | The standalone application will be imported as `web/platforms/ugahacks`, so changes must be made after its history is imported. |

The latest published ESLint 10 and TypeScript 7 releases do not satisfy the peer
ranges of the current Next.js toolchain. The active applications therefore use
the latest supported ESLint 9 and TypeScript 5 releases rather than knowingly
installing an invalid peer graph.

## Archived applications

The audit reports high or critical findings for the archived Next.js 11–14
applications. Most are inherited from unsupported framework versions and do
not have fixes available within the application's existing major version.
Resolving them would require framework and, in some cases, React and Node major
version migrations:

| Framework generation | Applications |
| --- | --- |
| Next.js 11 | `makeathon-8`, `ugahacks-6`, `ugahacks-7`, and `ugahacks-8` |
| Next.js 13 | `makeathon-2`, `ugahacks-9` |
| Next.js 14 | `makeathon-3`, `ugahacks-x` |
| Next.js 15 | `ugahacks-11` |

No major framework migrations are included in the package-isolation change.
Those applications must remain on their existing dependency declarations until
a dedicated compatibility change can verify their UI and runtime behavior. The
new per-application lockfiles prevent unrelated installs from changing their
resolved dependency graphs in the meantime.

When an archived site must remain publicly available, prefer serving a static
export where the application supports it. Otherwise, address its framework
upgrade in a dedicated pull request with visual and runtime regression testing.

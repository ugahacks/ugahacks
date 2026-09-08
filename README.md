# UGAHacks

[![master](https://github.com/ugahacks/ugahacks/actions/workflows/cicd_master.yaml/badge.svg)](https://github.com/ugahacks/ugahacks/actions/workflows/cicd_master.yaml)

## Welcome

This is repository that hosts most website related code for UGAHacks.
For a deep dive into the repo, check out [DeepWiki](https://deepwiki.com/ugahacks/ugahacks)
![image](./docs/diagram.drawio.svg)
<img width="1389" height="661" alt="image" src="https://github.com/user-attachments/assets/76cdd0fc-24c0-4c8e-b169-6f6bfd6498ec" />

## Package management

Applications under `web/` are intentionally independent Yarn projects. Each
application pins its own Yarn version and lockfile so maintenance on an active
site cannot change an archived event site. Run Yarn from the application
directory rather than from the repository root.

The root package is reserved for repository tooling and deliberately does not
declare the applications as Yarn workspaces.

Event microsites live under `web/events/`. Long-lived products live under
`web/platforms/`; they are maintained independently of the numbered event-site
lifecycle.

# UGAHacks Tech Stack & Monorepo Overview

Welcome to UGAHacks! This document outlines our current tech stack and the structure of our repositories.

## 🔧 Tech Stack

We primarily use modern web technologies to deliver performant and scalable solutions for our events:

- **Frontend**:
  - `Next.js` (React-based framework)
  - `React` (for component-based UI development)
  - `TailwindCSS` (for styling)
- **Backend**:

  - `Firebase` (Authentication, Firestore, Hosting for MyByte backend system)
  - `TypeScript` (for strong typing and scalability)

- **DevOps & Deployment**:
  - `Google Cloud Run` (for deploying web services)
  - `Docker` (to containerize our apps for deployment)
  - `GitHub Actions` (for CI/CD)
  - `Squarespace Domains` For Domains!

## 📦 Repositories Overview

### Main Monorepo

- Hosts all UGAHacks frontend projects and internal tooling (e.g., Hackathon sites like all of them except our OG)
- Follows Yarn Workspaces and topological build order

### Other Public Repos

- [`ugahacks-backend`](https://github.com/UGAHacks/ugahacks-backend)

  - TypeScript-based Firebase backend for MyByte registration and hackathon management

- [`ugahacks-org`](https://github.com/UGAHacks/ugahacks-org)

  - Static site for [ugahacks.com](https://ugahacks.com)
  - Primarily written in HTML and CSS

- [`ugahacks-mobile`](https://github.com/UGAHacks/ugahacks-mobile)
  - React Native mobile app (deprecated for newer events but still public)

## ✅ Contribution Guidelines

- **ESLint**:  
  Run `yarn lint` before committing to ensure code quality and consistency.

- **Branching Strategy**:
  - Never commit directly to `master`.
  - Use feature branches: `feature/your-feature-name`
  - Open a Pull Request (PR) to merge changes into `master`, then I will check it and make comments or commit it!

---

Have questions or want to contribute? Reach out to a me `@TheRyanMajd`

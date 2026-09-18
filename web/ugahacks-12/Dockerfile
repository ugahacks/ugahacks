# ---- deps ----
FROM node:22-bookworm-slim AS deps
WORKDIR /app

# Use the committed Yarn release and lockfile, including the catalog config.
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn/releases/ ./.yarn/releases/
RUN node .yarn/releases/yarn-4.18.0.cjs install

# ---- build ----
FROM node:22-bookworm-slim AS build
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ARG NEXT_PUBLIC_SITE_URL=https://12.ugahacks.com
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
RUN node .yarn/releases/yarn-4.18.0.cjs lint
RUN node .yarn/releases/yarn-4.18.0.cjs build

# ---- runtime ----
FROM node:22-bookworm-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=8080
ENV HOSTNAME=0.0.0.0

# Copy the minimal standalone output
COPY --from=build --chown=node:node /app/.next/standalone ./
COPY --from=build --chown=node:node /app/.next/static ./.next/static
COPY --from=build --chown=node:node /app/public ./public

USER node
EXPOSE 8080
CMD ["node", "server.js"]

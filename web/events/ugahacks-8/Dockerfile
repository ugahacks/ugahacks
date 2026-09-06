FROM node:16.14.0-alpine

EXPOSE 3000

USER node
WORKDIR /home/node

COPY --chown=node:node package.json yarn.lock /home/node/

RUN corepack yarn install --frozen-lockfile

COPY --chown=node:node . /home/node

RUN corepack yarn build

CMD ["corepack", "yarn", "start"]

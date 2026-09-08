FROM node:18.20.8

RUN corepack enable

EXPOSE 3000

USER node
WORKDIR /home/node

COPY --chown=node:node package.json yarn.lock .yarnrc.yml /home/node/

RUN yarn install --immutable

COPY --chown=node:node . /home/node

RUN yarn build

CMD ["yarn", "start"]

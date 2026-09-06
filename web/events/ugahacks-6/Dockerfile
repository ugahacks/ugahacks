FROM node:16.14.0-alpine

RUN npm install --global yarn@1.22.22

EXPOSE 3000

USER node
WORKDIR /home/node

COPY --chown=node:node package.json yarn.lock /home/node/

RUN yarn install --frozen-lockfile

COPY --chown=node:node . /home/node

RUN yarn build

CMD ["yarn", "start"]

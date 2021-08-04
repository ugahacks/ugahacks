FROM node:12-alpine

EXPOSE 3000

USER node
WORKDIR /home/node

# yarn 2 codename
RUN yarn set version berry

COPY --chown=node:node package.json /home/node

RUN yarn install 
#RUN yarn bootstrap

COPY --chown=node:node . /home/node

RUN yarn build

CMD ["yarn", "start"]

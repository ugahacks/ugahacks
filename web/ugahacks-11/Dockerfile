FROM node:20

EXPOSE 8080
ENV PORT=8080

USER node
WORKDIR /home/node

# yarn 2 codename
RUN yarn set version stable

COPY --chown=node:node package.json /home/node

RUN yarn install 
#RUN yarn bootstrap

COPY --chown=node:node . /home/node

RUN yarn build

CMD ["yarn", "start"]

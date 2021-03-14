FROM node:14.11.0-alpine3.10

WORKDIR /frontend

ENV PATH /frontend/node_modules/.bin:$PATH

COPY package.json /frontend/package.json

RUN yarn install

CMD ["yarn", "start"]

EXPOSE 1234
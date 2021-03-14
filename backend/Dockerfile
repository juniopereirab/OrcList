FROM node:12.2.0-alpine

WORKDIR /usr/src/app

COPY package.json .

RUN yarn install

ADD . /usr/src/app

CMD ["yarn", "dev"]

EXPOSE 5050
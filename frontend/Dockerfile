FROM node:lts-alpine3.10

WORKDIR /frontend

ENV PATH /frontend/node_modules/.bin:$PATH

COPY package.json /frontend/package.json
COPY src /frontend/src/
COPY public /frontend/public/

RUN yarn install

RUN yarn global add react-scripts@4.0.3

EXPOSE 3000
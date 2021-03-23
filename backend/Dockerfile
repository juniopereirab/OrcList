FROM node:lts-alpine3.10

#Define the work directory path
WORKDIR /backend

#Copy configuration files to work directory
COPY package*.json ./
COPY tsconfig.json ./
COPY nodemon.json ./

#Copy the source code to work directory
COPY src /backend/src/

RUN ls -a

RUN yarn install

CMD ["yarn", "start"]

EXPOSE 5050
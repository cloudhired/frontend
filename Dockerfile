FROM node:14

WORKDIR /usr/src/app

COPY package.json ./
RUN yarn

COPY . .
EXPOSE 8080

RUN yarn build

CMD [ "yarn", "start" ]
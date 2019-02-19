FROM node:8.15.0-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn add \
    make /usr/src/app
    # touch yarn-error.log;

COPY . .

EXPOSE 4000

CMD [ "yarn", "start" ]
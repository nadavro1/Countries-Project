FROM node:lts-slim

RUN mkdir -p /app
COPY ./package.json ./app
RUN npm install
COPY . ./app

WORKDIR '/app'

EXPOSE 3000

CMD [ "npm", "start" ]
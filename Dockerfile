FROM node:lts-slim

RUN mkdir -p /app

COPY ./package.json ./app
RUN npm install
COPY . /app
WORKDIR /app

EXPOSE 4000

CMD [ "npm", "run", "dev" ]
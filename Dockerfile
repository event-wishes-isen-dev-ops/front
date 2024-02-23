FROM node:20.11.0-alpine

WORKDIR /app

COPY public/ /app/public
COPY src/ /app/src
COPY package.json /app/

RUN npm install

COPY . /app

CMD ["npm", "start"]
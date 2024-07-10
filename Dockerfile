FROM node:20.15.1-alpine3.19

WORKDIR /usr/src/app

RUN npm init -y

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
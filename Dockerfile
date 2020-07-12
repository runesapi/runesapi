FROM node:12-alpine

COPY package.json ./
COPY package-lock.json ./
RUN npm ci

COPY . .

RUN npm run build
RUN npm prune --production
RUN rm -rf src tsconfig.json

EXPOSE 8080/tcp
ENTRYPOINT ["node", "./dist/Server.js" ]






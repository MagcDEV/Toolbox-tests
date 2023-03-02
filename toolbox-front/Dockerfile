FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3030
# required for docker desktop port mapping

CMD ["npm", "run", "serve"]
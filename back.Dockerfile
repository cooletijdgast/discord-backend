FROM node:alpine

# Create app directory
WORKDIR /app/backend

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . ./

EXPOSE 4000

CMD [ "npm", "start" ] 
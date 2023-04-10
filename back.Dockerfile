FROM node:16

# Create app directory
WORKDIR /app/backend

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# COPY **/package.json **/package-lock.json ./

# RUN npm install
# # If you are building your code for production
# # RUN npm ci --omit=dev

# # Bundle app source
# COPY . ./

# CMD [ "npm", "start" ]

# WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . ./
EXPOSE 4000
CMD [ "npm", "start" ] 
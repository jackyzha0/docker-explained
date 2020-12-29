# Base Image
FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copy source code and static files
COPY . .

# Run app
CMD [ "node", "app.js" ]
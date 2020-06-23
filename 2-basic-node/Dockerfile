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

# Expose port (more for documentation than 
# anything, still needs -p 3000:3000)
EXPOSE 3000

# Run app
CMD [ "node", "app.js" ]
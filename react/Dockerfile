# Base Image
FROM node:13.12.0-alpine
WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH to allow running yarn
ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn

# add app
COPY . .

# Run app
CMD ["yarn", "start"]

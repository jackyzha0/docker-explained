# React Example

A containerized React application. This is a more stripped down version of my personal [React template](https://github.com/jackyzha0/template-react).

## What's what

`Dockerfile` - contains instructions for how to build a development image for React

`Dockerfile.prod` - contains instructions for how to build a production image for React

`nginx/nginx.conf` - contains the configuration for the NGINX server

`src` - source code for a basic React app

## Why do we need NGINX?

React's production build is actually just a bundle of static files. We need something to actually serve this bundle. For that, we use NGINX.

## Instructions

### Dev

```bash
$ docker build -t react-app:dev .
$ docker run -p 3000:3000 react-app:dev
```

### Prod

```bash
$ docker build -f Dockerfile.prod -t react-app:latest .
$ docker run -p 3000:3000 react-app:latest
```

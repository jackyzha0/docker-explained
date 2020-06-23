# ELI5: Docker

This is a small repo which serves as an example/tutorial walking through what Docker is, why people use it, and a few basic examples.

# Introduction
## What is Docker?
Docker is a tool that makes it really easy to package applications into self-sustaining 'containers'.

## What are containers?
Containers, as their name suggests, contain things. In the case of Docker, these contain all the parts the application needs to run, everything from libraries and dependencies to the actual source code.

## Why containers?
Containerization means that everything to do with your application stays inside the container. You shouldn't need to worry about how stuff on your machine (e.g. which version of Python you have) affects how your program runs. As a side benefit, this means that Docker containers are dependency-free. Never worry about "oh, it works on my machine" ever again! After a Docker image is created, all of its contents are frozen so it should work exactly the same on your computer as it does for someone else (assuming you both have Docker).

## Why Docker?
Docker makes it super easy to work with these containers through the concept of Docker images. Think of images like 
It uses images that 
These images are built through 

### Pros
### Cons
Stateless. This is baked into the design of Docker. If you want to keep state, you can
1. Copy files into the Docker container on start
1. Connect to an external database
1. Standalone volume

# Installing Docker
More detailed instructions can be found [here](https://docs.docker.com/get-docker/).

# Parts of Docker
## Docker Containers
I think the intro covered this pretty well so I'll repeat it again here.

> Containers, as their name suggests, contain things. In the case of Docker, these contain all the parts the application needs to run, everything from libraries and dependencies to the actual source code.

This means that 'containerized' applications don't need to rely on a system to have certain dependencies (e.g. `Node.js`) installed on the user's system to run because the container will have it packaged.

You can think of Docker containers like a fully self-contained and running version of your application.

## Docker Image
You can think of Docker images like a sort of 'template' that describes to Docker how to create a container from scratch. 

## Dockerfile
Think of the Dockerfile as the specific instructions for how to create the actual image or 'template'.

### Layers
Docker images, like ogres, have many layers.

## Docker CLI
### `docker build`
### `docker image ls`
### `docker run`
### `docker ps`
### `docker exec`
You can use the command `docker exec -it <container name> /bin/bash` to get a bash shell in the container, allowing you to run commands from within the container as if it was a full-fledged machine. If you know specifically what command you want to execute, you can use `docker exec -it <container name> <command>` to execute whatever command you specify in the container.

# Docker Examples
1. Basic Python app with dependencies
1. Multi-stage cached Python
1. Basic Node.js app
1. Basic Go app
1. Multi-stage Go app

# FAQ
1. What's the difference between a Docker Image and a Container?
1. 

# Futher reading
These topics will not be talked about within this repository, but I've added a few resources I've found helpful in my understanding of each of them.

## Docker Compose
## Kubernetes and Microservices
## Deploying to the Cloud
### Google Cloud Run (GCR)
### Google Kubernetes Engine (GKE)
### Amazon Elastic Container Service (ECS)
### Azure Functions
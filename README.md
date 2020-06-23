# 🐋 ELI5: Docker

This is a small repo which serves as an example/tutorial walking through what Docker is, why people use it, and a few basic examples.

# 👋 Introduction
## What is Docker?
Docker is a tool that makes it really easy to package applications into self-sustaining 'containers'.

## What are containers?
Containers, as their name suggests, contain things. In the case of Docker, these contain all the parts the application needs to run, everything from libraries and dependencies to the actual source code.

## Why containers?
Containerization means that everything to do with your application stays inside the container. You shouldn't need to worry about how stuff on your machine (e.g. which version of Python you have) affects how your program runs. As a side benefit, this means that Docker containers are dependency-free. Never worry about "oh, it works on my machine" ever again! After a Docker image is created, all of its contents are frozen so it should work exactly the same on your computer as it does for someone else (assuming you both have Docker).

## Why Docker?
Docker makes it super easy to work with these containers! 

### Pros
### Cons
Stateless. This is baked into the design of Docker. If you want to keep state, you can
1. Copy files into the Docker container on start
1. Connect to an external database
1. Standalone volume

# 🔨 Installing Docker
More detailed instructions can be found [here](https://docs.docker.com/get-docker/).

# ⚙️ Parts of Docker
## Docker Containers
I think the intro covered this pretty well so I'll repeat it again here.

> Containers, as their name suggests, contain things. In the case of Docker, these contain all the parts the application needs to run, everything from libraries and dependencies to the actual source code.

This means that 'containerized' applications don't need to rely on a system to have certain dependencies (e.g. `Node.js`) installed on the user's system to run because the container will have it packaged.

You can think of Docker containers like a fully self-contained and running version of your application.

## Docker Image
You can think of Docker images like a sort of 'template' that describes to Docker how to create a container from scratch. You can build these images by providing instructions on how to build them in the form of layers.

### Layers
Docker images, like ogres (or cakes if you're a boring person), have many layers. The base layer often provides some basic functionality like providing `git`, `bash` or `apt` -- otherwise your container has nothing to run off of! We can then add our own layers on top of that base layer, like installing dependencies, copying files into the image, and defining the command to run when the container starts up. These instructions are programmatically defined through a Dockerfile.

> One of the coolest parts of Docker is that these layers get cached between builds if nothing has changed. That means that if you rebuild an image and only changed the last layer, it'll only need to rebuild the last layer rather than rebuilding the whole image, making for some really fast iteration times.

## Dockerfile
The Dockerfile are the actual specific instructions for how to create the actual image or 'template'. The Dockerfile starts off by defining a 'base-layer', which serve as the basis for your actual image. Some common base layers are `ubuntu` (which contains a minimal install of the actual Ubuntu operating system) and `python` (which contains everything needed to run a basic Python app). 

I won't dive into too much details about each command you can use as these will be described more in-depth within the examples. You can find detailed documentation on the commands you can use in a Dockerfile here: https://docs.docker.com/engine/reference/builder/

## Docker CLI
### `docker build`
### `docker image ls`
### `docker run`
### `docker ps`
### `docker exec`
You can use the command `docker exec -it <container name> /bin/bash` to get a bash shell in the container, allowing you to run commands from within the container as if it was a full-fledged machine. If you know specifically what command you want to execute, you can use `docker exec -it <container name> <command>` to execute whatever command you specify in the container.

# 📝 Docker Examples
1. Basic Python app with dependencies
1. Multi-stage cached Python
1. Basic Node.js app
1. Basic Go app
1. Multi-stage Go app

# 📚 Futher reading
These topics will not be talked about within this repository, but I've added a few resources I've found helpful in my understanding of each of them.

## Docker Compose
## Kubernetes and Microservices
## Deploying to the Cloud
### Google Cloud Run (GCR)
### Google Kubernetes Engine (GKE)
### Amazon Elastic Container Service (ECS)
### Azure Functions
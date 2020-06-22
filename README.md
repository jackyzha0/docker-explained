# ELI5: Docker

This is a small repo which serves as an example/tutorial walking through what Docker is, why people use it, and a few basic examples.

# Introduction
## What is Docker?
## What are containers?
## Why containers?
## Why Docker?
### Pros
### Cons
Stateless. This is baked into the design of Docker. If you want to keep state, you can
1. Copy files into the Docker container on start
1. Connect to an external database
1. Standalone volume

# Parts of Docker
## Dockerfile
## Docker Image
## Docker CLI
### `docker build`
### `docker image ls`
### `docker run`
### `docker ps`
### `docker exec`
You can use the command `docker exec -it <container name> /bin/bash` to get a bash shell in the container, allowing you to run commands from within the container as if it was a full-fledged machine. If you know specifically what command you want to execute, you can use `docker exec -it <container name> <command>` to execute whatever command you specify in the container.

# Docker Examples
1. 

# Futher reading
## Docker Compose
## Kubernetes and Microservices
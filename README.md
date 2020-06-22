# ELI5: Docker

This is a small repo which serves as an example/tutorial walking through what Docker is, why people use it, and a few basic examples.

# Introduction
## What is Docker?
## What are containers?
## Why containers?
## Why Docker?

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

# Futher reading
## Kubernetes and Microservices
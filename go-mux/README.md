# Multi-stage Go App
In compiled languages like Go, the build tools themselves often are pretty large in size. Can't we just build the image and put the image into an empty container? Well, we can actually do that with multi-stage builds! This will help us to drastically reduce our container size.

Here's a basic example of a multi-stage Go app.

## What's what
`main.go` - contains the actual source code for the Hello World example.

`go.mod` - contains dependency information

`Dockerfile` - contains instructions for how to build the Docker image

## Building the thing
To build the container, do `docker build -t hello-world-go .` To verify we built the image and Docker can see it, lets do `docker image ls`

```bash
$ docker image ls

REPOSITORY                               TAG                 IMAGE ID            CREATED              SIZE
hello-world-go                           latest              1ccb18776ad6        31 seconds ago       7.75MB
```

Our fully built binary is just a tiny 7.75MB!
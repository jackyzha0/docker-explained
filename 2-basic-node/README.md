# Node.js and Express Example
Here's a JavaScript example which creates a Node.js and Express app that has a Hello World endpoint and serves some static files.

## What's what
`app.js` - contains the actual source code for the Hello World example.

`main.html` - contains a basic webpage that loads a static image

`public/` - static resources (e.g. CSS, images, etc.)

`package-lock.json` - describes dependencies

`Dockerfile` - contains instructions for how to build the Docker image

## Building the thing
To build the container, just do `docker build -t hello-world-node .` To verify we built the image and Docker can see it, lets do `docker image ls`

```bash
$ docker image ls

REPOSITORY                               TAG                 IMAGE ID            CREATED              SIZE
hello-world-node                         latest              0d40e98af4ac        26 seconds ago       923MB
```

## Running the thing
Great! Now that you have a built image, let's make a container from it. We can do this by running our image and expose the port to our local machine. There is more explanation on `docker run` on the main `README.md` in this repository.


```bash
$ docker run -p 3000:3000 hello-world-node

Example running on localhost:3000
```

Then, you can go to your favourite browser and visit `localhost:3000`, you'll see a nice "Hello World!" from our container! Visit `localhost:3000/doggo` to see a webpage with a cute dog photo :)
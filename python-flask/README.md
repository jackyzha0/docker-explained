# Basic Python Example
Here's a basic example of packaging a simple Flask server.

## What's what
`app.py` - contains the actual source code for the Hello World example. You can run `python app.py` if you would like to run it without Docker first.

`Dockerfile` - contains instructions for how to build the Docker image

## Building the thing
First thing you want to do is pull the source code for this example onto your local machine. Do this by running `git clone https://github.com/jackyzha0/docker-explained.git` in your favourite terminal. Then navigate to the folder by doing `cd docker-explained/1-basic-python`. To build the container, just do `docker build -t hello-world .` and you should get something like the following:

```bash
$ docker build -t hello-world .

Sending build context to Docker daemon  3.072kB
Step 1/4 : FROM python:3
3: Pulling from library/python

...

Successfully built b010fb267f97
Successfully tagged hello-world:latest

$
```

To verify we built the image and Docker can see it, lets do `docker image ls`

```bash
$ docker image ls

REPOSITORY                               TAG                 IMAGE ID            CREATED             SIZE
hello-world                              latest              b010fb267f97        9 minutes ago       943MB
```

## Running the thing
Great! Now that you have a built image, let's make a container from it. We can do this by running our image and expose the port to our local machine. There is more explanation on `docker run` on the main `README.md` in this repository.


```bash
$ docker run -p 5000:5000 hello-world

* Serving Flask app "app" (lazy loading)
* Environment: production
WARNING: This is a development server. Do not use it in a production deployment.
Use a production WSGI server instead.
* Debug mode: on
* Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
* Restarting with stat
* Debugger is active!
* Debugger PIN: 327-175-092
```

Then, you can go to your favourite browser and visit `localhost:5000`, you'll see a nice "Hello World!" from our container!
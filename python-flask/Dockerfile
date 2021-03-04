# Define Base Image. We'll use Python 3
FROM python:3

# Copy your Python file to the image
COPY app.py /

# Install any dependencies
RUN pip install flask

# Tell Docker how to start your script
ENTRYPOINT [ "python", "./app.py" ]
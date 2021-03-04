# --- Stage 1 ---
# Base Layer, contains Go build tools
# Name this stage 'builder' so we can refer to it later
FROM golang:alpine AS builder

# Enable Go modules
ENV GO111MODULE=on

# Set working dir to /app/src
WORKDIR /app/src

# Copy dep files
COPY go.mod .
COPY go.sum .

# Install dependencies
RUN go mod download

# Install Git and network certificates
RUN apk add git ca-certificates

# Copy source code to image
COPY . /app/src

# Build image with Go modules and put binary
# in /go/bin/app
RUN CGO_ENABLED=0 GOOS=linux go build -o /go/bin/app

# --- Stage 2 ---
# Docker will use the last stage of your Dockerfile as the actual
# image. In this case, use a completely empty image
FROM scratch

# Copy built binary from previous stage
COPY --from=builder /go/bin/app /go/bin/app

# Expose port (more for documentation than 
# anything, still needs -p 8080:8080)
EXPOSE 8080

# Run app
ENTRYPOINT ["/go/bin/app"]
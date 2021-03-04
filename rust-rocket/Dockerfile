# --- Stage 1 ---
# Rust planning stage, compute recipe
FROM rust:latest as planner
RUN rustup default nightly \
 && rustup update
WORKDIR app
RUN cargo install cargo-chef

# copy source files
COPY . .

# prep recipe to memo deps
RUN cargo chef prepare  --recipe-path recipe.json

# --- Stage 2 ---
# Rust deps build caching staging
FROM rust:latest as cacher
RUN rustup default nightly \
 && rustup update
WORKDIR app
RUN cargo install cargo-chef
COPY --from=planner /app/recipe.json recipe.json
RUN cargo chef cook --release --recipe-path recipe.json

# --- Stage 3 ---
# Rust source code build stage
FROM rust:latest as builder
RUN rustup default nightly \
 && rustup update
WORKDIR app
COPY . .

# copy over the cached dependencies
COPY --from=cacher /app/target target
COPY --from=cacher /usr/local/cargo /usr/local/cargo
RUN cargo build --release --bin app

# --- Stage 4 ---
# Runtime
FROM rust:slim as runtime
WORKDIR app
COPY --from=builder /app/target/release/app /usr/local/bin
EXPOSE 8000
ENTRYPOINT ["./usr/local/bin/app"]
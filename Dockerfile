# ── build stage ───────────────────────────────────────────────────────────────
# Standalone build — the Docker context is this repo root. All @meddleware/*
# dependencies resolve from the npm registry; repos/ui must be published at
# ^0.1.3 before building this image.
#
#   docker build -t dashboard:<tag> .
FROM node:22-slim AS build

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

# ── runtime stage ─────────────────────────────────────────────────────────────
# static-server is a minimal Go binary image. SPA_FALLBACK serves index.html
# for any extensionless path (Vue Router history mode).
FROM quay.io/meddleware-org/static-server:0.1.0

COPY --from=build /app/dist /app/public

ENV SERVE_DIR=/app/public \
    SPA_FALLBACK=true \
    CACHE_IMMUTABLE_PREFIX=/assets/

EXPOSE 8080

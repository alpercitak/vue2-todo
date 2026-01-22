FROM oven/bun:1.3.6 AS build

WORKDIR /app

COPY bun.lock package.json ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

FROM nginx:1.29-alpine AS deploy

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/dist .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
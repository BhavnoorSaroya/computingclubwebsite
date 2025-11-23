# ---------------------------
# Stage 1 — Build with Bun
# ---------------------------
FROM oven/bun:1 AS builder

WORKDIR /app

# Copy only package files first for caching
COPY package.json ./

# Install deps
RUN bun install --frozen-lockfile

# Copy the rest of the app
COPY . .

# Build the Vite app
RUN bun run build


# ---------------------------
# Stage 2 — Serve with NGINX
# ---------------------------
FROM nginx:1.27-alpine AS runner

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy your built vite dist/ folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy a clean nginx config (optional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

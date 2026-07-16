FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
ENV HOST=0.0.0.0
EXPOSE 3000

# Vite dev server healthcheck (busybox wget is available on node:20-alpine).
HEALTHCHECK --interval=30s --timeout=5s --start-period=25s --retries=3 \
  CMD wget -q -O /dev/null http://localhost:3000/ || exit 1

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

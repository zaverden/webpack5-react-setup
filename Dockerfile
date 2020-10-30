FROM node:12.14.1-alpine

# Install live-server globally
RUN \
  apk add --no-cache tini && \
  npm install --global live-server && \
  npm cache clean --force

# Set workdir
WORKDIR /var/www

EXPOSE 8080

# Start live server
ENTRYPOINT ["/sbin/tini", "--", "live-server", "--no-browser", "--port=8080"]

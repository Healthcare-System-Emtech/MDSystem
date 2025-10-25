# Server/Dockerfile

# Use Node.js Alpine image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the server code
COPY . .

# Expose backend port
EXPOSE 3000

# Enable polling for hot reload (optional, useful on Docker + Windows)
ENV CHOKIDAR_USEPOLLING=true

# Start the server
CMD ["node", "main.js"]
# Client/Dockerfile

# Use Node.js Alpine image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the client app
COPY . .

# Expose port for React dev server (Vite default is 5173, CRA is 3000)
EXPOSE 5173

# Enable polling for hot reload (especially on Docker + Windows)
ENV CHOKIDAR_USEPOLLING=true

# Start the React dev server
CMD ["npm", "run", "dev"]
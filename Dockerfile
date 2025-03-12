# Use the official Node.js image as the base image
FROM node:22.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Set the environment to development (this can be overwritten by docker-compose)
ENV NODE_ENV=development

# Command to run your app (update 'server.js' if your entry file has a different name)
CMD ["node", "server.js"]

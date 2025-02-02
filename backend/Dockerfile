# Use an official Node.js image to run the backend
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy the backend package.json and package-lock.json (for installing dependencies)
COPY ./backend/package.json ./backend/package-lock.json /app/

# Install backend dependencies
RUN npm install

# Copy the rest of the backend source code to the container
COPY ./backend /app

# Expose port 5000 for the backend
EXPOSE 5000

# Start the backend server
CMD ["npm", "start"]

# Use an official Nginx image to serve static files
FROM nginx:alpine

# Copy the built frontend files (from the 'frontend' folder) to the container
COPY ./frontend /usr/share/nginx/html

# Expose port 5500 for the frontend
EXPOSE 5500

# Run Nginx as the default process
CMD ["nginx", "-g", "daemon off;"]

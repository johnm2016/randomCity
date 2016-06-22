FROM node:4.4.5

# Copy src files
COPY . /app/

# Use /app working directory
WORKDIR /app

# Expose API port
ENV PORT 80
EXPOSE 80

# Build dependencies
RUN npm install

# Run application
CMD ["npm", "start"]

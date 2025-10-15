# Use Node.js as our base ingredient
FROM node:18-alpine

# Create a workspace folder
WORKDIR /app

# Copy recipe book (package files)
COPY package*.json ./

# Install all ingredients
RUN npm install

# Copy the actual food (your code)
COPY . .

# Tell everyone we're serving on port 5000
EXPOSE 5000

# Start cooking!
CMD ["npm", "start"]
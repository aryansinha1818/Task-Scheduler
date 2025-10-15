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

# Build the frontend (like baking a cake)
RUN npm run build

# Install a server to serve our baked cake
RUN npm install -g serve

# Tell everyone we're serving on port 3000
EXPOSE 3000

# Serve the delicious cake!
CMD ["serve", "-s", "dist", "-l", "3000"]
#!/bin/bash

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the site
echo "Building the site..."
npm run generate

# Success message
echo "Build completed successfully!"
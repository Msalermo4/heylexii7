#!/bin/bash

# HeyLEXII Deployment Script
echo "🚀 Starting HeyLEXII deployment..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🏗️ Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

# Deploy to Vercel
echo "🌐 Deploying to Vercel..."
if command -v vercel &> /dev/null; then
    vercel --prod
else
    echo "⚠️ Vercel CLI not found. Installing..."
    npm install -g vercel
    vercel --prod
fi

echo "✅ Deployment complete!"
echo "🌐 Your site should be live at: https://heylexii.com"
echo "📱 Test the mobile version and search functionality"
echo "🔄 DNS propagation may take 24-48 hours for custom domain"

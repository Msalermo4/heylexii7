#!/bin/bash

echo "🚀 Deploying HeyLEXII to heylexii.com..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Login to Vercel (if not already logged in)
echo "🔐 Logging into Vercel..."
vercel login

# Deploy to production
echo "🌐 Deploying to production..."
vercel --prod

# Add custom domain
echo "🔗 Connecting heylexii.com domain..."
vercel domains add heylexii.com

# Verify deployment
echo "✅ Deployment complete!"
echo "🌐 Visit: https://heylexii.com"
echo "📧 Admin: alvardito92@gmail.com"
echo "📱 Phone: 787-406-0601"

echo "🎉 HeyLEXII is now live!"

#!/bin/bash

echo "🚀 Deploying HeyLEXII to heylexii.com..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Make sure you're in the project directory."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npm run build

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Login to Vercel (if not already logged in)
echo "🔐 Please login to Vercel if prompted..."
vercel login

# Deploy to production
echo "🌐 Deploying to production..."
vercel --prod

echo "✅ Deployment complete!"
echo "🌐 Your HeyLEXII platform should now be live at: https://heylexii.com"
echo "📧 Admin email: alvardito92@gmail.com"
echo "📱 Phone: 787-406-0601"
echo ""
echo "🎉 HeyLEXII is now live with:"
echo "   ✅ Professional design"
echo "   ✅ 4 featured lawyers"
echo "   ✅ Search functionality"
echo "   ✅ Mobile responsive"
echo "   ✅ SEO optimized"
echo ""
echo "Next steps:"
echo "1. Visit https://heylexii.com to see your new platform"
echo "2. Test all features on mobile and desktop"
echo "3. Add more lawyers to the database"
echo "4. Set up payment processing for premium features"

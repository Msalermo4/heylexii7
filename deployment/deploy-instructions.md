# HeyLEXII Deployment Instructions

## Current Status
- ✅ Domain: heylexii.com is live and connected
- ✅ SSL: Certificate is active
- ⚠️ Content: Still showing old landing page
- 🎯 Goal: Deploy new HeyLEXII platform

## Deployment Steps

### Option 1: Vercel CLI (Recommended)
\`\`\`bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy the project
vercel --prod

# 4. Connect to heylexii.com domain
vercel domains add heylexii.com
\`\`\`

### Option 2: GitHub + Vercel Integration
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Set custom domain to heylexii.com
4. Deploy automatically

### Option 3: Direct Upload
1. Download the complete project files
2. Upload to Vercel dashboard
3. Configure domain settings
4. Deploy to production

## Environment Variables Needed
\`\`\`env
NEXT_PUBLIC_APP_NAME=HeyLEXII
NEXT_PUBLIC_DOMAIN=heylexii.com
NEXT_PUBLIC_OWNER_EMAIL=alvardito92@gmail.com
NEXT_PUBLIC_OWNER_PHONE=787-406-0601
\`\`\`

## Post-Deployment Checklist
- [ ] Verify heylexii.com shows new design
- [ ] Test mobile responsiveness
- [ ] Check PWA installation
- [ ] Verify all pages load correctly
- [ ] Test language toggle (ES/EN)
- [ ] Confirm admin dashboard access

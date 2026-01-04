# 🚀 Vercel Deployment Guide

**Status**: Ready to Deploy  
**Date**: January 5, 2026  

## What You Need

1. **GitHub Account** - Your code must be on GitHub
2. **Vercel Account** - Free at vercel.com
3. **Vercel CLI** - Installed ✅ (Done!)

## Deployment Steps

### Option A: Deploy from CLI (Fastest)

```bash
cd /home/led/portfolio-website
vercel --prod
```

You'll be asked:
1. **Set up and deploy?** → Yes
2. **Link to existing project?** → No (first time)
3. **Project name?** → portfolio-website
4. **Directory?** → ./
5. **Override settings?** → No

### Option B: Deploy from GitHub (Recommended - Auto-deploys)

1. Push code to GitHub
2. Go to vercel.com
3. Click "New Project"
4. Import your GitHub repository
5. Click Deploy
6. Done!

## After Deployment

- Your site gets a unique URL: `portfolio-website-*.vercel.app`
- Auto-deploys when you push to GitHub
- Add custom domain anytime (Settings → Domains)

## Environment Variables (If Needed)

In Vercel Dashboard:
1. Project Settings
2. Environment Variables
3. Add any `.env` variables

Current project needs:
- None (using FormSubmit.co for email)

## Monitoring

Dashboard shows:
- Deployment history
- Build logs
- Performance metrics
- Usage analytics

## Next Steps

1. Deploy with Vercel CLI or GitHub
2. Get your live URL
3. Configure custom domain (optional)
4. Test everything works
5. Celebrate! 🎉

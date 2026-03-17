# Vercel Terminal Deployment Guide

This guide provides the essential commands to manage this project on Vercel using only the terminal.

## 1. Prerequisites
Ensure you have the Vercel CLI installed and are logged in.
```bash
npm i -g vercel
vercel login
```

---

## 2. Linking & Configuring
If you are setting this up for the first time or in a new environment.

### Link to Vercel
```bash
vercel link
```

### Setup Environment Variables
Run these commands to inject the analytics IDs before building.
```bash
# Add GTM ID
echo GTM-5VWS8QJ8 | vercel env add VITE_GTM_ID production

# Add G-tag ID
echo G-H1H35FYRLL | vercel env add VITE_GTAG_ID production
```

---

## 3. Deployment Commands

### Production Deployment (Recommended)
This command triggers a forced production build to ensure all environment variables are correctly injected.
```bash
vercel --prod --force --yes
```

### Other Useful Commands
| Command | Description |
| :--- | :--- |
| `vercel list` | List all recent deployments |
| `vercel env ls` | List current environment variables |
| `vercel logs <url>` | View live server logs |

---

> [!NOTE]
> All frontend analytics variables must start with `VITE_` to be detected by the Vite build process.

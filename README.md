# Glow Beauty Salon

Modern, responsive salon landing page built with React and Vite, styled using Tailwind CSS. Optimized for static deployment on Vercel with essential SEO meta tags and Google Tag Manager placeholders (no tracking code included).

## Features
- Clean React component structure with sections: Navbar, Hero, Services, Gallery, Pricing, Contact, Footer
- Tailwind-based responsive design and mobile-friendly navigation
- SEO meta tags (title, description, keywords, viewport) in `index.html`
- Explicit GTM placeholders in `index.html` for future analytics setup
- Fast static build output to `dist` for easy hosting and Vercel deployment

## Getting Started
1. Install dependencies:

   ```bash
   npm install
   ```

2. Build for production:

   ```bash
   npm run build
   ```

3. Preview local build:

   ```bash
   npm run preview
   ```

## Tech Stack
- React 18
- Vite
- Tailwind CSS
- PostCSS + Autoprefixer

## Deployment (Vercel)
- **Detailed Terminal Guide**: See [VERCEL_GUIDE.md](./VERCEL_GUIDE.md) for step-by-step terminal instructions.
- Import the repository into Vercel
- Build command: `npm run build`
- Output directory: `dist`
- Vercel will auto-detect the Vite setup and deploy

## Project Structure
- `index.html` — entry HTML with SEO tags and GTM placeholders
- `src/` — React app and components
- `tailwind.config.js` — Tailwind setup
- `postcss.config.js` — PostCSS plugins

## SEO & Analytics
- SEO tags added in `index.html`
- GTM placeholders:
  - Head: `<!-- Google Tag Manager Script will be added here during analytics setup -->`
  - Body: `<!-- Google Tag Manager noscript code will be inserted here -->`
- No tracking code is included

## License
MIT

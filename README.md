Growth Booster CRM - React Landing Page

Overview
- A modern, responsive landing page built with React + Vite.
- Sections: Navbar, Hero, Brands, Features, How it works, Metrics, Pricing, Testimonials, FAQ, CTA, Footer.

Local development
1) Install Node.js 18+.
2) Install dependencies:
   npm install
3) Start dev server:
   npm run dev
4) Open the local URL shown in the terminal.

Build for production
- npm run build
- npm run preview (to preview the built site)

Deploy
- Vercel: push to a repo and import; vercel.json is included for SPA routing.
- Netlify: use netlify.toml provided; set build command npm run build and publish dir dist.
- Static hosts (GitHub Pages): ensure single-page-app fallback; a 404.html redirect is included.

Customization
- Edit content in src/components/*
- Update colors/spacing in src/styles.css
- Change metadata in index.html

Notes
- This is an original implementation inspired by the referenced layout, not a copy.

# Artist Portfolio Template

A simple and reusable artist portfolio website template built with **Next.js** and **Tailwind CSS**. This project uses **DecapCMS** (Netlify CMS) for content management and can be deployed for free on **Vercel** or **Netlify**.

## Features

- Static site built with Next.js
- Tailwind CSS for styling
- DecapCMS for editing content (artworks, about page, SEO)
- Contact form using Netlify Forms or Formspree free tier
- SEO-friendly with customizable meta tags
- Ready to duplicate via GitHub template for multiple artists

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

## Deployment

### Deploy to Vercel

1. Push this repository to GitHub.
2. In Vercel, create a new project and import the repository.
3. Set any environment variables if needed (none by default).
4. Deploy!

### Deploy to Netlify

1. Push this repository to GitHub.
2. In Netlify, create a new site from Git.
3. Choose this repository and deploy with the default settings.
4. Netlify Forms will automatically capture submissions from the contact form.

## Configuring for Each Artist

- **Logo:** place a logo file in `public/images/logo.png`.
- **Colors & Fonts:** edit `tailwind.config.js` or add custom CSS in `src/styles/globals.css`.
- **Content:** log in to `/admin` (DecapCMS) and edit artworks, about page, and SEO settings.

## Duplicating the Template

1. Click **Use this template** on GitHub to create a new repository for an artist.
2. Update content via CMS or by editing the files in `content/`.
3. Deploy the new repository to Vercel or Netlify.

## Future Ecommerce

The project structure leaves room to integrate an e‑commerce solution such as Snipcart or the Shopify Buy SDK in the future. No e‑commerce functionality is currently implemented.

## License

MIT

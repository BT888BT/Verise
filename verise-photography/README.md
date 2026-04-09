# Verise Photography — Aerial Drone Services Website

A modern, high-performance website for Verise Photography built with Next.js 15, Supabase, and Tailwind CSS. Designed for deployment on Vercel.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Database**: Supabase (PostgreSQL)
- **Storage**: Supabase Storage (gallery media)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Language**: TypeScript

## Features

- Cinematic dark-theme design with teal accents and smooth animations
- Scroll-reveal animations throughout
- Contact/enquiry form saving to Supabase
- Portfolio/gallery section (loads from Supabase)
- Testimonials section
- Services breakdown with feature tags
- Process/how-it-works section
- Showreel video section (YouTube/Vimeo embed ready)
- Footer with social media links
- SEO: sitemap, robots.txt, OpenGraph meta, LocalBusiness-ready
- Privacy Policy & Terms of Service pages
- Mobile responsive with hamburger nav
- CASA certification badges

## Setup

### 1. Clone & Install

```bash
git clone https://github.com/YOUR_USERNAME/verise-photography.git
cd verise-photography
npm install
```

### 2. Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** in your Supabase dashboard
3. Paste the contents of `supabase/setup.sql` and run it
4. Go to **Settings > API** and copy your:
   - Project URL
   - `anon` public key

### 3. Environment Variables

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 4. Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 5. Deploy to Vercel

1. Push to GitHub
2. Import the repo in [Vercel](https://vercel.com)
3. Add the same env vars in Vercel project settings
4. Deploy

## Adding Content

### Gallery Items

Upload images/videos to the `gallery` bucket in Supabase Storage, then add entries to the `gallery` table:

```sql
INSERT INTO gallery (title, description, media_url, media_type, service_category, featured)
VALUES (
  'Coastal Property Fly-Through',
  'Cinematic fly-through of luxury home in Cottesloe',
  'https://your-project.supabase.co/storage/v1/object/public/gallery/coastal-flythrough.mp4',
  'video',
  'fly-through',
  true
);
```

### Testimonials

Add entries to the `testimonials` table via Supabase dashboard or SQL.

### Site Settings

Update contact info, social links, etc. in the `site_settings` table.

### Showreel Video

Replace the placeholder in `components/Showreel.tsx` with your YouTube/Vimeo embed URL.

## Customisation

- **Colors**: Edit `tailwind.config.js` — `brand` (teal) and `midnight` (dark blue) palettes
- **Fonts**: Currently using Outfit — change in `app/globals.css`
- **Logo**: SVG logo in `Navigation.tsx` and `Footer.tsx`
- **Contact details**: Update in `Contact.tsx`, `Footer.tsx`, and `site_settings` table
- **Social links**: Update `href` values in `Footer.tsx` and `site_settings` table

## Project Structure

```
├── app/
│   ├── api/contact/route.ts    # Server-side contact endpoint
│   ├── privacy/page.tsx        # Privacy policy
│   ├── terms/page.tsx          # Terms of service
│   ├── globals.css             # Global styles & animations
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Home page
│   ├── sitemap.ts              # Dynamic sitemap
│   └── robots.ts               # Robots.txt
├── components/
│   ├── Navigation.tsx          # Fixed header with mobile menu
│   ├── Hero.tsx                # Hero section with stats
│   ├── Services.tsx            # 5 service cards
│   ├── Showreel.tsx            # Video embed section
│   ├── Portfolio.tsx           # Filterable gallery grid
│   ├── About.tsx               # About with credentials
│   ├── Process.tsx             # 4-step process
│   ├── Testimonials.tsx        # Client testimonials
│   ├── CTABanner.tsx           # Call-to-action banner
│   ├── Contact.tsx             # Enquiry form
│   └── Footer.tsx              # Footer with socials
├── lib/
│   ├── supabase.ts             # Supabase client + types
│   └── useScrollReveal.ts      # Intersection Observer hook
├── supabase/
│   └── setup.sql               # Full database setup SQL
└── public/                     # Static assets
```

## License

© Verise Photography. All rights reserved.

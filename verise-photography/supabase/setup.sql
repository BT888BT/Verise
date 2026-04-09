-- ============================================================
-- VERISE PHOTOGRAPHY — Supabase Database Setup
-- ============================================================
-- Run this SQL in your Supabase SQL Editor (Dashboard > SQL Editor)
-- This creates all tables, enables RLS, and sets up storage.
-- ============================================================

-- ===================
-- 1. ENQUIRIES TABLE
-- ===================
-- Stores all contact form submissions from the website

CREATE TABLE IF NOT EXISTS public.enquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  service_type TEXT NOT NULL,
  project_location TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'quoted', 'completed', 'archived'))
);

-- Enable RLS
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

-- Allow anyone to INSERT (public contact form)
CREATE POLICY "Anyone can submit enquiry"
  ON public.enquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated users (you, the admin) can read enquiries
CREATE POLICY "Authenticated users can read enquiries"
  ON public.enquiries
  FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated users can update enquiry status
CREATE POLICY "Authenticated users can update enquiries"
  ON public.enquiries
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);


-- ===================
-- 2. GALLERY TABLE
-- ===================
-- Stores portfolio items (photos and videos) displayed on the website

CREATE TABLE IF NOT EXISTS public.gallery (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  media_url TEXT NOT NULL,
  thumbnail_url TEXT,
  media_type TEXT DEFAULT 'image' CHECK (media_type IN ('image', 'video')),
  service_category TEXT NOT NULL CHECK (service_category IN (
    'fly-through',
    'inspection',
    'building-update',
    'aerial-photography',
    'survey-stitching'
  )),
  featured BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  alt_text TEXT
);

-- Enable RLS
ALTER TABLE public.gallery ENABLE ROW LEVEL SECURITY;

-- Anyone can view gallery items (public portfolio)
CREATE POLICY "Anyone can view gallery"
  ON public.gallery
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Only authenticated users can manage gallery
CREATE POLICY "Authenticated users can insert gallery"
  ON public.gallery
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update gallery"
  ON public.gallery
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete gallery"
  ON public.gallery
  FOR DELETE
  TO authenticated
  USING (true);


-- ===================
-- 3. TESTIMONIALS TABLE
-- ===================
-- Stores client testimonials displayed on the website

CREATE TABLE IF NOT EXISTS public.testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  client_name TEXT NOT NULL,
  company TEXT,
  content TEXT NOT NULL,
  rating INTEGER DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  service_type TEXT,
  featured BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0
);

-- Enable RLS
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- Anyone can view testimonials (public display)
CREATE POLICY "Anyone can view testimonials"
  ON public.testimonials
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Only authenticated users can manage testimonials
CREATE POLICY "Authenticated users can insert testimonials"
  ON public.testimonials
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update testimonials"
  ON public.testimonials
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete testimonials"
  ON public.testimonials
  FOR DELETE
  TO authenticated
  USING (true);


-- ===================
-- 4. SITE SETTINGS TABLE
-- ===================
-- Key-value store for site-wide settings (phone, email, social links, etc.)

CREATE TABLE IF NOT EXISTS public.site_settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Anyone can read settings (displayed on site)
CREATE POLICY "Anyone can read settings"
  ON public.site_settings
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Only authenticated users can update settings
CREATE POLICY "Authenticated users can manage settings"
  ON public.site_settings
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Insert default settings
INSERT INTO public.site_settings (key, value) VALUES
  ('phone', '0400 000 000'),
  ('email', 'hello@verisephotography.com.au'),
  ('instagram', 'https://www.instagram.com/verisephotography'),
  ('facebook', 'https://www.facebook.com/verisephotography'),
  ('youtube', 'https://www.youtube.com/@verisephotography'),
  ('linkedin', 'https://www.linkedin.com/company/verise-photography'),
  ('tiktok', 'https://www.tiktok.com/@verisephotography'),
  ('showreel_url', ''),
  ('tagline', 'Professional Aerial Drone Photography & Videography')
ON CONFLICT (key) DO NOTHING;


-- ===================
-- 5. STORAGE BUCKETS
-- ===================
-- Create storage buckets for media uploads

-- Gallery media (images and videos)
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'gallery',
  'gallery',
  true,
  52428800, -- 50MB limit
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'video/mp4', 'video/quicktime']
)
ON CONFLICT (id) DO NOTHING;

-- Allow public read access to gallery files
CREATE POLICY "Public read access for gallery"
  ON storage.objects
  FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'gallery');

-- Allow authenticated users to upload to gallery
CREATE POLICY "Authenticated upload to gallery"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'gallery');

-- Allow authenticated users to delete from gallery
CREATE POLICY "Authenticated delete from gallery"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'gallery');


-- ===================
-- 6. INDEXES
-- ===================

CREATE INDEX IF NOT EXISTS idx_enquiries_status ON public.enquiries (status);
CREATE INDEX IF NOT EXISTS idx_enquiries_created ON public.enquiries (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_gallery_category ON public.gallery (service_category);
CREATE INDEX IF NOT EXISTS idx_gallery_featured ON public.gallery (featured) WHERE featured = true;
CREATE INDEX IF NOT EXISTS idx_gallery_sort ON public.gallery (sort_order);
CREATE INDEX IF NOT EXISTS idx_testimonials_featured ON public.testimonials (featured) WHERE featured = true;


-- ===================
-- 7. SAMPLE DATA (OPTIONAL)
-- ===================
-- Uncomment and run if you want placeholder content while building

/*
INSERT INTO public.testimonials (client_name, company, content, rating, service_type, featured) VALUES
  ('Sarah Mitchell', 'Mitchell Property Group', 'The fly-through videos Verise produced for our listings have completely changed how we market properties. Buyers are making offers before even visiting in person.', 5, 'House Fly-Throughs', true),
  ('David Chen', 'Apex Construction', 'We use Verise for monthly construction progress documentation. The consistency and quality of their aerial footage makes stakeholder reporting effortless.', 5, 'Building Updates', true),
  ('Mark Thompson', 'WA Structural Engineers', 'Their inspection footage is incredibly detailed and stable. Saved us countless hours on scaffolding and improved our assessment accuracy significantly.', 5, 'Inspections', true);
*/


-- ============================================================
-- DONE! Your database is ready.
-- 
-- Next steps:
-- 1. Copy your Supabase URL and anon key from Settings > API
-- 2. Add them to your .env.local file
-- 3. Deploy to Vercel and add the env vars there too
-- ============================================================

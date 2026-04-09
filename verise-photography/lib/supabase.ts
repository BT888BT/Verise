import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Enquiry = {
  id?: string;
  created_at?: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service_type: string;
  project_location?: string;
  message: string;
  status?: 'new' | 'contacted' | 'quoted' | 'completed';
};

export type GalleryItem = {
  id: string;
  created_at: string;
  title: string;
  description?: string;
  media_url: string;
  thumbnail_url?: string;
  media_type: 'image' | 'video';
  service_category: string;
  featured: boolean;
  sort_order: number;
};

export type Testimonial = {
  id: string;
  created_at: string;
  client_name: string;
  company?: string;
  content: string;
  rating: number;
  service_type: string;
  featured: boolean;
};

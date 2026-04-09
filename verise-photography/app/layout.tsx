import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Verise Photography | Aerial Drone Photography & Videography',
  description: 'Professional aerial drone photography, fly-throughs, stable inspection videos, building progress documentation, and aerial survey stitching. Capturing perspectives that ground-level photography simply cannot.',
  keywords: 'drone photography, aerial photography, fly-through video, building inspection, aerial survey, drone videography, construction progress, property photography, Perth drone, aerial stitching',
  openGraph: {
    title: 'Verise Photography | Aerial Drone Photography & Videography',
    description: 'Professional aerial drone photography, fly-throughs, stable inspection videos, building progress documentation, and aerial survey stitching.',
    type: 'website',
    locale: 'en_AU',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}

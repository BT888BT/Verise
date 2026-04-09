'use client';

import { useScrollReveal } from '@/lib/useScrollReveal';

export default function Showreel() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-24 md:py-32" ref={ref}>
      <div className="section-divider mb-24" />

      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-12 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-brand-400 text-sm font-semibold tracking-[0.2em] uppercase">Showreel</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
            See Our Work in Motion
          </h2>
          <p className="text-midnight-300 text-lg max-w-xl mx-auto">
            A highlight reel of our cinematic aerial captures across Perth and Western Australia.
          </p>
        </div>

        <div
          className={`relative transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="video-placeholder aspect-video rounded-2xl flex flex-col items-center justify-center">
            {/* Play button */}
            <button className="relative group" aria-label="Play showreel">
              <div className="w-24 h-24 rounded-full bg-brand-500/10 border-2 border-brand-500/30 flex items-center justify-center group-hover:border-brand-400 group-hover:bg-brand-500/20 transition-all duration-300">
                <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 ml-1">
                  <path d="M5 3L19 12L5 21V3Z" fill="#14b88a" />
                </svg>
              </div>
              <div className="absolute inset-0 rounded-full animate-ping bg-brand-500/10" style={{ animationDuration: '2s' }} />
            </button>
            <p className="text-midnight-500 text-sm mt-6">
              Embed your YouTube/Vimeo showreel or upload to Supabase Storage
            </p>
          </div>

          {/* Video embed note - replace the placeholder above with an iframe when ready */}
          {/* Example:
          <iframe
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            className="w-full aspect-video rounded-2xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          */}
        </div>
      </div>
    </section>
  );
}

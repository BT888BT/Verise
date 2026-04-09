'use client';

import { useScrollReveal } from '@/lib/useScrollReveal';

export default function Showreel() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-28 md:py-36" ref={ref}>
      <div className="section-divider mb-28" />

      <div className="max-w-5xl mx-auto px-6">
        <div className={`text-center mb-14 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-brand-500/40" />
            <span className="text-brand-400 text-[10px] font-medium tracking-[0.35em] uppercase">Showreel</span>
            <div className="h-px w-10 bg-brand-500/40" />
          </div>
          <h2 className="font-display font-light text-4xl md:text-5xl text-white mb-4" style={{ lineHeight: 1.1 }}>
            See Our Work in Motion
          </h2>
          <p className="text-brand-500 text-base max-w-md mx-auto font-light">
            A highlight reel of cinematic aerial captures across Perth and Western Australia.
          </p>
        </div>

        <div
          className={`relative transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="video-placeholder aspect-video rounded-sm flex flex-col items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #191c26, #0d0e12)',
              border: '1px solid rgba(98,125,150,0.14)',
            }}>
            {/* Play button */}
            <button className="relative group" aria-label="Play showreel">
              <div className="w-20 h-20 rounded-full border border-brand-500/25 flex items-center justify-center group-hover:border-brand-400/50 transition-all duration-400"
                style={{ background: 'rgba(98,125,150,0.07)' }}>
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 ml-1">
                  <path d="M5 3L19 12L5 21V3Z" fill="#8099b0" />
                </svg>
              </div>
              <div className="absolute inset-0 rounded-full animate-ping opacity-20"
                style={{ background: '#8099b0', animationDuration: '3s' }} />
            </button>
            <p className="text-brand-700 text-xs mt-8 tracking-wide font-light">
              Embed your YouTube / Vimeo showreel or upload to Supabase Storage
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

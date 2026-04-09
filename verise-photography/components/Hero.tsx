'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh-hero" />

      {/* Fine grid */}
      <div className="absolute inset-0 opacity-[0.025]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#a8bac8" strokeWidth="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Subtle floating circles */}
      <div className="absolute top-1/4 left-[8%] w-40 h-40 border border-brand-500/8 rounded-full animate-float" />
      <div className="absolute bottom-1/3 right-[12%] w-24 h-24 border border-brand-500/8 rounded-full animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-[55%] left-[18%] w-2 h-2 bg-brand-400/25 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-[28%] right-[22%] w-1.5 h-1.5 bg-brand-300/30 rounded-full animate-float" style={{ animationDelay: '4s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Eyebrow */}
        <div className={`transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="inline-flex items-center gap-3 mb-12">
            <div className="h-px w-12 bg-brand-400/40" />
            <span className="text-brand-400 text-[10px] font-medium tracking-[0.35em] uppercase">
              Professional Aerial Services
            </span>
            <div className="h-px w-12 bg-brand-400/40" />
          </div>
        </div>

        {/* Heading */}
        <h1
          className={`font-display font-light tracking-tight mb-8 transition-all duration-1000 delay-200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ lineHeight: 1.08 }}
        >
          <span className="block text-[clamp(3rem,8vw,6.5rem)] text-white">
            Perspectives
          </span>
          <span className="block text-[clamp(3rem,8vw,6.5rem)]">
            <span className="text-white italic font-light">From </span>
            <span className="text-brand-300 font-light italic">Above</span>
          </span>
        </h1>

        <p
          className={`max-w-xl mx-auto text-base md:text-lg text-brand-400 leading-relaxed mb-12 font-light transition-all duration-1000 delay-400 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Cinematic drone fly-throughs, precision inspection footage, aerial surveys,
          and stunning photography — capturing what ground-level simply cannot.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a href="#contact" className="btn-primary text-xs tracking-widest uppercase">
            <span>Start Your Project</span>
          </a>
          <a href="#portfolio" className="btn-outline text-xs tracking-widest uppercase">
            View Our Work
          </a>
        </div>

        {/* Stats */}
        <div
          className={`mt-24 grid grid-cols-2 md:grid-cols-4 gap-10 max-w-2xl mx-auto transition-all duration-1000 delay-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {[
            { number: '500+', label: 'Projects' },
            { number: '4K', label: 'Ultra HD' },
            { number: 'CASA', label: 'Certified' },
            { number: '48hr', label: 'Turnaround' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="stat-number text-3xl md:text-4xl mb-1">{stat.number}</div>
              <div className="text-brand-500 text-[10px] tracking-[0.25em] uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-stone-950 to-transparent" />

      {/* Scroll indicator */}
      <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-1000 delay-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <span className="text-brand-600 text-[9px] tracking-[0.4em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-brand-500/40 to-transparent" />
      </div>
    </section>
  );
}

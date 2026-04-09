'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 gradient-mesh-hero" />

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating geometric elements */}
      <div className="absolute top-1/4 left-[10%] w-32 h-32 border border-brand-500/10 rounded-full animate-float" />
      <div className="absolute bottom-1/3 right-[15%] w-20 h-20 border border-brand-500/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[60%] left-[20%] w-3 h-3 bg-brand-500/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[30%] right-[25%] w-2 h-2 bg-brand-400/30 rounded-full animate-float" style={{ animationDelay: '3s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-500/20 bg-brand-500/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
            <span className="text-brand-400 text-sm font-medium tracking-wide">Professional Aerial Services</span>
          </div>
        </div>

        <h1
          className={`font-display font-bold tracking-tight mb-6 transition-all duration-1000 delay-200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white">
            Perspectives
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="text-white">From </span>
            <span className="bg-gradient-to-r from-brand-400 to-brand-300 bg-clip-text text-transparent">Above</span>
          </span>
        </h1>

        <p
          className={`max-w-2xl mx-auto text-lg md:text-xl text-midnight-300 leading-relaxed mb-10 transition-all duration-1000 delay-400 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Cinematic drone fly-throughs, precision inspection footage, aerial surveys,
          and stunning photography — capturing what ground-level simply cannot.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a href="#contact" className="btn-primary text-lg">
            <span>Start Your Project</span>
          </a>
          <a href="#portfolio" className="btn-outline text-lg">
            View Our Work
          </a>
        </div>

        {/* Stats bar */}
        <div
          className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto transition-all duration-1000 delay-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { number: '500+', label: 'Projects Delivered' },
            { number: '4K', label: 'Ultra HD Quality' },
            { number: 'CASA', label: 'Certified Pilots' },
            { number: '48hr', label: 'Fast Turnaround' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="stat-number text-2xl md:text-3xl font-bold">{stat.number}</div>
              <div className="text-midnight-400 text-xs md:text-sm mt-1 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-midnight-950 to-transparent" />

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <span className="text-midnight-500 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-brand-500/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

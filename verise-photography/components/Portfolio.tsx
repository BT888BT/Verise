'use client';

import { useState } from 'react';
import { useScrollReveal } from '@/lib/useScrollReveal';

const categories = ['All', 'Fly-Throughs', 'Inspections', 'Aerials', 'Surveys'];

const placeholderItems = [
  {
    id: '1',
    title: 'Coastal Property Fly-Through',
    category: 'Fly-Throughs',
    description: 'Full cinematic fly-through of luxury coastal residence',
    aspect: 'row-span-2',
  },
  {
    id: '2',
    title: 'Commercial Roof Inspection',
    category: 'Inspections',
    description: 'Detailed inspection of 3,000sqm warehouse roof',
    aspect: '',
  },
  {
    id: '3',
    title: 'Sunset Aerial — Swan River',
    category: 'Aerials',
    description: 'Golden hour aerial photography over Perth',
    aspect: '',
  },
  {
    id: '4',
    title: 'Farm Survey — 200 Hectares',
    category: 'Surveys',
    description: 'Orthomosaic stitching for agricultural survey',
    aspect: '',
  },
  {
    id: '5',
    title: 'Construction Progress — Month 6',
    category: 'Fly-Throughs',
    description: 'Monthly fly-around documenting apartment build',
    aspect: 'col-span-2',
  },
  {
    id: '6',
    title: 'Heritage Building Inspection',
    category: 'Inspections',
    description: 'Close-range inspection of heritage stone facade',
    aspect: '',
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { ref, isVisible } = useScrollReveal();

  const filtered =
    activeCategory === 'All' ? placeholderItems : placeholderItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-28 md:py-36">
      <div className="section-divider mb-28" />
      <div className="max-w-7xl mx-auto px-6" ref={ref}>

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-brand-500/40" />
            <span className="text-brand-400 text-[10px] font-medium tracking-[0.35em] uppercase">Portfolio</span>
            <div className="h-px w-10 bg-brand-500/40" />
          </div>
          <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-white mb-6" style={{ lineHeight: 1.1 }}>
            Our Work
          </h2>
          <p className="max-w-xl mx-auto text-brand-500 text-base font-light">
            A selection of recent projects showcasing our aerial capabilities.
          </p>
        </div>

        {/* Category filters */}
        <div className={`flex flex-wrap justify-center gap-2.5 mb-14 transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-sm text-[11px] font-medium tracking-widest uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-brand-400 text-stone-950'
                  : 'text-brand-500 hover:text-brand-300 border border-stone-700/30 hover:border-brand-500/35'
              }`}
              style={activeCategory !== cat ? { background: 'rgba(25,28,38,0.5)' } : {}}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className={`gallery-item group cursor-pointer ${item.aspect} transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100 + 300}ms` }}
            >
              <div
                className={`relative w-full ${item.aspect?.includes('row-span') ? 'h-[420px]' : 'h-[280px]'} rounded-sm flex flex-col items-center justify-center overflow-hidden border border-stone-700/25`}
                style={{ background: 'linear-gradient(135deg, #191c26, #0d0e12)' }}
              >
                {/* Fine grid */}
                <div className="absolute inset-0 opacity-[0.03]">
                  <svg width="100%" height="100%">
                    <defs>
                      <pattern id={`pgrid-${item.id}`} width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#a8bac8" strokeWidth="0.4" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#pgrid-${item.id})`} />
                  </svg>
                </div>

                {/* Drone icon placeholder */}
                <svg viewBox="0 0 56 24" fill="none" className="w-12 h-5 mb-4 relative z-10 opacity-20">
                  <line x1="4" y1="12" x2="20" y2="12" stroke="#a8bac8" strokeWidth="1.2" strokeLinecap="round" />
                  <line x1="4" y1="12" x2="4" y2="7" stroke="#a8bac8" strokeWidth="1.2" strokeLinecap="round" />
                  <line x1="52" y1="12" x2="36" y2="12" stroke="#a8bac8" strokeWidth="1.2" strokeLinecap="round" />
                  <line x1="52" y1="12" x2="52" y2="7" stroke="#a8bac8" strokeWidth="1.2" strokeLinecap="round" />
                  <rect x="20" y="8" width="16" height="8" rx="4" stroke="#a8bac8" strokeWidth="1.2" fill="none" />
                  <circle cx="28" cy="12" r="2" fill="#a8bac8" />
                </svg>
                <span className="text-brand-700 text-xs relative z-10 px-3 py-1 rounded-sm border border-stone-700/25 tracking-widest uppercase"
                  style={{ background: 'rgba(13,14,18,0.6)' }}>
                  Upload media
                </span>

                {/* Hover overlay */}
                <div className="overlay flex flex-col justify-end p-6">
                  <span className="text-brand-400 text-[9px] font-medium tracking-[0.3em] uppercase mb-1.5">
                    {item.category}
                  </span>
                  <h3 className="text-white font-body font-semibold text-base mb-1">{item.title}</h3>
                  <p className="text-brand-400 text-sm font-light">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className={`mt-10 text-center transition-all duration-800 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-brand-700 text-xs font-light tracking-wide">
            Gallery items load from your Supabase database — add images and videos through the admin panel.
          </p>
        </div>
      </div>
    </section>
  );
}

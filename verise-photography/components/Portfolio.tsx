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
    gradient: 'from-brand-600/30 to-midnight-800',
    icon: '🏠',
    aspect: 'row-span-2',
  },
  {
    id: '2',
    title: 'Commercial Roof Inspection',
    category: 'Inspections',
    description: 'Detailed inspection of 3,000sqm warehouse roof',
    gradient: 'from-midnight-700 to-brand-900/40',
    icon: '🔍',
    aspect: '',
  },
  {
    id: '3',
    title: 'Sunset Aerial — Swan River',
    category: 'Aerials',
    description: 'Golden hour aerial photography over Perth',
    gradient: 'from-amber-900/30 to-midnight-800',
    icon: '📸',
    aspect: '',
  },
  {
    id: '4',
    title: 'Farm Survey — 200 Hectares',
    category: 'Surveys',
    description: 'Orthomosaic stitching for agricultural survey',
    gradient: 'from-green-900/30 to-midnight-800',
    icon: '🗺️',
    aspect: '',
  },
  {
    id: '5',
    title: 'Construction Progress — Month 6',
    category: 'Fly-Throughs',
    description: 'Monthly fly-around documenting apartment build',
    gradient: 'from-slate-700/50 to-midnight-800',
    icon: '🏗️',
    aspect: 'col-span-2',
  },
  {
    id: '6',
    title: 'Heritage Building Inspection',
    category: 'Inspections',
    description: 'Close-range inspection of heritage stone facade',
    gradient: 'from-midnight-600 to-brand-950/30',
    icon: '🏛️',
    aspect: '',
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { ref, isVisible } = useScrollReveal();

  const filtered =
    activeCategory === 'All' ? placeholderItems : placeholderItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-brand-400 text-sm font-semibold tracking-[0.2em] uppercase">Portfolio</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
            Our Work
          </h2>
          <p className="max-w-2xl mx-auto text-midnight-300 text-lg">
            A selection of recent projects showcasing our aerial capabilities.
          </p>
        </div>

        {/* Category filters */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-brand-500 text-midnight-950'
                  : 'bg-midnight-900/50 text-midnight-300 hover:bg-midnight-800/50 hover:text-white border border-midnight-700/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className={`gallery-item group cursor-pointer ${item.aspect} transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100 + 300}ms` }}
            >
              {/* Placeholder visual */}
              <div
                className={`relative w-full ${item.aspect?.includes('row-span') ? 'h-[420px]' : 'h-[280px]'} rounded-2xl bg-gradient-to-br ${item.gradient} flex flex-col items-center justify-center overflow-hidden border border-midnight-700/30`}
              >
                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-5">
                  <svg width="100%" height="100%">
                    <defs>
                      <pattern id={`pgrid-${item.id}`} width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#pgrid-${item.id})`} />
                  </svg>
                </div>

                <span className="text-5xl mb-3 relative z-10">{item.icon}</span>
                <span className="text-midnight-400 text-sm relative z-10 px-4 py-1 rounded-full bg-midnight-900/50 border border-midnight-700/30">
                  Upload media to Supabase
                </span>

                {/* Hover overlay */}
                <div className="overlay flex flex-col justify-end p-6">
                  <span className="text-brand-400 text-xs font-semibold tracking-wider uppercase mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-white font-display font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-midnight-300 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note about Supabase */}
        <div className={`mt-12 text-center transition-all duration-800 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-midnight-500 text-sm">
            Gallery items are loaded from your Supabase database. Add images and videos through the admin panel or directly in Supabase.
          </p>
        </div>
      </div>
    </section>
  );
}

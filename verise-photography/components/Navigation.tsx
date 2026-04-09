'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#about', label: 'About' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-stone-950/92 backdrop-blur-xl border-b border-stone-800/40 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-4 group">
          {/* Drone mark — mirrors the logo silhouette */}
          <div className="relative w-9 h-6 flex items-center justify-center opacity-75 group-hover:opacity-100 transition-opacity duration-300">
            <svg viewBox="0 0 56 24" fill="none" className="w-full h-full">
              {/* Left arm */}
              <line x1="4" y1="12" x2="20" y2="12" stroke="#a8bac8" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="4" y1="12" x2="4" y2="7" stroke="#a8bac8" strokeWidth="1.2" strokeLinecap="round" />
              {/* Right arm */}
              <line x1="52" y1="12" x2="36" y2="12" stroke="#a8bac8" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="52" y1="12" x2="52" y2="7" stroke="#a8bac8" strokeWidth="1.2" strokeLinecap="round" />
              {/* Body */}
              <rect x="20" y="8" width="16" height="8" rx="4" stroke="#a8bac8" strokeWidth="1.2" fill="none" />
              {/* Lens dot */}
              <circle cx="28" cy="12" r="2" fill="#a8bac8" />
            </svg>
          </div>
          <div>
            <span className="text-[15px] font-bold tracking-[0.18em] text-white font-body">
              VERISE
            </span>
            <span className="block text-[9px] tracking-[0.35em] text-brand-400 uppercase font-medium -mt-0.5">
              Photography
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-sm !px-6 !py-2.5 tracking-widest uppercase text-xs">
            <span>Get a Quote</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-px bg-brand-300 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`w-5 h-px bg-brand-300 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-px bg-brand-300 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-stone-950/97 backdrop-blur-xl border-b border-stone-800/40 transition-all duration-500 ${
          mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3 pointer-events-none'
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-brand-300 hover:text-white transition-colors tracking-widest uppercase text-xs font-medium"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-primary text-center text-sm mt-2">
            <span>Get a Quote</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

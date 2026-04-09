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
          ? 'bg-midnight-950/90 backdrop-blur-xl border-b border-midnight-800/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
              <path
                d="M20 4L36 12V28L20 36L4 28V12L20 4Z"
                stroke="#14b88a"
                strokeWidth="1.5"
                fill="none"
                className="transition-all duration-500 group-hover:stroke-[#2dd4a3]"
              />
              <path
                d="M20 8L32 14V26L20 32L8 26V14L20 8Z"
                fill="rgba(20,184,138,0.1)"
                className="transition-all duration-500 group-hover:fill-[rgba(20,184,138,0.2)]"
              />
              <circle cx="20" cy="20" r="4" fill="#14b88a" className="transition-all duration-500 group-hover:fill-[#2dd4a3]" />
              <line x1="20" y1="16" x2="20" y2="8" stroke="#14b88a" strokeWidth="1" opacity="0.5" />
              <line x1="23.46" y1="18" x2="30" y2="14" stroke="#14b88a" strokeWidth="1" opacity="0.5" />
              <line x1="23.46" y1="22" x2="30" y2="26" stroke="#14b88a" strokeWidth="1" opacity="0.5" />
              <line x1="20" y1="24" x2="20" y2="32" stroke="#14b88a" strokeWidth="1" opacity="0.5" />
              <line x1="16.54" y1="22" x2="10" y2="26" stroke="#14b88a" strokeWidth="1" opacity="0.5" />
              <line x1="16.54" y1="18" x2="10" y2="14" stroke="#14b88a" strokeWidth="1" opacity="0.5" />
            </svg>
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-white font-display">
              VERISE
            </span>
            <span className="block text-[10px] tracking-[0.3em] text-brand-400 uppercase font-medium -mt-1">
              Photography
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link text-sm font-medium tracking-wide">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-sm !px-6 !py-3">
            <span>Get a Quote</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-midnight-950/95 backdrop-blur-xl border-b border-midnight-800/50 transition-all duration-500 ${
          mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-midnight-300 hover:text-white transition-colors text-lg font-medium"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-primary text-center mt-2">
            <span>Get a Quote</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

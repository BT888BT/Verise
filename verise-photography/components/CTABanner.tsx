'use client';

import { useScrollReveal } from '@/lib/useScrollReveal';

export default function CTABanner() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-20" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <div
          className={`relative overflow-hidden rounded-sm p-14 md:p-20 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            background: 'linear-gradient(135deg, rgba(25,28,38,0.95), rgba(13,14,18,0.98))',
            border: '1px solid rgba(98,125,150,0.15)',
          }}
        >
          {/* Fine grid */}
          <div className="absolute inset-0 opacity-[0.03]">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="cta-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#a8bac8" strokeWidth="0.4" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-grid)" />
            </svg>
          </div>

          {/* Subtle glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-24 opacity-10 blur-[80px] rounded-full"
            style={{ background: '#8099b0' }} />

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-brand-500/35" />
              <span className="text-brand-400 text-[10px] tracking-[0.35em] uppercase font-medium">Get Started</span>
              <div className="h-px w-12 bg-brand-500/35" />
            </div>
            <h2 className="font-display font-light text-3xl md:text-4xl lg:text-5xl text-white mb-5" style={{ lineHeight: 1.1 }}>
              Ready to Elevate Your Project?
            </h2>
            <p className="text-brand-500 text-base max-w-md mx-auto mb-10 font-light leading-relaxed">
              Get a free quote for your next aerial photography or videography project —
              no obligation, fast response.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" className="btn-primary text-xs tracking-widest uppercase">
                <span>Request a Free Quote</span>
              </a>
              <a href="tel:0400000000" className="btn-outline text-xs tracking-widest uppercase">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

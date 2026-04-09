'use client';

import { useScrollReveal } from '@/lib/useScrollReveal';

export default function CTABanner() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-20" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <div
          className={`relative overflow-hidden rounded-3xl p-12 md:p-16 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-600/20 via-midnight-900 to-brand-900/20 border border-brand-500/15 rounded-3xl" />
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="cta-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-grid)" />
            </svg>
          </div>

          {/* Glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-brand-500/20 blur-[80px] rounded-full" />

          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Elevate Your Project?
            </h2>
            <p className="text-midnight-300 text-lg max-w-xl mx-auto mb-8">
              Get a free quote for your next aerial photography or videography project.
              No obligation, fast response.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" className="btn-primary text-lg animate-pulse-glow">
                <span>Request a Free Quote</span>
              </a>
              <a href="tel:0400000000" className="btn-outline text-lg">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

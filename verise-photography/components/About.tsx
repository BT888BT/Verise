'use client';

import { useScrollReveal } from '@/lib/useScrollReveal';

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <svg viewBox="0 0 500 800" fill="none" className="w-full h-full">
          <circle cx="400" cy="200" r="300" stroke="#14b88a" strokeWidth="0.5" />
          <circle cx="400" cy="200" r="250" stroke="#14b88a" strokeWidth="0.5" />
          <circle cx="400" cy="200" r="200" stroke="#14b88a" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - visual */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative">
              {/* Main image placeholder */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-midnight-800 to-brand-950/30 border border-midnight-700/30">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20 mb-4 opacity-40">
                    <path d="M40 10L70 25V55L40 70L10 55V25L40 10Z" stroke="#14b88a" strokeWidth="1" />
                    <circle cx="40" cy="40" r="8" stroke="#14b88a" strokeWidth="1" />
                    <path d="M40 10V32M40 48V70M10 25L32 37M48 43L70 55M70 25L48 37M32 43L10 55" stroke="#14b88a" strokeWidth="0.5" opacity="0.4" />
                  </svg>
                  <span className="text-midnight-500 text-sm">Team / Drone Photo</span>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-midnight-900/90 backdrop-blur-xl rounded-2xl p-5 border border-brand-500/20 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                      <path d="M9 12L11 14L15 10" stroke="#14b88a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#14b88a" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">CASA Certified</div>
                    <div className="text-midnight-400 text-xs">Licensed & Insured</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - content */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <span className="text-brand-400 text-sm font-semibold tracking-[0.2em] uppercase">About Verise</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Precision Meets{' '}
              <span className="bg-gradient-to-r from-brand-400 to-brand-300 bg-clip-text text-transparent">
                Artistry
              </span>
            </h2>
            <div className="space-y-4 text-midnight-300 leading-relaxed">
              <p>
                At Verise Photography, we combine cutting-edge drone technology with a cinematographer's eye
                for composition. Every flight is planned with precision, every frame captured with purpose.
              </p>
              <p>
                Our CASA-certified pilots bring years of experience across residential, commercial, industrial,
                and agricultural projects. We understand that aerial content isn't just about getting a camera
                in the sky — it's about capturing the perspective that tells your story.
              </p>
              <p>
                From single property shoots to ongoing construction documentation programs, we deliver
                consistent, professional results with fast turnaround times.
              </p>
            </div>

            {/* Feature points */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: 'Fully Insured', sublabel: 'Public Liability Cover' },
                { label: 'CASA Licensed', sublabel: 'ReOC Certified' },
                { label: 'Fast Delivery', sublabel: '24-48hr Turnaround' },
                { label: 'All Formats', sublabel: '4K Video & RAW Photo' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-brand-500/10 border border-brand-500/30 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                      <path d="M3 6L5 8L9 4" stroke="#14b88a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{item.label}</div>
                    <div className="text-midnight-500 text-xs">{item.sublabel}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

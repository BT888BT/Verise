'use client';

import { useScrollReveal } from '@/lib/useScrollReveal';

const ACCENT = '#8099b0';
const ACCENT_LIGHT = '#a8bac8';

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="relative py-28 md:py-36 overflow-hidden">
      {/* Subtle background circles */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 500 800" fill="none" className="w-full h-full">
          <circle cx="400" cy="200" r="300" stroke={ACCENT_LIGHT} strokeWidth="0.5" />
          <circle cx="400" cy="200" r="220" stroke={ACCENT_LIGHT} strokeWidth="0.5" />
          <circle cx="400" cy="200" r="140" stroke={ACCENT_LIGHT} strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left — visual */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative">
              <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden border border-brand-500/12"
                style={{ background: 'linear-gradient(135deg, #191c26, #0d0e12)' }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16 mb-4 opacity-25">
                    <path d="M40 10L70 25V55L40 70L10 55V25L40 10Z" stroke={ACCENT} strokeWidth="0.8" />
                    <circle cx="40" cy="40" r="8" stroke={ACCENT} strokeWidth="0.8" />
                    <path d="M40 10V32M40 48V70M10 25L32 37M48 43L70 55M70 25L48 37M32 43L10 55"
                      stroke={ACCENT} strokeWidth="0.4" opacity="0.4" />
                  </svg>
                  <span className="text-brand-600 text-xs tracking-widest uppercase">Team / Drone Photo</span>
                </div>
              </div>

              {/* Credential badge */}
              <div className="absolute -bottom-5 -right-4 md:-right-6 backdrop-blur-xl rounded-sm p-5 border border-brand-500/20 shadow-2xl"
                style={{ background: 'rgba(19,21,28,0.95)' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm border border-brand-500/20 flex items-center justify-center"
                    style={{ background: 'rgba(98,125,150,0.08)' }}>
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                      <path d="M9 12L11 14L15 10" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="12" r="9" stroke={ACCENT} strokeWidth="1.2" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm tracking-wide">CASA Certified</div>
                    <div className="text-brand-500 text-xs tracking-wider">Licensed & Insured</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10 bg-brand-500/40" />
              <span className="text-brand-400 text-[10px] font-medium tracking-[0.35em] uppercase">About Verise</span>
            </div>
            <h2 className="font-display font-light text-4xl md:text-5xl text-white mb-8" style={{ lineHeight: 1.1 }}>
              Precision Meets{' '}
              <em className="not-italic text-brand-300">Artistry</em>
            </h2>
            <div className="space-y-5 text-brand-500 leading-relaxed font-light text-[15px]">
              <p>
                At Verise Photography, we combine cutting-edge drone technology with a cinematographer&apos;s eye
                for composition. Every flight is planned with precision, every frame captured with purpose.
              </p>
              <p>
                Our CASA-certified pilots bring years of experience across residential, commercial, industrial,
                and agricultural projects — aerial content that tells your story with clarity and impact.
              </p>
              <p>
                From single property shoots to ongoing construction documentation programs, we deliver
                consistent, professional results with fast turnaround times.
              </p>
            </div>

            {/* Feature grid */}
            <div className="grid grid-cols-2 gap-5 mt-10">
              {[
                { label: 'Fully Insured', sublabel: 'Public Liability Cover' },
                { label: 'CASA Licensed', sublabel: 'ReOC Certified' },
                { label: 'Fast Delivery', sublabel: '24–48hr Turnaround' },
                { label: 'All Formats', sublabel: '4K Video & RAW Photo' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="mt-0.5 w-4 h-4 rounded-sm border border-brand-500/25 flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(98,125,150,0.07)' }}>
                    <svg viewBox="0 0 12 12" fill="none" className="w-2.5 h-2.5">
                      <path d="M2.5 6L4.5 8L9.5 3.5" stroke={ACCENT} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm tracking-wide">{item.label}</div>
                    <div className="text-brand-600 text-xs">{item.sublabel}</div>
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

'use client';

import { useScrollReveal } from '@/lib/useScrollReveal';

const steps = [
  {
    number: '01',
    title: 'Enquire',
    description: 'Tell us about your project — what you need captured, the location, and your timeline. We\'ll respond within hours.',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'We assess airspace, weather windows, and shot lists. You receive a clear scope and quote before we fly.',
  },
  {
    number: '03',
    title: 'Capture',
    description: 'Our CASA-certified pilots execute the flight plan, capturing cinematic footage and high-resolution imagery.',
  },
  {
    number: '04',
    title: 'Deliver',
    description: 'Professional editing, colour grading, and stitching. Final files delivered in your required format within 24-48 hours.',
  },
];

export default function Process() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-24 md:py-32">
      <div className="section-divider mb-24" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-brand-400 text-sm font-semibold tracking-[0.2em] uppercase">How It Works</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4">
            Simple Process, Stunning Results
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-brand-500/30 via-brand-500/20 to-brand-500/30" />

          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`relative text-center transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              {/* Number circle */}
              <div className="relative inline-flex items-center justify-center w-24 h-24 mb-6">
                <div className="absolute inset-0 rounded-full border border-brand-500/20 bg-midnight-900/50" />
                <span className="font-mono text-2xl font-bold text-brand-400 relative z-10">{step.number}</span>
                {/* Pulse dot */}
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-brand-500 animate-pulse" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-midnight-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

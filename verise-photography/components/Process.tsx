'use client';

import { useScrollReveal } from '@/lib/useScrollReveal';

const steps = [
  {
    number: '01',
    title: 'Enquire',
    description: "Tell us about your project — what you need captured, the location, and your timeline. We'll respond within hours.",
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
    description: 'Professional editing, colour grading, and stitching. Final files delivered in your required format within 24–48 hours.',
  },
];

export default function Process() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-28 md:py-36">
      <div className="section-divider mb-28" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className={`text-center mb-20 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-brand-500/40" />
            <span className="text-brand-400 text-[10px] font-medium tracking-[0.35em] uppercase">How It Works</span>
            <div className="h-px w-10 bg-brand-500/40" />
          </div>
          <h2 className="font-display font-light text-4xl md:text-5xl text-white" style={{ lineHeight: 1.1 }}>
            Simple Process, Stunning Results
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-10 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px"
            style={{ background: 'linear-gradient(to right, transparent, rgba(98,125,150,0.2), rgba(98,125,150,0.2), transparent)' }} />

          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`relative text-center transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              {/* Number */}
              <div className="relative inline-flex items-center justify-center w-20 h-20 mb-7">
                <div className="absolute inset-0 rounded-sm border border-brand-500/18"
                  style={{ background: 'rgba(19,21,28,0.8)' }} />
                <span className="font-display font-light text-3xl text-brand-300 relative z-10" style={{ lineHeight: 1 }}>
                  {step.number}
                </span>
              </div>
              <h3 className="font-body text-sm font-semibold text-white mb-3 tracking-widest uppercase">{step.title}</h3>
              <p className="text-brand-500 text-sm leading-relaxed font-light">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

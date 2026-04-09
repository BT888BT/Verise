'use client';

import { useScrollReveal } from '@/lib/useScrollReveal';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    company: 'Mitchell Property Group',
    content: 'The fly-through videos Verise produced for our listings have completely changed how we market properties. Buyers are making offers before even visiting in person.',
    rating: 5,
    service: 'House Fly-Throughs',
  },
  {
    name: 'David Chen',
    company: 'Apex Construction',
    content: 'We use Verise for monthly construction progress documentation. The consistency and quality of their aerial footage makes stakeholder reporting effortless.',
    rating: 5,
    service: 'Building Updates',
  },
  {
    name: 'Mark Thompson',
    company: 'WA Structural Engineers',
    content: "Their inspection footage is incredibly detailed and stable. It's saved us countless hours on scaffolding and has improved our assessment accuracy significantly.",
    rating: 5,
    service: 'Inspections',
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="testimonials" className="relative py-28 md:py-36">
      <div className="section-divider mb-28" />
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className={`text-center mb-20 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-brand-500/40" />
            <span className="text-brand-400 text-[10px] font-medium tracking-[0.35em] uppercase">Client Words</span>
            <div className="h-px w-10 bg-brand-500/40" />
          </div>
          <h2 className="font-display font-light text-4xl md:text-5xl text-white" style={{ lineHeight: 1.1 }}>
            Trusted by Industry Leaders
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`testimonial-card rounded-sm p-8 transition-all duration-800 hover:border-brand-500/30 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} viewBox="0 0 20 20" fill="#8099b0" className="w-3.5 h-3.5">
                    <path d="M10 1L12.39 6.86L18.78 7.64L14.14 12.14L15.28 18.46L10 15.52L4.72 18.46L5.86 12.14L1.22 7.64L7.61 6.86L10 1Z" />
                  </svg>
                ))}
              </div>

              {/* Quote mark */}
              <div className="text-brand-600/40 font-display text-5xl font-light leading-none mb-3 -mt-2">&ldquo;</div>

              {/* Content */}
              <p className="text-brand-400 leading-relaxed mb-8 text-sm font-light">{t.content}</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-sm border border-brand-500/20 flex items-center justify-center"
                  style={{ background: 'rgba(98,125,150,0.08)' }}>
                  <span className="text-brand-300 font-semibold text-sm">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="text-white font-medium text-sm tracking-wide">{t.name}</div>
                  <div className="text-brand-600 text-xs">{t.company}</div>
                </div>
              </div>

              {/* Service tag */}
              <div className="mt-5 pt-5 border-t border-brand-500/10">
                <span className="text-[10px] text-brand-500 font-medium tracking-widest uppercase">{t.service}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

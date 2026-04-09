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
    content: 'Their inspection footage is incredibly detailed and stable. It\'s saved us countless hours on scaffolding and has improved our assessment accuracy significantly.',
    rating: 5,
    service: 'Inspections',
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-brand-400 text-sm font-semibold tracking-[0.2em] uppercase">Testimonials</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Trusted by Industry Leaders
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`testimonial-card rounded-2xl p-8 transition-all duration-800 hover:border-brand-500/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} viewBox="0 0 20 20" fill="#14b88a" className="w-4 h-4">
                    <path d="M10 1L12.39 6.86L18.78 7.64L14.14 12.14L15.28 18.46L10 15.52L4.72 18.46L5.86 12.14L1.22 7.64L7.61 6.86L10 1Z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-midnight-200 leading-relaxed mb-6 text-sm">&ldquo;{t.content}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-500/10 border border-brand-500/20 flex items-center justify-center">
                  <span className="text-brand-400 font-bold text-sm">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-midnight-500 text-xs">{t.company}</div>
                </div>
              </div>

              {/* Service tag */}
              <div className="mt-4 pt-4 border-t border-midnight-700/30">
                <span className="text-xs text-brand-400/70 font-medium">{t.service}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

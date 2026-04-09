'use client';

import { useScrollReveal } from '@/lib/useScrollReveal';

const ACCENT = '#8099b0';
const ACCENT_LIGHT = '#a8bac8';

const services = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M8 38L24 10L40 38" stroke={ACCENT} strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M14 30L24 14L34 30" stroke={ACCENT_LIGHT} strokeWidth="0.8" strokeLinejoin="round" opacity="0.4" />
        <circle cx="24" cy="21" r="2.5" fill={ACCENT} opacity="0.5" />
        <path d="M4 42H44" stroke={ACCENT} strokeWidth="0.8" opacity="0.25" />
      </svg>
    ),
    title: 'House Fly-Throughs',
    description: 'Cinematic drone fly-through videos that take viewers on a seamless aerial journey around and through properties. Perfect for real estate listings and architectural showcases.',
    features: ['Interior & Exterior', 'Cinematic Stabilisation', '4K Ultra HD', 'Same-Day Preview'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="8" y="14" width="32" height="24" rx="2" stroke={ACCENT} strokeWidth="1.2" />
        <path d="M8 22H40" stroke={ACCENT} strokeWidth="0.8" opacity="0.25" />
        <path d="M20 14V10H28V14" stroke={ACCENT} strokeWidth="1.2" />
        <circle cx="24" cy="28" r="5" stroke={ACCENT_LIGHT} strokeWidth="1.2" />
        <circle cx="24" cy="28" r="1.5" fill={ACCENT} />
      </svg>
    ),
    title: 'Inspection Videos',
    description: 'Precision-stabilised drone footage for building inspections, roof assessments, and structural surveys. Ultra-smooth video that reveals every detail for comprehensive reporting.',
    features: ['Gimbal Stabilisation', 'Close-Range Detail', 'Annotated Reports', 'Insurance-Ready'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="10" y="12" width="28" height="28" rx="2" stroke={ACCENT} strokeWidth="1.2" />
        <path d="M10 12L6 8M38 12L42 8M10 40L6 44M38 40L42 44" stroke={ACCENT} strokeWidth="0.8" opacity="0.5" />
        <path d="M18 32L22 26L26 30L32 20" stroke={ACCENT_LIGHT} strokeWidth="1.2" strokeLinejoin="round" />
        <circle cx="16" cy="20" r="1.5" fill={ACCENT} opacity="0.4" />
      </svg>
    ),
    title: 'Building Fly-Arounds',
    description: 'Scheduled aerial documentation of construction progress. Track your build from foundation to completion with consistent, professional fly-around footage at every milestone.',
    features: ['Scheduled Visits', 'Progress Comparison', 'Stakeholder Reports', 'Timelapse'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="16" stroke={ACCENT} strokeWidth="1.2" />
        <circle cx="24" cy="24" r="10" stroke={ACCENT} strokeWidth="0.8" opacity="0.35" />
        <circle cx="24" cy="24" r="3" fill={ACCENT} opacity="0.3" />
        <path d="M24 8V4M24 44V40M8 24H4M44 24H40" stroke={ACCENT_LIGHT} strokeWidth="1.2" />
      </svg>
    ),
    title: 'Aerial Photography',
    description: 'Stunning high-resolution aerial photography for marketing, documentation, and artistic purposes — sweeping landscapes, properties, events, and developments from breathtaking vantage points.',
    features: ['High-Resolution RAW', 'HDR Processing', 'Golden Hour Scheduling', 'Commercial Licensing'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="4" y="16" width="16" height="12" rx="1" stroke={ACCENT} strokeWidth="1.2" />
        <rect x="16" y="12" width="16" height="16" rx="1" stroke={ACCENT} strokeWidth="1.2" />
        <rect x="28" y="20" width="16" height="12" rx="1" stroke={ACCENT} strokeWidth="1.2" />
        <rect x="10" y="28" width="16" height="12" rx="1" stroke={ACCENT} strokeWidth="1.2" />
        <rect x="22" y="28" width="16" height="12" rx="1" stroke={ACCENT} strokeWidth="1.2" />
        <path d="M24 24V20M24 24H20M24 24H28M24 24V28" stroke={ACCENT_LIGHT} strokeWidth="0.8" opacity="0.5" />
      </svg>
    ),
    title: 'Aerial Survey Stitching',
    description: 'Precision aerial mapping and orthomosaic stitching for surveyors, engineers, and land managers. Multiple aerial photos stitched into seamless, geo-referenced survey maps.',
    features: ['Orthomosaic Maps', 'GeoTIFF Export', 'Elevation Models', 'Area Calculations'],
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <div className={`text-center mb-20 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-brand-500/40" />
            <span className="text-brand-400 text-[10px] font-medium tracking-[0.35em] uppercase">What We Do</span>
            <div className="h-px w-10 bg-brand-500/40" />
          </div>
          <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-white mb-6" style={{ lineHeight: 1.1 }}>
            Our Services
          </h2>
          <p className="max-w-xl mx-auto text-brand-400 text-base leading-relaxed font-light">
            From cinematic property fly-throughs to precision survey mapping, we deliver
            aerial content that transforms how you see your world.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`service-card rounded-sm p-8 bg-stone-900/25 backdrop-blur-sm transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 90 + 200}ms` }}
            >
              <div className="mb-7">{service.icon}</div>
              <h3 className="font-body text-base font-semibold text-white mb-3 tracking-wide">{service.title}</h3>
              <p className="text-brand-500 text-sm leading-relaxed mb-7 font-light">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-[10px] font-medium tracking-wider uppercase rounded-sm bg-brand-500/8 text-brand-400 border border-brand-500/15"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

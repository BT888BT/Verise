'use client';

import { useScrollReveal } from '@/lib/useScrollReveal';

const services = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <path d="M8 36L24 8L40 36" stroke="#14b88a" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M14 28L24 12L34 28" stroke="#2dd4a3" strokeWidth="1" strokeLinejoin="round" opacity="0.5" />
        <circle cx="24" cy="20" r="3" fill="#14b88a" opacity="0.6" />
        <path d="M4 40H44" stroke="#14b88a" strokeWidth="1" opacity="0.3" />
      </svg>
    ),
    title: 'House Fly-Throughs',
    description: 'Cinematic drone fly-through videos that take viewers on a seamless aerial journey around and through properties. Perfect for real estate listings, architectural showcases, and property marketing.',
    features: ['Interior & Exterior Coverage', 'Cinematic Stabilisation', '4K Ultra HD', 'Same-Day Preview'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect x="8" y="14" width="32" height="24" rx="3" stroke="#14b88a" strokeWidth="1.5" />
        <path d="M8 22H40" stroke="#14b88a" strokeWidth="1" opacity="0.3" />
        <path d="M20 14V10H28V14" stroke="#14b88a" strokeWidth="1.5" />
        <circle cx="24" cy="28" r="5" stroke="#2dd4a3" strokeWidth="1.5" />
        <circle cx="24" cy="28" r="2" fill="#14b88a" />
      </svg>
    ),
    title: 'Stable Inspection Videos',
    description: 'Precision-stabilised drone footage for building inspections, roof assessments, and structural surveys. Ultra-smooth video that reveals every detail for comprehensive reporting.',
    features: ['Gimbal Stabilisation', 'Close-Range Detail', 'Annotated Reports', 'Insurance-Ready'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect x="10" y="12" width="28" height="28" rx="2" stroke="#14b88a" strokeWidth="1.5" />
        <path d="M10 12L6 8" stroke="#14b88a" strokeWidth="1" />
        <path d="M38 12L42 8" stroke="#14b88a" strokeWidth="1" />
        <path d="M10 40L6 44" stroke="#14b88a" strokeWidth="1" />
        <path d="M38 40L42 44" stroke="#14b88a" strokeWidth="1" />
        <path d="M18 32L22 26L26 30L32 20" stroke="#2dd4a3" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="16" cy="20" r="2" fill="#14b88a" opacity="0.5" />
      </svg>
    ),
    title: 'Building Update Fly-Arounds',
    description: 'Scheduled aerial documentation of construction progress. Track your build from foundation to completion with consistent, professional fly-around footage at every milestone.',
    features: ['Scheduled Visits', 'Progress Comparison', 'Stakeholder Reports', 'Timelapse Compilation'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="16" stroke="#14b88a" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="10" stroke="#14b88a" strokeWidth="1" opacity="0.4" />
        <circle cx="24" cy="24" r="4" fill="#14b88a" opacity="0.3" />
        <path d="M24 8V4" stroke="#2dd4a3" strokeWidth="1.5" />
        <path d="M24 44V40" stroke="#2dd4a3" strokeWidth="1.5" />
        <path d="M8 24H4" stroke="#2dd4a3" strokeWidth="1.5" />
        <path d="M44 24H40" stroke="#2dd4a3" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Aerial Photography',
    description: 'Stunning high-resolution aerial photography for marketing, documentation, and artistic purposes. Capture sweeping landscapes, properties, events, and developments from breathtaking vantage points.',
    features: ['High-Resolution RAW', 'HDR Processing', 'Golden Hour Scheduling', 'Commercial Licensing'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect x="4" y="16" width="16" height="12" rx="1" stroke="#14b88a" strokeWidth="1.5" />
        <rect x="16" y="12" width="16" height="16" rx="1" stroke="#14b88a" strokeWidth="1.5" />
        <rect x="28" y="20" width="16" height="12" rx="1" stroke="#14b88a" strokeWidth="1.5" />
        <rect x="10" y="28" width="16" height="12" rx="1" stroke="#14b88a" strokeWidth="1.5" />
        <rect x="22" y="28" width="16" height="12" rx="1" stroke="#14b88a" strokeWidth="1.5" />
        <path d="M24 24L24 20M24 24L20 24M24 24L28 24M24 24L24 28" stroke="#2dd4a3" strokeWidth="1" opacity="0.5" />
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
    <section id="services" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-brand-400 text-sm font-semibold tracking-[0.2em] uppercase">What We Do</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
            Our Services
          </h2>
          <p className="max-w-2xl mx-auto text-midnight-300 text-lg leading-relaxed">
            From cinematic property fly-throughs to precision survey mapping, we deliver
            aerial content that transforms how you see your world.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`service-card rounded-2xl p-8 bg-midnight-900/30 backdrop-blur-sm transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="font-display text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-midnight-300 text-sm leading-relaxed mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20"
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

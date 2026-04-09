'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
          <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.3" />
          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.3" />
          <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
          <path d="M18 2H15C13.67 2 12.4 2.53 11.46 3.46C10.53 4.4 10 5.67 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.47 14.79 6 15 6H18V2Z"
            stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
          <path d="M22.54 6.42C22.42 5.95 22.18 5.51 21.84 5.16C21.5 4.81 21.07 4.55 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.46 4.73 1.73 5.46 1.46 6.42C1 8.2 1 11.75 1 11.75C1 11.75 1 15.3 1.46 17.08C1.73 18.04 2.46 18.77 3.4 19C5.12 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.54 18.73 22.27 18 22.54 17C23 15.3 23 11.75 23 11.75C23 11.75 23 8.2 22.54 6.42Z"
            stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
          <path d="M9.75 15.02L15.5 11.75L9.75 8.48V15.02Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
          <path d="M16 8C17.59 8 19.12 8.63 20.24 9.76C21.37 10.88 22 12.41 22 14V21H18V14C18 13.47 17.79 12.96 17.41 12.59C17.04 12.21 16.53 12 16 12C15.47 12 14.96 12.21 14.59 12.59C14.21 12.96 14 13.47 14 14V21H10V14C10 12.41 10.63 10.88 11.76 9.76C12.88 8.63 14.41 8 16 8Z"
            stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="1.3" />
          <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.3" />
        </svg>
      ),
    },
    {
      name: 'TikTok',
      href: '#',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
          <path d="M9 12C6.79 12 5 13.79 5 16C5 18.21 6.79 20 9 20C11.21 20 13 18.21 13 16V4C13.33 5.33 14.6 8 17 8"
            stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  const footerLinks = [
    {
      title: 'Services',
      links: [
        { label: 'House Fly-Throughs', href: '#services' },
        { label: 'Inspection Videos', href: '#services' },
        { label: 'Building Updates', href: '#services' },
        { label: 'Aerial Photography', href: '#services' },
        { label: 'Survey Stitching', href: '#services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Portfolio', href: '#portfolio' },
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'CASA Compliance', href: '#about' },
      ],
    },
  ];

  return (
    <footer className="relative pt-20 pb-8 border-t border-stone-800/35">
      {/* Subtle gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-48 gradient-mesh opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-4 mb-6 group">
              <div className="w-8 h-5 flex items-center justify-center opacity-65 group-hover:opacity-90 transition-opacity duration-300">
                <svg viewBox="0 0 56 24" fill="none" className="w-full h-full">
                  <line x1="4" y1="12" x2="20" y2="12" stroke="#a8bac8" strokeWidth="1.2" strokeLinecap="round" />
                  <line x1="4" y1="12" x2="4" y2="7" stroke="#a8bac8" strokeWidth="1.2" strokeLinecap="round" />
                  <line x1="52" y1="12" x2="36" y2="12" stroke="#a8bac8" strokeWidth="1.2" strokeLinecap="round" />
                  <line x1="52" y1="12" x2="52" y2="7" stroke="#a8bac8" strokeWidth="1.2" strokeLinecap="round" />
                  <rect x="20" y="8" width="16" height="8" rx="4" stroke="#a8bac8" strokeWidth="1.2" fill="none" />
                  <circle cx="28" cy="12" r="2" fill="#a8bac8" />
                </svg>
              </div>
              <div>
                <span className="text-[14px] font-bold tracking-[0.18em] text-white font-body">VERISE</span>
                <span className="block text-[9px] tracking-[0.35em] text-brand-400 uppercase font-medium -mt-0.5">Photography</span>
              </div>
            </a>
            <p className="text-brand-600 text-sm leading-relaxed mb-7 max-w-xs font-light">
              Professional aerial drone photography and videography. Capturing perspectives
              that transform how you see, market, and manage your projects.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-9 h-9 rounded-sm border border-stone-700/30 flex items-center justify-center text-brand-600 hover:text-brand-300 hover:border-brand-500/30 transition-all duration-300"
                  style={{ background: 'rgba(25,28,38,0.5)' }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-medium text-xs mb-5 tracking-[0.2em] uppercase">{col.title}</h4>
              <ul className="space-y-3.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}
                      className="text-brand-600 text-sm font-light hover:text-brand-300 transition-colors duration-300">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-stone-800/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-700 text-xs font-light">
            &copy; {currentYear} Verise Photography. All rights reserved.
          </p>
          <p className="text-brand-700 text-xs font-light tracking-wider">
            CASA Certified &bull; Fully Insured &bull; Perth, Western Australia
          </p>
        </div>
      </div>
    </footer>
  );
}

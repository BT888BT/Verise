'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
          <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
          <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
          <path d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8386 5.15941C21.498 4.80824 21.0707 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92925 4.59318 2.50198 4.84824 2.16135 5.19941C1.82072 5.55057 1.57879 5.98541 1.46 6.46C1.14521 8.20556 0.991228 9.97631 1 11.75C0.988742 13.537 1.14277 15.3213 1.46 17.08C1.59096 17.5398 1.83831 17.9581 2.17814 18.2945C2.51798 18.6308 2.93882 18.8738 3.4 19C5.12 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0707 18.8668 21.498 18.6118 21.8386 18.2606C22.1793 17.9094 22.4212 17.4746 22.54 17C22.8524 15.2676 23.0063 13.5103 23 11.75C23.0113 9.96295 22.8574 8.1787 22.54 6.42Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M9.75 15.02L15.5 11.75L9.75 8.48V15.02Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
          <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      name: 'TikTok',
      href: '#',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
          <path d="M9 12C6.79086 12 5 13.7909 5 16C5 18.2091 6.79086 20 9 20C11.2091 20 13 18.2091 13 16V4C13.3333 5.33333 14.6 8 17 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
    <footer className="relative pt-20 pb-8 border-t border-midnight-800/50">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 right-0 h-64 gradient-mesh opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
                  <path d="M20 4L36 12V28L20 36L4 28V12L20 4Z" stroke="#14b88a" strokeWidth="1.5" fill="none" />
                  <path d="M20 8L32 14V26L20 32L8 26V14L20 8Z" fill="rgba(20,184,138,0.1)" />
                  <circle cx="20" cy="20" r="4" fill="#14b88a" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white font-display">VERISE</span>
                <span className="block text-[10px] tracking-[0.3em] text-brand-400 uppercase font-medium -mt-1">Photography</span>
              </div>
            </a>
            <p className="text-midnight-400 text-sm leading-relaxed mb-6 max-w-sm">
              Professional aerial drone photography and videography. Capturing perspectives
              that transform how you see, market, and manage your projects.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 rounded-xl bg-midnight-800/50 border border-midnight-700/30 flex items-center justify-center text-midnight-400 hover:text-brand-400 hover:border-brand-500/30 hover:bg-brand-500/5 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-midnight-400 text-sm hover:text-brand-400 transition-colors duration-300">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-midnight-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-midnight-500 text-xs">
            &copy; {currentYear} Verise Photography. All rights reserved.
          </p>
          <p className="text-midnight-600 text-xs">
            CASA Certified &bull; Fully Insured &bull; Perth, Western Australia
          </p>
        </div>
      </div>
    </footer>
  );
}

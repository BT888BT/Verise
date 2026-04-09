'use client';

import { useState } from 'react';
import { useScrollReveal } from '@/lib/useScrollReveal';
import { supabase } from '@/lib/supabase';

const ACCENT = '#8099b0';

const serviceOptions = [
  'House Fly-Through',
  'Stable Inspection Video',
  'Building Update Fly-Around',
  'Aerial Photography',
  'Aerial Survey Stitching',
  'Multiple Services',
  'Other',
];

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service_type: '',
    project_location: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const { error } = await supabase.from('enquiries').insert([
        {
          ...formState,
          status: 'new',
        },
      ]);

      if (error) throw error;
      setStatus('success');
      setFormState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service_type: '',
        project_location: '',
        message: '',
      });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="section-divider mb-28" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-20">

          {/* Left info */}
          <div className={`transition-all duration-800 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10 bg-brand-500/40" />
              <span className="text-brand-400 text-[10px] font-medium tracking-[0.35em] uppercase">Get In Touch</span>
            </div>
            <h2 className="font-display font-light text-4xl md:text-5xl text-white mb-8" style={{ lineHeight: 1.1 }}>
              Let&apos;s Capture Your{' '}
              <em className="not-italic text-brand-300">Vision</em>
            </h2>
            <p className="text-brand-500 text-base leading-relaxed mb-12 font-light">
              Ready to see your project from a new perspective? Fill out the form and we&apos;ll
              get back to you within a few hours with a tailored quote.
            </p>

            {/* Contact details */}
            <div className="space-y-7">
              {[
                {
                  label: 'Email',
                  value: 'hello@verisephotography.com.au',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" className="w-4.5 h-4.5">
                      <path d="M3 8L10.89 13.26C11.22 13.48 11.60 13.60 12 13.60C12.40 13.60 12.78 13.48 13.11 13.26L21 8M5 19H19C20.1 19 21 18.1 21 17V7C21 5.9 20.1 5 19 5H5C3.9 5 3 5.9 3 7V17C3 18.1 3.9 19 5 19Z"
                        stroke={ACCENT} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                },
                {
                  label: 'Phone',
                  value: '0400 000 000',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" className="w-4.5 h-4.5">
                      <path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.97C10.46 21 3 13.54 3 4.08C3.07 2.44 3.52 2 4.08 2H7.08C7.56 2 7.97 2.34 8.05 2.82C8.29 3.91 8.49 4.43L6.89 6.03C8.35 8.94 10.56 11.15 13.47 12.61L15.07 11.01C15.59 11.21 16.13 11.36 16.68 11.45C17.16 11.53 17.5 11.94 17.5 12.42V16.92"
                        stroke={ACCENT} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                },
                {
                  label: 'Location',
                  value: 'Perth, Western Australia',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" className="w-4.5 h-4.5">
                      <circle cx="12" cy="10" r="3" stroke={ACCENT} strokeWidth="1.2" />
                      <path d="M12 22C16 18 20 14.42 20 10C20 5.58 16.42 2 12 2C7.58 2 4 5.58 4 10C4 14.42 8 18 12 22Z"
                        stroke={ACCENT} strokeWidth="1.2" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm border border-brand-500/18 flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(98,125,150,0.07)' }}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm tracking-wide">{item.label}</div>
                    <div className="text-brand-500 text-sm font-light">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Response badge */}
            <div className="mt-10 inline-flex items-center gap-3 px-5 py-3 rounded-sm border border-brand-500/15"
              style={{ background: 'rgba(98,125,150,0.05)' }}>
              <div className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
              <span className="text-brand-400 text-xs font-medium tracking-wide">Average response: under 2 hours</span>
            </div>
          </div>

          {/* Right form */}
          <div className={`transition-all duration-800 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="rounded-sm p-8 border border-brand-500/15 backdrop-blur-sm"
              style={{ background: 'rgba(19,21,28,0.6)' }}>
              {status === 'success' ? (
                <div className="text-center py-14">
                  <div className="w-14 h-14 mx-auto mb-6 rounded-sm border border-brand-500/25 flex items-center justify-center"
                    style={{ background: 'rgba(98,125,150,0.08)' }}>
                    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
                      <path d="M5 13L9 17L19 7" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-display font-light text-2xl text-white mb-3">Enquiry Sent</h3>
                  <p className="text-brand-500 mb-8 font-light text-sm">We&apos;ll be in touch within a few hours to discuss your project.</p>
                  <button onClick={() => setStatus('idle')} className="btn-outline text-xs tracking-widest uppercase !px-6 !py-2.5">
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-brand-400 text-xs font-medium mb-2 tracking-wider uppercase">Name *</label>
                      <input type="text" required value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Your name" className="form-input text-sm" />
                    </div>
                    <div>
                      <label className="block text-brand-400 text-xs font-medium mb-2 tracking-wider uppercase">Email *</label>
                      <input type="email" required value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="you@example.com" className="form-input text-sm" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-brand-400 text-xs font-medium mb-2 tracking-wider uppercase">Phone</label>
                      <input type="tel" value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="0400 000 000" className="form-input text-sm" />
                    </div>
                    <div>
                      <label className="block text-brand-400 text-xs font-medium mb-2 tracking-wider uppercase">Company</label>
                      <input type="text" value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        placeholder="Your company" className="form-input text-sm" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-brand-400 text-xs font-medium mb-2 tracking-wider uppercase">Service Required *</label>
                    <select required value={formState.service_type}
                      onChange={(e) => setFormState({ ...formState, service_type: e.target.value })}
                      className="form-input text-sm appearance-none cursor-pointer">
                      <option value="" disabled>Select a service</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-stone-900">{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-brand-400 text-xs font-medium mb-2 tracking-wider uppercase">Project Location</label>
                    <input type="text" value={formState.project_location}
                      onChange={(e) => setFormState({ ...formState, project_location: e.target.value })}
                      placeholder="Suburb or address" className="form-input text-sm" />
                  </div>

                  <div>
                    <label className="block text-brand-400 text-xs font-medium mb-2 tracking-wider uppercase">Project Details *</label>
                    <textarea required rows={4} value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell us about your project — what needs to be captured, deadlines, specific requirements..."
                      className="form-input resize-none text-sm" />
                  </div>

                  <button type="submit" disabled={status === 'sending'}
                    className="btn-primary w-full text-center text-xs tracking-widest uppercase disabled:opacity-50 disabled:cursor-not-allowed">
                    <span>{status === 'sending' ? 'Sending...' : 'Send Enquiry'}</span>
                  </button>

                  {status === 'error' && (
                    <p className="text-red-400/80 text-xs text-center">Something went wrong. Please try again or email us directly.</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

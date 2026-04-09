'use client';

import { useState } from 'react';
import { useScrollReveal } from '@/lib/useScrollReveal';
import { supabase } from '@/lib/supabase';

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
    <section id="contact" className="relative py-24 md:py-32">
      <div className="section-divider mb-24" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left info */}
          <div className={`transition-all duration-800 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <span className="text-brand-400 text-sm font-semibold tracking-[0.2em] uppercase">Get In Touch</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Let&apos;s Capture Your{' '}
              <span className="bg-gradient-to-r from-brand-400 to-brand-300 bg-clip-text text-transparent">
                Vision
              </span>
            </h2>
            <p className="text-midnight-300 text-lg leading-relaxed mb-10">
              Ready to see your project from a new perspective? Fill out the form and we&apos;ll
              get back to you within a few hours with a tailored quote.
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                    <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="#14b88a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Email</div>
                  <div className="text-midnight-400 text-sm">hello@verisephotography.com.au</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                    <path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.97C20.643 20.99 20.28 21 19.92 21C10.46 21 3 13.54 3 4.08C3 3.72 3.01 3.357 3.03 3C3.07 2.44 3.52 2 4.08 2H7.08C7.56 2 7.97 2.34 8.05 2.82C8.14 3.37 8.29 3.91 8.49 4.43L6.89 6.03C8.35 8.94 10.56 11.15 13.47 12.61L15.07 11.01C15.59 11.21 16.13 11.36 16.68 11.45C17.16 11.53 17.5 11.94 17.5 12.42V16.92C17.5 17.18 17.395 17.43 17.21 17.615C17.025 17.8 16.775 17.9 16.515 17.9" stroke="#14b88a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Phone</div>
                  <div className="text-midnight-400 text-sm">0400 000 000</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#14b88a" strokeWidth="1.5" />
                    <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="#14b88a" strokeWidth="1.5" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Location</div>
                  <div className="text-midnight-400 text-sm">Perth, Western Australia</div>
                </div>
              </div>
            </div>

            {/* Response time badge */}
            <div className="mt-10 inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-brand-500/5 border border-brand-500/15">
              <div className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
              <span className="text-brand-400 text-sm font-medium">Average response time: under 2 hours</span>
            </div>
          </div>

          {/* Right form */}
          <div className={`transition-all duration-800 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="bg-midnight-900/30 backdrop-blur-sm rounded-2xl p-8 border border-midnight-700/30">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand-500/10 border border-brand-500/30 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
                      <path d="M5 13L9 17L19 7" stroke="#14b88a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">Enquiry Sent!</h3>
                  <p className="text-midnight-300 mb-6">We&apos;ll be in touch within a few hours to discuss your project.</p>
                  <button onClick={() => setStatus('idle')} className="btn-outline !px-6 !py-3 text-sm">
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-midnight-300 text-sm font-medium mb-2">Name *</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Your name"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="block text-midnight-300 text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="you@example.com"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-midnight-300 text-sm font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="0400 000 000"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="block text-midnight-300 text-sm font-medium mb-2">Company</label>
                      <input
                        type="text"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        placeholder="Your company"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-midnight-300 text-sm font-medium mb-2">Service Required *</label>
                    <select
                      required
                      value={formState.service_type}
                      onChange={(e) => setFormState({ ...formState, service_type: e.target.value })}
                      className="form-input appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select a service</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-midnight-900">{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-midnight-300 text-sm font-medium mb-2">Project Location</label>
                    <input
                      type="text"
                      value={formState.project_location}
                      onChange={(e) => setFormState({ ...formState, project_location: e.target.value })}
                      placeholder="Suburb or address"
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label className="block text-midnight-300 text-sm font-medium mb-2">Project Details *</label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell us about your project — what needs to be captured, any deadlines, specific requirements..."
                      className="form-input resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary w-full text-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{status === 'sending' ? 'Sending...' : 'Send Enquiry'}</span>
                  </button>

                  {status === 'error' && (
                    <p className="text-red-400 text-sm text-center">Something went wrong. Please try again or email us directly.</p>
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

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Privacy() {
  return (
    <main>
      <Navigation />
      <section className="pt-32 pb-20 max-w-4xl mx-auto px-6">
        <h1 className="font-display text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-midnight-300 leading-relaxed">
          <p>Last updated: {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <h2 className="text-white text-xl font-semibold mt-8">1. Information We Collect</h2>
          <p>When you submit an enquiry through our website, we collect your name, email address, phone number (optional), company name (optional), and project details you provide. We do not collect information beyond what you voluntarily submit.</p>

          <h2 className="text-white text-xl font-semibold mt-8">2. How We Use Your Information</h2>
          <p>We use the information you provide solely to respond to your enquiry, provide quotes, and deliver our aerial photography and videography services. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

          <h2 className="text-white text-xl font-semibold mt-8">3. Data Storage</h2>
          <p>Your enquiry data is stored securely using Supabase, a trusted cloud database platform with enterprise-grade security. We retain your data only for as long as necessary to fulfill our business relationship.</p>

          <h2 className="text-white text-xl font-semibold mt-8">4. Your Rights</h2>
          <p>You have the right to request access to, correction of, or deletion of your personal information at any time. Contact us at hello@verisephotography.com.au to exercise these rights.</p>

          <h2 className="text-white text-xl font-semibold mt-8">5. Cookies</h2>
          <p>This website uses only essential cookies required for functionality. We do not use tracking or advertising cookies.</p>

          <h2 className="text-white text-xl font-semibold mt-8">6. Contact</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at hello@verisephotography.com.au.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

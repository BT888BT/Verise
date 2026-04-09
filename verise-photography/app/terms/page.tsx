import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Terms() {
  return (
    <main>
      <Navigation />
      <section className="pt-32 pb-20 max-w-4xl mx-auto px-6">
        <h1 className="font-display text-4xl font-bold text-white mb-8">Terms of Service</h1>
        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-midnight-300 leading-relaxed">
          <p>Last updated: {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <h2 className="text-white text-xl font-semibold mt-8">1. Services</h2>
          <p>Verise Photography provides professional aerial drone photography and videography services including property fly-throughs, inspection videos, building progress documentation, aerial photography, and aerial survey stitching.</p>

          <h2 className="text-white text-xl font-semibold mt-8">2. Bookings & Quotes</h2>
          <p>All projects begin with a consultation and written quote. Quotes are valid for 30 days from the date of issue. A deposit may be required to secure your booking date.</p>

          <h2 className="text-white text-xl font-semibold mt-8">3. Weather & Rescheduling</h2>
          <p>Drone operations are subject to weather conditions and CASA regulations. If conditions are unsuitable for safe flying, we will reschedule at no additional cost.</p>

          <h2 className="text-white text-xl font-semibold mt-8">4. Deliverables & Copyright</h2>
          <p>Upon full payment, you receive a licence to use the delivered media for the purposes agreed upon. Copyright of all original footage and photography remains with Verise Photography unless otherwise agreed in writing.</p>

          <h2 className="text-white text-xl font-semibold mt-8">5. Liability</h2>
          <p>Verise Photography holds current public liability insurance and operates under CASA regulations. Our liability is limited to the value of the contracted services.</p>

          <h2 className="text-white text-xl font-semibold mt-8">6. Cancellation</h2>
          <p>Cancellations made more than 48 hours before the scheduled flight receive a full refund of any deposit. Cancellations within 48 hours may incur a cancellation fee.</p>

          <h2 className="text-white text-xl font-semibold mt-8">7. Contact</h2>
          <p>For questions about these terms, please contact us at hello@verisephotography.com.au.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

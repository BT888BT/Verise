import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Showreel from '@/components/Showreel';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import CTABanner from '@/components/CTABanner';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Services />
      <Showreel />
      <Portfolio />
      <About />
      <Process />
      <Testimonials />
      <CTABanner />
      <Contact />
      <Footer />
    </main>
  );
}

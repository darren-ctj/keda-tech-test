import { createFileRoute } from '@tanstack/react-router';
import { Navbar } from '../components/navbar';
import { Hero } from '../components/hero';
import { AboutFeatures } from '../components/about-features';
import { Pricing } from '../components/pricing';
import { Contact } from '../components/contact';
import { Footer } from '../components/footer';
import { LoginModal } from '../components/login-modal';

export const Route = createFileRoute('/')({
  component: () => (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground transition-colors duration-200">
      <Navbar />
      <main>
        <Hero />
        <AboutFeatures />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <LoginModal />
    </div>
  ),
});

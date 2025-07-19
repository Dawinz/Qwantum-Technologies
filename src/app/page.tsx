import Layout from '../components/Layout';
import TechBackgroundCTA from '../components/TechBackgroundCTA';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <Layout>
      <TechBackgroundCTA />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
    </Layout>
  );
}

import '@/i18n/config';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import Services from '@/components/landing/Services';
import Workflow from '@/components/landing/Workflow';
import Technologies from '@/components/landing/Technologies';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/landing/Footer';
import WhatsAppWidget from '@/components/landing/WhatsAppWidget';

const Index = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="min-h-screen bg-background font-arabic">
      <Navbar />
      <Hero />
      <Services />
      <Workflow />
      <Technologies />
      <Contact />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Index;

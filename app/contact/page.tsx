'use client';

import HeroSection from '@/components/HeroSection';
import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Typography } from '@/components/Typography';
import ContactUsForm from '@/components/contact-us-form';

export default function page() {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen">
      <HeroSection
        title="CONTACT"
        description="If you need any help for any issues or if you want to know any more about us you can contact us directly us we always ready to help you."
        backgroundImage="/images/contact-us-hero.png"
        backgroundImageMobile="/images/contact-us-hero-mobile.png"
      />

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-right"
          style={{
            backgroundImage: `url(${
              windowWidth !== null && windowWidth <= 768
                ? '/images/contact-us-bg-mobile.png'
                : '/images/contact-us-bg.png'
            })`,
          }}
        />
        <div className="container relative z-10 mx-auto grid grid-cols-1 gap-12 py-8 sm:gap-28 sm:py-24 md:grid-cols-2">
          <div className="grid grid-cols-1 gap-12 py-8 sm:grid-cols-3 sm:gap-28 sm:py-24 md:grid-cols-1 md:gap-12">
            <div>dnfs</div>
            <div>jlkdfj</div>
            <div>mlfds</div>
          </div>
          <div className="rounded-l-3xl rounded-t-3xl bg-white p-8 shadow-lg sm:p-12">
            <ContactUsForm />
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';

import HeroSection from '@/components/HeroSection';
import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Typography } from '@/components/Typography';
import PreRegistrationForm from '@/components/pre-registration-form';

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
        title="Pre Register"
        description="If you need any help for any issues or if you want to know any more about us you can contact us directly us we always ready to help you."
        backgroundImage="/images/pre-registration-hero.png"
        backgroundImageMobile="/images/pre-registration-hero-mobile.png"
      />

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-right"
          style={{
            backgroundImage: `url(${
              windowWidth !== null && windowWidth <= 768
                ? '/images/pre-registration-bg-mobile.png'
                : '/images/pre-registration-bg.png'
            })`,
          }}
        />
        <div className="container relative z-10 mx-auto grid grid-cols-1 gap-12 py-8 sm:grid-cols-2 sm:gap-28 sm:py-24">
          <div>
            <motion.div
              variants={itemVariants}
              className="order-1 hidden flex-1 sm:order-2 sm:block"
            >
              <img
                src="/images/pre-registration-image.png"
                alt="image"
                className="h-96 w-auto"
              />
            </motion.div>
            <Typography
              variant="Bim1"
              className="mb-4 mt-4 text-center text-xl text-[#4b0325] sm:mb-8 sm:mt-8 sm:text-justify sm:text-3xl"
            >
              Lorem ipsum
            </Typography>
            <Typography
              variant="Bim4Regular"
              className="text-center text-base text-[#4b0325] sm:text-justify sm:text-lg"
            >
              Lorem ipsum dolor sit amet consectetur. Varius blandit urna magna
              enim adipiscing magna quisque vitae. Vel id vel sodales venenatis
              nulla fermentum. Sagittis pharetra sed vitae at. At dui lacus
              nulla massa scelerisque interdum tellus arcu mi. Amet laoreet
              pulvinar mattis scelerisque amet egestas ac magna aenean.
            </Typography>
          </div>
          <div className="rounded-l-3xl rounded-t-3xl bg-white p-8 shadow-lg sm:p-12">
            <PreRegistrationForm />
          </div>
        </div>
      </section>
    </div>
  );
}

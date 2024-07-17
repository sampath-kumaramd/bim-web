'use client';

import HeroSection from '@/components/HeroSection';
import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Typography } from '@/components/Typography';
import ContactUsForm from '@/components/contact-us-form';
import { ContactDetails } from '@/bin/ContactDetails';
import Image from 'next/image';

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

  const getImageSize = () => {
    if (windowWidth !== null && windowWidth <= 639)
      return { width: 50, height: 50 };
    if (windowWidth !== null && windowWidth >= 639 && windowWidth <= 1028)
      return { width: 18, height: 18 };
    if (windowWidth !== null && windowWidth >= 1024)
      return { width: 70, height: 70 };
    return { width: 50, height: 50 };
  };

  const imageSize = getImageSize();

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
        <div className="container relative z-10 mx-auto grid grid-cols-1 gap-12 py-8 sm:gap-6 sm:py-6 lg:grid-cols-2 lg:gap-28 lg:py-24">
          <div className="grid grid-cols-1 gap-12 py-8 sm:grid-cols-3 sm:gap-3 sm:py-12 md:gap-12 lg:grid-cols-1 lg:py-24">
            {Array.isArray(ContactDetails) &&
              ContactDetails.map((ContactDetail) => (
                <div
                  key={ContactDetail.id}
                  className="grid grid-cols-4 items-center gap-12 sm:gap-3"
                >
                  <div className="col-span-1 flex h-20 w-20 items-center justify-center rounded-r-full rounded-t-full bg-white sm:h-10 sm:w-10 lg:h-24 lg:w-24">
                    <Image
                      src={ContactDetail.href}
                      alt="contact-info"
                      width={imageSize.width}
                      height={imageSize.height}
                    />
                  </div>
                  <div className="col-span-3 grid">
                    <Typography
                      variant="Bim1"
                      className="text-md text-justify text-[#4B0325] sm:text-xl lg:mb-2 lg:text-3xl"
                    >
                      {ContactDetail.name}
                    </Typography>
                    <Typography
                      variant="Bim4Regular"
                      className="text-md text-justify text-[#4B0325] sm:text-sm lg:text-xl"
                    >
                      {ContactDetail.value}
                    </Typography>
                  </div>
                </div>
              ))}
          </div>
          <div className="rounded-l-3xl rounded-t-3xl bg-white p-8 shadow-lg sm:p-12">
            <ContactUsForm />
          </div>
        </div>
      </section>
    </div>
  );
}

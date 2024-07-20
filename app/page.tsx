'use client';

import { Typography } from '@/components/Typography';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="h-auto">
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-right"
          style={{
            backgroundImage: `url(${
              windowWidth !== null && windowWidth <= 768
                ? '/images/home-bg-mobile.png'
                : '/images/home-bg.png'
            })`,
          }}
        />

        <div className="relative z-10 grid grid-cols-1 gap-32 sm:py-24 md:grid-cols-2">
          <div className="relative">
            <Image
              src="/images/poligon.png"
              alt="poligon"
              width="850"
              height="700"
            />
            <div className="absolute top-0 max-w-3xl">
              <div className="ms-64 py-20">
                <Typography
                  variant="Bim1"
                  className="mb-12 space-y-3 text-justify text-base text-[#4b0325] sm:text-6xl"
                >
                  <div>FIND SOMETHING</div>
                  <div>
                    <span className="text-[#D10062]">PERFECT</span> & MAKE
                  </div>
                  <div>
                    SOME <span className="text-[#33AE9D]">FUN</span>
                  </div>
                </Typography>
                <Typography
                  variant="Bim4Regular"
                  className="text-justify text-base text-[#4b0325] sm:text-lg"
                >
                  Download the most popular online dating mobile app from app
                  store or google store. Let’s have a try
                </Typography>
                <div className="mt-28 flex justify-start gap-4 md:gap-16">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="rounded-2xl"
                  >
                    <Image
                      src="/images/app-store-badge.png"
                      alt="Download on the App Store"
                      width={190}
                      height={60}
                    />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="rounded-2xl"
                  >
                    <Image
                      src="/images/google-play-badge.png"
                      alt="Get it on Google Play"
                      width={170}
                      height={20}
                    />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
          <div>gsfs</div>
        </div>
      </section>
    </div>
  );
}

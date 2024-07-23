'use client';

import { Typography } from '@/components/Typography';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import homeBg from '../../public/images/home-bg.png';
import homeBgMobile from '../../public/images/home-bg-mobile.png';

export default function Home() {
  const [windowWidth, setWindowWidth] = useState<
    number | null
  >(null);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () =>
      window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="h-auto">
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-right"
          style={{
            backgroundImage: `url(${
              windowWidth !== null && windowWidth <= 768
                ? homeBgMobile.src
                : homeBg.src
            })`,
          }}
        />
        <div className="bg-pink-100 flex h-screen w-full items-center justify-start">
          <div className="custom-card -ms-40 h-[60%] w-[50%] rounded-[80px] p-10 pe-28 ">
              <div className="ms-64 py-8 transform">
                  <Typography  variant="Bim1" className="mb-2 text-justify text-base text-[#4b0325] sm:text-6xl">FIND SOMETHING</Typography>
                  <Typography  variant="Bim1" className="mb-2 text-justify text-base text-[#4b0325] sm:text-6xl">
                    <span className="text-[#D10062]">
                      PERFECT
                    </span>{' '}
                    & MAKE
                  </Typography>
                  <Typography  variant="Bim1" className="mb-8 text-justify text-base text-[#4b0325] sm:text-6xl">
                    SOME{' '}
                    <span className="text-[#33AE9D]">
                      FUN
                    </span>
                  </Typography>
                <Typography
                  variant="Bim4Regular"
                  className="text-justify text-base text-[#4b0325] sm:text-lg"
                >
                  Download the most popular online dating
                  mobile app from app store or google store.
                  Let’s have a try
                </Typography>
                <div className="mt-20 flex justify-between gap-4 md:gap-16">
                  <motion.button
                    whileHover={{
                      scale: 1.04,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
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
                    whileHover={{
                      scale: 1.04,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
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
    
      </div>
    </div>
  );
}

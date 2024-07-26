'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Typography } from '@/components/Typography';
import { VideoCarouselWrapper } from '@/components/VideoCarouselWrapper';
import { Languages } from '@/lib/types/languages';
import { useDictionary } from '@/hooks/useDictionary';

import homeBg from '../../public/images/home-bg.png';
import homeBgMobile from '../../public/images/home-bg-mobile.png';
import appSroteImage from '../../public/images/app-store-badge.png';
import googlePlayImage from '../../public/images/google-play-badge.png';

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

  const params = useParams();
  const lang = params.lang as Languages;
  const dict = useDictionary(lang);
  return (
    <div className="min-h-screen">
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
        <div className="bg-pink-100 flex min-h-screen w-full flex-col items-center justify-between p-4 lg:flex-row lg:p-8">
          <div className="custom-card -ms-40 mb-8 w-full rounded-[40px] p-6 lg:mb-0 lg:w-1/2 lg:rounded-[80px] lg:p-10 lg:pe-8 xl:pe-28">
            <div className="ms-20 transform py-4 sm:ms-40 lg:py-8">
              <Typography
                variant="Bim1"
                className="mb-2 text-left text-3xl text-[#4b0325] sm:text-4xl md:text-5xl lg:text-6xl"
              >
                {dict?.home.findSomething}
              </Typography>
              <Typography
                variant="Bim1"
                className="mb-2 text-left text-3xl text-[#4b0325] sm:text-4xl md:text-5xl lg:text-6xl"
              >
                <span className="text-[#D10062]">
                  {dict?.home.perfect}
                </span>{' '}
                {dict?.home.make}
              </Typography>
              <Typography
                variant="Bim1"
                className="mb-4 text-left text-3xl text-[#4b0325] sm:text-4xl md:text-5xl lg:mb-8 lg:text-6xl"
              >
                {dict?.home.some}{' '}
                <span className="text-[#33AE9D]">
                  {dict?.home.fun}
                </span>
              </Typography>
              <Typography
                variant="Bim4Regular"
                className="text-left text-sm text-[#4b0325] lg:text-base"
              >
                {dict?.home.description}
              </Typography>
              <div className="mt-8 flex flex-row items-center justify-start gap-4 sm:gap-16 lg:mt-12">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="rounded-2xl"
                >
                  <Image
                    src={appSroteImage.src}
                    alt="Download on the App Store"
                    width={180}
                    height={60}
                    className="h-[60px] w-[180px]"
                  />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="rounded-2xl"
                >
                  <Image
                    src={googlePlayImage.src}
                    alt="Get it on Google Play"
                    width={180}
                    height={60}
                    className="h-[60px] w-[180px] py-[2px]"
                  />
                </motion.button>
              </div>
            </div>
          </div>
          <div className="mb-8 w-full lg:mb-0 lg:w-1/2">
            <VideoCarouselWrapper />
          </div>
        </div>
      </div>
    </div>
  );
}

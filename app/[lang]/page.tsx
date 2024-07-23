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
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
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
        <div className="bg-pink-100 min-h-screen w-full flex flex-col lg:flex-row items-center justify-between p-4 lg:p-8">
          <div className="custom-card w-full lg:w-1/2 rounded-[40px] lg:rounded-[80px] p-6 lg:p-10 xl:pe-28 lg:pe-8  mb-8 lg:mb-0 -ms-40">
            <div className="sm:ms-40 ms-20  py-4 lg:py-8 transform">
              <Typography variant="Bim1" className="mb-2 text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#4b0325]">
               {dict?.home.findSomething}
              </Typography>
              <Typography variant="Bim1" className="mb-2 text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#4b0325]">
                <span className="text-[#D10062]">{ dict?.home.perfect}</span> { dict?.home.make}
              </Typography>
              <Typography variant="Bim1" className="mb-4 lg:mb-8 text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#4b0325]">
                { dict?.home.some} <span className="text-[#33AE9D]">{ dict?.home.fun}</span>
              </Typography>
              <Typography
                variant="Bim4Regular"
                className="text-left text-sm lg:text-base  text-[#4b0325]"
              >
                { dict?.home.description}
              </Typography>
              <div className="mt-8 lg:mt-12 flex flex-row justify-between items-center gap-4  ">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="rounded-2xl"
                >
                  <Image
                    src={appSroteImage.src}
                    alt="Download on the App Store"
                    width={150}
                    height={50}
                    className="w-auto h-auto"
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
                    width={150}
                    height={50}
                    className="w-auto h-auto"
                  />
                </motion.button>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-1/2 mb-8 lg:mb-0 '>
            <VideoCarouselWrapper />
          </div>
        </div>
      </div>
    </div>
  );
}
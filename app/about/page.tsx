'use client';

import ContentSection from '@/components/ContentSection';
import CustomButton from '@/components/CustomButton';
import HeroSection from '@/components/HeroSection';
import { Typography } from '@/components/Typography';
import VideoSection from '@/components/VideoSection';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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

  return (
    <div className="min-h-screen">
      <HeroSection
        title="MOST TRUSTED & SECURE"
        description="Lorem ipsum dolor sit amet consectetur. Purus venenatis sit egestas luctus proin amet lorem leo. Fringilla turpis id amet fermentum leo et dictum viverra. Consectetur fringilla in"
        backgroundImage="/images/about-hero.png"
        backgroundImageMobile="/images/about-hero-mobile.png"
        primaryButton="Get Started"
        secondaryButton="Our Concept"
      />

      <ContentSection
        title="About Us"
        startingWord="BIM"
        description="(Better International Match) is a global dating app connecting singles worldwide. It uses advanced matching algorithms, supports multiple languages, and ensures user safety through rigorous verification. Features include text, voice, and video communication, cultural exchange, and travel planning. BIM offers both free and premium plans, fostering a supportive community and meaningful cross-cultural connections."
        image="/images/about-us-images.svg"
        backgroundImage="/images/about-us-bg.png"
        backgroundImageMobile="/images/about-us-bg-mobile.png"
        button={{
          text: 'Read More',
          textColor: 'text-white',
          backgroundColor: 'bg-[#d10062]',
          reverse: true,
        }}
        reverse={true}
      />

      <ContentSection
        title="Our Concept"
        description="Lorem ipsum dolor sit amet consectetur. Scelerisque mi varius quam facilisis etiam. Nunc id aliquam suscipit cursus condimentum augue pellentesque commodo. Turpis dignissim vestibulum diam et interdum. Viverra sed et sit id amet quam egestas quis. Massa dolor posuere dui bibendum fusce. Dignissim eu amet quam."
        image="/images/about-us-our-concept.svg"
        backgroundImage="/images/about-us-our-concept-bg.png"
        backgroundImageMobile="/images/about-us-our-concept-bg-mobile.png"
        button={{
          text: 'Learn More',
          textColor: 'text-[#4b0325]',
          backgroundColor: 'bg-white',
          reverse: true,
        }}
      />

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-right"
          style={{
            backgroundImage: `url(${
              windowWidth !== null && windowWidth <= 768
                ? '/images/about-us-get-start-mobile-bg.png'
                : '/images/about-us-get-start-bg.png'
            })`,
          }}
        />
        <div className="container relative z-10 mx-auto px-4 py-16 sm:py-24">
          <div className="mx-auto items-center px-4 sm:flex">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="flex-1 sm:pe-20 sm:pr-8 lg:pe-28 xl:pe-40"
            >
              <VideoSection />
            </motion.div>
            <div className="mt-8 flex-1 justify-between sm:mt-0">
              <Typography
                variant="luckiestGuy"
                className="mb-4 text-center text-3xl text-[#4b0325] sm:text-start sm:text-4xl"
              >
                Get Started
              </Typography>
              <Typography
                variant="nexaRegular"
                className="mb-8 text-center text-base text-[#4b0325] sm:text-justify sm:text-lg"
              >
                Lorem ipsum dolor sit amet consectetur. Scelerisque mi varius
                quam facilisis etiam. Nunc id aliquam
              </Typography>
              <CustomButton
                variant="tertiary"
                cornerStyle="rounded"
                className="w-full bg-[#d10062] py-3 text-white"
                text="Pre-Registration"
              />
              <div className="mt-6 flex justify-center gap-16">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Image
                    src="/images/app-store-badge.svg"
                    alt="Download on the App Store"
                    width={140}
                    height={40}
                  />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Image
                    src="/images/google-play-badge.svg"
                    alt="Get it on Google Play"
                    width={140}
                    height={40}
                  />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Typography } from './Typography';
import CustomButton from './CustomButton';

interface HeroSectionProps {
  title: string;
  description: string;
  backgroundImage?: string;
  backgroundImageMobile?: string;
  primaryButton?: string;
  secondaryButton?: string;
  children?: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  backgroundImage,
  backgroundImageMobile,
  primaryButton,
  secondaryButton,
  children,
}) => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width to state
      setWindowWidth(window.innerWidth);
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return (
    <section className="relative overflow-hidden">
      {backgroundImage && backgroundImageMobile && (
        <div
          className="absolute inset-0 z-0 bg-cover bg-right"
          style={{
            backgroundImage: `url(${
              windowWidth !== null &&
              windowWidth <= 768 &&
              backgroundImageMobile
                ? backgroundImageMobile
                : backgroundImage
            })`,
          }}
        />
      )}
      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-16 sm:py-24">
        <div className="">
          <Typography
            variant="luckiestGuy"
            className="mb-4 text-3xl text-white sm:text-4xl"
          >
            {title}
          </Typography>
          <Typography
            variant="nexaRegular"
            className="mb-8 text-base text-white/80 sm:text-lg"
          >
            {description}
          </Typography>
          <div className="flex items-start gap-8 flex-row  justify-center">
            {primaryButton && (
              <CustomButton
                variant="primary"
                cornerStyle="asymmetrical"
                className="w-44"
                text={primaryButton}
              />
            )}
            {secondaryButton && (
              <CustomButton
                cornerStyle="pill"
                className="w-44 px-8 "
                variant="secondary"
                text={secondaryButton}
              />
            )}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default HeroSection;

{
  /* <CustomButton text="Get Started" variant="primary" />
<CustomButton text="Our Concept" variant="secondary" /> */
}

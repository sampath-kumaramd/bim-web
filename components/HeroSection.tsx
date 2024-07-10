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
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
  children?: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  backgroundImage,
  backgroundImageMobile,
  primaryButton,
  secondaryButton,
  onPrimaryButtonClick,
  onSecondaryButtonClick,
  children,
}) => {
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
            variant="Bim1"
            className="mb-4 text-3xl text-white sm:text-4xl"
          >
            {title}
          </Typography>
          <Typography
            variant="Bim4Regular"
            className="mb-8 text-base text-white/80 sm:text-lg"
          >
            {description}
          </Typography>
          <div className="flex flex-row items-start justify-center gap-8">
            {primaryButton && (
              <CustomButton
                variant="primary"
                className="w-52"
                text={primaryButton}
                onClick={onPrimaryButtonClick}
              />
            )}
            {secondaryButton && (
              <CustomButton
                className="w-52 px-8"
                variant="secondary"
                text={secondaryButton}
                onClick={onSecondaryButtonClick}
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

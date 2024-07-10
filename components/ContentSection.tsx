'use client';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Typography } from './Typography';
import CustomButton from './CustomButton';

interface ContentSectionProps {
  title: string;
  startingWord?: string;
  description: string;
  image: string;
  backgroundImage?: string;
  backgroundImageMobile?: string;
  button:{
    text:string,
    textColor:string
    backgroundColor:string
    reverse: boolean;
    className?: string;
  }
  reverse?: boolean;
  children?: React.ReactNode;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  startingWord,
  description,
  image,
  backgroundImage,
  backgroundImageMobile,
  button,
  children,
  reverse = false,
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
      <div className="container relative z-10 mx-auto px-4 py-16 sm:py-24">
        <div
          className={`mx-auto items-center px-4 ${reverse ? 'flex-row-reverse sm:flex' : 'sm:flex'}`}
        >
          {image && (
            <div
              className={`order-1 flex-1 sm:order-2 ${reverse ? 'sm:pe-20 lg:pe-28 xl:pe-40' : 'sm:ps-20 lg:ps-28 xl:ps-40'}`}
            >
              <img src={image} alt={title} className="h-auto w-full" />
            </div>
          )}

          <div className="order-2 flex-1 space-y-12 sm:order-1">
            <Typography
              variant="luckiestGuy"
              className="mb-4 text-center text-3xl text-[#4b0325] sm:text-start sm:text-4xl mt-12 sm:mt-0"
            >
              {title}
            </Typography>
            <Typography
              variant="nexaRegular"
              className="mb-8 text-center text-base text-[#4b0325] sm:text-justify sm:text-lg"
            >
              <span className="font-bold text-pink">{startingWord}</span>{' '}
              {description}
            </Typography>
            <div className="flex justify-center">
              {button && (
                <CustomButton
                  variant="custom"
                  cornerStyle="asymmetrical"
                  className={`mx-auto w-[80%] ${button.backgroundColor} ${button.textColor} ${button.reverse ? 'clip-customRight rounded-tr-3xl rounded-br-3xl' : 'clip-customLeft rounded-tl-3xl rounded-bl-3xl'} ${button.className}`}
                  text={button.text}
                />
              )}
            </div>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default ContentSection;

{
  /* <CustomButton text="Get Started" variant="primary" />
<CustomButton text="Our Concept" variant="secondary" /> */
}

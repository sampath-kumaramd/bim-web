'use client';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Typography } from './Typography';
import CustomButton from './CustomButton';
import { motion } from 'framer-motion';

interface ContentSectionProps {
  title: string;
  startingWord?: string;
  description: string;
  image: string;
  backgroundImage?: string;
  backgroundImageMobile?: string;
  button: {
    text: string;
    textColor: string;
    backgroundColor: string;
    reverse: boolean;
    className?: string;
  };
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
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.3 }}
          className={`mx-auto items-center px-4 ${reverse ? 'flex-row-reverse sm:flex' : 'sm:flex'}`}
        >
          {image && (
            <motion.div
              variants={itemVariants}
              className={`order-1 flex-1 sm:order-2 ${reverse ? 'sm:pe-20 lg:pe-28 xl:pe-40' : 'sm:ps-20 lg:ps-28 xl:ps-40'}`}
            >
              <img src={image} alt={title} className="h-auto w-full" />
            </motion.div>
          )}

          <motion.div
            variants={itemVariants}
            className="order-2 flex-1 space-y-12 sm:order-1"
          >
            <Typography
              variant="luckiestGuy"
              className="mb-4 mt-12 text-center text-3xl text-[#4b0325] sm:mt-0 sm:text-start sm:text-4xl"
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
                  className={`mx-auto w-[80%] ${button.backgroundColor} ${button.textColor} ${button.reverse ? 'rounded-br-3xl rounded-tr-3xl clip-customRight' : 'rounded-bl-3xl rounded-tl-3xl clip-customLeft'} ${button.className}`}
                  text={button.text}
                />
              )}
            </div>
          </motion.div>
        </motion.div>
        {children}
      </div>
    </section>
  );
};

export default ContentSection;

'use client';

import { LegalArticles } from '@/bin/LegalData';
import HeroSection from '@/components/HeroSection';
import { Typography } from '@/components/Typography';
import { useEffect, useState } from 'react';

export default function page() {
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
    <div className="min-h-screen">
      <HeroSection
        title="Legal"
        description="If you need any help for any issues or If you want to know any more about us you can contact us directly. We always ready to help you."
        backgroundImage="/images/legal-hero.png"
        backgroundImageMobile="/images/legal-hero-mobile.png"
      />

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-right"
          style={{
            backgroundImage: `url(${
              windowWidth !== null && windowWidth <= 768
                ? '/images/legal-bg-mobile.png'
                : '/images/legal-bg.png'
            })`,
          }}
        />
        <div className="container relative z-10 mx-auto py-16 sm:py-24">
          <Typography
            variant="Bim4Regular"
            className="mb-8 text-justify text-base text-[#4b0325] sm:text-lg"
          >
            In accordance with the provisions of Articles
            6-III and 19 of Law No. 2004-575 of June 21,
            2004 for the Confidence in the digital conomy,
            known as L.C.E.N., it is brought to the
            attention of users and visitors, hereinafter the
            "User", of the site www.bim-dating.com,
            hereinafter the "Site", herein Legal Notice.
          </Typography>
          <Typography
            variant="Bim4Regular"
            className="text-justify text-base text-[#4b0325] sm:text-lg"
          >
            Connection and navigation on the Site by the
            User implies full acceptance and without subject
            to these legal notices.These are accessible on
            the Site in the “Legal notices” section.
          </Typography>
        </div>
      </section>

      <div className="bg-[#F8ECEC] py-16">
        <div className="container mx-auto flex flex-col space-y-12 sm:space-y-16">
          {Array.isArray(LegalArticles) &&
            LegalArticles.map((legalArticle) => (
              <div key={legalArticle.id}>
                <Typography
                  variant="Bim1"
                  className="mb-3 text-justify text-base text-[#4B0325] sm:text-3xl"
                >
                  Article {legalArticle.id} -{' '}
                  {legalArticle.title}
                </Typography>
                <Typography
                  variant="Bim4Regular"
                  className="text-justify text-base text-[#4B0325] sm:text-lg"
                >
                  {legalArticle.description}
                </Typography>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

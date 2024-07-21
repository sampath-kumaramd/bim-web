import ContentSection from '@/components/ContentSection';
import HeroSection from '@/components/HeroSection';

import newsHero from '../../../public/images/news-hero.png';
import newsHeroMobile from '../../../public/images/news-hero-mobile.png';
import newsBg from '../../../public/images/news-bg.png';
import newsBgMobile from '../../../public/images/news-bg-mobile.png';
import newsHeadingImages from '../../../public/images/news-heading-images.svg';
import newsHeadingImagesMobile from '../../../public/images/news-heading-images-mobile.svg';
import newsImages from '../../../public/images/news-images.svg';


export default function page() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="News"
        description="Lorem ipsum dolor sit amet consectetur. Nulla odio interdum fames aliquam consequat elit fusce penatibus. Arcu libero magna eros augue odio est. Id morbi aenean nisl quis et molestie."
        backgroundImage={newsHero.src}
        backgroundImageMobile={newsHeroMobile.src}
      />

      <ContentSection
        title="Lorem IPSUM"
        startingWord="BIM"
        description="(Better International Match) is a global dating app connecting singles worldwide. It uses advanced matching algorithms, supports multiple languages, and ensures user safety through rigorous verification. Features include text, voice, and video communication, cultural exchange, and travel planning. BIM offers both free and premium plans, fostering a supportive community and meaningful cross-cultural connections."
        image={newsImages.src}
        backgroundImage={newsBg.src}
        backgroundImageMobile={newsBgMobile.src}
        button={{
          text: 'Read More',
          textColor: 'text-white',
          backgroundColor: 'bg-[#d10062]',
          reverse: true,
        }}
        reverse={true}
      />

      <ContentSection
        title="News Heading"
        startingWord="BIM"
        description="(Better International Match) is a global dating app connecting singles worldwide. It uses advanced matching algorithms, supports multiple languages, and ensures user safety through rigorous verification. Features include text, voice, and video communication, cultural exchange, and travel planning. BIM offers both free and premium plans, fostering a supportive community and meaningful cross-cultural connections."
        image={newsHeadingImages.src}
        backgroundImageMobile={newsHeadingImagesMobile.src}
        button={{
          text: 'Read More',
          textColor: 'text-white',
          backgroundColor: 'bg-[#d10062]',
          reverse: false,
        }}
      />
      <div className="bg-[#fbf1ef] sm:py-16"></div>
    </div>
  );
}

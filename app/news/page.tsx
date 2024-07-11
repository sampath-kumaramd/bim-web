import ContentSection from '@/components/ContentSection';
import HeroSection from '@/components/HeroSection';

export default function page() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="News"
        description="Lorem ipsum dolor sit amet consectetur. Nulla odio interdum fames aliquam consequat elit fusce penatibus. Arcu libero magna eros augue odio est. Id morbi aenean nisl quis et molestie."
        backgroundImage="/images/news-hero.png"
        backgroundImageMobile="/images/news-hero-mobile.png"
      />

      <ContentSection
        title="Lorem IPSUM"
        startingWord="BIM"
        description="(Better International Match) is a global dating app connecting singles worldwide. It uses advanced matching algorithms, supports multiple languages, and ensures user safety through rigorous verification. Features include text, voice, and video communication, cultural exchange, and travel planning. BIM offers both free and premium plans, fostering a supportive community and meaningful cross-cultural connections."
        image="/images/news-images.svg"
        backgroundImage="/images/news-bg.png"
        backgroundImageMobile="/images/news-bg-mobile.png"
        button={{
          text: 'Read More',
          textColor: 'text-white',
          backgroundColor: 'bg-[#d10062]',
          reverse: true,
        }}
        reverse={true}
      />
    </div>
  );
}

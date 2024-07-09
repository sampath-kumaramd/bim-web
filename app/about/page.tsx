import HeroSection from "@/components/HeroSection";

export default function page() {
  return <div className="min-h-screen">
     <HeroSection
        title="MOST TRUSTED & SECURE"
        description="Lorem ipsum dolor sit amet consectetur. Purus venenatis sit egestas luctus proin amet lorem leo. Fringilla turpis id amet fermentum leo et dictum viverra. Consectetur fringilla in"
        backgroundImage="/images/about-hero.png"
        backgroundImageMobile="/images/about-hero-mobile.png"
        primaryButton="Get Started"
        secondaryButton="Our Concept"
      />
  </div>;
}

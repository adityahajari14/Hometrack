"use client";

import ServicePage from "@/components/service-page";

export default function PropertyWealthAdvisory() {
  const featureCards = [
    {
      icon: "/property-wealth-advisory/tree-structure-icon.svg",
      title: "Strategic Portfolio Design",
      description: "Provide a value proposition that integrates seamlessly into your larger investment plan.",
    },
    {
      icon: "/property-wealth-advisory/chart-line-up-icon.svg",
      title: "Performance Insight",
      description: "Evaluate market cycles, valuations, and projected returns to ensure every asset earns its place.",
    },
  ];

  return (
    <ServicePage
      // Hero Section
      heroImage="/property-wealth-advisory/property-wealth-hero.webp"
      heroTitle="Property Wealth Advisory"
      heroSubtitle="Turning property into a portfolio of purpose."
      
      // Navigation
      showSecondaryNav={true}
      activeSecondaryItem="Property Wealth Advisory"
      
      // About Section
      aboutContent="Our Property Wealth Advisory service goes beyond traditional real estate brokerage — it's a strategic approach to building, growing, and preserving wealth in the real estate industry. We combine the principles of wealth management with deep market insight to curate investment opportunities that align with your financial goals, risk profile, and long-term vision. From portfolio diversification to maximizing rental yields and capital appreciation, we help you treat real estate not just as an asset, but as a key component of your wealth strategy."
      
      // Feature Cards Section
      featureCardsTitle="What"
      featureCardsTitleHighlight=" Defines"
      featureCardsTitleEnd=" Our Wealth Advisory:"
      featureCards={featureCards}
      
      // Video Section
      videoBackgroundImage="/video-background.jpg"
      videoDescription="From first conversation to final delivery, our process is built on transparency, creativity, and precision. We listen closely, plan strategically, and execute with craftsmanship — ensuring every project reflects your vision and delivers lasting impact."
    />
  );
}
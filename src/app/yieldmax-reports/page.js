"use client";

import ServicePage from "@/components/service-page";

export default function YieldMaxReports() {
  const featureCards = [
    {
      icon: "/yieldmax-reports/Money.svg",
      title: "Investment Benchmarking",
      description: "Compare asset performance across neighborhoods and property types to refine your strategy.",
    },
    {
      icon: "/yieldmax-reports/Percent.svg",
      title: "Yield Analysis",
      description: "Access quarterly property yield data across Dubai’s most active and emerging zones.",
    },
    {
      icon: "/yieldmax-reports/ChartLineUp.svg",
      title: "Market Trends",
      description: "Track price movements, demand supply shifts, and the evolution of investment hotspots.",
    },
    {
      icon: "/yieldmax-reports/GraduationCap.svg",
      title: "Investor Education",
      description: "Gain contextual insights that turn numbers into narrative and data into direction.",
    },
  ];

  return (
    <ServicePage
      // Hero Section
      heroImage="/yieldmax-reports/yieldmax-reports.webp"
      heroTitle="YieldMax Reports"
      heroSubtitle="Turning market data into strategic advantage."
      
      // Navigation
      showSecondaryNav={true}
      activeSecondaryItem="YieldMax Reports"
      
      // About Section
      aboutContent="In real estate, insight is the edge. Our YieldMax Reports transform market data into actionable intelligence helping investors see beyond listings to the forces shaping long-term value. Delivered quarterly, the Dubai Wealth Report provides clarity across 14 key Dubai zones, equipping clients with the foresight needed to make smarter, faster, and more profitable investment decisions"
      
      //Features Section
      featureCardsTitle="How We"
      featureCardsTitleHighlight=" Empower"
      featureCardsTitleEnd=" Informed Investment:"
      featureCards={featureCards}

      // Video Section
      showVideoSection={true}
      videoBackgroundImage="/video-background.jpg"
      videoDescription="From first conversation to final delivery, our process is built on transparency, creativity, and precision. We listen closely, plan strategically, and execute with craftsmanship — ensuring every project reflects your vision and delivers lasting impact."
      videoUrl="https://www.youtube.com/watch?v=ELJYn6OKYoI"
    />
  );
}
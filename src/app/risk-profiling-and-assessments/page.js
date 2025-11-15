"use client";

import ServicePage from "@/components/service-page";

export default function RiskProfilingAndAssessments() {
  const featureCards = [
    {
      icon: "/risk-profilling-and-assessments/ShieldCheck.svg",
      title: "Protection",
      description: "We work together on recommending a well diversified portfolio in Real Estate. Your investment would be spread across the UAE markets.",
    }
  ];

  return (
    <ServicePage
      // Hero Section
      heroImage="/risk-profilling-and-assessments/risk-profilling-and-assessments-image.webp"
      heroTitle="Risk Profiling and Assessments"
      heroSubtitle="Intelligence before investment."
      
      // Navigation
      showSecondaryNav={true}
      activeSecondaryItem="Risk Profiling and Assessments"
      
      // About Section
      aboutContent="Our Risk Profiling and Risk Assessment service ensures every investment decision aligns with your financial goals and comfort level. By analyzing your risk appetite, investment horizon, and portfolio exposure, we craft real estate strategies that balance opportunity with security. This disciplined approach allows us to identify potential market, liquidity, and asset risks—empowering you to make informed, confident decisions that strengthen the resilience and performance of your property portfolio."
      
      // Feature Cards Section
      featureCardsTitle="How We"
      featureCardsTitleHighlight=" Protect"
      featureCardsTitleEnd=" Your Portfolio:"
      featureCards={featureCards}
      
      // Video Section
      videoBackgroundImage="/video-background.jpg"
      videoDescription="From first conversation to final delivery, our process is built on transparency, creativity, and precision. We listen closely, plan strategically, and execute with craftsmanship — ensuring every project reflects your vision and delivers lasting impact."
      videoUrl="https://www.youtube.com/watch?v=pdBBuWAvEsI"
    />
  );
}
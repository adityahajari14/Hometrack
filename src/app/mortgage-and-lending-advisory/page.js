"use client";

import ServicePage from "@/components/service-page";

export default function MortgageAndLendingAdvisory() {
  const featureCards = [
    {
      icon: "/mortgage-and-lending-advisory/Strategy.svg",
      title: "Precision Leverage Planning",
      description: "Determine ideal loan-to-value ratios that enhance returns while managing risk.",
    },
    {
      icon: "/mortgage-and-lending-advisory/Percent.svg",
      title: "Cost & Interest Strategy",
      description: "Choose the right interest model, fixed or floating,  based on economic outlook and personal preference.",
    },
    {
      icon: "/mortgage-and-lending-advisory/ChartDonut.svg",
      title: "Raising Equity Buyouts",
      description: "Consolidate or restructure existing loans to improve cash flow efficiency.",
    },
  ];

  return (
    <ServicePage
      // Hero Section
      heroImage="/mortgage-and-lending-advisory/mortgage-and-lending-advisory-image.webp"
      heroTitle="Mortgage and Lending Advisory"
      heroSubtitle="Financing that strengthens, not strains."
      
      // Navigation
      showSecondaryNav={true}
      activeSecondaryItem="Mortgage and Lending Advisory"
      
      // About Section
      aboutContent="Our Mortgage Advisory service provide by our regulated partners is designed to help you secure the most effective financing structure for your real estate investments. Whether you’re acquiring your first property or expanding your portfolio, our partners will guide you through tailored lending solutions that optimize leverage, preserve liquidity, and enhance long-term returns."
      
      // Feature Cards Section
      featureCardsTitle="How We"
      featureCardsTitleHighlight=" Engineer"
      featureCardsTitleEnd=" Your Capital:"
      featureCards={featureCards}
      
      // Video Section
      showVideoSection={false}
    />
  );
}
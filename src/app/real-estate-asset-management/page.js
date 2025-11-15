"use client";

import ServicePage from "@/components/service-page";

export default function RealEstateAssetManagement() {
  return (
    <ServicePage
      // Hero Section
      heroImage="/real-estate-asset-management/real-estate-asset-management-image.webp"
      heroTitle="Real Estate Asset Management"
      heroSubtitle="Thinking beyond ownership."
      
      // Navigation
      showSecondaryNav={true}
      activeSecondaryItem="Real Estate Asset Management"
      
      // About Section
      aboutContent="Our Real Estate and Asset Management service focuses on maximizing the performance and value of your property portfolio. By combining wealth management principles with hands-on property expertise, we oversee every aspect of your investments—from acquisition and leasing to maintenance and market positioning. Our goal is to enhance returns, optimize income streams, and ensure your real estate assets contribute effectively to your long-term financial strategy."
      
      // Feature Cards Section
      showFeatureCardsSection={false}
      
      // Video Section
      videoBackgroundImage="/video-background.jpg"
      videoDescription="From first conversation to final delivery, our process is built on transparency, creativity, and precision. We listen closely, plan strategically, and execute with craftsmanship — ensuring every project reflects your vision and delivers lasting impact."
      videoUrl="https://www.youtube.com/watch?v=DQZc3-3Rv4M"
      />
  );
}
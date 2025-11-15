"use client";

import ServicePage from "@/components/service-page";

export default function WealthManagementServices() {
  return (
    <ServicePage
      // Hero Section
      heroImage="/wealth-management-services/wealth-management-services-image.webp"
      heroTitle="Wealth Management Services"
      heroSubtitle="Integrating real estate into the language of capital."
      
      // Navigation
      showSecondaryNav={true}
      activeSecondaryItem="Wealth Management Services"
      
      // About Section
      aboutContent="Our Real Estate Advisory service integrates real investment strategy into a holistic approach to growing and protecting your wealth. We work closely with you to understand your financial goals, risk tolerance, and investment horizon, then craft tailored real estate investment strategies that complement your broader portfolio. By combining market insight, and long-term growth strategies, we help you maximize returns, preserve capital, and create a sustainable legacy through real estate."
      
      showFeatureCardsSection={false}

      // Video Section
      videoBackgroundImage="/video-background.jpg"
      videoDescription="From first conversation to final delivery, our process is built on transparency, creativity, and precision. We listen closely, plan strategically, and execute with craftsmanship — ensuring every project reflects your vision and delivers lasting impact."
      videoUrl="https://www.youtube.com/watch?v=DQZc3-3Rv4M&feature=youtu.be" // Replace with actual YouTube URL
    />
  );
}
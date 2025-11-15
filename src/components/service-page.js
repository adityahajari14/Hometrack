"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactCard from "@/components/contact";
import Button from "@/components/button";
import TestimonialSection from "./testimonial-section";
import BookingModal from "./booking-modal";
import AnimationWrapper from "./animation-wrapper";

export default function ServicePage({
  // Hero Section Props
  showHero = true,
  heroImage,
  heroTitle,
  heroSubtitle,
  heroButtonLabel = "Make an appointment",
  
  // Navigation Props
  showNavbar = true,
  showSecondaryNav = false,
  secondaryNavItems = [],
  activeSecondaryItem = null,
  
  // About Section Props
  showAboutSection = true,
  aboutTitle = "About",
  aboutTitleHighlight = " the Service",
  aboutContent,
  
  // Feature Cards Section Props
  showFeatureCardsSection = true,
  featureCardsTitle = "What",
  featureCardsTitleHighlight = " Defines",
  featureCardsTitleEnd = " Our Service:",
  featureCards = [],
  
  // Video Section Props
  showVideoSection = true,
  videoBackgroundImage,
  videoTitle = "How We Make It Happen",
  videoDescription,
  videoPlayIcon = "/play-icon.svg",
  videoButtonText = "Watch Full Video",
  videoUrl, // YouTube video URL

  showTestimonialSection = false,
  
  // Contact Section Props
  showContactSection = true,
  
  // Footer Props
  showFooter = true,
}) {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const heroContentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = heroContentRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  const handleVideoPlay = () => {
    if (videoUrl) {
      setIsVideoPlaying(true);
    }
  };

  const getYouTubeEmbedUrl = (url) => {
    if (!url) return null;
    
    // Extract video ID from various YouTube URL formats
    let videoId = null;
    
    // Standard watch URL: https://www.youtube.com/watch?v=VIDEO_ID
    if (url.includes('youtube.com/watch')) {
      const urlParams = new URLSearchParams(new URL(url).search);
      videoId = urlParams.get('v');
    }
    // Short URL: https://youtu.be/VIDEO_ID
    else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    }
    // Embed URL: https://www.youtube.com/embed/VIDEO_ID
    else if (url.includes('youtube.com/embed/')) {
      videoId = url.split('embed/')[1].split('?')[0];
    }
    
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0` : null;
  };

  return (
    <AnimationWrapper key={heroTitle}>
      <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Hero Section with Background */}
      {showHero && (
        <div className="relative h-screen sm:h-[600px] lg:h-[684px] w-full">
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt={heroTitle}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-black" />
          </div>

          {/* Main Navigation with Secondary Nav */}
          {showNavbar && (
            <Navbar 
              showSecondaryNav={showSecondaryNav} 
              secondaryNavItems={secondaryNavItems}
              activeSecondaryItem={activeSecondaryItem}
            />
          )}

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center px-4 pt-20 sm:pt-24">
            <div 
              ref={heroContentRef}
              className={`flex flex-col items-center gap-6 sm:gap-7 lg:gap-9 text-center max-w-4xl transition-all duration-1000 ease-out ${
                hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="flex flex-col gap-0.5">
                <h1 className="font-noto-sans font-bold text-3xl sm:text-4xl lg:text-5xl leading-normal tracking-[-0.88px] text-white">
                  {heroTitle}
                </h1>
                <p className="font-dm-sans text-lg sm:text-xl lg:text-2xl text-[#e2e2e2] leading-tight">
                  {heroSubtitle}
                </p>
              </div>
              <div onClick={() => setIsBookingModalOpen(true)}>
                <Button label={heroButtonLabel} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)}
        serviceName={heroTitle}
      />

      {/* Main Content */}
      <main className={`max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20`}>
        {/* About the Service Section */}
        {showAboutSection && (
          <section className="mb-16 sm:mb-20 lg:mb-24">
            <div className="flex flex-col gap-3.5 max-w-[1356px]">
              <h2 className="animate-on-scroll slide-in-left font-noto-sans font-medium text-2xl sm:text-3xl leading-tight">
                <span className="text-orange-600">{aboutTitle}</span>
                <span className="text-white">{aboutTitleHighlight}</span>
              </h2>
              <p className="scale-in-repeat font-dm-sans text-base sm:text-lg lg:text-xl leading-relaxed text-white">
                {aboutContent}
              </p>
            </div>
          </section>
        )}

        {/* What Defines Our Wealth Advisory Section */}
        {showFeatureCardsSection && featureCards.length > 0 && (
          <section className="mb-16 sm:mb-20 lg:mb-24">
            <div className="flex flex-col gap-6 sm:gap-7 lg:gap-8 max-w-[1440px] m-auto">
              <h2 className="animate-on-scroll slide-in-left font-noto-sans font-medium text-2xl sm:text-3xl leading-tight">
                <span className="text-white">{featureCardsTitle}</span>
                <span className="text-orange-600">{featureCardsTitleHighlight}</span>
                <span className="text-white">{featureCardsTitleEnd}</span>
              </h2>
              
              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                {featureCards.map((card, index) => (
                  <div key={index} className="scale-in-repeat bg-[#0b0b0b] border border-[#373737] p-4 sm:p-5 lg:p-6 rounded-md">
                    <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
                      <div className="w-[42px] h-[42px] relative shrink-0">
                        <Image
                          src={card.icon}
                          alt={card.title}
                          width={42}
                          height={42}
                        />
                      </div>
                      <div className="flex flex-col gap-2 sm:gap-2.5 lg:gap-3">
                        <h3 className="font-noto-sans font-semibold text-lg sm:text-xl lg:text-2xl text-white leading-tight">
                          {card.title}
                        </h3>
                        <p className="font-dm-sans text-sm sm:text-base lg:text-lg xl:text-xl text-white leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>

            </div>
          </section>
        )}

        {/* Video Section - How We Make It Happen */}
        {showVideoSection && videoBackgroundImage && (
          <section className="mb-16 sm:mb-20 lg:mb-24 max-w-[1356px]">
            <div className="scale-in-repeat relative w-full h-64 sm:h-96 lg:h-[564px] rounded-md overflow-hidden">
              {!isVideoPlaying ? (
                <>
                  {/* Background Image */}
                  <Image
                    src={videoBackgroundImage}
                    alt={videoTitle}
                    fill
                    className="object-cover"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute left-4 sm:left-6 lg:left-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-32 lg:top-[297px] lg:bottom-auto z-10">
                    <button 
                      onClick={handleVideoPlay}
                      className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm border border-gray-400 px-2 py-2 sm:px-3 sm:py-3 rounded hover:bg-white/20 transition-colors"
                    >
                      <Image
                        src={videoPlayIcon}
                        alt="Play"
                        width={19}
                        height={19}
                      />
                      <span className="font-manrope font-medium text-white text-sm sm:text-base">
                        {videoButtonText}
                      </span>
                    </button>
                  </div>

                  {/* Text Content Overlay */}
                  <div className="absolute left-4 sm:left-6 lg:left-10 bottom-6 sm:bottom-8 lg:bottom-12 max-w-full sm:max-w-[600px] lg:max-w-[908px] z-10 pr-4 sm:pr-6">
                    <div className="flex flex-col gap-2 sm:gap-3 lg:gap-3.5 text-white">
                      <h2 className="font-noto-sans font-semibold text-xl sm:text-2xl lg:text-[32px] leading-tight sm:leading-normal">
                        {videoTitle}
                      </h2>
                      <p className="font-dm-sans text-sm sm:text-base lg:text-xl leading-relaxed">
                        {videoDescription}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                /* YouTube Video Player */
                <>
                  {/* Close Button */}
                  <button
                    onClick={() => setIsVideoPlaying(false)}
                    className="absolute top-4 right-4 z-20 text-white hover:text-orange-600 transition-colors bg-black/50 rounded-full p-2 backdrop-blur-sm"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  
                  {/* YouTube Video */}
                  <iframe
                    className="w-full h-full"
                    src={getYouTubeEmbedUrl(videoUrl)}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </>
              )}
            </div>
          </section>
        )}

        {showTestimonialSection && (
          <div className="scale-in-repeat">
            <TestimonialSection />
          </div>
        )}

        {/* Contact Form Section */}
        {showContactSection && (
          <section className="mb-16 sm:mb-20 lg:mb-24">
            <div className="scale-in-repeat">
              <ContactCard />
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      {showFooter && <Footer />}
      </div>
    </AnimationWrapper>
  );
}

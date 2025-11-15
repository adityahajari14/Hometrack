"use client"

import { useEffect, useRef, useState } from 'react';
import ConfirmationModal from './confirmation-modal';

export default function Hero({ scrollY }) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    date: "",
    time: ""
  });
  const textRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const textObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = textRef.current;
    if (currentRef) {
      textObserver.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        textObserver.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData(e.target);
      formDataToSend.append("access_key", "afcfd4f4-1af7-49f1-b6bf-18d209736383");
      formDataToSend.append("service", "General Consultation");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setShowConfirmation(true);
        setFormData({
          fullName: "",
          email: "",
          date: "",
          time: ""
        });
      } else {
        console.error("Form submission error:", data);
        alert("Failed to book consultation. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Failed to book consultation. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full relative z-10 px-4 sm:px-6 lg:px-8 gap-6 sm:gap-8 lg:gap-12 pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-12 lg:pb-16">
      <div 
        ref={textRef}
        className={`w-full lg:w-1/2 px-0 sm:px-4 lg:px-8 transition-all duration-1000 ease-out ${
          hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white font-noto-sans font-medium leading-tight">
          Where <span className="italic text-orange-600 font-semibold">Expertise</span> Meets
        </h1>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white font-noto-sans font-medium mb-3 sm:mb-4 lg:mb-6 mt-1 sm:mt-2 leading-tight">
          Excellence
        </h1>
        <h3 className="text-xs sm:text-sm lg:text-xl text-white font-dm-sans leading-5 sm:leading-6 lg:leading-8">
          Welcome to hometrack real estate- a name built on trust, discipline, and discretion. We bring decades of financial insight to the world of real estate, guiding every transaction with precision and integrity. Whether you seek a residence or an investment, we help you make decisions that endure. Let our expert team help you find your dream home with ease.
        </h3>
      </div>

      <div 
        ref={formRef}
        className={`w-full lg:w-1/2 bg-black/58 rounded-md py-4 sm:py-6 lg:py-8 flex flex-col mx-0 lg:mx-8 px-4 sm:px-6 lg:px-8 max-w-full transition-all duration-1000 ease-out ${
          hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <h2 className="text-white font-dm-sans text-base sm:text-xl lg:text-2xl xl:text-3xl mb-3 sm:mb-4 lg:mb-6">
          Book For Consultation
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 sm:gap-3 lg:gap-4">
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 lg:gap-4"> 
            <div className="w-full sm:w-1/2">
              <h3 className="text-white font-dm-sans text-xs sm:text-sm lg:text-base xl:text-lg mb-1.5 sm:mb-2">Full Name</h3>
              <input
                type="text"
                name="name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
                className="w-full py-2 sm:py-2.5 lg:py-3 px-2.5 sm:px-3 rounded-md bg-black/20 placeholder:text-[#9E9E9E] text-white text-xs sm:text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-orange-600 min-h-10 sm:min-h-11"
                placeholder="Enter Full Name"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <h3 className="text-white font-dm-sans text-xs sm:text-sm lg:text-base xl:text-lg mb-1.5 sm:mb-2">Email</h3>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full py-2 sm:py-2.5 lg:py-3 px-2.5 sm:px-3 rounded-md bg-black/20 placeholder:text-[#9E9E9E] text-white text-xs sm:text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-orange-600 min-h-10 sm:min-h-11"
                placeholder="Enter Email"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 lg:gap-4">
            <div className="w-full sm:w-1/2">
              <h2 className="text-white font-dm-sans text-xs sm:text-sm lg:text-base xl:text-lg mb-1.5 sm:mb-2">Date</h2> 
              <div className="relative">
                <input
                  type="text"
                  name="date"
                  placeholder="DD/MM/YYYY"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                  onClick={(e) => {
                    e.target.type = 'date';
                    e.target.showPicker?.();
                  }}
                  onFocus={(e) => {
                    e.target.type = 'date';
                    setTimeout(() => e.target.showPicker?.(), 0);
                  }}
                  onBlur={(e) => {
                    if (!e.target.value) {
                      e.target.type = 'text';
                    }
                  }}
                  className="w-full py-2 sm:py-2.5 lg:py-3 px-2.5 sm:px-3 rounded-md bg-black/20 text-white text-xs sm:text-sm lg:text-base cursor-pointer placeholder:text-[#9E9E9E] focus:outline-none focus:ring-2 focus:ring-orange-600 min-h-10 sm:min-h-11"
                  style={{
                    colorScheme: 'dark',
                    appearance: 'none',
                  }}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/date.svg"
                  alt="Date"
                  className="absolute right-2.5 sm:right-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 pointer-events-none"
                />
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <h2 className="text-white font-dm-sans text-xs sm:text-sm lg:text-base xl:text-lg mb-1.5 sm:mb-2">Time</h2>
              <div className="relative">
                <select 
                  name="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  required
                  className="w-full py-2 sm:py-2.5 lg:py-3 px-2.5 sm:px-3 pr-8 sm:pr-9 rounded-md bg-black/20 text-[#9E9E9E] text-xs sm:text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-orange-600 min-h-10 sm:min-h-11 appearance-none cursor-pointer [&:has(option:checked:not(:first-child))]:text-white">
                  <option value="">Select Slot</option>
                  <option value="09:00">09:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                </select>
                <svg className="absolute right-2.5 sm:right-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 pointer-events-none text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

        <div className="mt-4 sm:mt-6 lg:mt-8">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="px-4 sm:px-5 lg:px-6 xl:px-8 py-2 sm:py-2.5 lg:py-3 bg-orange-600 hover:bg-orange-700 transition-colors duration-200 text-white rounded-sm font-dm-sans text-xs sm:text-sm lg:text-base min-h-10 sm:min-h-11 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Booking..." : "Book a Slot"}
          </button>
        </div>
        </form>
      </div>

      <ConfirmationModal 
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        type="consultation"
      />
    </div>
  );
}

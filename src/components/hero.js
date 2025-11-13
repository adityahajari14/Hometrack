"use client"

import { useEffect, useRef, useState } from 'react';

export default function Hero({ scrollY }) {
  const [hasAnimated, setHasAnimated] = useState(false);
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

    if (textRef.current) {
      textObserver.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        textObserver.unobserve(textRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full relative z-10 px-4 sm:px-6 lg:px-8 gap-6 sm:gap-8 lg:gap-12 pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-12 lg:pb-16">
      <div 
        ref={textRef}
        className={`w-full lg:w-1/2 px-0 sm:px-4 lg:px-8 transition-all duration-1000 ease-out ${
          hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white font-noto-sans font-medium leading-tight">
          Where <span className="italic text-orange-600">Expertise</span> Meets
        </h1>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white font-noto-sans font-medium mb-3 sm:mb-4 lg:mb-6 mt-1 sm:mt-2 leading-tight">
          Excellence
        </h1>
        <h3 className="text-xs sm:text-sm lg:text-xl text-white font-dm-sans leading-5 sm:leading-6 lg:leading-8">
          Welcome to Hometrack Wealth Management your trusted partner in
          building and preserving your financial future. Let our expert team help you grow, protect, and manage your wealth with confidence.
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
        <div className="flex flex-col gap-2.5 sm:gap-3 lg:gap-4">
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 lg:gap-4"> 
            <div className="w-full sm:w-1/2">
              <h3 className="text-white font-dm-sans text-xs sm:text-sm lg:text-base xl:text-lg mb-1.5 sm:mb-2">Full Name</h3>
              <input
                type="text"
                className="w-full py-2 sm:py-2.5 lg:py-3 px-2.5 sm:px-3 rounded-md bg-black/20 placeholder:text-[#9E9E9E] text-white text-xs sm:text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-orange-600 min-h-10 sm:min-h-11"
                placeholder="Enter Full Name"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <h3 className="text-white font-dm-sans text-xs sm:text-sm lg:text-base xl:text-lg mb-1.5 sm:mb-2">Email</h3>
              <input
                type="email"
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
                  placeholder="DD/MM/YYYY"
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
                <img
                  src="/date.svg"
                  alt="Date"
                  className="absolute right-2.5 sm:right-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 pointer-events-none"
                />
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <h2 className="text-white font-dm-sans text-xs sm:text-sm lg:text-base xl:text-lg mb-1.5 sm:mb-2">Time</h2>
              <select className="w-full py-2 sm:py-2.5 lg:py-3 px-2.5 sm:px-3 rounded-md bg-black/20 text-[#9E9E9E] text-xs sm:text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-orange-600 min-h-10 sm:min-h-11">
                <option value="" className="bg-black/20">Select Slot</option>
                <option value="09:00">09:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="14:00">2:00 PM</option>
                <option value="15:00">3:00 PM</option>
                <option value="16:00">4:00 PM</option>
                <option value="17:00">5:00 PM</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-4 sm:mt-6 lg:mt-8">
          <button className="px-4 sm:px-5 lg:px-6 xl:px-8 py-2 sm:py-2.5 lg:py-3 bg-orange-600 hover:bg-orange-700 transition-colors duration-200 text-white rounded-sm font-dm-sans text-xs sm:text-sm lg:text-base min-h-10 sm:min-h-11">
            Book a Slot
          </button>
        </div>
      </div>
    </div>
  );
}

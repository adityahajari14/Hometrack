"use client";

import { useEffect } from "react";

export default function BookingModal({ isOpen, onClose, serviceName }) {
  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-black rounded-md py-6 sm:py-8 lg:py-8 px-4 sm:px-6 lg:px-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close Button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white font-dm-sans text-xl sm:text-2xl lg:text-3xl">
            Book For {serviceName}
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:text-orange-600 transition-colors text-3xl leading-none min-w-11 min-h-11 flex items-center justify-center"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-3 sm:gap-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4"> 
            <div className="w-full sm:w-1/2">
              <h3 className="text-white font-dm-sans text-sm sm:text-base lg:text-lg mb-2">Full Name</h3>
              <input
                type="text"
                className="w-full py-2.5 sm:py-3 px-3 rounded-md bg-black/20 border border-[#313131] placeholder:text-[#9E9E9E] text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-600 min-h-11"
                placeholder="Enter Full Name"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <h3 className="text-white font-dm-sans text-sm sm:text-base lg:text-lg mb-2">Email</h3>
              <input
                type="email"
                className="w-full py-2.5 sm:py-3 px-3 rounded-md bg-black/20 border border-[#313131] placeholder:text-[#9E9E9E] text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-600 min-h-11"
                placeholder="Enter Email"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="w-full sm:w-1/2">
              <h2 className="text-white font-dm-sans text-sm sm:text-base lg:text-lg mb-2">Date</h2> 
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
                  className="w-full py-2.5 sm:py-3 px-3 rounded-md bg-black/20 text-white text-sm sm:text-base cursor-pointer placeholder:text-[#9E9E9E] border border-[#313131] focus:outline-none focus:ring-2 focus:ring-orange-600 min-h-11"
                  style={{
                    colorScheme: 'dark',
                    appearance: 'none',
                  }}
                />
                <img
                  src="/date.svg"
                  alt="Date"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 pointer-events-none"
                />
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <h2 className="text-white font-dm-sans text-sm sm:text-base lg:text-lg mb-2">Time</h2>
              <select className="w-full py-2.5 sm:py-3 px-3 rounded-md bg-black/20 border border-[#313131] text-[#9E9E9E] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-600 min-h-11">
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

        <div className="mt-6 sm:mt-8">
          <button className="px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 bg-orange-600 hover:bg-orange-700 transition-colors duration-200 text-white rounded-sm font-dm-sans text-sm sm:text-base lg:text-base min-h-11">
            Book a Slot
          </button>
        </div>
      </div>
    </div>
  );
}

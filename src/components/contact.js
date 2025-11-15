"use client";

import { useState } from "react";
import Button from "./button";
import Image from "next/image";
import ConfirmationModal from "./confirmation-modal";

export default function ContactCard() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    // Show confirmation modal
    setShowConfirmation(true);
    
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      message: ""
    });
  };

  return (
    <section className="relative w-full">
      <div className="bg-[#020202] rounded-lg shadow-[0px_0px_60px_30px_rgba(0,0,0,0.03)] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] xl:grid-cols-[491px_1fr]">
          {/* Contact Information Card */}
          <div className="relative bg-[#1A1A1A] text-white p-6 sm:p-8 lg:p-10 overflow-hidden min-h-[400px] sm:min-h-[500px] lg:min-h-[647px]">
              <div className="w-52 h-52 sm:w-65 sm:h-65 absolute bottom-0 right-0 translate-x-[35%] translate-y-[35%] rounded-full bg-white opacity-10" />
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
                <div>
                  <h3 className="font-dm-sans font-medium text-xl sm:text-2xl lg:text-[28px] mb-2">
                    Contact Information
                  </h3>
                  <p className="font-dm-sans text-[#c9c9c9] text-sm sm:text-base lg:text-lg">
                    Say something to start a live chat!
                  </p>
                </div>

                <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 xl:gap-12 mt-8 sm:mt-12 lg:mt-16 xl:mt-24">
                  {/* Phone */}
                  <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
                    <Image
                      src="/contact/phone.svg"
                      alt="Phone"
                      width={24}
                      height={24}
                      className="shrink-0"
                    />
                    <span className="font-dm-sans text-xs sm:text-sm lg:text-base">+971 4 263 5775 <br /> +971 54 377 1818</span>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
                    <Image
                      src="/contact/mail.svg"
                      alt="Email"
                      width={24}
                      height={24}
                      className="shrink-0"
                    />
                    <span className="font-dm-sans text-xs sm:text-sm lg:text-base break-all">info@hometrack.ae</span>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
                    <Image
                      src="/contact/location.svg"
                      alt="Location"
                      width={24}
                      height={24}
                      className="shrink-0 mt-1"
                    />
                    <p className="font-dm-sans text-xs sm:text-sm lg:text-base max-w-[288px]">
                      Office 31, 3rd Floor The Convention Tower, The World Trade Center, Dubai, UAE
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3 sm:gap-4 mt-8 sm:mt-0">
                <a 
                  href="#twitter" 
                  className="w-[30px] h-[30px] sm:w-9 sm:h-9 rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                  aria-label="Twitter"
                >
                  <Image src="/contact/social-twitter.svg" alt="Twitter" width={30} height={30} />
                </a>
                <a 
                  href="#instagram" 
                  className="w-[30px] h-[30px] sm:w-9 sm:h-9 rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                  aria-label="Instagram"
                >
                  <Image src="/contact/social-instagram.svg" alt="Instagram" width={30} height={30} />
                </a>
                <a 
                  href="#discord" 
                  className="w-[30px] h-[30px] sm:w-9 sm:h-9 rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                  aria-label="Discord"
                >
                  <Image src="/contact/social-discord.svg" alt="Discord" width={30} height={30} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-6 sm:p-8 lg:p-10 xl:p-15 flex flex-col justify-center gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6 lg:gap-8 xl:gap-10">
              <div className="flex flex-col gap-1">
                <label className="font-dm-sans font-medium text-sm sm:text-base lg:text-lg text-white mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                  className="bg-transparent border-b border-gray-700 pb-2 sm:pb-3 text-white placeholder:text-[#434343] font-dm-sans text-sm sm:text-base lg:text-lg focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-dm-sans font-medium text-sm sm:text-base lg:text-lg text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-transparent border-b border-gray-700 pb-2 sm:pb-3 text-white placeholder:text-[#434343] font-dm-sans text-sm sm:text-base lg:text-lg focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-dm-sans font-medium text-sm sm:text-base lg:text-lg text-white mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Write your message.."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-transparent border-b border-gray-700 pb-2 sm:pb-3 text-white placeholder:text-[#8a8a8a] font-dm-sans text-sm sm:text-base lg:text-lg focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              <div className="flex justify-start sm:justify-end mt-2 sm:mt-4 lg:mt-6">
                <Button label="Send Message" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <ConfirmationModal 
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        type="contact"
      />
  </section>
  );
}

import Button from "./button";

export default function ContactCard() {
  return (
    <div className="bg-[#000000] flex flex-col lg:flex-row items-stretch max-h-auto lg:max-h-screen p-3 sm:p-6 lg:p-12 gap-6 lg:gap-8 mx-2 sm:mx-4 lg:mx-12 rounded-2xl text-center lg:text-left">
      <div className="bg-[#202020] px-4 sm:px-6 lg:px-20 py-6 sm:py-10 lg:pb-28 rounded-xl w-full lg:w-auto lg:max-w-[450px] lg:min-w-[400px] relative overflow-hidden min-h-[400px] sm:min-h-[500px]">
        <div className="mb-8 sm:mb-12">
          <h1 className="text-base sm:text-xl lg:text-2xl text-white px-2 py-2 sm:p-4 lg:p-6 font-noto-sans">
            Contact Information
          </h1>
          <h2 className="text-xs sm:text-base lg:text-lg text-[#C9C9C9] font-noto-sans px-2 sm:px-4">
            Say something to start a live chat!
          </h2>
        </div>

        <div className="px-2 sm:px-4 space-y-6 sm:space-y-8 lg:space-y-10 pb-20 sm:pb-24">
          <div className="flex items-center gap-3">
            <img src="/phone.svg" alt="Phone" className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <p className="text-[#C9C9C9] text-xs sm:text-base break-all">+1 (123) 456-7890</p>
          </div>
          
          <div className="flex items-center gap-3">
            <img src="/mail.svg" alt="Email" className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <p className="text-[#C9C9C9] text-xs sm:text-base break-all">example@gmail.com</p>
          </div>
          
          <div className="flex items-start gap-3">
            <img src="/location.svg" alt="Location" className="w-4 h-4 sm:w-5 sm:h-5 mt-1 shrink-0" />
            <p className="text-[#C9C9C9] text-xs sm:text-base leading-relaxed">
              132 Dartmouth Street Boston, Massachusetts 02156 United States
            </p>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 flex gap-3 sm:gap-4 z-10">
          <img src="/twitter.svg" alt="Twitter" className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:opacity-80 transition-opacity" />
          <img src="/instagram.svg" alt="Instagram" className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:opacity-80 transition-opacity" />
          <img src="/discord.svg" alt="Discord" className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:opacity-80 transition-opacity" />
        </div>

        <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-[#2C2C2C] rounded-tl-full"></div>
      </div>

      <div className="text-left flex-1 pl-0 sm:pl-4 lg:pl-10 w-full max-w-full overflow-hidden">
        <div className="mb-4 sm:mb-6 lg:mb-8">
          <h2 className="font-dm-sans text-sm sm:text-lg lg:text-xl text-white mb-2">Full Name</h2>
          <input
            type="text"
            className="text-xs sm:text-base lg:text-lg w-full bg-[#000000] border-none border-b border-gray-600 rounded-md mt-2 text-white text-left py-2 px-0 focus:outline-none focus:border-orange-600"
            placeholder="Enter your full name"
          />
        </div>

        <div className="mb-4 sm:mb-6 lg:mb-8">
          <h2 className="font-dm-sans text-sm sm:text-lg lg:text-xl text-white mb-2">Email</h2>
          <input
            type="email"
            className="text-xs sm:text-base lg:text-lg w-full bg-[#000000] border-none border-b border-gray-600 rounded-md mt-2 text-white text-left py-2 px-0 focus:outline-none focus:border-orange-600"
            placeholder="example@gmail.com"
          />
        </div>

        <div className="mb-4 sm:mb-6 lg:mb-8">
          <h2 className="font-dm-sans text-sm sm:text-lg lg:text-xl text-white mb-3 sm:mb-4">Select Subject</h2>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 lg:gap-6">
            <label className="flex items-center gap-2 text-[#C9C9C9] font-noto-sans text-xs sm:text-base cursor-pointer whitespace-nowrap">
              <input
                type="radio"
                className="w-3 h-3 sm:w-4 sm:h-4 shrink-0"
                id="subject1"
                name="subject"
                value="subject1"
              />
              <span className="leading-tight">General Inquiry</span>
            </label>

            <label className="flex items-center gap-2 text-[#C9C9C9] font-noto-sans text-xs sm:text-base cursor-pointer whitespace-nowrap">
              <input
                type="radio"
                className="w-3 h-3 sm:w-4 sm:h-4 shrink-0"
                id="subject2"
                name="subject"
                value="subject2"
              />
              <span className="leading-tight">Residential</span>
            </label>

            <label className="flex items-center gap-2 text-[#C9C9C9] font-noto-sans text-xs sm:text-base cursor-pointer">
              <input
                type="radio"
                className="w-3 h-3 sm:w-4 sm:h-4 shrink-0"
                id="subject3"
                name="subject"
                value="subject3"
              />
              <span className="leading-tight">Wealth Management</span>
            </label>
          </div>
        </div>

        <div className="mb-4 sm:mb-6 lg:mb-6">
          <h2 className="font-dm-sans text-sm sm:text-lg lg:text-xl text-white mb-2">Message</h2>
          <textarea
            className="text-xs sm:text-base lg:text-lg w-full bg-[#000000] border-none border-b border-gray-600 rounded-md mt-2 text-white text-left py-2 px-0 h-20 sm:h-24 lg:h-32 resize-none focus:outline-none focus:border-orange-600"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        <div className="mt-4 sm:mt-6 lg:mt-8">
          <Button label="Send Message" />
        </div>
      </div>
    </div>
  );
}

import Button from "./button";

export default function ContactCard() {
  return (
    <div className="bg-[#000000] flex flex-col lg:flex-row items-center max-h-auto lg:max-h-screen p-4 sm:p-6 lg:p-12 gap-6 lg:gap-6 mx-2 sm:mx-4 lg:mx-12 rounded-2xl text-center lg:text-left">
      <div className="bg-[#202020] px-4 sm:px-8 lg:px-20 py-8 sm:py-12 lg:pb-28 rounded-xl w-full lg:w-auto lg:max-w-[450px] relative overflow-hidden">
        <div>
          <h1 className="text-lg sm:text-xl lg:text-2xl text-white p-2 sm:p-4 lg:p-6 font-noto-sans">
            Contact Information
          </h1>
          <h2 className="text-sm sm:text-base lg:text-lg text-[#C9C9C9] font-noto-sans px-2 sm:px-4">
            Say something to start a live chat!
          </h2>
        </div>

        <div className="px-2 sm:px-4 pt-20">
          <div className="flex items-center gap-3 mt-2">
            <img src="/phone.svg" alt="Phone" className="w-5 h-5" />
            <p className="text-[#C9C9C9] text-sm sm:text-base">+1 (123) 456-7890</p>
          </div>
          
          <div className="flex items-center gap-3 mt-2 pt-10">
            <img src="/mail.svg" alt="Email" className="w-5 h-5" />
            <p className="text-[#C9C9C9] text-sm sm:text-base">example@gmail.com</p>
          </div>
          
          <div className="flex items-start gap-3 mt-2 pt-10">
            <img src="/location.svg" alt="Location" className="w-5 h-5 mt-1" />
            <p className="text-[#C9C9C9] text-sm sm:text-base">
              132 Dartmouth Street Boston, Massachusetts 02156 United States
            </p>
          </div>
        </div>

        <div className="absolute bottom-6 left-6 flex gap-4 z-10">
          <img src="/twitter.svg" alt="Twitter" className="w-6 h-6 cursor-pointer" />
          <img src="/instagram.svg" alt="Instagram" className="w-6 h-6 cursor-pointer" />
          <img src="/discord.svg" alt="Discord" className="w-6 h-6 cursor-pointer" />
        </div>

        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#2C2C2C] rounded-tl-full"></div>
      </div>

      <div className="text-left flex-1 pl-0 sm:pl-4 lg:pl-10 w-full">
        <div className="mb-4 sm:mb-6 lg:mb-10">
          <h2 className="font-dm-sans text-base sm:text-lg lg:text-xl text-white">Full Name</h2>
          <input
            type="text"
            className="text-sm sm:text-base lg:text-lg w-full bg-[#000000] border-none border-b border-gray-600 rounded-md mt-2 text-white text-left py-2"
            placeholder="Enter your full name"
          />
        </div>

        <div className="mb-4 sm:mb-6 lg:mb-10">
          <h2 className="font-dm-sans text-base sm:text-lg lg:text-xl text-white">Email</h2>
          <input
            type="email"
            className="text-sm sm:text-base lg:text-lg w-full bg-[#000000] border-none border-b border-gray-600 rounded-md mt-2 text-white text-left py-2"
            placeholder="example@gmail.com"
          />
        </div>

        <div className="mb-4 sm:mb-6 lg:mb-10">
          <h2 className="font-dm-sans text-base sm:text-lg lg:text-xl text-white mb-3 sm:mb-4">Select Subject</h2>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6">
            <label className="flex items-center gap-2 text-[#C9C9C9] font-noto-sans text-sm sm:text-base cursor-pointer">
              <input
                type="radio"
                className="w-4 h-4"
                id="subject1"
                name="subject"
                value="subject1"
              />
              General Inquiry
            </label>

            <label className="flex items-center gap-2 text-[#C9C9C9] font-noto-sans text-sm sm:text-base cursor-pointer">
              <input
                type="radio"
                className="w-4 h-4"
                id="subject2"
                name="subject"
                value="subject2"
              />
              Residential
            </label>

            <label className="flex items-center gap-2 text-[#C9C9C9] font-noto-sans text-sm sm:text-base cursor-pointer">
              <input
                type="radio"
                className="w-4 h-4"
                id="subject3"
                name="subject"
                value="subject3"
              />
              Wealth Management
            </label>
          </div>
        </div>

        <div className="mb-4 sm:mb-6 lg:mb-8">
          <h2 className="font-dm-sans text-base sm:text-lg lg:text-xl text-white mb-2">Message</h2>
          <textarea
            className="text-sm sm:text-base lg:text-lg w-full bg-[#000000] border-none border-b border-gray-600 rounded-md mt-2 text-white text-left py-2 h-24 sm:h-28 lg:h-32 resize-none"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        <div className="mt-6 sm:mt-8 lg:mt-10">
          <Button label="Send Message" />
        </div>
      </div>
    </div>
  );
}

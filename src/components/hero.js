"use client"

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full relative z-10 px-4 sm:px-6 lg:px-8 gap-6 sm:gap-8 lg:gap-12 py-12 sm:py-16 lg:py-0">
      <div className="w-full lg:w-1/2 px-0 sm:px-4 lg:px-8">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl text-white font-noto-sans font-bold">
          Where <span className="italic text-orange-600">Expertise</span> Meets
        </h1>
        <h1 className="text-2xl sm:text-3xl lg:text-5xl text-white font-noto-sans font-bold mb-4 sm:mb-6 lg:mb-6 mt-2">
          Excellence
        </h1>
        <h3 className="text-sm sm:text-base lg:text-xl text-white font-dm-sans leading-6 sm:leading-7 lg:leading-8">
          Welcome to Hometrack Wealth Management your trusted partner in
          building and preserving your financial future. Let our expert team help you grow, protect, and manage your wealth with confidence.
        </h3>
      </div>

      <div className="w-full lg:w-1/2 bg-black/58 rounded-md py-6 sm:py-8 lg:py-8 flex flex-col mx-0 sm:mx-0 lg:mx-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-white font-dm-sans text-xl sm:text-2xl lg:text-3xl">
          Book For Consultation
        </h2>
        <div className="flex flex-col gap-3 sm:gap-4 pt-4 sm:pt-6">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4"> 
            <div className="w-full sm:w-1/2">
              <h3 className="text-white font-dm-sans text-sm sm:text-base lg:text-lg">Full Name</h3>
              <input
                type="text"
                className="w-full mt-2 py-2 px-3 rounded-md bg-black/20 placeholder:text-[#9E9E9E] text-white text-sm sm:text-base"
                placeholder="Enter Full Name"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <h3 className="text-white font-dm-sans text-sm sm:text-base lg:text-lg">Email</h3>
              <input
                type="email"
                className="w-full mt-2 py-2 px-3 rounded-md bg-black/20 placeholder:text-[#9E9E9E] text-white text-sm sm:text-base"
                placeholder="Enter Email"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="w-full sm:w-1/2">
              <h2 className="text-white font-dm-sans text-sm sm:text-base lg:text-lg">Date</h2> 
              <div className="relative mt-2">
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
                  className="w-full py-2 px-3 rounded-md bg-black/20 text-white text-sm sm:text-base cursor-pointer placeholder:text-[#9E9E9E]"
                  style={{
                    colorScheme: 'dark',
                    appearance: 'none',
                  }}
                />
                <img
                  src="/date.svg"
                  alt="Date"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
                />
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <h2 className="text-white font-dm-sans text-sm sm:text-base lg:text-lg">Time</h2>
              <select className="w-full mt-2 py-2 px-3 rounded-md bg-black/20 text-[#9E9E9E] text-sm sm:text-base">
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
          <button className="w-full px-4 sm:px-6 lg:px-8 py-2 sm:py-3 bg-orange-600 hover:bg-orange-700 transition-colors duration-200 text-white rounded-sm font-dm-sans text-sm sm:text-base lg:text-base">
            Book a Slot
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="flex items-center justify-center w-full h-full relative z-10 px-8">
      <div className="w-1/2 px-8">
        <h1 className="text-5xl text-white font-noto-sans">
          Where <span className="italic text-orange-600">Expertise</span> Meets
        </h1>
        <h1 className="text-5xl text-white font-noto-sans mb-6 mt-2">
          Excellence
        </h1>
        <h3 className="text-white text-xl font-dm-sans leading-8">
          Welcome to Hometrack Wealth Management your trusted partner in
          building and preserving your financial future. Let our expert team h
          elp you grow, protect, and manage your wealth with confidence.
        </h3>
      </div>
      <div className="w-1/2 bg-black/58 rounded-md py-8 flex flex-col mx-8 px-8">
        <h2 className="text-white font-dm-sans text-3xl">
          Book For Consultation
        </h2>
        <div className="flex flex-col gap-4 pt-4">
          <div className="flex gap-4"> 
            <div className="w-1/2">
              <h3 className="text-white font-dm-sans text-lg">Full Name</h3>
              <input
                type="text"
                className="w-full mt-2 py-2 px-4 rounded-md bg-black/20 placeholder:text-white text-white"
                placeholder="Enter full name"
              />
            </div>
            <div className="w-1/2">
              <h3 className="text-white font-dm-sans text-lg">Email</h3>
              <input
                type="email"
                className="w-full mt-2 py-2 px-4 rounded-md bg-black/20 placeholder:text-white text-white"
                placeholder="Enter email"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-1/2">
              <h2 className="text-white font-dm-sans text-lg">Date</h2> 
              <input
                type="date"
                className="w-full mt-2 py-2 px-4 rounded-md bg-black/20 text-white"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-white font-dm-sans text-lg">Time</h2>
              <select className="w-full mt-2 py-2 px-4 rounded-md bg-black/20 text-white">
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
        <div className="mt-6">
          <button className="w-full px-8 py-2 bg-orange-600 text-white rounded-sm font-dm-sans">
            Book a Slot
          </button>
        </div>
      </div>
    </div>
  );
}

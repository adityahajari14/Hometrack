import Button from "./button";

export default function ContactCard() {
  return (
    <div className="bg-[#000000] flex max-h-screen p-12 gap-6 mx-12 rounded-2xl text-center">
      <div className="bg-[#202020] px-32 pb-28 rounded-xl">
        <div>
          <h1 className="text-2xl  text-white p-6 font-noto-sans">
            Contact Information
          </h1>
          <h2 className="text-lg text-[#C9C9C9] font-noto-sans">
            Say something to start a live chat!
          </h2>
        </div>

        <div>
          <h2 className="font-dm-sans text-xl text-white mt-10">Phone</h2>
          <p className="text-[#C9C9C9] mt-2">+1 (123) 456-7890</p>
          <h2 className="font-dm-sans text-xl text-white mt-10">Email</h2>
          <p className="text-[#C9C9C9] mt-2">example@gmail.com</p>
          <h2 className="font-dm-sans text-xl text-white mt-10">Location</h2>
          <p className="text-[#C9C9C9] mt-2">
            132 Dartmouth Street Boston, Massachusetts 02156 United States
          </p>
        </div>

        <div></div>
      </div>
      <div className="text-left flex-1 pl-10">
        <div>
          <h2 className="font-dm-sans text-xl text-white">Full Name</h2>
          <input
            type="text"
            className="text-lg w-full bg-[#000000] border-none border-b border-gray-600 rounded-md mt-2 text-white text-left py-2"
            placeholder="Enter your full name"
          />
        </div>

        <div className="mt-10 text-left">
          <h2 className="font-dm-sans text-xl text-white">Email</h2>
          <input
            type="email"
            className="text-lg w-full bg-[#000000] border-none border-b border-gray-600 rounded-md mt-2 text-white text-left py-2"
            placeholder="example@gmail.com"
          />
        </div>

        <div className="mt-10 text-left">
          <h2 className="font-dm-sans text-xl text-white">Select Subject</h2>
          <div className="flex mt-2 space-x-10">
            <input
              type="radio"
              className="mr-4"
              id="subject1"
              name="subject"
              value="subject1"
            />
            <label className="text-[#C9C9C9] font-noto-sans" htmlFor="subject1">
              General Inquiry
            </label>
            <br />
            <input
              type="radio"
              className="mr-4"
              id="subject2"
              name="subject"
              value="subject2"
            />
            <label className="text-[#C9C9C9] font-noto-sans" htmlFor="subject2">
              Residential
            </label>

            <input
              type="radio"
              className="mr-4"
              id="subject2"
              name="subject"
              value="subject2"
            />
            <label className="text-[#C9C9C9] font-noto-sans" htmlFor="subject2">
              Wealth Management
            </label>
          </div>

          <div className="">
            <h2 className="font-dm-sans text-xl text-white mt-10">Message</h2>
            <textarea
              className="text-lg w-full bg-[#000000] border-none border-b border-gray-600 rounded-md mt-2 text-white text-left py-2 h-32"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <Button
            label="Send Message"
            styles="mt-10 bg-orange-600 hover:bg-orange-700"
          />
        </div>
      </div>
    </div>
  );
}

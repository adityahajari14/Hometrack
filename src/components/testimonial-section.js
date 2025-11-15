import TestimonialCard from "./testimonial-card";

const TestimonialSection = () => {
  return (
    <section
        className="bg-[#020202] py-12 sm:py-16 lg:py-20 w-full overflow-x-hidden"
        id="testimonials"
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-0 mb-8 sm:mb-12 items-start">
            <h2 className="text-xl sm:text-2xl lg:text-3xl w-full lg:w-auto leading-tight font-noto-sans font-medium">
              We Truly Value Our Client&apos;s{" "}
              <br className="hidden sm:block" />
              Overall <span className="text-orange-600 font-semibold">Experience</span>
            </h2>
            <div className="text-base sm:text-lg lg:text-xl font-dm-sans lg:ml-auto text-white leading-relaxed w-full lg:w-auto lg:text-left">
              <p>
                Our work to create safe and beneficial AI requires a deep<br className="hidden lg:block" />
                understanding of the potential risks and benefits, as well as<br className="hidden lg:block" />
                careful consideration of the impact.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <TestimonialCard
              name="Saleh Al Mansoori"
              feedback="Hometrack provided exceptional guidance throughout my property investment journey. Their team listened to my concerns and delivered clear, actionable advice tailored for Dubai’s market. I appreciated their transparency and personal approach at every step."
              imageurl="/home/review1.webp"
            />
            <TestimonialCard
              name="Marina Petrova"
              feedback="The professionalism and efficiency of Hometrack made my Dubai property purchase seamless. Every detail was handled with care, and I was kept informed at every stage. I highly recommend them for anyone seeking trustworthy real estate advisors."
              imageurl="/home/review2.webp"
            />
            <TestimonialCard
              name="Nadeem Ahmed"
              feedback=" I was impressed by Hometrack’s risk assessment and wealth planning. They explained all options clearly, addressed every question, and made sure I felt confident about my decisions. Their support sets them apart in Dubai’s competitive market."
              imageurl="/home/review3.webp"
            />
          </div>
        </div>
      </section>
  )
}

export default TestimonialSection;
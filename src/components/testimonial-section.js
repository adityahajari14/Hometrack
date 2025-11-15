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
              We Truly Value Our Clients&apos;{" "}
              <br className="hidden sm:block" />
              Overall <span className="text-orange-600">Experience</span>
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
              name="Lorem Ipsum"
              feedback="Donec auctor ligula sit amet mauris tincidunt, et viverra libero congue. Morbi vehicula interdum felis, non euismod felis auctor non. Phasellus facilisis urna ut metus mollis, a sollicitudin libero suscipit."
              imageurl="/person.webp"
            />
            <TestimonialCard
              name="Lorem Ipsum"
              feedback="Donec auctor ligula sit amet mauris tincidunt, et viverra libero congue. Morbi vehicula interdum felis, non euismod felis auctor non. Phasellus facilisis urna ut metus mollis, a sollicitudin libero suscipit."
              imageurl="/person.webp"
            />
            <TestimonialCard
              name="Lorem Ipsum"
              feedback="Donec auctor ligula sit amet mauris tincidunt, et viverra libero congue. Morbi vehicula interdum felis, non euismod felis auctor non. Phasellus facilisis urna ut metus mollis, a sollicitudin libero suscipit."
              imageurl="/person.webp"
            />
          </div>
        </div>
      </section>
  )
}

export default TestimonialSection;
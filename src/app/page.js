import Image from "next/image";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import ServiceCard from "@/components/service-card";
import Button from "@/components/button";
import TestimonialCard from "@/components/testimonial-card";
import ContactCard from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-[#020202] text-white overflow-x-hidden">
      <Navbar />

      <section className="overflow-x-hidden relative" id="home">
        <div
          className="w-screen h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/background.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/64 bg-opacity-90"></div>
          <Hero />
        </div>
      </section>

      <section 
        className="w-full py-12 sm:py-16 lg:py-20 bg-contain bg-right bg-no-repeat relative" 
        id="insights"
        style={{ backgroundImage: "url('/bg-2.png')" }}
      >
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-6 sm:gap-8 lg:gap-24 px-4 sm:px-6 lg:px-20 relative z-10">
          <div className="w-full lg:w-1/2 px-0 sm:px-4 lg:px-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-left font-noto-sans mb-4 sm:mb-6 lg:mb-8">
              Insights Hub
            </h2>
            <p className="font-dm-sans text-sm sm:text-base lg:text-lg pt-4 sm:pt-6 lg:pt-8 leading-relaxed text-gray-300">
              Welcome to Hometrack Insights Hub your central destination for
              complete financial transparency and performance.
              <br className="hidden sm:block" />
              Here, you can explore a detailed overview of all investments made,
              including asset classes, portfolio distribution, and growth
              trends.
              <br className="hidden sm:block" />
              Gain real-time access to revenue generated, returns achieved, and
              performance metrics all in one powerful dashboard.
              <br className="hidden sm:block" />
              We turn numbers into meaningful insights, helping you track
              progress, make informed decisions, and unlock new opportunities
              for smarter wealth growth.
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-12 w-full lg:w-1/2 px-0 sm:px-4 lg:px-8">
            <div>
              <h2 className="text-orange-600 text-xl sm:text-2xl lg:text-3xl font-dm-sans">
                Total Assets
              </h2>
              <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl mt-2 sm:mt-3 lg:mt-4">
                $0 Billion
              </h1>
            </div>
            <hr className="border-t border-gray-600 mx-0 sm:mx-2" />

            <div>
              <h2 className="text-orange-600 text-xl sm:text-2xl lg:text-3xl font-dm-sans">
                Countries
              </h2>
              <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl mt-2 sm:mt-3 lg:mt-4">
                0
              </h1>
            </div>
            <hr className="border-t border-gray-600 mx-0 sm:mx-2" />

            <div>
              <h2 className="text-orange-600 text-xl sm:text-2xl lg:text-3xl font-dm-sans">
                Assets
              </h2>
              <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl mt-2 sm:mt-3 lg:mt-4">
                0
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-[#020202] py-12 sm:py-16 lg:py-20 w-full"
        id="services"
      >
        <div className="w-full px-4 sm:px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-0 mb-8 sm:mb-12 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-noto-sans w-full lg:w-auto">
              Our <span className="text-orange-600">Services</span>
            </h2>
            <div className="text-base sm:text-lg lg:text-2xl font-dm-sans lg:ml-auto text-gray-300 leading-relaxed">
              <p className="">
                Our work to create safe and beneficial AI requires a deep<br className="hidden md:block"></br>
                understanding of the potential risks and benefits, as well as<br className="hidden md:block"></br>
                careful consideration of the impact.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <ServiceCard title="Wealth Desk" imageurl="/wealth-desk.jpg" />
            <ServiceCard
              title="Real Estate Syndicates"
              imageurl="/real-estate-syndicates.jpg"
            />
            <ServiceCard
              title="Residency Capital"
              imageurl="/residency-capital.jpg"
            />
            <ServiceCard title="Legacy Funds" imageurl="/legacy-funds.jpg" />
            <ServiceCard
              title="YieldMax Reports"
              imageurl="/yieldmax-reports.jpg"
            />
            <ServiceCard
              title="Digital Portfolio Access"
              imageurl="/digital-portfolio-access.jpg"
            />
          </div>
        </div>
      </section>

      <section
        className="bg-black/40 py-12 sm:py-16 lg:py-20 w-full"
        id="founder"
      >
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12 px-4 sm:px-6 lg:px-20 mb-8 sm:mb-12 lg:mb-12">
          <div className="w-full lg:w-1/2 px-0 sm:px-4 lg:px-0">
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-noto-sans mb-4 sm:mb-6 lg:mb-8">
              Meet Our <span className="text-orange-600">Founder</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg font-noto-sans leading-6 sm:leading-7 lg:leading-8 text-gray-300">
              With over 24 years of banking experience across the Middle East
              and the UK, this journey spans senior roles in Treasury, Wealth
              Management, and Commercial Banking. A strong client-first approach
              was built on trust, credibility, and lasting relationships.
              <br />
              In 1998, the move to the UK opened doors to further expertise
              through a Financial Engineering degree and regulation by Financial
              Conduct Authority, advising high-net-worth clients on diversified
              investment portfolios.
              <br />
              In 2006, the transition from banker to entrepreneur led to the
              launch of a business consultancy firm in London, driven by the
              vision to build a lasting legacy.
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center px-4">
            <div className="relative w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
              <Image
                src="/founder.png"
                alt="Founder"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="flex md:block justify-center px-4 sm:px-6 lg:px-20">
          <Button label={"Read More"} />
        </div>
      </section>

      <section
        className="bg-[#020202] py-12 sm:py-16 lg:py-20 w-full"
        id="safety-and-responsibility"
      >
        <div className="w-full px-4 sm:px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-0 mb-8 sm:mb-12 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-noto-sans w-full lg:w-auto">
              Safety & <span className="text-orange-600">Responsibility</span>
            </h2>
            <div className="text-base sm:text-lg lg:text-2xl font-dm-sans lg:ml-auto text-gray-300 leading-relaxed">
              <p className="">
                Our work to create safe and beneficial AI requires a deep<br className="hidden md:block"></br>
                understanding of the potential risks and benefits, as well as<br className="hidden md:block"></br>
                careful consideration of the impact.
              </p>
            </div>
          </div>

          <div className="relative w-full h-64 sm:h-96 lg:h-screen overflow-hidden rounded-lg">
            <Image
              src="/hand-shake.jpg"
              alt="Safety and Responsibility"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        </div>
      </section>

      <section
        className="bg-[#020202] py-12 sm:py-16 lg:py-20 w-full"
        id="testimonials"
      >
        <div className="w-full px-4 sm:px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-0 mb-8 sm:mb-12 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl w-full lg:w-auto leading-tight">
              We Truly Value Our Clients&apos;{" "}
              <br className="hidden sm:block" />
              Overall <span className="text-orange-600">Experience</span>
            </h2>
            <div className="text-base sm:text-lg lg:text-2xl font-noto-sans lg:ml-auto text-gray-300 leading-relaxed">
              <p className="">
                Our work to create safe and beneficial AI requires a deep<br></br>
                understanding of the potential risks and benefits, as well as<br></br>
                careful consideration of the impact.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <TestimonialCard
              name="Lorem Ipsum"
              feedback="Donec auctor ligula sit amet mauris tincidunt, et viverra libero congue. Morbi vehicula interdum felis, non euismod felis auctor non. Phasellus facilisis urna ut metus mollis, a sollicitudin libero suscipit."
              imageurl="/person.jpg"
            />
            <TestimonialCard
              name="Lorem Ipsum"
              feedback="Donec auctor ligula sit amet mauris tincidunt, et viverra libero congue. Morbi vehicula interdum felis, non euismod felis auctor non. Phasellus facilisis urna ut metus mollis, a sollicitudin libero suscipit."
              imageurl="/person.jpg"
            />
            <TestimonialCard
              name="Lorem Ipsum"
              feedback="Donec auctor ligula sit amet mauris tincidunt, et viverra libero congue. Morbi vehicula interdum felis, non euismod felis auctor non. Phasellus facilisis urna ut metus mollis, a sollicitudin libero suscipit."
              imageurl="/person.jpg"
            />
          </div>
        </div>
      </section>

      <section
        className="bg-[#020202] py-12 sm:py-16 lg:py-20 w-full"
        id="contact-us"
      >
        <ContactCard />
      </section>

      <Footer />
    </main>
  );
}

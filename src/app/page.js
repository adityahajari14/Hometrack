import Image from "next/image";
import Hero from "@/components/hero";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import ServiceCard from "@/components/service-card";
import Button from "@/components/button";
import ContactCard from "@/components/contact";
import Footer from "@/components/footer";
import TestimonialSection from "@/components/testimonial-section";
import AnimatedCounter from "@/components/animated-counter";
import AnimationWrapper from "@/components/animation-wrapper";

export default function Home() {
  const valueCards = [
    {
      icon: "/home/Handshake.svg",
      title: "Integrity and Prudence",
      description: "Every client relationship is guided by accuracy and responsibility.",
    },
    {
      icon: "/home/User.svg",
      title: "Client Focus",
      description: "We listen before we advise. Our purpose is to protect and grow your wealth, not our volume.",
    },
    {
      icon: "/home/ChartLineUp2.svg",
      title: "Continuous Insight",
      description: "Markets evolve. We evolve with them combining knowledge, foresight, and analysis to stay ahead",
    }
  ];



  return (
    <AnimationWrapper>
      <main className="bg-[#020202] text-white overflow-x-hidden">
        <Navbar />

        <HeroSection />

        <section 
          className="w-full py-12 sm:py-16 lg:py-20 bg-contain bg-right bg-no-repeat relative overflow-x-hidden" 
          id="insights"
          style={{ backgroundImage: "url('/bg-2.webp')" }}
        >
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-8 sm:gap-10 lg:gap-24">
            <div className="w-full lg:w-full">
            <h2 className="animate-on-scroll slide-in-left text-2xl sm:text-3xl lg:text-4xl font-medium text-left font-noto-sans mb-4 sm:mb-6 lg:mb-8 leading-tight">
              <span className="text-orange-600 font-semibold">Insights</span> that inform wealth.
            </h2>
            <p className="scale-in-repeat font-dm-sans text-base sm:text-lg lg:text-xl pt-2 sm:pt-4 lg:pt-8 leading-relaxed text-white">
              Our Insights Hub offers a clear view of property markets, economic shifts, and investment patterns that shape value.
              <br/>Each data point reflects experience, analysis, and foresight  helping clients stay ahead in a world that moves fast and rewards foresight.
            </p>
          </div>

          <div className="scale-in-repeat flex flex-col gap-4 sm:gap-6 lg:gap-8 w-full lg:w-1/2">
            <div>
              <h2 className="text-orange-600 text-lg sm:text-xl lg:text-2xl font-manrope font-medium">
                Total Assets
              </h2>
              <h1 className="text-white text-xl sm:text-2xl lg:text-4xl mt-2 sm:mt-3 lg:mt-4 wrap-break-word font-manrope font-light">
                $<AnimatedCounter end={24} suffix=" Billion" duration={2500} />
              </h1>
            </div>
            <hr className="border-t border-gray-600 mx-0 sm:mx-2" />

            <div>
              <h2 className="text-orange-600 text-lg sm:text-xl lg:text-2xl font-manrope font-medium">
                Countries
              </h2>
              <h1 className="text-white text-xl sm:text-2xl lg:text-4xl mt-2 sm:mt-3 lg:mt-4 font-manrope font-light">
                <AnimatedCounter end={10} duration={2000} />
              </h1>
            </div>
            <hr className="border-t border-gray-600 mx-0 sm:mx-2" />

            <div>
              <h2 className="text-orange-600 text-lg sm:text-xl lg:text-2xl font-manrope font-medium">
                Assets
              </h2>
              <h1 className="text-white text-xl sm:text-2xl lg:text-4xl mt-2 sm:mt-3 lg:mt-4 font-manrope font-light">
                <AnimatedCounter end={22} duration={2000} />
              </h1>
            </div>
          </div>
        </div>
        </div>
        </section>

        <section
          className="bg-[#020202] py-12 sm:py-16 lg:py-20 w-full overflow-x-hidden"
          id="services"
        >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-60 mb-8 sm:mb-12 items-start">
            <h2 className="animate-on-scroll slide-in-left text-xl sm:text-2xl lg:text-3xl w-full lg:w-auto leading-tight font-noto-sans font-medium text-nowrap">
              Our <span className="text-orange-600 font-semibold">Services</span>
            </h2>
            <div className="scale-in-repeat text-sm sm:text-base lg:text-xl font-dm-sans lg:ml-auto text-white leading-relaxed w-full lg:w-auto">
              <p className="">
                At Hometrack, we view real estate as a valuable asset class that can grow, preserve, and transfer wealth when managed with foresight. Our services are designed for discerning individuals who see property not as a purchase, but as a long-term wealth. Each advisory solution we offer is anchored in rigorous financial analysis, market intelligence, and a deep understanding of your unique objectives to preserve your legacy  ensuring your assets performs to your expectation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="scale-in-repeat">
              <ServiceCard
               title="Property Wealth Advisory"
               imageurl="/property-wealth-advisory/property-wealth-hero.webp" 
               description={"Turning property into a portfolio of purpose."} 
               link={"/property-wealth-advisory"}
               logo={"/home/Building.svg"}
               />
            </div>
            <div className="scale-in-repeat">
              <ServiceCard
                title="Risk Profiling and Assessments"
                imageurl="/risk-profilling-and-assessments/risk-profilling-and-assessments-image.webp"
                description={"Intelligence before investment."}
                link={"/risk-profiling-and-assessments"}
                logo={"/home/Warning.svg"}
              />
            </div>
            <div className="scale-in-repeat">
              <ServiceCard
                title="Mortgage and Lending Advisory"
                imageurl="/mortgage-and-lending-advisory/mortgage-and-lending-advisory-image.webp"
                description={"Financing that strengthens, not strains."}
                link={"/mortgage-and-lending-advisory"}
                logo={"/home/HandArrowUp.svg"}
              />
            </div>
            <div className="scale-in-repeat">
              <ServiceCard 
               title="Wealth Management Services" 
               imageurl="/wealth-management-services/wealth-management-services-image.webp" 
               description={"Integrating real estate into the language of capital."}
               link={"/wealth-management-services"}
               logo={"/home/MoneyWavy.svg"}
               />
            </div>
            <div className="scale-in-repeat">
              <ServiceCard
                title="Real Estate Asset Management"
                imageurl="/real-estate-asset-management/real-estate-asset-management-image.webp"
                description={"Thinking beyond ownership."}
                link={"/real-estate-asset-management"}
                logo={"/home/Buildings.svg"}
              />
            </div>
            <div className="scale-in-repeat">
              <ServiceCard
                title="YieldMax Reports"
                imageurl="/yieldmax-reports/yieldmax-reports.webp"
                description={"Turning market data into strategic advantage."}
                link={"/yieldmax-reports"}
                logo={"/home/ChartLineUp.svg"}
              />
            </div>
          </div>
        </div>
        </section>

        <section
          className="bg-black/40 py-12 sm:py-16 lg:py-20 w-full overflow-x-hidden"
          id="founder"
        >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
          <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-6 mb-8 sm:mb-12">
          
          {/* Content - First on Desktop */}
          <div className="w-full lg:w-1/2 px-0 sm:px-4 lg:px-0 flex flex-col gap-6 sm:gap-8 lg:gap-10">
            {/* Heading - Always First */}
            <h2 className="animate-on-scroll slide-in-left text-2xl sm:text-3xl lg:text-3xl font-noto-sans leading-tight">
              Meet Our <span className="text-orange-600 font-semibold">Founder</span>
            </h2>
            
            {/* Image - Second on Mobile (after heading, before content), Hidden on Desktop */}
            <div className="scale-in-repeat w-full flex justify-center lg:hidden">
              <div className="relative w-[90%] aspect-4/5">
                <Image
                  src="/home/founder.webp"
                  alt="Founder"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* Content - Third on Mobile */}
            <p className="scale-in-repeat text-sm sm:text-base lg:text-lg font-noto-sans leading-6 sm:leading-7 lg:leading-8 text-gray-300">
              With over two decades in international banking from the Middle East to the UK our founder developed a deep understanding of finance, markets, and people. His career across Treasury, Wealth Management, and Commercial Banking instilled a principle that defines Hometrack today: wealth must be managed with responsibility, not haste.
              <br/><br/>By 2023, this vision took shape as Hometrack, a Dubai based real estate firm that treats property not as a commodity but as a cornerstone in wealth creation.  
              <br/><br/>Every decision at Hometrack reflects our rooted philosophy — discreet, measured, and enduring.
            </p>
            <div className="scale-in-repeat bg-[#ff5810] flex flex-col gap-2.5 px-4 sm:px-[21px] py-6 sm:py-[33px] w-full">
              <div className="flex flex-col min-h-[115px] items-end justify-between w-full gap-4">
                <p className="font-noto-sans font-bold italic leading-[1.524] text-lg sm:text-xl text-white w-full">
                  &ldquo;We don&apos;t sell property. We advise on creating lasting value&rdquo;
                </p>
                <div className="flex flex-col font-dm-sans font-medium items-center justify-center leading-[1.524] text-white w-full sm:w-[141px]">
                  <p className="text-base sm:text-lg w-full sm:w-[130px] text-center sm:text-left">
                    Mustafa Aziz
                  </p>
                  <p className="text-sm sm:text-base whitespace-nowrap">
                    Founder and CEO
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image - Second on Desktop (right side), Hidden on Mobile */}
          <div className="scale-in-repeat w-full lg:w-1/2 justify-center px-0 sm:px-4 hidden lg:flex">
            <div className="relative w-[90%] aspect-4/5">
              <Image
                src="/home/founder.webp"
                alt="Founder"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
        </div>
        </section>

        <section
          className="bg-black/40 py-12 sm:py-16 lg:py-20 w-full overflow-x-hidden"
          id="values"
        >
        <div className="flex flex-col gap-6 sm:gap-7 lg:gap-8 max-w-[1440px] m-auto px-4 sm:px-6 lg:px-20">
          <h2 className="animate-on-scroll slide-in-left font-noto-sans font-medium text-2xl sm:text-3xl leading-tight">
            <span className="text-white">Our </span>
            <span className="text-orange-600 font-semibold">Values</span>
          </h2>
          
          {/* Cards */}
          <div className="flex flex-col md:flex-row gap-4 sm:gap-5 lg:gap-6">
            {valueCards.map((card, index) => (
              <div key={index} className="scale-in-repeat bg-[#0b0b0b] border border-[#373737] p-4 sm:p-5 lg:p-6 rounded-md flex-1">
                <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
                  <div className="w-[42px] h-[42px] relative shrink-0">
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={42}
                      height={42}
                    />
                  </div>
                  <div className="flex flex-col gap-2 sm:gap-2.5 lg:gap-3">
                    <h3 className="font-noto-sans font-semibold text-lg sm:text-xl lg:text-2xl text-white leading-tight">
                      {card.title}
                    </h3>
                    <p className="font-dm-sans text-sm sm:text-base lg:text-lg xl:text-xl text-white leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="scale-in-repeat flex w-full p-4 sm:p-5 bg-[#242424] flex-col justify-center items-start gap-2">
            <div className="text-lg sm:text-xl font-dm-sans font-semibold">Disclaimer</div>
            <div className="text-sm sm:text-base lg:text-lg font-dm-sans text-[#ACACAC] leading-relaxed">Home Track Real Estate LLC is regulated by RERA (Real Estate Regulatory Agency) RERA # 34715, Trade License # 1167110 in Dubai. We confirm that we are not a wealth management company but we are a Dubai based real estate brokers, that takes wealth management approach and advise clients in real estate.</div>
          </div>
        </div>
        </section>

        <section
          className="bg-[#020202] w-full overflow-x-hidden"
          id="testimonials"
        >
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
            <div className="scale-in-repeat">
              <TestimonialSection />
            </div>
          </div>
        </section>

        <section
          className="bg-[#020202] py-12 sm:py-16 lg:py-20 w-full overflow-x-hidden"
          id="contact-us"
        >
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
            <div className="scale-in-repeat">
              <ContactCard />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </AnimationWrapper>
  );
}

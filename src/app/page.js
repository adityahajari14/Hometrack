import Image from "next/image";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import ServiceCard from "@/components/service-card";
import Button from "@/components/button";

export default function Home() {
  return (
    <main className="bg-[#020202] text-white">
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

      <section className="" id="insights">
        <div className="w-full h-screen flex items-center px-20 gap-24">
          <div className="w-1/2">
            <h2 className="text-3xl font-bold text-left font-noto-sans">
              Insights Hub
            </h2>
            <p className="font-dm-sans text-xl pt-8">
              Welcome to Hometrack Insights Hub your central destination for
              complete financial transparency and performance.
              <br />
              Here, you can explore a detailed overview of all investments made,
              including asset classes, portfolio distribution, and growth
              trends.
              <br />
              Gain real-time access to revenue generated, returns achieved, and
              performance metrics all in one powerful dashboard.
              <br />
              We turn numbers into meaningful insights, helping you track
              progress, make informed decisions, and unlock new opportunities
              for smarter wealth growth.
              <br />
            </p>
          </div>
          <div className="flex flex-col gap-12 w-1/2">
            <div>
              <h2 className="text-orange-600 text-3xl">Total Assets</h2>
              <h1 className="text-white text-6xl mt-4">$0 Billion</h1>
            </div>
            <hr className="border-t border-gray-600 mx-2" />
            <div>
              <h2 className="text-orange-600 text-3xl">Countries</h2>
              <h1 className="text-white text-6xl">0</h1>
            </div>
            <hr className="border-t border-gray-600 mx-2" />
            <div>
              <h2 className="text-orange-600 text-3xl">Assets</h2>
              <h1 className="text-white text-6xl">0</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#020202] py-20" id="services">
        <div className="w-full">
          <div className="flex flex-1 mb-12 pl-20 justify-between">
            <h2 className="text-3xl">
              Our <span className="text-orange-600">Services</span>
            </h2>
            <div className="text-2xl font-dm-sans pr-20">
              <p className="">
                Our work to create safe and beneficial AI requires a deep
                <br />
                understanding of the potential risks and benefits, as well as
                <br />
                careful consideration of the impact.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-8 px-20">
            <ServiceCard title="Wealth Desk" imageurl="/wealth-desk.jpg" />
            <ServiceCard
              title="Real Estate Syndicates"
              imageurl="/real-estate-syndicates.jpg"
            />
            <ServiceCard
              title="Residency Capital"
              imageurl="/residency-capital.jpg"
            />
          </div>
          <div className="flex flex-row gap-8 mt-12 px-20">
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

      <section className="bg-black/40 py-20" id="founder">
        <div className="w-full flex items-center px-20 gap-12">
          <div className="w-1/2">
            <h2 className="text-5xl font-bold font-noto-sans mb-8">
              Meet our <span className="text-orange-600">Founder</span>
            </h2>
            <p className="text-lg font-dm-sans leading-8">
              With over 24 years of banking experience across the Middle East
              and the UK, this journey spans senior roles in Treasury, Wealth
              Management, and Commercial Banking. A strong client-first approach
              was built on trust, credibility, and lasting relationships.
              <br />
              <br />
              In 1998, the move to the UK opened doors to further expertise
              through a Financial Engineering degree and regulation by Financial
              Conduct Authority, advising high-net-worth clients on diversified
              investment portfolios. <br />
              <br />
              In 2006, the transition from banker to entrepreneur led to the
              launch of a business consultancy firm in London, driven by the
              vision to build a lasting legacy.
            </p>
          </div>

          <div className="w-1/2 flex justify-center">
            <Image src="/founder.png" alt="Founder" width={400} height={400} />
          </div>
        </div>
        <div className="pl-20">
          <Button label={"Read More"} />
        </div>
      </section>

      <section className="bg-[#020202] py-20" id="safety-and-responsibility">
        <div className="w-full">
          <div className="flex flex-1 mb-12 pl-20 justify-between">
            <h2 className="text-3xl">
              Safety & <span className="text-orange-600">Responsibility</span>
            </h2>
            <div className="text-2xl font-dm-sans pr-20">
              <p className="">
                Our work to create safe and beneficial AI requires a deep
                <br />
                understanding of the potential risks and benefits, as well as
                <br />
                careful consideration of the impact.
                <br />
              </p>
            </div>
          </div>

          <div className="relative w-full h-screen overflow-hidden">
            <Image
              src="/hand-shake.jpg"
              alt="Safety and Responsibility"
              width={1200}
              height={1200}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        </div>
      </section>
    </main>
  );
}

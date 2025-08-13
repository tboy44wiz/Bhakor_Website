import AboutImageOne from "@/assets/images/consult/consult_image_1.png";


const AboutUsComponent = () => {
    return (
      <>
        <section className="pt-25 h-auto container mx-auto">
          <div>
            {/*==== Title ====*/}
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-12 bg-appSecondary-dark" />
              <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">
                ABOUT US
              </span>
            </div>
            <h2 className="mt-3 lg:mt-6 text-3xl lg:text-4xl 2xl:text-5xl font-bold text-left text-gray-900 md:leading-11">
              A Leading Player in the Oil and Gas Industry. <br className="hidden 2xl:block" /> We’re
              Constantly Pushing the Boundaries
            </h2>
          </div>

          <div className="pt-5 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <img
              src={AboutImageOne}
              alt="About Image One"
              className="h-[385px] md:h-[624px] lg:h-[510px] w-full"
            />
            {/*==== Content Section ====*/}
            <div className="text-start 2xl:text-lg md:leading-7 2xl:leading-8">
              <h1>
                Bhakor Consult, a prominent division of the Bhakor Group, is
                dedicated to Oil and Gas Consulting, Business Process
                optimization, Instrumentation, and Process Control. As a
                significant LPG off-taker from Nigeria LNG and NNPC for over a
                10 years, we lead in gas commercialization, analysing market
                dynamics and devising strategies to maximise resource potential,
                with our core competencies spanning LPG utilisation,
                transportation, storage, and distribution, ensuring a seamless
                supply chain.
                <h1 className="mt-5">
                  We support the industrialization of Nigeria's gas sector,
                  facilitate energy trading, and develop strategies for LPG
                  value chain penetration, emphasising sustainability and
                  long-term success. Bhakor Consult offers insights into local
                  and foreign investment opportunities and provides consultancy
                  to enhance decision-making in the oil and gas industry.
                </h1>
              </h1>
            </div>
          </div>
        </section>
      </>
    );
};

export default AboutUsComponent;
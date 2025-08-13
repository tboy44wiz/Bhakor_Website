import AboutImageOne from "@/assets/images/about_image_1.jpg";
import AboutImageTwo from "@/assets/images/about_image_2.jpg";
import AboutImageThree from "@/assets/images/about_image_3.jpg";
import AboutImageFour from "@/assets/images/about_image_4.jpg";

const ExpertConsultingComponent = () => {
   

    return (
      <section className="h-auto w-full pt-12 lg:pt-16 pb-10 lg:pb-20 relative flex items-center justify-center">
        <div className="container mx-auto px-5 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            {/*==== Content Section ====*/}
            <div className="mt-4 lg:mt-0space-y-8">
              <div>
                <h2 className="mt-3 lg:mt-6 text-3xl 2xl:text-4xl font-bold text-left text-gray-900 tracking-wide leading-normal">
                  Expert Consulting Solutions Tailored for the Oil and Gas
                  Industry
                </h2>
              </div>

              {/* Description */}
              <p className="mt-5 lg:pe-10 text-left leading-8">
                At Bhakor Consult, our consulting services are the cornerstone
                of our operations, designed to deliver tailored solutions to
                meet the unique challenges of the oil and gas industry.
                Leveraging over a decade of experience as a significant player
                in Nigeria’s gas sector, we provide comprehensive consultancy
                that spans the entire energy value chain, focusing on gas
                commercialization, process optimization, and strategic
                decision-making.
              </p>
            </div>

            {/*==== Image Grid Section ====*/}
            <div className="h-full w-full grid grid-cols-12 gap-2.5 lg:gap-4 items-end">
              <div className="col-span-6 rounded-3xl overflow-hidden">
                <img
                  src={AboutImageOne}
                  alt="About Image One"
                  className="h-[185px] md:h-[230px] lg:h-[226px] w-full object-cover"
                />
              </div>

              <div className="col-span-6 rounded-3xl overflow-hidden">
                <img
                  src={AboutImageTwo}
                  alt="About Image Two"
                  className="h-[220px] md:h-[310px] lg:h-[270px] w-full object-cover"
                />
              </div>

              <div className="col-span-8 rounded-3xl overflow-hidden">
                <img
                  src={AboutImageThree}
                  alt="About Image Three"
                  className="h-[140px] md:h-[310px] lg:h-[260px] w-full object-cover"
                />
              </div>

              <div className="col-span-4 rounded-3xl overflow-hidden">
                <img
                  src={AboutImageFour}
                  alt="About Image Four"
                  className="h-[140px] md:h-[310px] lg:h-[260px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default ExpertConsultingComponent;
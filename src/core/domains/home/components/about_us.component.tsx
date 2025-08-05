import MissionIcon from "@/assets/images/mission_icon.png";
import VisionIcon from "@/assets/images/vision_icon.png";
import AboutImageOne from "@/assets/images/about_image_1.jpg";
import AboutImageTwo from "@/assets/images/about_image_2.jpg";
import AboutImageThree from "@/assets/images/about_image_3.jpg";
import AboutImageFour from "@/assets/images/about_image_4.jpg";

const AboutUsComponent = () => {
  return (
    <section className="h-auto w-full pt-12 lg:pt-16 pb-10 lg:pb-20 relative flex items-center justify-center bg-white">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/*==== Image Grid Section ====*/}
          <div className="h-full w-full grid grid-cols-12 gap-2.5 lg:gap-4 items-end">
            <div className="col-span-6 rounded-3xl overflow-hidden">
              <img 
                src={AboutImageOne}
                alt="About Image One"
                className="h-[185px] lg:h-[410px] w-full object-cover"
              />
            </div>
            
            <div className="col-span-6 rounded-3xl overflow-hidden">
              <img 
                src={AboutImageTwo}
                alt="About Image Two"
                className="h-[220px] lg:h-[480px] w-full object-cover"
              />
            </div>
            
            <div className="col-span-8 rounded-3xl overflow-hidden">
              <img 
                src={AboutImageThree}
                alt="About Image Three"
                className="h-[140px] lg:h-[315px] w-full object-cover"
              />
            </div>
            
            <div className="col-span-4 rounded-3xl overflow-hidden">
              <img 
                src={AboutImageFour}
                alt="About Image Four"
                className="h-[140px] lg:h-[315px] w-full object-cover"
              />
            </div>
          </div>

          {/*==== Content Section ====*/}
          <div className="mt-4 lg:mt-0space-y-8">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-0.5 w-12 bg-appSecondary-dark" />
                <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">
                  About Us
                </span>
              </div>
              <h2 className="mt-3 lg:mt-6 text-3xl md:text-5xl font-bold text-left text-gray-900 tracking-wide leading-normal">
                Conventional Oil & Gas <br className="hidden lg:block" />Advocates <br className="lg:hidden" />With Efficient <br className="hidden lg:block" />& Sustainable Solutions
              </h2>
            </div>

            {/* Description */}
            <p className="mt-5 lg:pe-10 text-left leading-8">
              Bhakor Group distributes Gas products in Nigeria and is duly registered to 
              sell Gas nationwide and beyond. Bhakor has in its kitty fleets of Bridger 
              trucks for bulk delivery to all parts of the country for both commercial and 
              industrial applications and operates a fleet of delivery vehicles for door-to-door 
              gas distribution to meet the daily demands of domestic end-users within the country.
            </p>

            {/* Vision and Mission */}
            <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vision */}
                <div className="space-y-4">
                    <div className="flex items-center gap-x-3">
                        <div className="h-[80px] w-[90px] relative flex justify-center items-center">
                            <svg
                              viewBox="0 0 40 40"
                              className="h-16 w-16 lg:h-20 lg:w-20 absolute inset-0 m-auto" // Responsive size
                            >                                
                              <path
                                d="M0,20l10-17.32h20l10,17.32l-10,17.32H10L0,20z"
                                fill="none"
                                stroke="#101828"
                                strokeDasharray="1 2"
                                strokeWidth="0.5"
                              />
                            </svg>

                            <svg
                              viewBox="0 0 40 40"
                              className="h-12 w-12 lg:h-16 lg:w-16 absolute inset-0 m-auto"
                            >
                              <path
                                d="M0,20l10-17.32h20l10,17.32l-10,17.32H10L0,20z"
                                fill="#F0F6FC"
                              />
                            </svg>

                            <svg 
                              viewBox="0 0 40 40"
                              className="h-9 w-9 lg:h-12 lg:w-12 absolute inset-0 m-auto"
                            >
                              <path
                                d="M0,20l10-17.32h20l10,17.32l-10,17.32H10L0,20z"
                                fill="#AAE5BF"
                              />
                            </svg>
                            <img src={VisionIcon} alt="Mission Icon" className="h-3 lg:h-4 w-auto absolute inset-0 m-auto z-10" />
                        </div>

                        <h3 className="text-xl font-bold text-gray-900">Vision</h3>
                    </div>

                    <p className="lg:pr-12 text-left leading-7 lg:leading-8">
                        Our Vision is to become the preferred Indigenous Gas company known for the 
                        provision of innovative and cost effective solutions
                    </p>
                </div>

              {/* Mission */}
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <div className="h-[80px] w-[90px] relative flex justify-center items-center">
                      <svg
                        viewBox="0 0 40 40"
                        className="h-16 w-16 lg:h-20 lg:w-20 absolute inset-0 m-auto" // Responsive size
                      >
                        <path
                          d="M0,20l10-17.32h20l10,17.32l-10,17.32H10L0,20z"
                          fill="none"
                          stroke="#101828"
                          strokeDasharray="1 2"
                          strokeWidth="0.5"
                        />
                      </svg>

                      <svg
                        viewBox="0 0 40 40"
                        className="h-12 w-12 lg:h-16 lg:w-16 absolute inset-0 m-auto"
                      >
                        <path
                          d="M0,20l10-17.32h20l10,17.32l-10,17.32H10L0,20z"
                          fill="#F0F6FC"
                        />
                      </svg>

                      <svg 
                        viewBox="0 0 40 40"
                        className="h-9 w-9 lg:h-12 lg:w-12 absolute inset-0 m-auto"
                      >
                        <path
                          d="M0,20l10-17.32h20l10,17.32l-10,17.32H10L0,20z"
                          fill="#AAE5BF"
                        />
                      </svg>
                      <img src={MissionIcon} alt="Mission Icon" className="h-3 lg:h-4 w-auto absolute inset-0 m-auto z-10" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900">Mission</h3>
                </div>
                <p className="lg:pr-12 text-left leading-7 lg:leading-8">
                  Facilitate and participate in GAS commercialization projects in Nigeria and Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsComponent;
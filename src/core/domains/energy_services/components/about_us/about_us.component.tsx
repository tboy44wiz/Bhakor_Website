import MissionIcon from "@/assets/images/mission_icon.png";
import VisionIcon from "@/assets/images/vision_icon.png";

import EnergyWorkspace from "@/assets/images/energy_services/energy_warehouse.png";
import EnergyServiceCylinder from "@/assets/images/energy_services/energy_cylinder.png";

const AboutUsComponent = () => {
  return (
    <>
      <section className="mt-5 lg:mt-25 h-auto container mx-auto">
        <div>
          {/*==== Title ====*/}
          <div className="flex items-center gap-3">
            <div className="h-0.5 w-12 bg-appSecondary-dark" />
            <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">
              ABOUT US
            </span>
          </div>
          <h2 className="mt-3 lg:mt-6 text-2xl md:text-5xl font-bold text-left text-gray-900 md:leading-15">
            Who We Are
          </h2>
        </div>

        <div className="h-auto w-full pb-10 lg:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mt-10">
          {/*==== Image Grid Section ====*/}
          <div className="relative flex justify-center mt-3 lg:mt-0">
            <img
              src={EnergyWorkspace}
              alt="About Image One"
              className="w-full object-cover rounded-2xl"
            />
            <img
              src={EnergyServiceCylinder}
              alt="Gas Cylinder"
              className="absolute lg:-bottom-30 top-70 md:w-100 md:top-[80%] lg:left-17 w-58 lg:w-72 object-cover"
            />
          </div>

          {/*==== Content Section ====*/}
          <div className="lg:text-sm mt-36 md:mt-45 lg:mt-0">
            {/* Description */}
            <p className=" lg:pe-6 text-justify leading-8">
              Bhakor Energy, a subsidiary of Bhakor Group, is dedicated to
              advancing energy accessibility in Nigeria through logistics,
              retail, and energy conversion solutions. Our commitment to
              operational excellence and innovation drives us to offer safe and
              sustainable services, placing us at the forefront of the nation’s
              energy landscape.
            </p>

            {/* Vision and Mission */}
            <div className="mt-7 md:mt-0">
              {/* Vision */}
              <div className="mt-5 md:mt-0">
                <div className="flex items-center gap-3">
                  <div className="h-[80px] w-[70px] lg:w-[80px] relative flex justify-center items-center">
                    <svg
                      viewBox="0 0 40 40"
                      className="h-16 w-16 lg:h-15 lg:w-20 absolute inset-0 m-auto" // Responsive size
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
                      className="h-12 w-12 lg:h-13 lg:w-13 absolute inset-0 m-auto"
                    >
                      <path
                        d="M0,20l10-17.32h20l10,17.32l-10,17.32H10L0,20z"
                        fill="#F0F6FC"
                      />
                    </svg>

                    <svg
                      viewBox="0 0 40 40"
                      className="h-9 w-9 lg:h-9 lg:w-9 absolute inset-0 m-auto"
                    >
                      <path
                        d="M0,20l10-17.32h20l10,17.32l-10,17.32H10L0,20z"
                        fill="#AAE5BF"
                      />
                    </svg>
                    <img
                      src={VisionIcon}
                      alt="Mission Icon"
                      className="h-3 lg:h-3 w-auto absolute inset-0 m-auto z-10"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">Vision</h3>
                </div>

                <p className="mt-2 lg:pr-10 text-justify leading-6 lg:leading-7">
                  To be Nigeria's trusted partner in clean and sustainable
                  energy distribution, shaping the future of the oil and gas
                  industry with integrity and innovation.
                </p>
              </div>

              {/* Mission */}
              <div className="mt-5">
                <div className="flex items-center gap-3">
                  <div className="h-[80px] w-[70px] lg:w-[80px] relative flex justify-center items-center">
                    <svg
                      viewBox="0 0 40 40"
                      className="h-16 w-16 lg:h-15 lg:w-20 absolute inset-0 m-auto" // Responsive size
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
                      className="h-12 w-12 lg:h-13 lg:w-13 absolute inset-0 m-auto"
                    >
                      <path
                        d="M0,20l10-17.32h20l10,17.32l-10,17.32H10L0,20z"
                        fill="#F0F6FC"
                      />
                    </svg>

                    <svg
                      viewBox="0 0 40 40"
                      className="h-9 w-9 lg:h-9 lg:w-9 absolute inset-0 m-auto"
                    >
                      <path
                        d="M0,20l10-17.32h20l10,17.32l-10,17.32H10L0,20z"
                        fill="#AAE5BF"
                      />
                    </svg>
                    <img
                      src={MissionIcon}
                      alt="Mission Icon"
                      className="h-3 lg:h-3 w-auto absolute inset-0 m-auto z-10"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">Mission</h3>
                </div>
                <p className="mt-2 lg:pr-6 text-justify leading-7 lg:leading-8">
                  To deliver seamless, cost-effective energy logistics and
                  conversion solutions that empower communities, enhance lives,
                  and drive growth in Nigeria's oil and gas sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsComponent;

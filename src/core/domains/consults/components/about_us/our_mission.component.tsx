import MissionAndVisionIcon from "@/assets/images/mission_and_vision_icon.png";
import OurServiceIcon from "@/assets/images/our_service_icon.png";

const OurMissionAndVisionComponent = () => {
    return (
      <section className="w-full pt-14 pb-5">
        <div className="container mx-auto">

          {/* Grid */}
          <div className="mt-5 grid grid-cols-1">
            {/* content */}
            <div className="flex flex-col lg:flex-row">
              <div className="flex-2 bg-[#FFF3DF] px-6 py-7 flex flex-col">
                <div className="items-center flex justify-center flex-col">
                  <img
                    src={MissionAndVisionIcon}
                    alt="Gas Icon"
                    className="h-auto w-10 items-center bg-[#FFAA2C] rounded-full"
                  />
                  <h1 className="font-bold text-lg text-gray-800 mt-2">
                    Our Mission
                  </h1>
                </div>
                <p className="mt-2 text-gray-800 text-base text-center leading-8">
                  Our mission is to transform Nigeria’s oil and gas industry
                  through specialized offtake services and consultancy
                  expertise, delivering impactful solutions that enhance energy
                  access, reliability, and sustainable development.
                </p>
              </div>

              <div className="flex-4 bg-[#E1FFEE] p-6 flex flex-col">
                <div className="items-center flex justify-center flex-col">
                  <img
                    src={OurServiceIcon}
                    alt="Leaf Bulb Icon"
                    className="h-auto w-10 bg-[#00A759] rounded-full"
                  />
                  <h1 className="font-bold text-lg text-gray-800 mt-2">
                    Our Vision
                  </h1>
                </div>
                <p className="mt-2 text-gray-800 text-base text-center leading-8">
                  Our vision is to be a leader in the global oil and gas
                  consultancy space, recognized for our contribution to the
                  industrialization and advancement of the Nigerian gas sector.
                  We aim to create a future where clean energy, including LPG,
                  becomes a key driver of economic development and
                  sustainability. Bhakor Consult envisions playing a pivotal
                  role in positioning Nigeria as a global leader in the energy
                  sector by enabling seamless integration of innovative
                  technologies, fostering partnerships, and providing
                  world-class advisory services. Our long-term goal is to build
                  resilient energy systems that support the transition to a
                  low-carbon economy while ensuring the long-term success of our
                  clients and the communities we serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default OurMissionAndVisionComponent;
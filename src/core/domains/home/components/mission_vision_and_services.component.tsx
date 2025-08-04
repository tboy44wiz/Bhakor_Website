import MissionAndVissionIcon from "@/assets/images/mission_and_vision_icon.png";
import OurServisesIcon from "@/assets/images/our_service_icon.png";

const MissionVisionAndServicesComponent = () => {
  return (
    <section className="h-auto w-full pt-20 pb-10 relative flex justify-center bg-white">
        <div className="container px-8 absolute -top-14 grid grid-cols-1 md:grid-cols-2 items-center justify-center">
            <div className="h-full col-span-1 px-10 py-10 flex flex-col items-center justify-center bg-[#FEEED3]">
                <div className="h-15 w-15 flex items-center justify-center bg-appPrimary-dark rounded-full">
                    <img src={ MissionAndVissionIcon } alt="Mission & Vision Icon" className="h-10 w-10" />
                </div>
                <h2 className="mt-2 text-2xl font-bold">Mission & Vision</h2>
                <p className="mt-5 leading-8">
                    At Bhakor Group, we aim to drive sustainable growth in Nigeria's gas sector, transforming resources into impactful energy solutions. We aim to advance gas commercialization by delivering efficient, scalable services that meet national energy needs and foster economic progress.
                </p>
            </div>
            
            <div className="h-full col-span-1 px-10 py-10 flex flex-col items-center justify-center bg-[#CCEFD9]">
                <div className="h-15 w-15 flex items-center justify-center bg-appSecondary-dark rounded-full">
                    <img src={ OurServisesIcon } alt="Mission & Vision Icon" className="h-10 w-10" />
                </div>
                <h2 className="mt-2 text-2xl font-bold">Our Services</h2>
                <p className="mt-5 leading-8">
                    Bhakor Group offers a full suite of gas commercialization solutions, including project financing, gas processing and distribution, Consultancy & advisory services, and energy trading. With a focus on optimized and sustainable practices, we help clients navigate the complexities of the Nigerian gas market to achieve impactful energy solutions.
                </p>
            </div>
        </div>
    </section>
  );
};

export default MissionVisionAndServicesComponent;
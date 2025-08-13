import HeroBackground from "@/assets/images/logistic_hero_section_background.png";
import HeroImage from "@/assets/images/logistic_hero_image.png";
import { ArrowRight } from "solar-icon-set";

const HeroComponent = () => {
  return (
    <section
      className="h-auto w-full m-0 mt-18 p-0 relative bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(240, 246, 252, 0.98), rgba(240, 246, 252, 0.95)), url(${HeroBackground})`,
      }}
    >
        <div className="container px-3 lg:px-20 pb-5 flex flex-col-reverse lg:flex-row items-center justify-end">

          <div className="xl:h-[420px] w-full lg:w-[34%] lg:mt-10 px-2 lg:px-10 py-8 lg:py-5 lg:absolute flex flex-col justify-center items-start lg:left-[13%] text-left text-black bg-white z-10">
            <h3 className="text-2xl xl:text-4xl font-bold">Bhakor Logistics</h3>
            <p className="mt-4 text-justify lg:text-left text-base lg:text-lg leading-7 xl:leading-9">
              Bhakor Logistics Limited is a part of the Bhakor Group with a mandate to promote Gas commercialization, 
              increase gas penetration, and stimulate gas industrialization in Nigeria.
            </p>

            <button className="mt-5 xl:mt-7 px-8 py-3 hidden md:flex items-center bg-appSecondary-dark text-white rounded-md">
              Get A Quote
              <ArrowRight size={20} iconStyle="Linear" className="ml-2" />
            </button>
          </div>

          <img src={HeroImage} alt="Hero Background" className="h-auto w-full lg:w-[70%] xl:w-[60%] lg:mr-3 mt-10 z-0" />
        </div>
    </section>
  );
};

export default HeroComponent;
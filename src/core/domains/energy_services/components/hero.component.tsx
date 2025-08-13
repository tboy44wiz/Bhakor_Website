import HeroBackground from "@/assets/images/logistic_hero_section_background.png";
import HeroImage from "@/assets/images/energy_services/energy_hero_image.png";

const HeroComponent = () => {
  return (
    <section
      className="h-auto w-full m-0 mt-18 p-0 relative bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(240, 246, 252, 0.98), rgba(240, 246, 252, 0.95)), url(${HeroBackground})`,
      }}
    >
      <div className="container px-3 lg:px-20 pb-5 flex flex-col-reverse lg:flex-row items-center justify-end">
        <div className="xl:h-[320px] h-[300px] w-full lg:w-[34%] lg:mt-10 px-2 lg:px-10 py-8 lg:py-5 lg:absolute flex flex-col justify-center items-start lg:left-[13%] text-left text-black bg-white z-10">
          <h3 className="text-2xl xl:text-4xl font-bold">Bhakor Energy</h3>
          <p className="mt-4 text-justify lg:text-left text-base lg:text-lg leading-7 xl:leading-9">
            Welcome to Bhakor Energy, a leading force in Nigeria's oil and gas
            sector. We specialize in safe, efficient, and reliable services and
            bring energy solutions to every corner of the nation.
          </p>
        </div>

        <img
          src={HeroImage}
          alt="Hero Background"
          className="h-auto w-full lg:w-[70%] xl:w-[60%] lg:mr-3 mt-10 z-0"
        />
      </div>
    </section>
  );
};

export default HeroComponent;
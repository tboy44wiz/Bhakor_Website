import { ArrowRight } from "solar-icon-set";
import HeroBackground from "../../../../assets/images/hero_background.png";

const HeroComponent = () => {
  return (
    <section
      className="h-[90vh] w-full m-0 mt-18 p-0 relative bg-cover bg-center bg-no-repeat text-white flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.7), rgba(0,0,0,0.5), rgba(0,0,0,0.1)), url(${HeroBackground})`,
      }}
    >
        <div className="container mx-auto px-3 md:px-5 pt-4 md:pt-0 md:pb-20 z-10">
            <div className="h-auto w-full lg:w-[50%] text-left px-2 md:px-4 py-8">
                {/*==== Hero Title ====*/}
                <h1 className="text-[42px] md:text-7xl font-bold leading-[4rem] md:leading-[5rem] mb-4">
                    Increasing <br className="block md:hidden" />
                    Production <br className="block md:hidden" />
                    with Natural <br className="block md:hidden" />
                    Resources
                </h1>

                {/*==== Hero Description ====*/}
                <p className="mt-4 text-base md:text-xl leading-7 md:leading-8">
                    Welcome to Bhakor Group, where our suite of services is crafted to address
                    <br className="hidden md:block" />
                    the intricate needs of the evolving oil and gas sector in Nigeria
                </p>

                {/*==== Hero Buttons ====*/}
                <div className="mt-8 flex flex-col md:flex-row justify-start gap-4">
                    <button className="w-full md:w-[280px] py-3.5 flex items-center justify-center text-lg bg-appSecondary-dark rounded-lg md:rounded-none">
                        Learn More
                        <ArrowRight size={22} iconStyle="Linear" className="ml-2" />
                    </button>
                    <button className="w-full md:w-[280px] py-3.5 flex items-center justify-center text-lg text-green-700 bg-white rounded-lg md:rounded-none">
                        Request A Quote
                        <ArrowRight size={22} iconStyle="Linear" className="ml-2" />
                    </button>
                </div>
            </div>
        </div>
    </section>
  );
};

export default HeroComponent;
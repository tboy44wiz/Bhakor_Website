import { ArrowRight } from 'solar-icon-set';
import HeroBackground from "../../../../assets/images/hero_background.png";

const HeroComponent = () => {
  return (
    <section
        className="h-[90vh] w-full m-0 p-0 relative bg-cover bg-center bg-no-repeat text-white flex items-center justify-center"
        style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.7), rgba(0,0,0,0.5), rgba(0,0,0,0.1)), url(${HeroBackground})`
        }}
    >

        <div className="container mx-auto px-5 pb-20 z-10">
            <div className="h-auto w-[50%] text-left px-4 py-8">
                <h1 className="text-5xl md:text-7xl font-bold leading-24 mb-4">
                    Increasing<br />Productivity Using<br />Natural Resources
                </h1>
                <p className="mt-4 text-xl leading-8">Welcome to Bhakor Group, where our suite of services is crafted to address<br />the intricate needs of the evolving oil and gas sector in Nigeria</p>
                <div className="mt-8 flex justify-start gap-4">
                    <button className="w-[280px] py-3.5 flex items-center justify-center text-lg bg-appSecondary-dark">
                        Learn More
                        <ArrowRight size={22} iconStyle="Linear" className="ml-2" />
                    </button>
                    <button className="w-[280px] py-3.5 flex items-center justify-center text-lg text-green-700 bg-white">
                        Request a Quote
                        <ArrowRight size={22} iconStyle="Linear" className="ml-2" />
                    </button>
                </div>
            </div>
        </div>
    </section>
  );
};

export default HeroComponent;
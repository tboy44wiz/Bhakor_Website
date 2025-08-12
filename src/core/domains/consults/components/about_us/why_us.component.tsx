import GasIcon from "@/assets/images/gas_cylinder.png";
import LeafBulbIcon from "@/assets/images/flower.png";
import PlatformImage from "@/assets/images/about_image_1.jpg";

const WhyUsComponent = () => {
    return (
        <section className="w-full pt-14 pb-5">
            <div className="container mx-auto">
                {/* Title */}
                <div className="flex items-center gap-3 mb-2">
                    <div className="h-0.5 w-12 bg-appSecondary-dark" />
                    <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">
                        WHY US
                    </span>
                </div>
                <h2 className="mt-2 text-2xl md:text-5xl font-bold text-left text-gray-900 leading-8 lg:leading-15">
                    A Leading Player in the Oil and Gas Industry. We’re Constantly Pushing the Boundaries
                </h2>

                {/* Grid */}
                <div className="mt-5 grid grid-cols-1 lg:grid-cols-8 gap-4 lg:gap-6">
                    {/* Top Row */}
                    <div className="lg:col-span-8 flex flex-col lg:flex-row gap-6">
                        <div className="flex-1 bg-[#eafdf1ca] rounded-xl px-6 py-7 flex flex-col">
                            <img src={GasIcon} alt="Gas Icon" className="h-auto w-10" />
                            <p className="mt-2 text-gray-800 text-base text-justify leading-8">
                                Bhakor Logistics is focused on increasing Gas utilization, transportation, storage and distribution for the supply 
                                and development of the Nigerian domestic gas market. We explore technologies to facilitate energy trading, 
                                including oil, gas and electricity. We are committed to identifying opportunities and preparing strategies for Gas 
                                value chain penetration.
                            </p>
                        </div>

                        <div className="flex-1 bg-[#fdf7eebb] rounded-xl p-6 flex flex-col">
                            <img src={LeafBulbIcon} alt="Leaf Bulb Icon" className="h-auto w-16" />
                            <p className="mt-2 text-gray-800 text-base text-justify leading-8">
                                Bhakor Logistics Limited drive climate change and the energy transition through initiatives such as Gas flare 
                                commercialization, clean energy/carbon swap, and Gas-to-chemical initiatives. We also leverage our network to 
                                facilitate and encourage increased local and foreign investment in Gas development in Nigeria.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Row */}
                     <img
                        src={PlatformImage}
                        alt="Oil Platform"
                        className="mt-2 block lg:hidden w-full object-cover rounded-xl"
                    />

                    <div className="lg:col-span-3 bg-[#cdeaff81] rounded-xl p-6 flex flex-col">
                        <img src={LeafBulbIcon} alt="Leaf Bulb Icon" className="h-auto w-16" />
                        <p className="mt-2 text-gray-800 text-base text-justify leading-8">
                            We are collaborating with GACN and other overseas partners on gas commercialization to develop LNG and CNG processing 
                            facilities. We are off-takers of Chevron, Niger Delta Refinery, AGPC and Axxela.
                        </p>
                    </div>

                    <img
                        src={PlatformImage}
                        alt="Oil Platform"
                        className="h-[320px] w-full hidden lg:block lg:col-span-5 object-cover rounded-xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default WhyUsComponent;
import BhakorConsult from "@/assets/images/bhakor_consult_image.png";
import BhakorEnergyServices from "@/assets/images/bhakor_energy_services_image.png";
import BhakorLogistics from "@/assets/images/bhakor_logistics_image.png";
import { ArrowRight } from "solar-icon-set";


const BhakorSubsidiariesComponent = () => {
    return (
        <section className="h-auto w-full pt-12 lg:pt-24 pb-10 lg:pb-20 bg-gray-50">
            <div className="container mx-auto px-5 lg:px-8">
                {/* Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center">
                
                    {/*==== Bhakor's Subsidiaries ====*/}
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="h-0.5 w-12 bg-appSecondary-dark" />
                            <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">
                                Bhakor's Subsidiaries
                            </span>
                        </div>
                        <h2 className="mt-3 lg:mt-6 text-3xl md:text-5xl font-bold text-left text-gray-900 tracking-wide leading-normal">
                            Conventional Oil & Gas <br className="hidden lg:block" />Advocates <br className="lg:hidden" />With Efficient <br className="hidden lg:block" />& Sustainable Solutions
                        </h2>
                    </div>

                    <hr className="w-full mt-5 lg:hidden border-[1px] border-gray-300" />

                    {/* Right Column - Description */}
                    <div className="lg:pl-8 py-3 lg:border-l-2 border-gray-300 text-left">
                        <p className="pr-5 text-lg leading-9">
                            Bhakor Group distributes Gas products in Nigeria and is duly registered 
                            to sell Gas nationwide and beyond. Bhakor has in its kitty fleets of 
                            Bridger trucks for bulk delivery to all parts of the country for both 
                            commercial and industrial applications and operates a fleet of delivery 
                            vehicles for door-to-door gas distribution to meet the daily demands of 
                            domestic end-users within the country.
                        </p>
                    </div>
                </div>

                {/* Subsidiaries Cards */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                    {/*==== Bhakor Consult ====*/}
                    <div className="px-8 pt-10 pb-20 relative border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                        <div className="items-start">
                            <img src={BhakorConsult} alt="Bhakor Consult" className="w-22 h-22" />

                            <h3 className="mt-3 font-bold text-left text-2xl text-gray-900">Bhakor Consult</h3>
                            <p className="mt-4 text-left text-lg text-gray-900 leading-9">
                                At Bhakor Consult, our consulting services are the cornerstone of our 
                                operations, designed to deliver tailored solutions to meet the unique 
                                challenges of the oil and gas industry.
                            </p>
                        </div>
                        <button className="absolute bottom-10 flex items-center gap-2 text-appSecondary-dark font-normal hover:text-green-700 transition-colors cursor-pointer">
                            Learn More 
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/*==== Bhakor Energy Services ====*/}
                    <div className="px-8 pt-10 pb-20 relative border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                        <div className="items-start">
                            <img src={BhakorEnergyServices} alt="Bhakor Consult" className="w-22 h-22" />

                            <h3 className="mt-3 font-bold text-left text-2xl text-gray-900">Bhakor Energy Services</h3>
                            <p className="mt-4 text-left text-lg text-gray-900 leading-9">
                                Bhakor Energy Limited is a trusted leader in the LPG industry, dedicated 
                                to providing safe, efficient, and reliable energy solutions.
                            </p>
                        </div>
                        <button className="absolute bottom-10 flex items-center gap-2 text-appSecondary-dark font-normal hover:text-green-700 transition-colors cursor-pointer">
                            Learn More 
                            <ArrowRight size={20} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/*==== Bhakor Logistics ====*/}
                    <div className="px-8 pt-10 pb-20 relative border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                        <div className="items-start">
                            <img src={BhakorLogistics} alt="Bhakor Consult" className="w-22 h-22" />

                            <h3 className="mt-3 font-bold text-left text-2xl text-gray-900">Bhakor Logistics</h3>
                            <p className="mt-4 text-left text-lg text-gray-900 leading-9">
                                Bhakor Logistics is focused on increasing Gas utilization, transportation, 
                                storage and distribution for the supply and development of the Nigerian 
                                domestic gas market.
                            </p>
                        </div>
                        <button className="absolute bottom-10 flex items-center gap-2 text-appSecondary-dark font-normal hover:text-green-700 transition-colors cursor-pointer">
                            Learn More 
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BhakorSubsidiariesComponent;
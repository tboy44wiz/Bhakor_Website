import GasCommercialization from "@/assets/images/specialties/gas_commercialization.png";
import GasIndustrialization from "@/assets/images/specialties/gas_industrialization.png";
import LPGUtilization from "@/assets/images/specialties/lpg_utilization.png";
import EnergyFacilitation from "@/assets/images/specialties/energy_facilitation.png";
import StrategyDevelopment from "@/assets/images/specialties/strategy_development.png";
import LocalForeignInvestment from "@/assets/images/specialties/local_and_foreign_investment.png";
import OilAndGasConsultancy from "@/assets/images/specialties/oil_and_gas_consultancy.png";
import OilAndGasProcurement from "@/assets/images/specialties/oil_and_gas_procurement.png";
import TechnologicalAdvancements from "@/assets/images/specialties/technological_advancements.png";

const SpecialtyComponent = () => {
    const specialties = [
        {
            title: "Gas Commercialization and Penetration",
            description: "Bhakor Logistics takes a strategic approach to understand and facilitate the commercialization and penetration of gas resources. We analyze market dynamics and design distribution strategies to unlock the full potential of this valuable energy source.",
            image: GasCommercialization,
        },
        {
            title: "Gas Industrialization in Nigeria",
            description: "Our commitment extends to fostering the industrialization of the gas sector in Nigeria. Bhakor Logistics provides support to gas-based industries, aiming to contribute to economic growth while ensuring sustainable practices.",
            image: GasIndustrialization,
        },
        {
            title: "LPG Utilization, Transportation, Storage, and Distribution",
            description: "Embrace a holistic approach to LPG with Bhakor Logistics. From utilization to transportation, storage, and distribution, our services ensure a reliable and efficient supply chain for LPG, promoting its widespread usage.",
            image: LPGUtilization,
        },
        {
            title: "Facilitation of Energy Trading",
            description: "Bhakor Logistics acts as a facilitator in energy trading, encompassing oil, gas, and electricity. Our role involves navigating the intricacies of market dynamics and regulatory requirements to create seamless energy trading experiences.",
            image: EnergyFacilitation,
        },
        {
            title: "Strategy Development for LPG Value Chain Penetration",
            description: "In response to the evolving landscape of climate change and energy transition, Bhakor Logistics focuses on developing strategies for LPG value chain penetration. Our goal is to address challenges and position businesses for long-term success.",
            image: StrategyDevelopment,
        },
        {
            title: "Local and Foreign Investment in Gas in Nigeria",
            description: "Bhakor Logistics offers guidance on investment opportunities in the Nigerian gas sector. We provide insights for both local and foreign investors, facilitating a strategic approach that aligns with the ever-changing dynamics of the oil and gas industry.",
            image: LocalForeignInvestment,
        },
        {
            title: "Oil and Gas Consultancy",
            description: "Our seasoned consultants at Bhakor Logistics provide valuable insights into the oil and gas sector. Beyond market trends and regulatory compliance, our consultancy services aim to enhance decision-making processes within the industry.",
            image: OilAndGasConsultancy,
        },
        {
            title: "Oil & Gas Procurement Advisory Services",
            description: "Bhakor Logistics offers advisory services in oil and gas procurement, focusing on strategic sourcing, cost-effectiveness, and supply chain optimization. Our aim is to empower businesses with the knowledge and guidance necessary for efficient procurement practices.",
            image: OilAndGasProcurement,
        },
        {
            title: "Technological Advancements",
            description: "Embrace progress with Bhakor Logistics as we integrate technological advancements into our services. From optimization to efficiency, our commitment to staying at the forefront of technology ensures industry-aligned operations.",
            image: TechnologicalAdvancements,
        },
    ];

    return (
        <section className="h-auto w-full pt-24 pb-20 bg-white">
            <div className="container mx-auto px-8">
                
                {/*==== Title ====*/}
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-0.5 w-12 bg-appSecondary-dark" />
                    <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">
                        "Our Specialties"
                    </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-left text-gray-900 tracking-wide leading-tight">
                    From the Well to the Pump, We’ve Got<br />You Covered
                </h2>

                {/*==== Description ====*/}
                <p className="mt-5 text-lg text-start leading-9">
                    Welcome to Bhakor Logistics, where our suite of services is crafted to address the intricate needs of the evolving oil <br />
                    and gas sector in Nigeria. Delve into the comprehensive solutions we offer, each designed to contribute to the <br />
                    sustainable growth and development of the industry.
                </p>

                {/*==== Specialties Cards ====*/}
                <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {specialties.map((specialty, index) => (
                        <div key={index} className="p-4 border border-gray-200 rounded-3xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                            <img
                                src={specialty.image}
                                alt={specialty.title}
                                className="h-68 w-full object-cover rounded-2xl"
                            />
                            <h3 className="mt-6 text-lg font-semibold">
                                {specialty.title}
                            </h3>
                            <p className="mt-5 leading-8">{specialty.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpecialtyComponent;
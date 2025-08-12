import OurSpecialty01 from "@/assets/images/our_specialty_01.png";
import OurSpecialty02 from "@/assets/images/our_specialty_02.png";
import OurSpecialty03 from "@/assets/images/our_specialty_03.png";
import OurSpecialty04 from "@/assets/images/our_specialty_04.png";
import OurSpecialty05 from "@/assets/images/our_specialty_05.png";


const OurSpecialtyComponent = () => {
    const specialties = [
        {
            number: "01",
            title: "Gas Commercialization and Penetration:",
            desc: "We employ strategic approaches to facilitate the commercialization of gas resources, analysing market dynamics and developing distribution strategies that unlock the full potential of this vital energy source.",
        },
        {
            number: "02",
            title: "Gas Industrialization:",
            desc: "Our commitment to the industrialization of the gas sector includes supporting gas-based industries to contribute to economic growth while ensuring sustainable practices.",
        },
        {
            number: "03",
            title: "Energy Trading Facilitation:",
            desc: "Acting as facilitators in energy trading, we navigate the complexities of oil, gas, and electricity markets, creating seamless trading experiences that comply with regulatory requirements.",
        },
        {
            number: "04",
            title: "Investment Guidance:",
            desc: "Bhakor Logistics offers insights into local and foreign investment opportunities in the gas sector, helping investors navigate the evolving landscape of Nigeria’s oil and gas industry.",
        },
        {
            number: "05",
            title: "Strategy Development for Gas Value Chain Penetration:",
            desc: "In response to climate change and energy transition challenges, we develop strategies that address these issues while positioning businesses for long-term success.",
        },
        {
            number: "06",
            title: "LPG Utilisation, Transportation, Storage, and Distribution:",
            desc: "We provide holistic services encompassing the entire LPG supply chain, ensuring reliable and efficient access to this essential energy resource.",
        },
        {
            number: "07",
            title: "Oil and Gas Consultancy:",
            desc: "Our experienced consultants provide valuable insights into market trends, regulatory compliance, and decision-making processes to enhance operational efficiency.",
        },
        {
            number: "08",
            title: "Procurement Advisory Services:",
            desc: "We provide strategic sourcing, cost-effectiveness, and supply chain optimization guidance, empowering businesses to achieve efficient procurement practices.",
        },
        {
            number: "09",
            title: "Technology Advancement:",
            desc: "We integrate cutting-edge technologies into our services, optimising operations and ensuring alignment with industry standards.",
        },
    ];

    return(
        <div className="w-full pt-5 lg:pt-14 pb-10 lg:pb-20">
            {/* Title */}
            <div className="flex items-center gap-3 mb-2">
                <div className="h-0.5 w-12 bg-appSecondary-dark" />
                <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">
                OUR SPECIALTY
                </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <h2 className="lg:w-[60%] mt-2 text-2xl md:text-4xl font-bold text-left text-gray-900 tracking-wide leading-8 lg:leading-[3rem]">
                The Best At Providing <span className="text-appSecondary-dark"><br className="lg:hidden" />Oil<br className="hidden lg:block" /> and Gas</span> Services <br className="lg:hidden" />in Nigeria
                </h2>
                <p className="lg:w-[38%] mt-4 lg:mt-0 text-gray-800 text-left text-base leading-7">
                At Bhakor Logistics, we offer a comprehensive suite of services tailored to the needs of the evolving oil and gas sector:
                </p>
            </div>

            {/* Cards and Images */}
            <div className="mt-8 space-y-8">
                {/* First Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {specialties.slice(0, 2).map((item) => (
                    <div key={item.number} className="px-6 py-8 border border-gray-200 rounded-xl">
                        <p className="h-12 w-12 flex items-center justify-center font-bold text-appSecondary-dark text-xl rounded bg-[#eafdf1]">{item.number}</p>
                        <p className="mt-3 font-semibold text-left">{item.title}</p>
                        <p className="mt-2 text-gray-800 text-left text-base leading-7">{item.desc}</p>
                    </div>
                ))}
                </div>
                <img
                    src={OurSpecialty01}
                    alt="Gas Plant"
                    className="w-full h-[220px] lg:h-[400px] object-cover rounded-xl"
                />

                {/* Second Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {specialties.slice(2, 4).map((item) => (
                    <div key={item.number} className="px-6 py-8 border border-gray-200 rounded-xl">
                        <p className="h-12 w-12 flex items-center justify-center font-bold text-appSecondary-dark text-xl rounded bg-[#eafdf1]">{item.number}</p>
                        <p className="mt-3 font-semibold text-left">{item.title}</p>
                        <p className="mt-2 text-gray-800 text-left text-base leading-7">{item.desc}</p>
                    </div>
                ))}
                </div>
                <img
                    src={OurSpecialty02}
                    alt="Oil Plant"
                    className="w-full h-[220px] lg:h-[400px] object-cover rounded-xl"
                />

                {/* Third Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {specialties.slice(4, 6).map((item) => (
                    <div key={item.number} className="px-6 py-8 border border-gray-200 rounded-xl">
                        <p className="h-12 w-12 flex items-center justify-center font-bold text-appSecondary-dark text-xl rounded bg-[#eafdf1]">{item.number}</p>
                        <p className="mt-3 font-semibold text-left">{item.title}</p>
                        <p className="mt-2 text-gray-800 text-left text-base leading-7">{item.desc}</p>
                    </div>
                ))}
                </div>
                <img
                    src={OurSpecialty03}
                    alt="Oil Plant"
                    className="w-full h-[220px] lg:h-[400px] object-cover rounded-xl"
                />

                {/* Fourth Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {specialties.slice(6, 8).map((item) => (
                    <div key={item.number} className="px-6 py-8 border border-gray-200 rounded-xl">
                        <p className="h-12 w-12 flex items-center justify-center font-bold text-appSecondary-dark text-xl rounded bg-[#eafdf1]">{item.number}</p>
                        <p className="mt-3 font-semibold text-left">{item.title}</p>
                        <p className="mt-2 text-gray-800 text-left text-base leading-7">{item.desc}</p>
                    </div>
                ))}
                </div>
                <img
                    src={OurSpecialty04}
                    alt="Oil Plant"
                    className="w-full h-[220px] lg:h-[400px] object-cover rounded-xl"
                />

                {/* Fifth Row */}
                <div className="lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="px-6 py-8 border border-gray-200 rounded-xl">
                        <p className="h-12 w-12 flex items-center justify-center font-bold text-appSecondary-dark text-xl rounded bg-[#eafdf1]">{specialties[8].number}</p>
                        <p className="mt-3 font-semibold text-left">{specialties[8].title}</p>
                        <p className="mt-2 text-gray-800 text-left text-base leading-7">{specialties[8].desc}</p>
                    </div>

                    <img
                        src={OurSpecialty05}
                        alt="Oil Plant"
                        className="w-full h-[220px] lg:h-[300px] object-cover rounded-xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default OurSpecialtyComponent;
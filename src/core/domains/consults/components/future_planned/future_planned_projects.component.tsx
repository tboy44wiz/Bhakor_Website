import FuturePlanned01 from "@/assets/images/future_planned_01.png";
import FuturePlanned02 from "@/assets/images/future_planned_02.png";
import FuturePlanned03 from "@/assets/images/our_specialty_03.png";


const FuturePlannedProjectsComponent = () => {

    const projects = [
        {
            number: "01",
            title: "10-MMSCFD LNG Plant:",
            desc: "This facility will be strategically located in Delta State, designed to meet both domestic and export demands.",
        },
        {
            number: "02",
            title: "LNG Trucking System:",
            desc: "Our trucking solutions ensure the reliable transportation of LNG to meet the energy needs of various sectors, including residential, commercial, and industrial applications.",
        },
        {
            number: "03",
            title: "LNG Storage and Marine Depots:",
            desc: "Positioned in Onitsha, these depots will facilitate efficient LNG distribution across Nigeria and neighbouring West African markets.",
        },
    ];

    const initiatives = [
        {
            number: "01",
            title: "Gas Flare Commercialization:",
            desc: "We aim to reduce gas flaring and promote the utilisation of associated gas for productive purposes.",
        },
        {
            number: "02",
            title: "Clean Energy and Carbon Swap Initiatives:",
            desc: "We advocate for transitioning to cleaner energy sources to mitigate the impacts of climate change.",
        },
        {
            number: "03",
            title: "Gas-to-Chemical Product:",
            desc: "We explore innovative solutions to convert natural gas into valuable chemicals, enhancing the economic viability of gas utilisation.",
        },
    ];


    return (
        <div className="w-full pt-5 lg:pt-14 pb-10 lg:pb-20">

            {/* Title */}
            <div className="flex items-center gap-3 mb-2">
                <div className="h-0.5 w-12 bg-appSecondary-dark" />
                <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">
                    FUTURE PLANNED PROJECTS
                </span>
            </div>

            <h2 className="mt-2 text-2xl md:text-4xl font-bold text-left text-gray-900 tracking-wide leading-8 lg:leading-[3rem]">
                Bhakor Logistics: Your Partner in <span className="text-appSecondary-dark"><br className="hidden lg:block" />LNG Development<br className="hidden lg:block" /> </span> 
            </h2>

            <p className="h-auto w-full mt-4 lg:mt-5 text-gray-800 text-justify lg:text-left text-base leading-7 lg:leading-9">
                With over a decade of experience in the oil and gas sector, Bhakor Logistics is uniquely positioned to lead the charge in LNG development. 
                Our extensive knowledge of the Nigerian energy landscape, combined with our commitment to operational excellence, ensures that we can 
                deliver reliable and innovative solutions for LNG projects. Whether you’re seeking to expand LNG production, optimise your supply chain, 
                or develop new infrastructure, Bhakor Logistics is your trusted partner. We are dedicated to unlocking the potential 
                of Nigeria’s natural gas reserves and ensuring long-term success in this rapidly growing market.
            </p>

            <img
                src={FuturePlanned01}
                alt="Gas Plant"
                className="w-full h-[220px] lg:h-[450px] mt-5 object-cover object-bottom rounded-xl"
            />

            {/* LNG Development Project Section */}
            <div className="mt-10">
                <h3 className="text-2xl font-bold text-left text-gray-900 mb-2">LNG Development Project</h3>
                <p className="text-gray-800 text-left text-base mb-6">
                    Bhakor Logistics is committed to advancing LNG initiatives that are crucial for Nigeria's energy landscape.<br />
                    Our current projects include:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {projects.map((project) => (
                    <div key={project.number} className="px-6 py-8 border border-gray-200 rounded-xl">
                        <p className="h-12 w-12 flex items-center justify-center font-bold text-appSecondary-dark text-xl rounded bg-[#eafdf1]">{project.number}</p>
                        <p className="mt-3 font-semibold text-left">{project.title}</p>
                        <p className="mt-2 text-gray-800 text-left text-base leading-7">{project.desc}</p>
                    </div>
                ))}
                </div>
                <img
                    src={FuturePlanned02}
                    alt="Gas Plant"
                    className="w-full h-[220px] lg:h-[450px] object-cover rounded-xl object-bottom"
                />
            </div>

            {/* Initiatives Section */}
            <div className="mt-16">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-1">
                    <h3 className="lg:w-[38%] text-left text-xl lg:text-2xl font-semibold text-gray-900">
                        Commitment to sustainability
                    </h3>
                    <div className="Lg:w-[62%] flex items-center lg:gap-2">
                        <div className="h-10 w-[2px] bg-appSecondary-dark rounded-sm hidden lg:block" />
                        <p className="lg:ml-5 text-left text-base text-gray-700">
                            At Bhakor Logistics, we are dedicated to environmentally responsible practices. Our initiatives include:
                        </p>
                    </div>
                </div>

                {/* Initiatives Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Top Row */}
                    {initiatives.slice(0, 2).map((project) => (
                        <div key={project.number} className="px-6 py-8 border border-gray-200 rounded-xl">
                            <p className="h-12 w-12 flex items-center justify-center font-bold text-appSecondary-dark text-xl rounded bg-[#eafdf1]">{project.number}</p>
                            <p className="mt-3 font-semibold text-left">{project.title}</p>
                            <p className="mt-2 text-gray-800 text-left text-base leading-7">{project.desc}</p>
                        </div>
                    ))}
                    {/* Bottom Row */}
                    <div key={initiatives[2].number} className="px-6 py-8 border border-gray-200 rounded-xl">
                        <p className="h-12 w-12 flex items-center justify-center font-bold text-appSecondary-dark text-xl rounded bg-[#eafdf1]">{initiatives[2].number}</p>
                        <p className="mt-3 font-semibold text-left">{initiatives[2].title}</p>
                        <p className="mt-2 text-gray-800 text-left text-base leading-7">{initiatives[2].desc}</p>
                    </div>
                    <img
                        src={FuturePlanned03}
                        alt="Sustainability"
                        className="w-full h-[180px] md:h-[250px] object-cover rounded-xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default FuturePlannedProjectsComponent;

import BuildingConstructorsImage from "@/assets/images/consult/building_constructors.png";
import DomesticLPGImage from "@/assets/images/consult/domestic_LPG.png";
import ProjectManagementImage from "@/assets/images/consult/project_management.png";
import OilAndGasImage from "@/assets/images/consult/consult_oil_and_gas_image.png";
import WarehouseImage from "@/assets/images/our_specialty_04.png";

import GasIcon from "@/assets/images/consult/icons/gas_icon.png";
import ProductionIcon from "@/assets/images/consult/icons/Production.png";
import SettingsIcon from "@/assets/images/consult/icons/settings.png";


const SpecializedSolutionComponent = () => {
    const specialties = [
      {
        number: "01",
        title: "Oil and Gas Consulting:",
        desc: "We specialise in providing strategic consulting services that empower our clients to navigate the complexities of the oil and gas industry. Our team offers expert insights into market trends, regulatory environments, and technological advancements, enabling businesses to make informed decisions. We deliver solutions in gas monetization strategies, market feasibility studies, and risk assessments that optimise both upstream and downstream operations. Key areas of expertise include:",
      },
      {
        icon: GasIcon,
        title: "Gas Commercialization Strategies:",
        desc: "We analyse market trends, regulatory environments, and energy demand to create effective strategies for maximising gas resource utilisation and monetization. Our goal is to enhance the value of our clients' assets by aligning commercial strategies with market realities.",
      },
      {
        icon: ProductionIcon,
        title: "Exploration and Production Advisory:",
        desc: "Our consulting services extend to assisting exploration and production companies in improving operational efficiency, resource management, and technology integration to optimise production and drive profitability.",
      },
      {
        icon: SettingsIcon,
        title: "Regulatory Compliance and Risk Management:",
        desc: "We offer in-depth guidance on navigating the complex regulatory landscape of Nigeria’s oil and gas sector, ensuring compliance with local and international laws, while also providing risk mitigation strategies to safeguard investments.",
      },
      {
        number: "02",
        title: "LPG and Natural Gas Offtake Solutions",
        desc: "Bhakor Consult facilitates efficient offtake arrangements with strategic partners across Nigeria, supporting both large-scale LPG suppliers and clients within the domestic market. We ensure secure, streamlined off-take operations to meet growing energy demands sustainably.",
      },
      {
        number: "03",
        title: "Domestic LPG Offtake and Distribution",
        desc: "With extensive experience in LPG logistics and distribution, we enable the safe and effective delivery of LPG to commercial, industrial, and residential clients, contributing to cleaner energy adoption across Nigeria.",
      },
      {
        number: "04",
        title: "Project Management and Technical Services",
        desc: "From project inception to execution, our team delivers end-to-end management for oil and gas projects, including cost estimation, project supervision, and on-time delivery. Bhakor’s technical services ensure high standards of safety and operational efficiency throughout project lifecycles.",
      },
      {
        number: "05",
        title: "Supply Chain and Logistics Optimization",
        desc: "Bhakor Consult offers tailored logistics and supply chain solutions, encompassing everything from storage and transportation to asset management. Our services aim to enhance operational efficiency and cost-effectiveness, meeting clients' logistics needs within Nigeria’s challenging terrain.",
      },
    ];

    return (
      <div className="w-full pt-5 lg:pt-14 pb-10 lg:pb-20">
        {/* Title */}
        <div className="flex items-center gap-3 mb-2">
          <div className="h-0.5 w-12 bg-appSecondary-dark" />
          <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">
            OUR SERVICES
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <h2 className="lg:w-1/2 mt-2 text-2xl md:text-4xl font-bold text-left text-gray-900 tracking-wide leading-8 lg:leading-[3rem]">
            Specialized Solutions for Oil & Gas Growth and Sustainability
          </h2>
          <p className="lg:w-1/2 mt-4 lg:mt-0 text-gray-800 text-left text-base leading-7">
            Bhakor Consult Ltd offers specialized solutions designed to support
            the growth and sustainability of Nigeria's oil and gas sector. Our
            services include:
          </p>
        </div>

        {/* Cards and Images */}
        <div className="mt-8 space-y-8">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {specialties.slice(0, 1).map((item) => (
              <div key={item.number} className="px-6 py-8 bg-[#003B15]">
                <div className="flex items-center gap-4">
                  <p className="h-14 w-14 flex items-center justify-center font-bold text-[#003B15] text-2xl rounded-2xl bg-white">
                    {item.number}
                  </p>
                  <p className="mt-3 md:mt-0 font-semibold text-left text-xl text-white">
                    {item.title}
                  </p>
                </div>
                <p className="mt-3 text-white text-left text-base leading-7">
                  {item.desc}
                </p>
              </div>
            ))}
            <div>
              <img src={OilAndGasImage} alt="" className="w-full h-full" />
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties
              .filter((item) => item.icon)
              .map((item, index) => (
                <div
                  key={item.title}
                  className={`px-6 py-8 border border-gray-200 rounded-3xl ${
                    index === 2 ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  {item.icon && (
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="h-12 w-12 object-contain bg-[#eafdf1] p-2 rounded"
                    />
                  )}
                  <p className="mt-3 font-semibold text-left">{item.title}</p>
                  <p className="mt-2 text-gray-800 text-left text-base leading-7">
                    {item.desc}
                  </p>
                </div>
              ))}
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <img
                src={BuildingConstructorsImage}
                alt=""
                className="w-full h-full"
              />
            </div>
            {specialties.slice(4, 5).map((item) => (
              <div key={item.number} className="px-6 py-15 bg-[#CCEFD9]/50">
                <div className="flex items-center gap-4">
                  <p className="h-14 w-14 flex items-center justify-center font-bold bg-[#003B15] text-2xl rounded-2xl text-[#AAE5BF]">
                    {item.number}
                  </p>
                  <p className="mt-3 md:mt-0 font-semibold text-left text-xl text-[#003B15]">
                    {item.title}
                  </p>
                </div>
                <p className="mt-3 text-[#151518] text-left text-base leading-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Fourth Row */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {specialties.slice(5, 6).map((item) => (
              <div
                key={item.number}
                className="px-6 py-8 md:py-18 bg-[#003B15] "
              >
                <div className="flex items-center gap-4">
                  <p className="h-14 w-14 flex items-center justify-center font-bold text-[#003B15] text-2xl rounded-2xl bg-white">
                    {item.number}
                  </p>
                  <p className="mt-3 md:mt-0 font-semibold text-left text-xl text-white">
                    {item.title}
                  </p>
                </div>
                <p className="mt-3 text-white text-left text-base leading-7">
                  {item.desc}
                </p>
              </div>
            ))}
            <div>
              <img src={DomesticLPGImage} alt="" className="w-full h-full" />
            </div>
          </div>

          {/* Fifth Row */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <img
                src={ProjectManagementImage}
                alt=""
                className="w-full h-full"
              />
            </div>
            {specialties.slice(6, 7).map((item) => (
              <div key={item.number} className="px-6 py-15 bg-[#CCEFD9]/50">
                <div className="flex items-center gap-4">
                  <p className="h-14 w-14 flex items-center justify-center font-bold bg-[#003B15] text-2xl rounded-2xl text-[#AAE5BF]">
                    {item.number}
                  </p>
                  <p className="mt-3 md:mt-0 font-semibold text-left text-xl text-[#003B15]">
                    {item.title}
                  </p>
                </div>
                <p className="mt-3 text-[#151518] text-left text-base leading-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Sixth Row */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {specialties.slice(7, 8).map((item) => (
              <div
                key={item.number}
                className="px-6 py-8 md:py-18 bg-[#003B15] "
              >
                <div className="flex items-center gap-4">
                  <p className="h-14 w-14 flex items-center justify-center font-bold text-[#003B15] text-2xl rounded-2xl bg-white">
                    {item.number}
                  </p>
                  <p className="mt-3 md:mt-0 font-semibold text-left text-xl text-white">
                    {item.title}
                  </p>
                </div>
                <p className="mt-3 text-white text-left text-base leading-7">
                  {item.desc}
                </p>
              </div>
            ))}
            <div>
              <img
                src={WarehouseImage}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default SpecializedSolutionComponent;
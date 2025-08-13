import FuturePlanned01 from "@/assets/images/future_planned_01.png";
import FuturePlanned02 from "@/assets/images/future_planned_02.png";
import FuturePlanned03 from "@/assets/images/our_specialty_03.png";

const FuturePlannedProjectsComponent = () => {
  const projects = [
    {
      number: "01",
      title: "Industry and Manufacturing:",
      desc: "Bhakor Consult extends its services to the industrial and manufacturing sectors, where energy plays a crucial role in driving production and profitability. We offer consultancy on energy procurement, process efficiency, and industrial gas utilisation, helping manufacturers optimise their energy use and reduce costs. Our expertise in LPG and natural gas utilisation ensures that industrial clients have access to reliable and cost-effective energy solutions, enabling them to improve operational efficiency and meet sustainability goals.",
    },
    {
      number: "02",
      title: "Investment and Financial Services:",
      desc: "The investment landscape in the oil and gas sector is complex and requires strategic insights and financial acumen. Bhakor Consult provides specialised investment advisory services to businesses looking to invest in the energy sector. We help clients identify opportunities in both local and international markets, offering comprehensive financial analysis, project evaluation, and investment structuring. Our expertise ensures that clients can make informed decisions that align with their financial goals while mitigating risk in a rapidly changing energy market.",
    },
    {
      number: "03",
      title: "Infrastructure and Process Automation:",
      desc: "Bhakor Consult is a leader in business process optimization, instrumentation, and process control, offering services that streamline operations across energy infrastructure projects. We work with clients in the development of energy infrastructure, providing solutions that include process automation, instrumentation, and monitoring systems. Our approach is designed to improve operational efficiency, enhance safety, and ensure compliance with industry regulations. We support energy companies in achieving higher levels of productivity and operational resilience through cutting-edge technology and process innovation.",
    },
    {
      number: "04",
      title: "Energy Trading:",
      desc: "Our expertise extends to the dynamic world of energy trading, where Bhakor Consult plays a pivotal role in facilitating transactions across various energy commodities, including natural gas and LPG. We offer advisory services to help clients navigate energy markets, providing in-depth market analysis, pricing strategies, and risk management. By leveraging our understanding of market dynamics and regulatory environments, we assist clients in maximising the value of their energy assets while ensuring compliance with both local and international trading standards.",
    },
    {
      number: "05",
      title: "Government and Regulatory Agencies:",
      desc: "We work closely with government bodies and regulatory agencies to support the development and implementation of policies that shape Nigeria’s energy sector. Bhakor Consult provides strategic guidance on regulatory compliance, policy advocacy, and energy sector reforms. Our services help bridge the gap between the private sector and government, ensuring that energy policies are aligned with industry best practices and contribute to the sustainable growth of Nigeria’s oil and gas sector.",
    },
    {
      number: "06",
      title: "Liquefied Petroleum Gas (LPG):",
      desc: "As a significant LPG off-taker from Nigeria LNG and NNPC for over a decade, Bhakor Consult is a leader in the LPG industry. We work with clients across the LPG value chain, from producers and storage operators to transportation and distribution companies. Our services are designed to ensure seamless LPG utilisation and supply, addressing infrastructure challenges and market demand fluctuations. Bhakor Consult provides strategic insight into LPG market penetration, regulatory compliance, and the development of efficient logistics networks, ensuring a consistent and sustainable LPG supply for both domestic and industrial consumption.",
    },
    {
      number: "07",
      title: "Oil and Gas:",
      desc: "The oil and gas industry is at the core of our operations. Bhakor Consult provides tailored solutions to upstream, midstream, and downstream players, focusing on gas commercialization, LPG utilisation, and business process optimization. We support exploration and production companies in maximising asset value, improving operational efficiency, and navigating regulatory frameworks. Our comprehensive services include strategic consulting, process automation, and supply chain management, helping companies optimise their operations while transitioning to more sustainable energy solutions.",
    },
  ];

  return (
    <div className="w-full pt-5 lg:pt-14 pb-10 lg:pb-20">
      {/* Title */}
      <div className="flex items-center gap-3 mb-2">
        <div className="h-0.5 w-12 bg-appSecondary-dark" />
        <span className="text-green-600 font-semibold text-sm tracking-wider">
          OUR INDUSTRIES
        </span>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
        <h2 className="lg:w-1/2 mt-2 lg:mt-0 text-2xl md:text-4xl font-bold text-left text-gray-900 tracking-wide leading-8 lg:leading-[3rem]">
          The Best At Providing Oil and Gas Services in Nigeria
        </h2>
        <p className="lg:w-1/2 mt-4 lg:mt-0 text-gray-800 text-left text-base leading-7">
          Bhakor Consult serves a diverse array of industries, providing
          specialised expertise and innovative solutions to meet the complex
          needs of Nigeria’s evolving energy landscape. Our deep industry
          knowledge and strategic approach enable us to offer unparalleled
          services across the following key sectors:
        </p>
      </div>

      {/* Projects 01-03 */}
      <img
        src={FuturePlanned02}
        alt="Gas Plant"
        className="w-full h-[220px] lg:h-[450px] mt-5 object-cover object-bottom rounded-xl"
      />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {projects.slice(0, 3).map((project) => (
          <div
            key={project.number}
            className={`px-6 py-8 border border-[#A8ACB8] rounded-xl ${
              project.number === "03" ? "md:col-span-2" : ""
            }`}
          >
            <p className="h-12 w-12 flex items-center justify-center font-bold text-[#8B580C] text-xl rounded-2xl bg-[#FEEED3]/50">
              {project.number}
            </p>
            <p className="mt-3 font-semibold text-left">{project.title}</p>
            <p className="mt-2 text-gray-800 text-left text-base leading-7">
              {project.desc}
            </p>
          </div>
        ))}
      </div>
      <img
        src={FuturePlanned03}
        alt="Gas Plant"
        className="w-full h-[220px] lg:h-[450px] object-cover rounded-xl object-bottom"
      />
      
      {/* Projects 04-06 */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {projects.slice(3, 6).map((project) => (
          <div
            key={project.number}
            className={`px-6 py-8 border border-[#A8ACB8] rounded-xl ${
              project.number === "06" ? "md:col-span-2" : ""
            }`}
          >
            <p className="h-12 w-12 flex items-center justify-center font-bold text-[#8B580C] text-xl rounded-2xl bg-[#FEEED3]/50">
              {project.number}
            </p>
            <p className="mt-3 font-semibold text-left">{project.title}</p>
            <p className="mt-2 text-gray-800 text-left text-base leading-7">
              {project.desc}
            </p>
          </div>
        ))}
      </div>
      <img
        src={FuturePlanned01}
        alt="Gas Plant"
        className="w-full h-[220px] lg:h-[450px] object-cover rounded-xl object-bottom"
      />

      {/* Project 07 */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="px-6 py-8 border border-[#A8ACB8] rounded-xl md:col-span-2">
          <p className="h-12 w-12 flex items-center justify-center font-bold text-[#8B580C] text-xl rounded-2xl bg-[#FEEED3]/50">
            {projects[6].number}
          </p>
          <p className="mt-3 font-semibold text-left">{projects[6].title}</p>
          <p className="mt-2 text-gray-800 text-left text-base leading-7">
            {projects[6].desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FuturePlannedProjectsComponent;

import TruckingSolutionsImage from "@/assets/images/energy_services/trucking_solution.jpg";
import RetailBusinessImage from "@/assets/images/energy_services/retail_business.png";
import LPGConversionImage from "@/assets/images/energy_services/LPG_conversion.jpg";
import LPGLogisticsImage from "@/assets/images/energy_services/LPG_logistics.jpg";

const ConventionalOilAndGasComponent = () => {
  const specialties = [
    {
      number: "1.",
      title: "LPG Logistics",
      desc: "Efficient logistics form the backbone of Bhakor Energy. With a fleet of specialized vehicles and a network of secure facilities, we ensure the safe and timely delivery of LPG across Nigeria. Our logistics solutions cater to the unique needs of our clients, optimizing fuel transportation with advanced safety and tracking protocols.",
    },
    {
      number: "2.",
      title: "Trucking Solutions",
      desc: "Our trucking services are designed to support Nigeria's energy sector, combining safety, speed, and reliability. Bhakor Energy’s dedicated fleet provides reliable and streamlined LPG transportation, managed by experienced professionals to ensure the highest standards in logistics and distribution.",
    },
    {
      number: "3.",
      title: "Retail Business",
      desc: "We bring energy directly to consumers through a range of LPG products, with a focus on quality, safety, and accessibility. Bhakor Energy retail outlets deliver clean and affordable energy options, supporting households, businesses, and communities in embracing LPG for a sustainable future.",
    },
    {
      number: "4.",
      title: "LPG Conversion",
      desc: "Through our LPG conversion services, Bhakor Energy assists businesses and individuals in transitioning to LPG as an alternative energy source. Our team of experts facilitates seamless conversions, empowering clients to embrace cleaner, more efficient energy sources.",
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

      <div className="">
        <h2 className="mt-2 text-2xl md:text-4xl font-bold text-left text-gray-900 tracking-wide leading-8 lg:leading-[3rem]">
          Conventional Oil & Gas Advocates With Efficient & Sustainable
          Solutions
        </h2>
      </div>

      {/* Cards and Images */}
      <div className="mt-8 space-y-8">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-0">
          {specialties.slice(0, 1).map((item) => (
            <div
              key={item.number}
              className="px-6 py-8 border border-[#DBDBDB] md:rounded-tl-3xl md:rounded-bl-3xl"
            >
              <div className="flex items-center text-[#000000]">
                <p className="h-10 w-10 flex items-center justify-center font-bold  text-xl">
                  {item.number}
                </p>
                <p className="font-semibold text-xl">{item.title}</p>
              </div>
              <p className="mt-3 text-left text-base leading-7">{item.desc}</p>
            </div>
          ))}
          <div>
            <img
              src={LPGLogisticsImage}
              alt=""
              className="w-full h-full rounded-2xl md:rounded-tl-none md:rounded-bl-none md:rounded-tr-3xl md:rounded-br-3xl"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-0">
          <div>
            <img
              src={TruckingSolutionsImage}
              alt=""
              className="w-full h-full rounded-2xl md:rounded-tr-none md:rounded-br-none md:rounded-tl-3xl md:rounded-bl-3xl"
            />
          </div>
          {specialties.slice(1, 2).map((item) => (
            <div
              key={item.number}
              className="px-6 py-8 border border-[#DBDBDB] md:rounded-tr-3xl md:rounded-br-3xl"
            >
              <div className="flex items-center text-[#000000]">
                <p className="h-10 w-10 flex items-center justify-center font-bold  text-xl">
                  {item.number}
                </p>
                <p className="font-semibold text-xl">{item.title}</p>
              </div>
              <p className="mt-3 text-left text-base leading-7">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-0">
          {specialties.slice(2, 3).map((item) => (
            <div
              key={item.number}
              className="px-6 py-8 border border-[#DBDBDB] md:rounded-tl-3xl md:rounded-bl-3xl"
            >
              <div className="flex items-center text-[#000000]">
                <p className="h-10 w-10 flex items-center justify-center font-bold  text-xl">
                  {item.number}
                </p>
                <p className="font-semibold text-xl">{item.title}</p>
              </div>
              <p className="mt-3 text-left text-base leading-7">{item.desc}</p>
            </div>
          ))}
          <img
            src={RetailBusinessImage}
            alt=""
            className="w-full h-full rounded-2xl md:rounded-tl-none md:rounded-bl-none md:rounded-tr-3xl md:rounded-br-3xl"
          />
        </div>

        {/* Fourth Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-0">
          <div>
            <img
              src={LPGConversionImage}
              alt=""
              className="w-full h-full rounded-2xl md:rounded-tr-none md:rounded-br-none md:rounded-tl-3xl md:rounded-bl-3xl"
            />
          </div>
          {specialties.slice(3, 4).map((item) => (
            <div
              key={item.number}
              className="px-6 py-8 border border-[#DBDBDB] md:rounded-tr-3xl md:rounded-br-3xl"
            >
              <div className="flex items-center text-[#000000]">
                <p className="h-10 w-10 flex items-center justify-center font-bold  text-xl">
                  {item.number}
                </p>
                <p className="font-semibold text-xl">{item.title}</p>
              </div>
              <p className="mt-3 text-left text-base leading-7">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConventionalOilAndGasComponent;

import { useState } from "react";
import AboutUsComponent from "./about_us/about_us.component";
import { ArrowLeft, ArrowRight } from "solar-icon-set";
import ConventionalOilAndGasComponent from "./our_services/conventional_oil_and_gas.component";

const ConsultsTabWrapperComponent = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
      { id: 1, title: "About Us" },
      { id: 2, title: "Our Services" },
    ];
    const handleTabChange = (id:number) => {
        setActiveTab(id);
    };

    const handlePrevTab = () => {
        setActiveTab((prevTab) => (prevTab > 0 ? prevTab - 1 : 0));
    };

    const handleNextTab = () => {
        setActiveTab((prevTab) =>
            prevTab < tabs.length - 1 ? prevTab + 1 : tabs.length - 1
        );
    };


    return (
      <section
        className="h-auto w-full"
      >
        <div className="container mx-auto px-3 lg:px-16 lg:pt-10 pb-5 flex flex-col xl:flex-row items-start justify-between gap-x-10">
          <div className="h-full w-full xl:w-[20%] mt-5 lg:mt-26">
            {/*==== Tabs List (Desktop) =====*/}
            <div className="hidden xl:block">
              {tabs.map((tab, index) => (
                <div className="w-full mb-8 group" key={tab.id}>
                  <p
                    className={`w-full text-left rounded-md text-base font-medium cursor-pointer
                                        ${
                                          activeTab === index
                                            ? "text-appSecondary-dark"
                                            : "text-gray-600 hover:bg-gray-100"
                                        }
                                    `}
                    onClick={() => handleTabChange(index)}
                  >
                    {tab.title}
                  </p>
                  <div
                    className={`
                                        h-0.5 w-12 bg-appSecondary-dark
                                        transition-all duration-300 origin-left
                                        ${
                                          activeTab === index
                                            ? "scale-x-100"
                                            : "scale-x-0 group-hover:scale-x-100"
                                        }
                                    `}
                  />
                </div>
              ))}
            </div>

            {/*==== Tabs List (Mobile) =====*/}
            <div className="w-full xl:hidden mb-5">
              <div className="flex items-center justify-between mb-4">
                <button
                  className={`text-gray-600 hover:text-appSecondary-dark disabled:text-gray-300 disabled:cursor-not-allowed`}
                  onClick={handlePrevTab}
                  disabled={activeTab === 0}
                >
                  <ArrowLeft size={20} iconStyle="Linear" />
                </button>

                <h2 className="text-lg font-semibold text-gray-800">
                  {tabs[activeTab].title}
                </h2>

                <button
                  className={`text-gray-600 hover:text-appSecondary-dark disabled:text-gray-300 disabled:cursor-not-allowed`}
                  onClick={handleNextTab}
                  disabled={activeTab === tabs.length - 1}
                >
                  <ArrowRight size={20} iconStyle="Linear" />
                </button>
              </div>
            </div>
          </div>

          {/*==== Tab Contents ====*/}
          <div className="h-auto w-full xl:w-[80%]">
            {activeTab === 0 ? (
              <>
                <AboutUsComponent />
              </>
            ) : (
              <>
                <ConventionalOilAndGasComponent />
              </>
            )}
          </div>
        </div>
      </section>
    );
};

export default ConsultsTabWrapperComponent;
import { useState } from "react";
import AboutUsComponent from "./about_us/about_us.component";
import WhyUsComponent from "./about_us/why_us.component";
import WhyUsBackground from "@/assets/images/our_specialty_03.png";
import CorporateValueComponent from "./about_us/corporate_value.component";
import EnvironmentalPolicyComponent from "./about_us/environmental_policy.component";
import { ArrowLeft, ArrowRight } from "solar-icon-set";
import OurSpecialtyComponent from "./our_services/our_specialty.component";
import FuturePlannedProjectsComponent from "./future_planned/future_planned_projects.component";

const ConsultsTabWrapperComponent = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { id: 1, title: "About Us" },
        { id: 2, title: "Our Services" },
        { id: 3, title: "Future Planned Projects" },
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
        <section className="h-auto w-full"
            style={{
                backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.93)), url(${WhyUsBackground})`,
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="container mx-auto px-3 lg:px-16 lg:pt-10 pb-5 flex flex-col xl:flex-row items-start justify-between gap-x-10">

                <div className="h-full w-full xl:w-[20%] mt-5 lg:mt-26">
                    {/*==== Tabs List (Desktop) =====*/}
                    <div className="hidden xl:block">
                        {tabs.map((tab, index) => (
                            <div className="w-full mb-8 group" key={tab.id}>
                                <p
                                    className={`w-full text-left rounded-md text-base font-medium cursor-pointer
                                        ${activeTab === index ? "text-appSecondary-dark" : "text-gray-600 hover:bg-gray-100"}
                                    `}
                                    onClick={() => handleTabChange(index)}
                                >
                                    {tab.title}
                                </p>
                                <div
                                    className={`
                                        h-0.5 w-12 bg-appSecondary-dark
                                        transition-all duration-300 origin-left
                                        ${activeTab === index ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
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
                    {(activeTab === 0) ? (
                        <>
                            <AboutUsComponent />
                            <WhyUsComponent />
                            <CorporateValueComponent />
                            <EnvironmentalPolicyComponent />
                        </>
                    ) : (activeTab === 1) ? (
                        <>
                            <OurSpecialtyComponent />
                        </>
                    ) : (
                        <>
                            <FuturePlannedProjectsComponent />
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ConsultsTabWrapperComponent;
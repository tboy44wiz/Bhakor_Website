
import MissionIcon from "@/assets/images/mission_icon.png";
import VisionIcon from "@/assets/images/vision_icon.png";
import AboutImageOne from "@/assets/images/about_image_1.jpg";
import AboutImageTwo from "@/assets/images/about_image_2.jpg";
import AboutImageThree from "@/assets/images/about_image_3.jpg";
import AboutImageFour from "@/assets/images/about_image_4.jpg";

const AboutUsComponent = () => {
    return (
        <div className="h-auto w-full pb-10 lg:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            {/*==== Image Grid Section ====*/}
            <div className="h-full w-full grid grid-cols-12 gap-2.5 lg:gap-4 items-end">
                <div className="col-span-6 rounded-3xl overflow-hidden">
                    <img 
                        src={AboutImageOne}
                        alt="About Image One"
                        className="h-[185px] lg:h-[410px] w-full object-cover"
                    />
                </div>

                <div className="col-span-6 rounded-3xl overflow-hidden">
                    <img 
                        src={AboutImageTwo}
                        alt="About Image Two"
                        className="h-[220px] lg:h-[480px] w-full object-cover"
                    />
                </div>

                <div className="col-span-8 rounded-3xl overflow-hidden">
                    <img 
                        src={AboutImageThree}
                        alt="About Image Three"
                        className="h-[140px] lg:h-[315px] w-full object-cover"
                    />
                </div>

                <div className="col-span-4 rounded-3xl overflow-hidden">
                    <img 
                        src={AboutImageFour}
                        alt="About Image Four"
                        className="h-[140px] lg:h-[315px] w-full object-cover"
                    />
                </div>
            </div>

            {/*==== Content Section ====*/}
            <div className="mt-4 lg:mt-0">
                <div>
                    <div className="flex items-center gap-3">
                        <div className="h-0.5 w-12 bg-appSecondary-dark" />
                        <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">
                            About Us
                        </span>
                    </div>
                    <h2 className="mt-2 text-2xl md:text-5xl font-bold text-left text-gray-900 leading-8 lg:leading-15">
                        We Are More Than <br className="hidden xl:block" />Just a <br className="lg:hidden" /> <span className="text-green-600">Gas Company</span>
                    </h2>
                </div>

                {/* Description */}
                <p className="mt-4 lg:pe-6 text-justify leading-8">
                    Bhakor Logistics Limited is a prominent division of the Bhakor Group, dedicated to promoting gas 
                    commercialization and stimulating gas industrialization in Nigeria. 
                    Our mission is to enhance gas utilization, transportation, and distribution for the development 
                    of the Nigerian domestic gas market. With a focus on sustainability and innovation, 
                    we are committed to identifying opportunities that facilitate growth and increase gas penetration 
                    across the country.
                </p>

                {/* Vision and Mission */}
                <div className="mt-7">
                    {/* Vision */}
                    <div className="mt-5">
                        <div className="flex items-center">
                            <div className="h-[80px] w-[70px] lg:w-[90px] relative flex justify-center items-center">
                                <svg
                                    viewBox="0 0 40 40"
                                    className="h-16 w-16 lg:h-20 lg:w-20 absolute inset-0 m-auto" // Responsive size
                                >                                
                                    <path
                                    d="M0,20l10-17.32h20l10,17.32l-10,17.32H10L0,20z"
                                    fill="none"
                                    stroke="#101828"
                                    strokeDasharray="1 2"
                                    strokeWidth="0.5"
                                    />
                                </svg>

                                <svg
                                    viewBox="0 0 40 40"
                                    className="h-12 w-12 lg:h-16 lg:w-16 absolute inset-0 m-auto"
                                >
                                    <path
                                    d="M0,20l10-17.32h20l10,17.32l-10,17.32H10L0,20z"
                                    fill="#F0F6FC"
                                    />
                                </svg>

                                <svg 
                                    viewBox="0 0 40 40"
                                    className="h-9 w-9 lg:h-12 lg:w-12 absolute inset-0 m-auto"
                                >
                                    <path
                                    d="M0,20l10-17.32h20l10,17.32l-10,17.32H10L0,20z"
                                    fill="#AAE5BF"
                                    />
                                </svg>
                                <img src={VisionIcon} alt="Mission Icon" className="h-3 lg:h-4 w-auto absolute inset-0 m-auto z-10" />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900">Vision</h3>
                        </div>

                        <p className="mt-2 lg:pr-10 text-justify leading-6 lg:leading-7">
                            To become the preferred indigenous gas company, recognized for providing 
                            innovative and cost-effective solutions in the oil and gas sector.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="mt-5">
                        <div className="flex items-center gap-3">
                            <div className="h-[80px] w-[70px] lg:w-[90px] relative flex justify-center items-center">
                                <svg
                                    viewBox="0 0 40 40"
                                    className="h-16 w-16 lg:h-20 lg:w-20 absolute inset-0 m-auto" // Responsive size
                                >
                                    <path
                                    d="M0,20l10-17.32h20l10,17.32l-10,17.32H10L0,20z"
                                    fill="none"
                                    stroke="#101828"
                                    strokeDasharray="1 2"
                                    strokeWidth="0.5"
                                    />
                                </svg>

                                <svg
                                    viewBox="0 0 40 40"
                                    className="h-12 w-12 lg:h-16 lg:w-16 absolute inset-0 m-auto"
                                >
                                    <path
                                    d="M0,20l10-17.32h20l10,17.32l-10,17.32H10L0,20z"
                                    fill="#F0F6FC"
                                    />
                                </svg>

                                <svg 
                                    viewBox="0 0 40 40"
                                    className="h-9 w-9 lg:h-12 lg:w-12 absolute inset-0 m-auto"
                                >
                                    <path
                                    d="M0,20l10-17.32h20l10,17.32l-10,17.32H10L0,20z"
                                    fill="#AAE5BF"
                                    />
                                </svg>
                                <img src={MissionIcon} alt="Mission Icon" className="h-3 lg:h-4 w-auto absolute inset-0 m-auto z-10" />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900">Mission</h3>
                        </div>
                        <p className="mt-2 lg:pr-6 text-justify leading-7 lg:leading-8">
                            To strengthen organisational systems and optimise value from business 
                            technology solutions while ensuring a commitment to environmental 
                            stewardship and community engagement.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsComponent;
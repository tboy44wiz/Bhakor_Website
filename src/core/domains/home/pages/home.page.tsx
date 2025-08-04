import AboutUsComponent from "../components/about_us.component";
import BhakorSubsidiariesComponent from "../components/bhakor_subsidiaries.component";
import GalleryComponent from "../components/gallery_component";
import HeroComponent from "../components/hero.component";
import MissionVisionAndServicesComponent from "../components/mission_vision_and_services.component";
import PartnersComponent from "../components/partners.component";
import SpecialtyComponent from "../components/specialty_component";

const HomePage = () => {
    return (
        <main className="h-full w-full">
            {/*==== Hero Section */}
            <HeroComponent />

            {/*==== Mission, Vision and Services Section */}
            <MissionVisionAndServicesComponent />

            {/*==== Partners Section */}
            <PartnersComponent />

            {/*==== About Us Section */}
            <AboutUsComponent />

            {/*==== Bhakor Subsidiaries Section */}
            <BhakorSubsidiariesComponent />

            {/*==== Specialty Section ====*/}
            <SpecialtyComponent />

            {/*==== Our Gallery Section ====*/}
            <GalleryComponent />
        </main>
    );
};

export default HomePage;

import HeroComponent from "../components/hero.component";
import ConsultsTabWrapperComponent from "../components/consults_tab_wrapper.component";

const EnergyServicesPage = () => {
  return (
    <main className="h-full w-full">
      {/*==== Hero Section */}
      <HeroComponent />

      {/*==== Tabs Wrapper Section ====*/}
      <ConsultsTabWrapperComponent />
    </main>
  )
}

export default EnergyServicesPage;
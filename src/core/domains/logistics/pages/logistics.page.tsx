import HeroComponent from "../components/hero.component";
import LogisticsTabWrapperComponent from "../components/logistics_tab_wrapper.component";

const LogisticsPage = () => {
  return (
    <main className="h-full w-full">
      {/*==== Hero Section */}
      <HeroComponent />

      {/*==== Tabs Wrapper Section ====*/}
      <LogisticsTabWrapperComponent />
    </main>
  )
}

export default LogisticsPage;
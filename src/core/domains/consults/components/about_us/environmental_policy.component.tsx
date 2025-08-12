import EnvironmentalPolicy from "@/assets/images/environmental_policy.png"; // Update with your actual image path

const EnvironmentalPolicyComponent = () => (
  <section className="w-full pt-16 pb-10">
    <div className="container mx-auto">
      {/* Title */}
      <div className="flex items-center gap-3 mb-2">
        <div className="h-0.5 w-12 bg-appSecondary-dark" />
        <span className="text-green-600 font-semibold text-sm tracking-wider uppercase">
          ENVIRONMENTAL POLICY
        </span>
      </div>
      <h2 className="mt-2 text-2xl md:text-5xl font-bold text-left text-gray-900 leading-8 lg:leading-15">
        A Leading Player in the Oil and Gas Industry. We’re Constantly Pushing the Boundaries
      </h2>

      <div className="mt-8 flex flex-col-reverse lg:flex-row gap-5 lg:gap-8 items-start">
        <p className="h-auto w-full lg:w-[50%] text-justify lg:text-left text-gray-800 text-base leading-6 lg:leading-8">
          As a responsible corporate entity, BHAKOR LOGISTICS LTD is committed to protecting the environment in 
          compliance with the environmental laws and the practices of the communities where it operates. While 
          pursuing our activities we endeavour to minimize any adverse impact on air, water and land by 
          means of pollution prevention and energy and water conservation. By doing so, we achieve cost savings, 
          an increased operational efficiency, improved quality of products and services and ultimately, a safe 
          environment for the community as a whole and a healthy workplace for our employees.
        </p>
        <img
          src={EnvironmentalPolicy}
          alt="Environmental Policy"
          className="h-[300px] w-full lg:w-[50%] object-cover rounded-2xl"
        />
      </div>
    </div>
  </section>
);

export default EnvironmentalPolicyComponent;
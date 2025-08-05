
import PartnerOne from "../../../../assets/images/partners/lng_logo.png";
import PartnerTwo from "../../../../assets/images/partners/waltersmith_logo.png";
import PartnerThree from "../../../../assets/images/partners/axxela_logo.png";
import PartnerFour from "../../../../assets/images/partners/wagpco_lgo.png";
import PartnerFive from "../../../../assets/images/partners/nnpc_logo.png";
import PartnerSix from "../../../../assets/images/partners/transgaz_logo.png";


const PartnersComponent = () => {
  return (
    <section className="h-auto w-full hidden lg:block pt-60 pb-10 bg-white">
        <div className="container mx-auto px-5 flex items-center justify-around">
            <img src={PartnerOne} alt="Partner One" className="h-24 w-auto bg-amber-300" />
            <img src={PartnerTwo} alt="Partner Two" className="h-24 w-auto" />
            <img src={PartnerThree} alt="Partner Three" className="h-24 w-auto" />
            <img src={PartnerFour} alt="Partner Four" className="h-24 w-auto" />
            <img src={PartnerFive} alt="Partner Five" className="h-24 w-auto" />
            <img src={PartnerSix} alt="Partner Six" className="h-24 w-auto" />
        </div>
    </section>
  );
};

export default PartnersComponent;
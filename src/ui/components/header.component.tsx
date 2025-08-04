import { NavLink } from "react-router";
import BhakorLogo from "../../assets/images/logo.png";
import { ArrowRight } from "solar-icon-set";

const navLinks = [
  {
    to: "/",
    label: "Home"
  },
  {
    to: "/logistics",
    label: "Bhakor Logistics"
  },
  {
    to: "/services",
    label: "Bhakor Consult"
  },
  {
    to: "/contact",
    label: "Bhakor Energy Services"
  }
];

const HeaderComponent = () => {
  return (
    <header className="w-full shadow-md fixed bg-white z-50">
        <div className="container mx-auto px-5 py-4 flex justify-between items-center">
          <img src={BhakorLogo} alt="Bhakor Logo" className="h-14 w-auto" />
          <nav className="space-x-6 hidden md:block">
            {  navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={`hover:text-green-600 ${
                    location.pathname === link.to ? "text-green-700 font-openSansBold font-semibold" : ""
                  }`}
                >
                  {link.label}
                </NavLink>
            ))}
          </nav>
          <button className="px-4 py-2 flex items-center bg-appPrimary-dark text-white rounded-md">
              Get A Quote
              <ArrowRight size={20} iconStyle="Linear" className="ml-2" />
          </button>
        </div>
    </header>
  );
};

export default HeaderComponent;
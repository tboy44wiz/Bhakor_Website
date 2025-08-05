import { useState } from "react";
import { NavLink } from "react-router";
import BhakorLogo from "../../assets/images/logo.png";
import { ArrowRight, HamburgerMenu } from "solar-icon-set";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-md fixed top-0 left-0 right-0 bg-white z-50">
      <div className="container mx-auto px-5 py-4 flex justify-between items-center">
        <img src={BhakorLogo} alt="Bhakor Logo" className="h-16 lg:h-14 w-auto" />

        {/*==== Hamburger Button ====*/}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="p-2 lg:hidden flex items-center bg-appSecondary-dark text-white rounded-md"
        >
          <HamburgerMenu color="#FFFFFF" size={32} iconStyle="Linear" className="lg:hidden" />
        </button>

        {/*==== Mobile Navigation Menu ====*/}
        <nav
          className={`h-screen w-full pt-24 absolute inset-0 lg:hidden bg-[#eafdf1] transition-transform duration-500 ${
            mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          style={{ zIndex: 100 }}
        >
          {/*==== Close Button ====*/}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="h-10 w-10 absolute top-4 right-4 lg:hidden flex items-center justify-center cursor-pointer"
          >
            <p className="font-light text-5xl text-appSecondary-dark">&times;</p>
          </button>

          {navLinks.map((link) => (
            <NavLink
              onClick={() => setMobileMenuOpen(false)}
              key={link.to}
              to={link.to}
              className={`mt-3 py-3 block text-lg lg:text-base hover:text-green-600`}
            >
              {link.label}
            </NavLink>
          ))}
          <button className="mt-16 mx-auto px-6 lg:px-4 py-3 lg:py-2 flex items-center text-lg lg:text-base text-white bg-appPrimary-dark rounded-md">
            Get A Quote
            <ArrowRight size={20} iconStyle="Linear" className="ml-2" />
          </button>
        </nav>

        {/*==== Desktop Navigation Menu ====*/}
        <nav className="space-x-6 hidden md:block">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="hover:text-green-600"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <button className="px-4 py-2 hidden md:flex items-center bg-appPrimary-dark text-white rounded-md">
          Get A Quote
          <ArrowRight size={20} iconStyle="Linear" className="ml-2" />
        </button>
      </div>
    </header>
  );
};

export default HeaderComponent;
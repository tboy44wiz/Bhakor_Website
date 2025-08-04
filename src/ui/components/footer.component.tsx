import { Link } from "react-router";
import FooterBackground from "../../assets/images/footer_background.png";
import { ArrowUp, ClockCircle, MapPoint } from "solar-icon-set";

const FooterComponent = () => {

  const handleScrollToTop = () => {
    // Try scrolling the main container if present, else fallback to window
    const main = document.querySelector("main");
    if (main) {
      main.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
        className="h-auto w-full pt-16 pb-5 relative bg-cover bg-center bg-no-repeat text-white"
        style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${FooterBackground})`,
        }}
    >
      <div className="container mx-auto text-left">
        <div className="h-auto w-full grid md:grid-cols-5 gap-20">

          {/*==== Bhakor Consult Info ====*/}
          <div className="md:col-span-2 items-start">
            <h2 className="text-xl font-bold">
              <span className="text-green-500">BHAKOR</span> CONSULT
            </h2>
            <p className="mt-5 leading-8">
              BHAKOR CONSULT LIMITED is an innovative Information and Communication Technologies (ICT) service provider, Energy and Consultancy Services company.
            </p>

            {/* Office Address */}
            <div className="mt-14">
              <h4 className="font-bold flex items-center gap-2 text-lg">
                <MapPoint color="#FFAA2C" size={22} /> OFFICE ADDRESS
              </h4>
              <p className="mt-3 leading-8">
                No 37 Libreville Crescent, Off Aminu Kano Crescent,<br />Wuse 2, Abuja.
              </p>
            </div>

            {/* Hours of Operation */}
            <div className="mt-14">
              <h4 className="font-bold flex items-center gap-2 text-lg">
                <ClockCircle color="#FFAA2C" size={22} /> HOURS OF OPERATION
              </h4>
              <p className="mt-3 leading-8">
                Mon. to Fri. 9am to 5pm.<br />
                Weekends 9am to 12pm
              </p>
            </div>
          </div>


          {/*==== Quick Links ====*/}
          <div className="items-start">
            <h4 className="text-xl font-bold">QUICK LINK</h4>
            <ul className="mt-5 space-y-2">
              <li><Link to="/logistics" className="hover:underline">Bhakor Logistics</Link></li>
              <li><Link to="/consult" className="hover:underline">Bhakor Consult</Link></li>
              <li><Link to="/energy-services" className="hover:underline">Bhakor Energy Services</Link></li>
              <li><Link to="/profiles" className="hover:underline">Bhakor Profiles</Link></li>
              <li><Link to="/galaxy" className="hover:underline">Bhakor Galaxy</Link></li>
              <li><Link to="/dubai" className="hover:underline">Bhakor LLC Dubai</Link></li>
            </ul>

            {/* Social Links */}
            <div className="mt-16">
              <h4 className="font-bold text-lg mb-2">SOCIAL LINKS</h4>
              <div className="mt-5 flex space-x-4 text-xl">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
                      <path strokeDasharray="24" strokeDashoffset="24" d="M17 4l-2 0c-2.5 0 -4 1.5 -4 4v12">
                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0" />
                      </path>
                      <path strokeDasharray="8" strokeDashoffset="8" d="M8 12h7">
                        <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="8;0" />
                      </path>
                    </g>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14">
                    <g fill="none">
                      <g clipPath="url(#primeTwitter0)">
                        <path fill="currentColor" d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z" />
                      </g>
                      <defs>
                        <clipPath id="primeTwitter0">
                          <path fill="#fff" d="M0 0h14v14H0z" /></clipPath>
                      </defs>
                    </g>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                    <path fill="currentColor" d="M8 0C5.829 0 5.556.01 4.703.048C3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7C.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297c.04.852.174 1.433.372 1.942c.205.526.478.972.923 1.417c.444.445.89.719 1.416.923c.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417c.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046c.78.035 1.204.166 1.486.275c.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485c.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598c-.28.11-.704.24-1.485.276c-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598a2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485c-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486c.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276c.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92a.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217a4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334a2.667 2.667 0 0 1 0-5.334" />
                  </svg>
                </a>
            </div>
          </div>
          </div>


          {/*==== Announcement ====*/}
          <div className="md:col-span-2 items-start">
            <h4 className="text-xl font-bold">ANNOUNCEMENT</h4>
            <p className="mt-5 leading-8">
              This is to inform all visitors that we are presently upgrading our online web portal. Updated content is currently being procured. Please bear with the management team.
            </p>

            <h4 className="mt-14 text-xl font-bold">WEB DEVELOPMENT</h4>
            <p className="mt-5 leading-8">
              Do you need a website up and running quickly? Then Bhakor Consult Ltd. is just what you are looking for.
              Hurry now to contact us <span className="text-green-400">(+2348036007563)</span> or via our website: <span className="text-green-400">www.bhakor.com.ng</span> or email: <span className="text-green-400">info@bhakor.com</span>.
              <br />
              Get your website or web portal looking impressive today!
            </p>
          </div>
        </div>


        {/* Scroll to Top Button */}
        <div className="absolute bottom-10 right-10">
          <button
            onClick={() => handleScrollToTop()}
            className="h-12 w-12 bg-appPrimary-dark rounded-md text-white text-xl hover:bg-orange-400 cursor-pointer"
          >
            <ArrowUp size={16} iconStyle="Linear" />
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-20 text-center text-sm text-white">
          Copyright © 2023. Bhakor Consult Limited. Powered by{" "}
          <a href="https://techwireict.com" target="_blank" rel="noopener noreferrer" className="text-green-400">Techwire ICT Solutions</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
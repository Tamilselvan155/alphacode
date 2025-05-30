import { useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { useDrawer } from '../Context/FormContext.jsx';


const Header = () => {
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const [servicesSubMenuOpen, setServicesSubMenuOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { openDrawer } = useDrawer();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: ""
  });
  
  // State to track which submenu sections are open
  const [openSections, setOpenSections] = useState({
    customSoftware: false,
    softwareTesting: false,
    aiBotDevelopment: false,
    webDevelopment: false,
    devOps: false,
    softwareSolutions: false,
    productEngineering: false
  });

  // Handle form input changes
  

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!", formData);
    setPopupOpen(false);
    setFormStep(1);
  };

  // Toggle submenu sections - React way (no DOM manipulation)
  const toggleSubSection = (id) => {
    // Close all sections first
    const updatedSections = {};
    Object.keys(openSections).forEach(key => {
      updatedSections[key] = key === id ? !openSections[key] : false;
    });
    
    setOpenSections(updatedSections);
  };

  const closeAll = () => {
    setNavMenuOpen(false);
    setServicesSubMenuOpen(false);
  };

  return (
    <>
      {/* Top-right wrapper */}
      <div className="fixed top-5 right-5 z-50 flex items-center gap-5">
        {/* Hamburger Toggle */}
        <div
          className="flex flex-col justify-between w-6 h-5 cursor-pointer"
          onClick={() => setNavMenuOpen(true)}
        >
          <span className="block w-full h-px bg-white"></span>
          <span className="block w-3/5 h-px bg-white"></span>
          <span className="block w-full h-px bg-white"></span>
        </div>

        {/* Get Started / Let's Connect Button */}
         {/* <Link
          onClick={openForm}
          className="
            px-4 py-2
            text-sm font-medium
            border border-black
            rounded-full
            bg-white text-black
            hover:bg-black hover:text-white
            transition-colors duration-200
          "
        >
          Let's Connect
        </Link>  */}
        <button
      onClick={(e) => {
        e.preventDefault();
        openDrawer();
      }}
      className="px-4 py-2 text-sm font-medium border border-black rounded-full bg-white text-black hover:bg-black hover:text-white transition-colors duration-200"
    >
      Let's Connect
    </button>
      </div>

      {/* Nav Menu */}
      <div 
        className={`fixed top-0 left-0 h-screen w-screen bg-black text-white z-50 p-16 box-border transition-opacity duration-300 ${navMenuOpen ? 'flex flex-col justify-center' : 'hidden'}`}
      >
        <span 
          className="absolute top-8 right-10 text-4xl cursor-pointer text-white"
          onClick={() => setNavMenuOpen(false)}
        >
          &times;
        </span>

        <div className="flex justify-between flex-wrap w-full h-full pt-16 md:flex-col md:pt-0 gap-70">
          {/* Left Column (Main Nav) */}
          <div className="flex-1 flex flex-col justify-center gap-8 text-5xl pl-16 relative md:text-5xl md:p-5 md:gap-10">
            <Link to={"/home"} className="text-white no-underline transition-colors hover:text-white" onClick={closeAll}>Home</Link>
            <Link to={"/about"} className="text-white no-underline transition-colors hover:text-white" onClick={closeAll}>About</Link>
            
            {/* Services with submenu */}
            <div className="relative">
              <Link 
                 
                className="text-white no-underline transition-colors hover:text-white"
                onClick={(e) => {
                  e.preventDefault();
                  setServicesSubMenuOpen(true);
                }}
              >
                Services
              </Link>
            </div>
            
            {/* <Link to={"/industries"} className="text-white no-underline transition-colors hover:text-white" onClick={closeAll}>Industries</Link> */}
            <Link 
              onClick={(e) => {
                e.preventDefault();
                closeAll();
                openDrawer();
              }} 
              className="text-white no-underline transition-colors hover:text-white"
            >
              Contact
            </Link>
          </div>
          
          {/* Right Column (Contact Info) */}
          <div className="flex-1 flex flex-col justify-center text-base pr-16 max-w-lg relative z-10 md:p-2 gap-20">
          <div>
  <p className="uppercase font-bold text-xs mb-2 text-white">Visit Us</p>
  <p>
    <strong>TEKVIAN PRIVATE LIMITED</strong><br />
    <Link to="#" className="text-white underline leading-relaxed">
      No:14, First Floor,<br />
      Spencer Plaza,<br />
      Anna Salai,<br />
      Mount Road,<br />
      Chennai - 600002
    </Link>
  </p>
</div>

            
            <div>
              <p className="uppercase font-bold text-xs mb-2 text-white">Write To Us</p>
              <Link to={"mailto:info@Tekvian.ai"} className="text-white underline leading-relaxed">
                info@Tekvian.ai
              </Link>
            </div>
            
            <div>
              <p className="uppercase font-bold text-xs mb-2 text-white">Let's Talk!</p>
              <Link to={"tel:+91-7603846245"} className="text-white underline leading-relaxed">+91-7603846245</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Submenu */}
      <div 
        // className={`fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-95 z-50 p-16 box-border overflow-y-auto ${servicesSubMenuOpen ? 'block' : 'hidden'}`}
        className={`fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-95 z-50 p-16 box-border overflow-y-auto transition-all duration-500 ease-in-out transform ${servicesSubMenuOpen ? 'opacity-100 translate-y-0 block' : 'opacity-0 -translate-y-5 pointer-events-none'}`}
>
        {/* <div className="flex justify-between items-center mb-10 pb-5 border-b border-gray-700">
          <span className="text-4xl font-bold md:text-3xl text-white">Intelligent Solutions</span>
          <span 
            className="cursor-pointer text-4xl p-1 text-white"
            onClick={() => setServicesSubMenuOpen(false)}
          >
            &times;
          </span>
        </div> */}
        <div className="flex justify-between items-center mb-10 pb-5 border-b border-gray-700">
  {/* Left Back Button */}
  <button 
    onClick={() => {
      setServicesSubMenuOpen(false);
      setNavMenuOpen(true); // Go back to Main Menu
    }}
    className="flex items-center gap-2 text-white text-lg md:text-base"
  >
    <span className="text-2xl">&#8592;</span> {/* Left arrow */}
  </button>

  {/* Center Title */}
  <span className="text-4xl font-bold md:text-3xl text-white">Intelligent Solutions</span>

  {/* Right Close (optional, you can keep it or remove) */}
  <span 
    className="cursor-pointer text-4xl p-1 text-white"
    onClick={() => setServicesSubMenuOpen(false)}
  >
    &times;
  </span>
</div>

        
        <div className="flex flex-col gap-10 max-w-6xl mx-auto">
          <div className="mb-5">
            <div 
              className="text-3xl cursor-pointer flex justify-between items-center py-4 text-white md:text-2xl"
              onClick={() => toggleSubSection("customSoftware")}
            >
              Software Development
              <span className={`transition-transform duration-300 ${openSections.customSoftware ? 'rotate-180' : ''}`}>&#9662;</span>
            </div>
            <div className={`flex-col pl-8 mt-5 border-l-4 border-gray-700 ${openSections.customSoftware ? 'flex' : 'hidden'}`}>
              <Link to={"/services/custom-software"} className="text-white no-underline text-2xl py-3 ml-4 hover:text-white md:text-xl" onClick={closeAll}>Custom Software Solutions</Link>
              <Link to={"/services/SaaS-Development"} className="text-white no-underline text-2xl py-3 ml-4 hover:text-white md:text-xl" onClick={closeAll}>SaaS Development</Link>
            </div>
          </div>
          
          <div className="mb-5">
            <div 
              className="text-3xl cursor-pointer flex justify-between items-center py-4 text-white md:text-2xl"
              onClick={() => toggleSubSection("webDevelopment")}
            >
              Web Development
              <span className={`transition-transform duration-300 ${openSections.webDevelopment ? 'rotate-180' : ''}`}>&#9662;</span>
            </div>
             <div className={`flex-col pl-8 mt-5 border-l-4 border-gray-700 ${openSections.webDevelopment ? 'flex' : 'hidden'}`}>
              {/* <Link className="text-white no-underline text-2xl py-3 ml-4 hover:text-white md:text-xl">UI/UX Design</Link>
              <Link className="text-white no-underline text-2xl py-3 ml-4 hover:text-white md:text-xl">Website Design & Development</Link>
              <Link className="text-white no-underline text-2xl py-3 ml-4 hover:text-white md:text-xl">Front-End Development</Link>
              <Link className="text-white no-underline text-2xl py-3 ml-4 hover:text-white md:text-xl">Back-End Development</Link>
              <Link className="text-white no-underline text-2xl py-3 ml-4 hover:text-white md:text-xl">E-Commerce Website Development</Link>
              <Link className="text-white no-underline text-2xl py-3 ml-4 hover:text-white md:text-xl">CMS Development</Link>
              <Link className="text-white no-underline text-2xl py-3 ml-4 hover:text-white md:text-xl">Responsive Website Design</Link>
              <Link className="text-white no-underline text-2xl py-3 ml-4 hover:text-white md:text-xl">Website Maintenance & Support</Link> */}
              <Link to={"/services/Webdevelopmennt/mernstack"} className="text-white no-underline text-2xl py-3 ml-4 hover:text-white md:text-xl" onClick={closeAll}>Full Stack Web Development (MERN)</Link>
            </div> 
          </div>
          
          <div className="mb-5">
            <div 
              className="text-3xl cursor-pointer flex justify-between items-center py-4 text-white md:text-2xl"
              onClick={() => toggleSubSection("softwareTesting")}
            >
              Software Testing
              <span className={`transition-transform duration-300 ${openSections.softwareTesting ? 'rotate-180' : ''}`}>&#9662;</span>
            </div>
            <div className={`flex-col pl-8 mt-5 border-l-4 border-gray-700 ${openSections.softwareTesting ? 'flex' : 'hidden'}`}>
              <Link to={"/services/testing/manual-testing"} className="text-white no-underline text-2xl py-3 ml-4 hover:text-white md:text-xl" onClick={closeAll}>Manual Testing</Link>
              <Link to={"/services/AutomationTesting"} className="text-white no-underline text-2xl py-3 ml-4 hover:text-white md:text-xl" onClick={closeAll}>Automation Testing</Link>
            </div>
          </div>

          {/* <div className="mb-5">
            <div 
              className="text-3xl cursor-pointer flex justify-between items-center py-4 text-white md:text-2xl"
              onClick={() => toggleSubSection("softwareTesting")}
            >
              AI Bot Development
              <span className={`transition-transform duration-300 ${openSections.softwareTesting ? 'rotate-180' : ''}`}>&#9662;</span>
            </div> */}
            {/* <div className={`flex-col pl-8 mt-5 border-l-4 border-gray-700 ${openSections.softwareTesting ? 'flex' : 'hidden'}`}>
              <Link className="text-white no-underline text-2xl py-3 ml-4 hover:text-white md:text-xl">Manual Testing</Link>
              <Link className="text-white no-underline text-2xl py-3 ml-4 hover:text-white md:text-xl">Automation Testing</Link>
            </div> */}
          {/* </div> */}
          
          {/* <div className="mb-5">
            <div 
              className="text-3xl cursor-pointer flex justify-between items-center py-4 text-white md:text-2xl"
              onClick={() => toggleSubSection("softwareSolutions")}
            >
              SaaS Solutions
              <span className={`transition-transform duration-300 ${openSections.softwareSolutions ? 'rotate-180' : ''}`}>&#9662;</span>
            </div> */}
            {/* {openSections.softwareSolutions && (
              <div className="flex-col pl-8 mt-5 border-l-4 border-gray-700">
                <Link className="text-white no-underline text-2xl py-3 ml-4 hover:text-white md:text-xl">Solution 1</Link>
                <Link className="text-white no-underline text-2xl py-3 ml-4 hover:text-white md:text-xl">Solution 2</Link>
              </div>
            )} */}
          {/* </div> */}

          <div className="mb-5">
            <div 
              className="text-3xl cursor-pointer flex justify-between items-center py-4 text-white md:text-2xl"
              onClick={() => toggleSubSection("devOps")}
            >
              Devops & Cloud Solutions
              <span className={`transition-transform duration-300 ${openSections.devOps ? 'rotate-180' : ''}`}>&#9662;</span>
            </div>
            <div className={`flex-col pl-8 mt-5 border-l-4 border-gray-700 ${openSections.devOps ? 'flex' : 'hidden'}`}>
              <Link to={'/services/devops/aws'} className="text-white no-underline text-2xl py-3 ml-4 hover:text-white md:text-xl" onClick={closeAll}>AWS</Link>
              <Link to={'/services/devops/cicdPipline'} className="text-white no-underline text-2xl py-3 ml-4 hover:text-white md:text-xl" onClick={closeAll}>CI/CD Pipeline Implementation</Link>
              {/* <Link to={'/services/devops/doc-and-kubernetes'} className="text-white no-underline text-2xl py-3 ml-4 hover:text-white md:text-xl" onClick={closeAll}>Docker & Kubernetes</Link>
              <Link to={'/services/devops/serverless'} className="text-white no-underline text-2xl py-3 ml-4 hover:text-white md:text-xl" onClick={closeAll}>Serverless Applications</Link> */}
            </div>
          </div>

          {/* <div className="mb-5">
            <div 
              className="text-3xl cursor-pointer flex justify-between items-center py-4 text-white md:text-2xl"
              onClick={() => toggleSubSection("digitalMarketing")}
            >
              Digital Marketing
              <span className={`transition-transform duration-300 ${openSections.digitalMarketing ? 'rotate-180' : ''}`}>&#9662;</span>
            </div> */}
            {/* {openSections.digitalMarketing && (
              <div className="flex-col pl-8 mt-5 border-l-4 border-gray-700">
                <Link className="text-white no-underline text-2xl py-3 ml-4 hover:text-white md:text-xl">Marketing Service 1</Link>
                <Link className="text-white no-underline text-2xl py-3 ml-4 hover:text-white md:text-xl">Marketing Service 2</Link>
              </div>
            )} */}
          {/* </div> */}

          {/* <div className="mb-5">
            <div 
              className="text-3xl cursor-pointer flex justify-between items-center py-4 text-white md:text-2xl"
              onClick={() => toggleSubSection("productEngineering")}
            >
              Product Engineering
              <span className={`transition-transform duration-300 ${openSections.productEngineering ? 'rotate-180' : ''}`}>&#9662;</span>
            </div> */}
            {/* {openSections.productEngineering && (
              <div className="flex-col pl-8 mt-5 border-l-4 border-gray-700">
                <Link className="text-white no-underline text-2xl py-3 ml-4 hover:text-white md:text-xl">Engineering Service 1</Link>
                <Link className="text-white no-underline text-2xl py-3 ml-4 hover:text-white md:text-xl">Engineering Service 2</Link>
              </div>
            )} */}
          {/* </div> */}
        </div>
      </div>

    </>
  );
};

export default Header;
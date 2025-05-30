import React, { useState } from "react";
import { motion } from "framer-motion";
import automationImg from "/src/assets/img/industries.webp"; // Using manual-testing.png as a temporary image
import { MdArrowOutward } from "react-icons/md";
import Logo from '../../components/Logo';

// Example icons for Automation Testing stack (placeholder SVGs)
const SeleniumIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

const CypressIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
    <rect x="4" y="4" width="16" height="16" rx="4" ry="4" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M8 8h8v8H8z" fill="currentColor" />
  </svg>
);

const JestIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
    <polygon points="12,2 19,21 5,21" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="12" cy="14" r="2" fill="currentColor" />
  </svg>
);

const PlaywrightIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
    <path d="M12 2L22 12 12 22 2 12 12 2z" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="12" cy="12" r="3" fill="currentColor" />
  </svg>
);

const EarthGlobe = () => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
    className="relative w-40 h-40 rounded-full bg-blue-500 overflow-hidden"
  >
    <motion.div
      animate={{
        y: [0, 5, 0, -5, 0],
        x: [0, 3, 0, -3, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute inset-0"
    >
      <div className="absolute top-5 left-5 bg-green-700 w-10 h-5 rounded-full" />
      <div className="absolute top-10 left-20 bg-green-700 w-14 h-8 rounded-md" />
      <div className="absolute bottom-10 left-8 bg-green-700 w-10 h-10 rounded-md" />
      <div className="absolute right-5 top-12 bg-green-700 w-8 h-12 rounded-md" />
    </motion.div>

    <div className="absolute inset-0 bg-blue-400 opacity-30 mix-blend-screen"></div>
  </motion.div>
);

const ServiceCard = ({ icon: Icon, title, description, isHovered, onHover }) => {
  return (
    <motion.div
      className={`relative p-6 cursor-pointer transition-all duration-300 ${
        isHovered ? "bg-white shadow-xl border-gray-200 rounded-lg" : ""
      }`}
      onMouseEnter={() => onHover(title)}
      onMouseLeave={() => onHover(null)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className={`transition-colors duration-300 ${isHovered ? "text-blue-600" : "text-gray-600"}`}>
        {Icon && <Icon />}
      </div>
      <h3 className="text-lg font-bold mt-4 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </motion.div>
  );
};

const AutomationTesting = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      icon: SeleniumIcon,
      title: "Selenium",
      description:
        "Automate browser actions for web applications across multiple browsers with robust support and frameworks.",
    },
    {
      icon: CypressIcon,
      title: "Cypress",
      description:
        "Fast, reliable end-to-end testing for anything that runs in a browser with an intuitive interface.",
    },
    {
      icon: JestIcon,
      title: "Jest",
      description:
        "A delightful JavaScript testing framework with a focus on simplicity for unit and snapshot testing.",
    },
    {
      icon: PlaywrightIcon,
      title: "Playwright",
      description:
        "Cross-browser automation library enabling reliable and fast testing of modern web apps.",
    },
  ];

  return (
    <div className="relative bg-navy-900 min-h-screen flex flex-col overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        {/* Logo */}
        <div className="absolute top-6 left-6 z-30">
          <Logo />
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={automationImg}
            alt="Automation Testing Background"
            className="w-full h-full object-cover"
            loading="lazy"
            style={{ objectPosition: "center" }}
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-navy-900 opacity-80"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-start justify-center h-full"
        >
          <div className="max-w-3xl">
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-3xl md:text-5xl font-extrabold text-[#b5824e] mb-6"
            >
              Automation Testing Services
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-white text-lg md:text-xl leading-relaxed mb-10"
            >
              Leverage powerful automation tools to speed up your software testing, increase reliability, and reduce manual efforts. Our expertise covers all leading testing frameworks to deliver quality at scale.
            </motion.p>

            {/* Contact Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 text-white font-semibold px-8 py-4 border-2 border-white rounded-full hover:bg-blue-600 hover:text-navy-900 transition-colors duration-300"
            >
              <span>GET A FREE CONSULTATION</span>
              <MdArrowOutward />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Services Section */}
      <div className="relative bg-gradient-to-b from-white to-gray-100 py-20">
        <div className="container mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            Core Automation Tools We Use
          </motion.h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="w-full lg:w-1/2 grid grid-cols-1 gap-6">
              {services.slice(0, 2).map((service) => (
                <ServiceCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  isHovered={hoveredService === service.title}
                  onHover={setHoveredService}
                />
              ))}
            </div>

            <div className="relative w-full lg:w-auto my-12 lg:my-0 flex justify-center">
              <EarthGlobe />
            </div>

            <div className="w-full lg:w-1/2 grid grid-cols-1 gap-6">
              {services.slice(2).map((service) => (
                <ServiceCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  isHovered={hoveredService === service.title}
                  onHover={setHoveredService}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="relative bg-navy-800 py-20">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Why Choose Our Automation Testing?</h2>
            <p className="mb-12 text-lg leading-relaxed">
              Automation accelerates release cycles, improves accuracy, and provides comprehensive test coverage. Our expert team uses industry-leading tools to deliver scalable, maintainable, and reliable test automation solutions tailored to your needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-900 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2">Faster Releases</h3>
                <p>Reduce manual testing times and speed up your deployment pipelines with automated tests.</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-900 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2">Higher Accuracy</h3>
                <p>Minimize human error and ensure consistent testing with repeatable automation scripts.</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-900 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2">Expertise & Support</h3>
                <p>Our experienced automation engineers provide ongoing support and maintenance for your test suites.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AutomationTesting;

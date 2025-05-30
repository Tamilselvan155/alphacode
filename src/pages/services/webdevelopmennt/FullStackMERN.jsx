import React, { useState } from "react";
import { motion } from "framer-motion";
import mernimg from "/src/assets/img/TeamWorking.jpg"; // Using TeamWorking.jpg as a temporary replacement
import { MdArrowOutward } from "react-icons/md";
import Logo from '../../../components/Logo';

// Example service icons for MERN stack (you can replace with real icons/SVGs)
const MongoDBIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
    <path d="M12 2L4 8v8l8 6 8-6v-8l-8-6zM6 12l6 6 6-6-6-6-6 6z" />
  </svg>
);

const ExpressIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
    <path d="M2 12l20-6-6 6 6 6-20-6z" />
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
    <circle cx="12" cy="12" r="2" />
    <path d="M12 2a10 10 0 0 1 0 20 10 10 0 0 1 0-20zm0 18a8 8 0 0 0 0-16 8 8 0 0 0 0 16z" />
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
    <path d="M4 3l16 9-16 9V3z" />
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

const FullStackMERN = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      icon: MongoDBIcon,
      title: "MongoDB",
      description:
        "A powerful NoSQL database that stores data in flexible, JSON-like documents for fast and scalable applications.",
    },
    {
      icon: ExpressIcon,
      title: "Express.js",
      description:
        "Minimalist web framework for Node.js to build fast, robust backend APIs and web applications with ease.",
    },
    {
      icon: ReactIcon,
      title: "React",
      description:
        "A declarative, component-based JavaScript library for building dynamic and responsive user interfaces.",
    },
    {
      icon: NodeIcon,
      title: "Node.js",
      description:
        "JavaScript runtime built on Chrome's V8 engine, enabling fast server-side development with event-driven architecture.",
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
            src={mernimg}
            alt="MERN Stack Background"
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
              Full Stack Web Development (MERN)
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-white text-lg md:text-xl leading-relaxed mb-10"
            >
              The MERN stack (MongoDB, Express.js, React, Node.js) is a popular JavaScript stack for building modern web
              applications. It provides a powerful, scalable, and flexible approach to full stack development, empowering
              developers to build dynamic, data-driven user experiences with ease.
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
            Core MERN Technologies We Use
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
            <h2 className="text-4xl font-bold mb-6">Why Choose MERN Stack Development?</h2>
            <p className="mb-12 text-lg leading-relaxed">
              The MERN stack offers a seamless JavaScript environment for both client and server-side code, reducing
              context switching and boosting productivity. It's open source, widely supported, and backed by large
              communities, ensuring stability and a wealth of resources.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-900 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2">Unified Language</h3>
                <p>Develop front-end and back-end using JavaScript, simplifying the development process.</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-900 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2">Highly Scalable</h3>
                <p>Efficient handling of real-time data and rapid scaling with Node.js and MongoDB.</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-900 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2">Strong Community</h3>
                <p>Vibrant communities and lots of open-source tools to accelerate development.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FullStackMERN;

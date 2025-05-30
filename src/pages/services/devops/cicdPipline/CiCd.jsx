import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import awsimg from "/src/assets/img/cicd.jpg";
import { MdArrowOutward } from "react-icons/md";
import Logo from '../../../../components/Logo';

// Icon Components
const CodePipelineIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current text-white">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
  </svg>
);

const CodeBuildIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current text-white">
    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
  </svg>
);

const CodeDeployIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current text-white">
    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
  </svg>
);

const EC2Icon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current text-white">
    <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14z" />
  </svg>
);

const CloudFormationIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current text-white">
    <path d="M12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6m0-2C9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96C18.67 6.59 15.64 4 12 4z" />
  </svg>
);

const CloudWatchIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current text-white">
    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
  </svg>
);

// Service Card Component
const ServiceCard = ({ icon: Icon, title, description, isHovered, onHover }) => {
  return (
    <div
      className={`relative p-6 cursor-pointer transition-all duration-300 rounded-lg shadow-md ${
        isHovered ? "bg-white shadow-xl border border-gray-200" : "bg-navy-800"
      }`}
      onMouseEnter={() => onHover(title)}
      onMouseLeave={() => onHover(null)}
    >
      <div className={`transition-colors duration-300 ${isHovered ? "text-blue-600" : "text-white"}`}>
        {Icon && <Icon />}
      </div>
      <h3 className={`text-lg font-bold mt-4 mb-2 ${isHovered ? "text-gray-900" : "text-white"}`}>{title}</h3>
      <p className={`text-sm ${isHovered ? "text-gray-600" : "text-gray-400"}`}>{description}</p>
    </div>
  );
};

const Aws = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      icon: CodePipelineIcon,
      title: "Continuous Integration",
      description: "Automated building and testing of code upon every commit to ensure code quality and detect errors early."
    },
    {
      icon: CodeBuildIcon,
      title: "Automated Testing",
      description: "Run unit, integration, and end-to-end tests automatically as part of the build process to guarantee reliability."
    },
    {
      icon: CodeDeployIcon,
      title: "Continuous Deployment",
      description: "Automatically deploy code changes to production or staging environments, ensuring rapid and safe delivery."
    },
    {
      icon: EC2Icon,
      title: "Infrastructure as Code",
      description: "Manage infrastructure configuration through code, enabling reproducibility, versioning, and automation."
    },
    {
      icon: CloudFormationIcon,
      title: "Pipeline Orchestration",
      description: "Define multi-stage pipelines that control the build, test, approval, and deployment workflow end-to-end."
    },
    {
      icon: CloudWatchIcon,
      title: "Monitoring & Feedback",
      description: "Continuously monitor pipeline health and application performance, providing feedback for continuous improvement."
    }
  ];

  return (
    <div className="relative bg-navy-900 min-h-screen flex flex-col overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center px-12">
        {/* Logo */}
        <div className="absolute top-6 left-6 z-30">
          <Logo />
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={awsimg}
            alt="CI/CD Pipeline Background"
            className="w-full h-full object-cover"
            loading="lazy"
            style={{ objectPosition: "center" }}
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-navy-900 opacity-80"></div>

        {/* Left-aligned Content with animations */}
        <motion.div
          className="relative max-w-3xl text-left z-10"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-3xl md:text-5xl font-extrabold text-[#b5824e] mb-6"
          >
            CI/CD Pipeline
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-white text-lg md:text-xl leading-relaxed mb-10"
          >
            Streamline your software delivery process with automated continuous integration 
            and deployment pipelines. Our CI/CD solutions help teams deliver high-quality 
            software faster and more reliably, with automated testing, deployment, and monitoring.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 text-white font-semibold px-8 py-4 border-2 border-white rounded-full hover:bg-blue-600 hover:text-navy-900 transition-colors duration-300"
          >
            <span>FREE CONSULTATIONS</span>
            <MdArrowOutward />
          </motion.button>
        </motion.div>
      </div>

      {/* Services Section */}
      <section className="relative py-16 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          CI/CD Pipeline Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map(({ icon, title, description }) => (
            <ServiceCard
              key={title}
              icon={icon}
              title={title}
              description={description}
              isHovered={hoveredService === title}
              onHover={setHoveredService}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Aws;


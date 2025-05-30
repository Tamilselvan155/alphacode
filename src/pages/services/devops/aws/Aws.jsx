import React, { useState } from "react";
import { motion } from "framer-motion";
import awsimg from "/src/assets/img/awsCloud.jpg";
import { MdArrowOutward } from "react-icons/md";
import Logo from '../../../../components/Logo';

// Service icons - in a real implementation, you'd import actual SVGs
const CodePipelineIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
  </svg>
);

const CodeBuildIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
  </svg>
);

const CodeDeployIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
  </svg>
);

const EC2Icon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
    <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14z" />
  </svg>
);

const CloudFormationIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
    <path d="M12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6m0-2C9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96C18.67 6.59 15.64 4 12 4z" />
  </svg>
);

const CloudWatchIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current">
    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
  </svg>
);

const EarthGlobe = () => (
  <motion.div 
    animate={{ 
      rotate: 360 
    }}
    transition={{ 
      duration: 40, 
      repeat: Infinity, 
      ease: "linear" 
    }}
    className="relative w-40 h-40 rounded-full bg-blue-500 overflow-hidden"
  >
    {/* Continents */}
    <motion.div 
      animate={{
        y: [0, 5, 0, -5, 0],
        x: [0, 3, 0, -3, 0]
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute inset-0"
    >
      <div className="absolute top-5 left-5 bg-green-700 w-10 h-5 rounded-full" />
      <div className="absolute top-10 left-20 bg-green-700 w-14 h-8 rounded-md" />
      <div className="absolute bottom-10 left-8 bg-green-700 w-10 h-10 rounded-md" />
      <div className="absolute right-5 top-12 bg-green-700 w-8 h-12 rounded-md" />
    </motion.div>
    
    {/* Shield overlay */}
    <div className="absolute inset-0 bg-blue-400 opacity-30 mix-blend-screen"></div>
  </motion.div>
);

const ServiceCard = ({ icon: Icon, title, description, isHovered, onHover }) => {
  return (
    <motion.div
      className={`relative   p-6 cursor-pointer transition-all duration-300 ${
        isHovered ? "bg-white shadow-xl border-gray-200  rounded-lg " : ""
      }`}
      onMouseEnter={() => onHover(title)}
      onMouseLeave={() => onHover(null)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className={`transition-colors duration-300 ${isHovered ? "text-blue-600" : "text-gray-600"}`}>
        <Icon />
      </div>
      <h3 className="text-lg font-bold mt-4 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </motion.div>
  );
};

const Aws = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      icon: CodePipelineIcon,
      title: "AWS CodePipeline",
      description: "CI/CD service that automates build, test, and deployment pipelines; enabling faster and more reliable delivery."
    },
    {
      icon: CodeBuildIcon,
      title: "AWS CodeBuild",
      description: "A fully managed build service that compiles source code, runs tests, and produces deployable packages."
    },
    {
      icon: CodeDeployIcon,
      title: "AWS CodeDeploy",
      description: "Automates application deployments to Amazon EC2 instances, serverless, and on-premises instances."
    },
    {
      icon: EC2Icon,
      title: "Amazon EC2 & ECS",
      description: "Secure and resizable compute instances and containers; allowing for elastic environments and virtual server hosting."
    },
    {
      icon: CloudFormationIcon,
      title: "AWS CloudFormation",
      description: "Creates and manages AWS resources using templates; setting resource configurations and deploying infrastructure using templates."
    },
    {
      icon: CloudWatchIcon,
      title: "AWS CloudWatch",
      description: "Real-time monitoring and alerts; helping teams respond quickly to performance issues and operational automation."
    }
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
            src={awsimg}
            alt="SaaS AI Background"
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
              AWS
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-white text-lg md:text-xl leading-relaxed mb-10"
            >
              Amazon Web Services (AWS) has emerged as the cornerstone for modern
              software development, offering a flexible and highly automated
              environment tailored for DevOps practices. Its robust ecosystem of
              services provides everything a development team needs to build,
              deploy, and manage applications with speed, precision, and
              reliability.
            </motion.p>

            {/* Contact Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 text-white font-semibold px-8 py-4 border-2 border-white rounded-full hover:bg-blue-600 hover:text-navy-900 transition-colors duration-300"
            >
              <span>FREE CONSULTATIONS</span>
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
            Our AWS Services Powering DevOps
          </motion.h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            {/* Left Column - Services Cards */}
            <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-1 gap-6 ">
              {services.slice(0, 3).map((service) => (
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

            {/* Center Column - Earth Globe */}
            <div className="relative w-full lg:w-auto my-12 lg:my-0 flex justify-center">
              <EarthGlobe />
            </div>

            {/* Right Column - Services Cards */}
            <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-1 gap-6">
              {services.slice(3).map((service) => (
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#b5824e] mb-4">
            Why Choose Tekvian for AWS
          </h2>
          <p className="text-black max-w-3xl mx-auto">
            Choosing the right partner for your AWS DevOps journey can make the difference between fast, scalable innovation and costly delays. Here's why our firm stands out as your ideal AWS DevOps partner
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* First section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-start p-6 bg-white rounded-lg mb-6"
          >
            <div className="flex items-start">
              <div className="relative mr-6">
                <div className="text-blue-100 text-center rounded-full w-8 h-8 flex items-center justify-center border border-blue-200 absolute -left-10">
                  <span className="font-semibold text-gray-700">01</span>
                </div>
                <div className="bg-indigo-500 rounded-full p-5 flex items-center justify-center w-16 h-16">
                  <div className="bg-indigo-400 rounded-full p-2 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                      <line x1="8" y1="15" x2="16" y2="15" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Certified AWS Experts</h2>
                <p className="text-gray-700 text-sm">
                  Our team is composed of certified AWS DevOps professionals with hands-on experience across a wide range of industries. We bring deep knowledge of AWS services and best practices to every project.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Second section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-start p-6 bg-white rounded-lg mb-6"
          >
            <div className="flex items-start">
              <div className="relative mr-6">
                <div className="text-blue-100 text-center rounded-full w-8 h-8 flex items-center justify-center border border-blue-200 absolute -left-10">
                  <span className="font-semibold text-gray-700">02</span>
                </div>
                <div className="bg-orange-400 rounded-full p-5 flex items-center justify-center w-16 h-16">
                  <div className="bg-orange-300 rounded-full p-2 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" />
                      <path d="M6 12h12" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Collaborative Partnership</h2>
                <p className="text-gray-700 text-sm">
                  We work as an extension of your team — offering proactive support, transparent communication, and long-term strategic guidance for AWS DevOps success.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bottom text sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: true }}
            className="px-6 py-2 bg-white rounded-lg"
          >
            <p className="text-gray-700 mb-4 text-sm">
              At Tekvian, We design with security in mind — integrating IAM, encryption, compliance, and DevSecOps practices from day one to protect your applications and data on AWS.
            </p>
            <p className="text-gray-700 text-sm">
              We help you architect for scalability while optimizing cloud costs through right-sized infrastructure, auto-scaling, and intelligent resource provisioning.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Aws;
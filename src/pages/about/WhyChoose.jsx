import React from 'react';
import { motion, useInView } from 'framer-motion';
import buildingImg from '/src/assets/img/officeBuilding.jpg';

const WhyChoose = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <div
      ref={ref}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row gap-12 items-center"
    >
      {/* Left Side - Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="w-full lg:w-1/2"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-[#b5824e]"
        >
          Why choose Tekvian?
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-16 h-1 bg-[#b5824e] mb-8 origin-left"
        ></motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12"
        >
          {/* Features */}
          {[
            { title: 'AI Driven Solutions', icon: 'M4 8h16M8 4v16' },
            { title: 'End-to-End Development', icon: 'M15 10v5M9 10v5' },
            { title: 'Cloud-Native & Scalable', icon: 'M12 12m-10 0a10 10 0 1 0 20 0a10 10 0 1 0-20 0' },
            { title: 'Industry-Specific Expertise', icon: 'M9.663 17h4.673M12 3v1' },
            { title: 'Security & Compliance', icon: 'M5 10l7-7m0 0l7 7m-7-7v18' },
            { title: 'Continuous Support & Maintenance', icon: 'M12 8v4l3 3' },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={featureVariants}
              className="flex items-center gap-5"
            >
              <motion.div
                whileHover={{ scale: 1.1, backgroundColor: '#f0f9ff' }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className="bg-gray-100 rounded-full p-4 w-16 h-16 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon} />
                </svg>
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold">{feature.title}</h3>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#2563eb' }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md flex items-center gap-2"
          >
            Get a Free Consultation
            <motion.div
              animate={{ rotate: [0, 10, -10, 10, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
              className="bg-white rounded-full w-8 h-8 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="w-full lg:w-1/2 flex justify-center"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={isInView ? { scale: 1 } : { scale: 0.9 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg relative"
        >
          <img
            src={buildingImg}
            alt="Office Building"
            className="w-full h-full object-cover"
          />
          <motion.div
            initial={{ opacity: 0.3 }}
            animate={isInView ? { opacity: 0 } : { opacity: 0.3 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"
          ></motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhyChoose;

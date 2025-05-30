
import React from 'react';
import { motion } from 'framer-motion';
import privacyPolicy from "/src/assets/img/privacyPolicy.jpg";

const HeroSection = () => {
  return (
    <div className="relative bg-navy-900 min-h-screen flex items-center justify-start overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={privacyPolicy}
          alt="SaaS AI"
          className="w-full h-full object-cover"
          loading="lazy"
          style={{ objectPosition: 'center' }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-navy-900 opacity-80"></div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-start"
      >
        <div className="max-w-2xl text-center sm:text-left sm:pl-6 md:pl-12 lg:pl-20 pt-16 sm:pt-0">
         

          

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#b5824e] mb-4 sm:mb-6 leading-tight"
          >
            Privacy Policy
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-white text-base sm:text-lg mb-6 sm:mb-8 max-w-md mx-auto sm:mx-0 px-4 sm:px-0"
          >
           At Tekvian Private Limited (referred to as Tekvian), we value your privacy. This Privacy Policy describes the types of personal information we collect and how we use, store, and protect it. By using our services, accessing our products, or visiting our website, you agree to the terms outlined in this policy.
          </motion.p>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 sm:px-6 py-2 sm:py-3 rounded mx-auto sm:mx-0 text-sm sm:text-base"
          >
            CONTACT US
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M2 5a2 2 0 012-2h3.586a1 1 0 01.707.293l1.414 1.414A1 1 0 0011.414 5H16a2 2 0 012 2v2H2V5z" />
              <path fillRule="evenodd" d="M2 9h16v6a2 2 0 01-2 2H4a2 2 0 01-2-2V9zm4 2a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
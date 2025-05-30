import React from 'react'
import { motion } from 'framer-motion';
import image from '../../../assets/img/manual-testing.png';
import Logo from '../../../components/Logo';

function HeroTest() {
  return (
    <div className="relative bg-navy-900 h-screen flex items-center justify-start overflow-hidden">
      
      {/* Logo */}
      <div className="absolute top-6 left-6 z-30">
        <Logo />
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full opacity-70">
        <img
          src={image}
          alt="SaaS AI"
          className="w-full h-full object-cover"
          loading="lazy"
          style={{ objectPosition: 'center' }}
        />
      </div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 container mx-auto px-6 h-full flex items-center justify-start flex-col md:flex-row"
      >
        <div className="max-w-2xl text-center md:text-left">
          

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight"
          >
            Best Software Testing Services
          </motion.h1>

          <motion.p 
            initial={{ opacity: 5, y: 20 }}
            animate={{ opacity: 5, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-black text-lg mb-8 max-w-md mx-auto md:mx-0"
          >
                The Absolute excellence in providing Manual Testing Services to clients around the globe. We bring the best version of the solution to the forefront that helps execute the tasks seamlessly and efficiently.
          </motion.p>

          {/* <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded mx-auto md:mx-0"
          >
            CONTACT US
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M2 5a2 2 0 012-2h3.586a1 1 0 01.707.293l1.414 1.414A1 1 0 0011.414 5H16a2 2 0 012 2v2H2V5z" />
              <path fillRule="evenodd" d="M2 9h16v6a2 2 0 01-2 2H4a2 2 0 01-2-2V9zm4 2a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
          </motion.button> */}
        </div>
      </motion.div>

     
    </div>
  )
}

export default HeroTest
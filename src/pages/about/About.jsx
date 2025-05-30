import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from './HeroSection';
import CompanyOverview from './CompanyOverview';
import WhatWeAre from './WhatWeAre';
import WhyChoose from './WhyChoose';
import Logo from '../../components/Logo';

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const expertiseItems = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Web Development',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: 'Software Development',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'AI Bot Development',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: 'SaaS Solutions',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: 'Cloud Solutions',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Quality Assurance',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Product Engineering',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Digital Marketing',
  },
];

const About = () => {
  const expertiseRef = useRef(null);
  const isExpertiseInView = useInView(expertiseRef, { once: true, threshold: 0.2 });

  return (
    <div className="overflow-x-hidden">
      <div className="absolute top-6 left-6 z-30">
<Logo />
</div>
      <HeroSection />
      <CompanyOverview />
      <WhatWeAre />
      <WhyChoose />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" ref={expertiseRef}>
        <motion.div
          initial="hidden"
          animate={isExpertiseInView ? 'visible' : 'hidden'}
          variants={sectionVariants}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="relative inline-block font-bold mb-4">
            <span className="absolute inset-0 text-gray-100 text-4xl sm:text-5xl md:text-6xl -z-10 flex justify-center items-center">EXPERTISE</span>
            <span className="relative z-10 text-2xl sm:text-3xl flex justify-center items-center text-[#b58227]">Our Expertise</span>
          </h2>
        </motion.div>

        {/* Expertise Grid - Responsive layout with different column counts based on screen size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {expertiseItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isExpertiseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="bg-white p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center text-center border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-gray-800 mb-4 text-2xl md:text-3xl">{item.icon}</div>
              <h3 className="font-bold text-base md:text-lg text-gray-800">{item.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* CTA Section - Responsive layout for all screen sizes */}
        <div className="w-full bg-blue-600 rounded-lg md:rounded-2xl overflow-hidden relative p-6 md:p-8 lg:p-12 mt-12 md:mt-16">
          {/* Background shapes */}
          <div className="absolute left-0 bottom-0 w-48 h-48 md:w-64 md:h-64 bg-blue-400 opacity-70 rounded-full -translate-x-1/3 translate-y-1/3 transform rotate-45"></div>
          <div className="absolute right-0 top-0 w-64 h-64 md:w-96 md:h-96 bg-blue-400 opacity-20 rounded-full translate-x-1/3 -translate-y-1/3 transform rotate-45"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-center justify-between gap-6 md:gap-8">
            <div className="text-white max-w-2xl text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Join the future of AI SaaS</h2>
              <p className="text-sm sm:text-base md:text-lg">
                We are shaping the future of AI-powered cloud software. Whether 
                you are a startup, SME, or enterprise, we deliver custom AI SaaS 
                solutions that accelerate innovation and drive success.
              </p>
            </div>

            <div className="w-full md:w-auto">
              <button className="w-full md:w-auto bg-white text-blue-500 hover:bg-blue-50 transition-colors font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg text-center whitespace-nowrap text-sm sm:text-base">
                LET'S BUILD THE NEXT BIG THING!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
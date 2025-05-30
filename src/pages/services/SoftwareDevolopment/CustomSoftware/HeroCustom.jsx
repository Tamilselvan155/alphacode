import React from 'react';
import { motion } from 'framer-motion';
import saasAi from "/src/assets/img/realEstate.png"; // Make sure the image path is correct
import Logo from '../../../../components/Logo';

const HeroCustom = () => {
    return (
        <div className="relative bg-navy-900 min-h-screen flex items-center overflow-hidden">

<div className="absolute top-6 left-6 z-30">
<Logo />
</div>
            
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src={saasAi}
                    alt="SaaS AI Background"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    style={{ objectPosition: 'center' }}
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-navy-900 opacity-80"></div>

            {/* Content */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }}
                className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-start justify-center h-full"
            >
                <div className="max-w-3xl text-center sm:text-left">
                    
                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#b5824e] mb-6"
                    >
                        Custom Software Solutions
                    </motion.h1>

                    {/* Paragraph */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="text-white text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-10"
                    >
                        In 2025, generic software won't keep you ahead our Custom Software Solutions will. 
                        At Tekvian, we build tailored technology that fits your unique needs, driving efficiency, 
                        growth, and innovation. Specializing in CRM, HRMS, ERP, and CMS, our expert team delivers 
                        scalable, future-ready systems that transform how you work. Ready to power your business 
                        with custom brilliance? Let's get started.
                    </motion.p>

                    {/* Contact Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center gap-3 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 border-2 border-white rounded-full hover:bg-white hover:text-navy-900 transition-colors duration-300"
                    >
                        <span>Contact Us</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 sm:h-6 sm:w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-3-3h-4m-4 5h5m-7-2a2 2 0 01-2-2H6a2 2 0 00-2 2v2h5m0-2h4" />
                        </svg>
                    </motion.button>

                </div>
            </motion.div>
        </div>
    );
};

export default HeroCustom;

import React from 'react';
import { motion } from 'framer-motion';
import saasAi from "/src/assets/img/saas.jpg"; // Ensure the image path is correct
import Logo from '../../../../components/Logo';

const HeroSaaS = () => {
    return (
        <div className="relative bg-navy-900 min-h-screen flex items-center overflow-hidden">
            
            {/* Logo */}
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
                className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center sm:items-start justify-center h-full"
            >
                <div className="max-w-3xl text-center sm:text-left">
                    
                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#b5824e] mb-6 leading-tight"
                    >
                        Best SaaS Development Company
                    </motion.h1>

                    {/* Paragraph */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="text-white text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8"
                    >
                        In 2025, the future is cloud-powered, and our SaaS Development Services at Tekvian  bring it to life. We craft cloud-based software that's scalable, secure, and subscription-ready—custom-built to fuel your business and delight your users. From startups to enterprises, our expert team delivers SaaS solutions that drive efficiency, cut costs, and unlock growth. Ready to launch your next big thing in the cloud? Let's build it together.
                    </motion.p>

                    {/* Contact Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center gap-3 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 border-2 border-white rounded-full hover:bg-white hover:text-navy-900 transition-colors duration-300"
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

export default HeroSaaS;

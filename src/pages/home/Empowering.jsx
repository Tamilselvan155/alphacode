import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdArrowForward as ArrowRight } from 'react-icons/md';

export default function BusinessSoftwarePage() {
  const [activeService, setActiveService] = useState('web-development');
  const contentRef = useRef(null);
  const leftMenuRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);

  const serviceContent = {
    'web-development': {
      title: 'Web Development',
      description: 'We craft responsive and dynamic websites that are optimized for performance and user experience. From simple landing pages to complex web applications, we bring your vision to life.',
      links: [
        { text: 'Frontend Development', url: '#frontend' },
        { text: 'Backend Development', url: '#backend' },
      ],
    },
    'software-development': {
      title: 'Software Development', 
      description: 'Our software solutions are tailored to meet your unique business challenges, providing robust and scalable applications across platforms.',
      links: [
        { text: 'Custom Applications', url: '#custom-apps' },
        { text: 'Enterprise Solutions', url: '#enterprise' },
      ],
    },
    'saas-solutions': {
      title: 'SaaS Solutions',
      description: 'We design and develop SaaS applications that are secure, scalable, and user-centric, helping businesses deliver services seamlessly over the cloud.',
      links: [
        { text: 'SaaS App Development', url: '#saas-dev' },
        { text: 'Subscription Management', url: '#subscription' },
      ],
    },
    'cloud-solutions': {
      title: 'Cloud Solutions',
      description: 'Transform your business with our cloud expertise — from cloud migration to optimization and management, we ensure your infrastructure is agile and cost-effective.',
      links: [
        { text: 'Cloud Migration', url: '#cloud-migration' },
        { text: 'DevOps on Cloud', url: '#devops' },
      ],
    },
    'digital-marketing': {
      title: 'Digital Marketing',
      description: 'Boost your online presence and generate more leads with our data-driven digital marketing strategies, SEO, PPC, and social media campaigns.',
      links: [
        { text: 'SEO Services', url: '#seo' },
        { text: 'Social Media Marketing', url: '#social-media' },
      ],
    },
  };

  const serviceOrder = Object.keys(serviceContent);

  const navigateToService = (serviceKey) => {
    if (activeService === serviceKey) return;
    setActiveService(serviceKey);
    window.history.replaceState(null, null, `#${serviceKey}`);

    // Smooth scroll menu item into view
    setTimeout(() => {
      const activeElement = document.getElementById(`menu-${serviceKey}`);
      if (activeElement && leftMenuRef.current) {
        leftMenuRef.current.scrollTo({
          top: activeElement.offsetTop - leftMenuRef.current.clientHeight / 2 + activeElement.clientHeight / 2,
          behavior: 'smooth'
        });
      }
    }, 100);

    // Reset content scroll with smooth animation
    if (contentRef.current) {
      contentRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const handleServiceClick = (serviceKey) => {
    if (isScrolling) return;
    setIsScrolling(true);
    navigateToService(serviceKey);
    setTimeout(() => setIsScrolling(false), 800);
  };

  const handleScroll = (e) => {
    if (isScrolling) return;
    const contentElement = contentRef.current;
    if (!contentElement) return;

    const { scrollTop, scrollHeight, clientHeight } = contentElement;
    const threshold = 50;

    if (scrollTop + clientHeight >= scrollHeight - threshold) {
      e.preventDefault();
      setIsScrolling(true);
      const nextIndex = (serviceOrder.indexOf(activeService) + 1) % serviceOrder.length;
      navigateToService(serviceOrder[nextIndex]);
      setTimeout(() => setIsScrolling(false), 800);
    } else if (scrollTop <= threshold) {
      e.preventDefault();
      setIsScrolling(true);
      const prevIndex = (serviceOrder.indexOf(activeService) - 1 + serviceOrder.length) % serviceOrder.length;
      navigateToService(serviceOrder[prevIndex]);
      setTimeout(() => setIsScrolling(false), 800);
    }
  };

  const handleTouchStart = (e) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    if (isScrolling) return;
    const touchY = e.touches[0].clientY;
    const touchDiff = touchStartY - touchY;
    const threshold = 50;

    if (Math.abs(touchDiff) > threshold) {
      e.preventDefault();
      setIsScrolling(true);
      const nextIndex = touchDiff > 0 
        ? (serviceOrder.indexOf(activeService) + 1) % serviceOrder.length
        : (serviceOrder.indexOf(activeService) - 1 + serviceOrder.length) % serviceOrder.length;
      navigateToService(serviceOrder[nextIndex]);
      setTimeout(() => setIsScrolling(false), 800);
    }
  };

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && serviceOrder.includes(hash)) {
      setActiveService(hash);
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isScrolling) return;
      if (['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft'].includes(e.key)) {
        e.preventDefault();
        setIsScrolling(true);
        const nextIndex = ['ArrowDown', 'ArrowRight'].includes(e.key)
          ? (serviceOrder.indexOf(activeService) + 1) % serviceOrder.length
          : (serviceOrder.indexOf(activeService) - 1 + serviceOrder.length) % serviceOrder.length;
        navigateToService(serviceOrder[nextIndex]);
        setTimeout(() => setIsScrolling(false), 800);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeService, isScrolling]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="w-full bg-gray-100 py-12 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-amber-700 mb-6">
          Empowering Business with Future-Ready Solutions
        </h1>
        <p className="text-gray-800 max-w-4xl mx-auto text-base md:text-lg">
          At Tekvian, we drive digital transformation through our cutting-edge solutions.
          Our services are designed to automate workflows, enhance efficiency, and empower businesses to stay competitive.
        </p>
      </div>

      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10">
          <div
            ref={leftMenuRef}
            className="md:w-1/3 bg-gradient-to-b from-teal-600 to-teal-800 text-white rounded-2xl shadow-inner p-4 
                      overflow-y-auto max-h-full scrollbar-thin scrollbar-thumb-teal-400 scrollbar-track-teal-700"
          >
            {serviceOrder.map((serviceKey) => (
              <motion.div
                id={`menu-${serviceKey}`}
                key={serviceKey}
                className="relative mb-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleServiceClick(serviceKey)}
              >
                <motion.div
                  className={`bg-teal-700/60 hover:bg-teal-900/70 text-white py-5 px-6 rounded-xl 
                             flex items-center justify-between cursor-pointer 
                             transition-all duration-300 ${
                               activeService === serviceKey ? 'bg-teal-900/80 shadow-md' : ''
                             }`}
                  animate={{
                    scale: activeService === serviceKey ? 1.05 : 1,
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                >
                  <span className="text-base md:text-lg font-medium">{serviceContent[serviceKey].title}</span>
                  <AnimatePresence>
                    {activeService === serviceKey && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="h-5 w-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div
            ref={contentRef}
            className="md:w-2/3 bg-white p-6 rounded-xl shadow-inner overflow-y-auto 
                      max-h-[600px] relative scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-100"
            onWheel={handleScroll}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="p-4 space-y-6"
              >
                <motion.h2 
                  className="text-2xl md:text-3xl font-bold text-teal-900"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {serviceContent[activeService].title}
                </motion.h2>
                
                <motion.p 
                  className="text-gray-700 text-lg leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {serviceContent[activeService].description}
                </motion.p>

                <motion.div 
                  className="border-t border-gray-200 pt-6 mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="font-semibold text-xl mb-4">Our Services Include:</h3>
                  <div className="flex flex-wrap gap-4">
                    {serviceContent[activeService].links.map((link, idx) => (
                      <motion.a
                        key={idx}
                        href={link.url}
                        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white 
                                 px-6 py-3 rounded-full hover:from-blue-700 hover:to-blue-800 
                                 transition-all duration-300 flex items-center gap-2 
                                 shadow-md hover:shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {link.text}
                        <ArrowRight className="h-5 w-5" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                <motion.div 
                  className="mt-8 bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className="text-xl font-semibold mb-4">
                    Why Choose Our {serviceContent[activeService].title}?
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-teal-500" />
                      Expert team with years of industry experience
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-teal-500" />
                      Custom solutions tailored to your business needs
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-teal-500" />
                      Fast delivery with agile development methodology
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-teal-500" />
                      Ongoing support and maintenance
                    </li>
                  </ul>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full mt-8 mb-16">
        <motion.div 
          className="rounded-2xl overflow-hidden bg-gradient-to-r from-blue-700 to-purple-600 p-8 md:p-12"
          whileHover={{ scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white md:flex-1">
              Tech powered success awaits — empower your journey!
            </h2>
            <motion.button 
              className="flex items-center bg-white text-blue-900 font-semibold px-8 py-4 
                        rounded-full whitespace-nowrap hover:bg-gray-50 transition-colors
                        shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

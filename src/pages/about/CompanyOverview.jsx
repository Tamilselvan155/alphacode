
// import React from 'react';
// import { motion, useInView } from 'framer-motion'; // Import motion and useInView
// import companyImage from '/src/assets/img/companyOverview.jpg'; // Update path as needed

// const CompanyOverview = () => {
//   const ref = React.useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.3 });
  
//   return (
//     <motion.div 
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       className="flex flex-col md:flex-row justify-between items-start mt-20 my-12 mx-16 gap-6"
//     >
      
//       {/* Left Side - Text Content */}
//       <div className="w-full mr-10 px-20 md:w-2/3">
//         <motion.h2 
//           initial={{ opacity: 0, x: -30 }}
//           animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//           className="text-4xl font-bold text-[#b5824e] mt-4"
//         >
//           Company Overview
//         </motion.h2>
        
//         {/* Line Under Heading */}
//         <motion.div
//           initial={{ scaleX: 0 }}
//           animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
//           transition={{ delay: 0.5, duration: 0.5 }}
//           className="w-16 h-1 bg-[#b5824e] mt-2 mb-4 origin-left"
//         ></motion.div>
        
//         <motion.p 
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ delay: 0.7, duration: 0.8 }}
//           className="mt-4 text-black"
//         >
//           At Tekvian, we empower businesses with <span className="font-medium">cutting-edge, AI-powered SaaS solutions</span> 
//           built for performance, automation, and growth. As a trusted leader in AI-SaaS applications, we provide intelligent, 
//           integrative software that aligns with your goals. Driven by innovation, we deliver smart automation, actionable insights, 
//           and seamless cloud integration—helping you stay competitive and future-ready in today's fast-moving digital world.
//         </motion.p>
//       </div>

//       {/* Right Side - Image */}
//       <motion.div 
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
//         transition={{ delay: 0.9, duration: 0.8 }}
//         className="w-full mr-12 md:w-1/3 flex justify-center"
//       >
//         <img 
//           src={companyImage}
//           alt="AI-powered SaaS solutions illustration" 
//           className="rounded-lg shadow-lg object-cover w-[400px] h-[300px]" 
//         />
//       </motion.div>

//     </motion.div>
//   );
// };

// export default CompanyOverview;.




import React from 'react';
import { motion, useInView } from 'framer-motion';
import companyImage from '/src/assets/img/companyOverview.jpg';

const CompanyOverview = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col md:flex-row justify-between items-center md:items-start py-12 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 gap-8"
    >
      
      {/* Left Side - Text Content */}
      <div className="w-full md:w-2/3 md:pr-6 lg:pr-10">
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-[#b5824e] mt-2 md:mt-4 text-center md:text-left"
        >
          Company Overview
        </motion.h2>
        
        {/* Line Under Heading */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="w-16 h-1 bg-[#b5824e] mt-2 mb-4 mx-auto md:mx-0 origin-center md:origin-left"
        ></motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-4 text-black text-center md:text-left"
        >
          At Tekvian, we empower businesses with <span className="font-medium">cutting-edge, AI-powered SaaS solutions</span> 
          built for performance, automation, and growth. As a trusted leader in AI-SaaS applications, we provide intelligent, 
          integrative software that aligns with your goals. Driven by innovation, we deliver smart automation, actionable insights, 
          and seamless cloud integration—helping you stay competitive and future-ready in today's fast-moving digital world.
        </motion.p>
      </div>

      {/* Right Side - Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="w-full md:w-1/3 flex justify-center mt-6 md:mt-0"
      >
        <img 
          src={companyImage}
          alt="AI-powered SaaS solutions illustration" 
          className="rounded-lg shadow-lg object-cover w-full max-w-sm h-64 sm:h-72 md:h-80 lg:h-[300px]" 
        />
      </motion.div>

    </motion.div>
  );
};

export default CompanyOverview;
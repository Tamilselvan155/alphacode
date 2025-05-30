import React from 'react'
import { motion } from 'framer-motion'

function OutManualTesting() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-white to-blue-50 px-6 md:px-20 py-16 space-y-16"
    >
      {/* Heading and Intro */}
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: 'spring', stiffness: 60 } }
          }}
          className="text-4xl md:text-5xl font-bold text-gray-800"
        >
          Our Amazing Features
        </motion.h2>

        <motion.p
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.3, duration: 0.8 } }
          }}
          className="text-gray-600 text-lg"
        >Tekvian ensures that each unit of the software is operable with its highest potential. So, we offer a wide range of testing methods that analyze the digital solutions inside out and bru.
        </motion.p>
      </div>

      {/* 3 Feature Boxes */}
      <motion.div
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3,
            }
          }
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full max-w-7xl"
      >
        {[
          { title: 'Functional Testing', description: 'Validate workflows, test inputs/outputs, check integrations, ensure specs are met.' },
          { title: 'UI/UX Testing', description: 'Test layouts, navigation, responsiveness, user flows across devices.' },
          { title: 'Regression Testing', description: 'Re-test core features, verify stability, check compatibility post-updates.' },
        ].map((feature, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 80 },
              visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 70, damping: 20 } }
            }}
            className="bg-white shadow-2xl rounded-3xl p-8 hover:shadow-blue-200 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer"
          >
            <h3 className="text-2xl font-bold text-black mb-4">{feature.title}</h3>
            <p className="text-gray-600 text-md">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default OutManualTesting
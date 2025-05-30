import React, { useState } from 'react';
import { FiArrowRight as ArrowRight } from 'react-icons/fi'; // Correct import for ArrowRight

export default function StartupSaasBundle() {
  // State to track which section is selected
  const [selectedSection, setSelectedSection] = useState('HRMS');

  // Function to switch content based on section
  const switchContent = (section) => {
    setSelectedSection(section);
  };

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', width: '100%' }}>
      {/* /* Top Header */} 
        <div className="py-6 text-center">
          <h2 className="text-5xl font-bold mb-10" style={{ color: '#c49557' }}>
            SaaS Bundle
          </h2>
          <p className="text-gray-700 text-xl mt-2 px-4 max-w-4xl mx-auto">
            {selectedSection === 'HRMS' && 'Tekvian delivers a robust HRMS package designed to simplify HR operations, boost productivity, and enhance employee experience with fully integrated solutions.'}
            {selectedSection === 'CRM' && 'Tekvian delivers a powerful CRM package to streamline customer relationships, improve sales processes, and drive business growth with fully integrated solutions.'}
            {selectedSection === 'Project Management' && 'Tekvian offers a comprehensive Project Management package to help teams collaborate, stay organized, and achieve project success with fully integrated solutions.'}
            {selectedSection === 'Account Management' && 'Tekvian provides an efficient Account Management package to simplify financial operations, ensure compliance, and drive financial success with fully integrated solutions.'}
          </p>
        </div>

        {/* Navigation */}
      <div style={{ backgroundColor: '#0a1526' }} className="py-4">
        <div className="flex justify-center space-x-8 max-w-4xl mx-auto">
          <div
            className="flex flex-col items-center px-6 py-3 rounded-lg cursor-pointer"
            style={{ backgroundColor: selectedSection === 'HRMS' ? '#102040' : 'transparent' }}
            onClick={() => switchContent('HRMS')}
          >
            <div className="w-6 h-6 mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
              </svg>
            </div>
            <span className="text-white text-xs ">HRMS</span>
          </div>

          <div
            className="flex flex-col items-center px-6 py-3 cursor-pointer"
            style={{ backgroundColor: selectedSection === 'CRM' ? '#102040' : 'transparent' }}
            onClick={() => switchContent('CRM')}
          >
            <div className="w-6 h-6 mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                <path d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z" />
              </svg>
            </div>
            <span className="text-white text-xs">CRM</span>
          </div>

          <div
            className="flex flex-col items-center px-6 py-3 cursor-pointer"
            style={{ backgroundColor: selectedSection === 'Project Management' ? '#102040' : 'transparent' }}
            onClick={() => switchContent('Project Management')}
          >
            <div className="w-6 h-6 mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
              </svg>
            </div>
            <span className="text-white text-xs">Project Management</span>
          </div>

          <div
            className="flex flex-col items-center px-6 py-3 cursor-pointer"
            style={{ backgroundColor: selectedSection === 'Account Management' ? '#102040' : 'transparent' }}
            onClick={() => switchContent('Account Management')}
          >
            <div className="w-6 h-6 mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v2z" />
              </svg>
            </div>
            <span className="text-white text-xs">Account Management</span>
          </div>
        </div>
      </div>

      {/* //* Main Content */}
        <div className="flex flex-col md:flex-row pt-8 px-4 md:px-12 max-w-6xl mx-auto">
          <div className="md:w-1/3 pr-6">
            <h2 className="text-4xl font-bold mb-2" style={{ color: '#c49557' }}>{selectedSection}</h2>
            <p className="text-gray-700 text-base mb-6">
          {selectedSection === 'HRMS' && 'HRMS empowers HR professionals by reducing manual efforts, improving efficiency, and enhancing employee experience through a centralized and data-driven approach.'}
          {selectedSection === 'CRM' && 'CRM helps in managing customer relationships, streamlining sales, and improving customer engagement, increasing the overall business efficiency.'}
          {selectedSection === 'Project Management' && 'Our Project Management tools are designed to help teams collaborate effectively, stay organized, and track the progress of projects.'}
          {selectedSection === 'Account Management' && 'Our Account Management tool simplifies financial operations, helping track and manage expenses, income, and ensure compliance.'}
            </p>
            <div className="space-y-3">
          {selectedSection === 'HRMS' && [
            'Employee Database & Management',
            'Recruitment & Onboarding',
            'Attendance & Payroll Management',
            'Performance Management & Appraisals',
            'Time Tracking & Task Allocation',
            'Employee Benefits & Compliance',
          ].map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="w-6 h-6 mr-2 flex-shrink-0 mt-0.5" style={{ color: '#c49557' }}>
            <svg xmlns="" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
              </div>
              <span className="text-base">{item}</span>
            </div>
          ))}
          {selectedSection === 'CRM' && [
            'Lead Management',
            'Sales Pipeline Tracking',
            'Customer Support Ticketing',
            'Marketing Campaigns',
            'Customer Feedback Analysis',
            'Reports & Analytics'
          ].map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="w-6 h-6 mr-2 flex-shrink-0 mt-0.5" style={{ color: '#c49557' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
              </div>
              <span className="text-base">{item}</span>
            </div>
          ))}
          {selectedSection === 'Project Management' && [
            'Task Assignment & Tracking',
            'Gantt Charts',
            'Team Collaboration Tools',
            'Resource Allocation',
            'Project Budgeting',
            'Reports & Analytics'
          ].map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="w-6 h-6 mr-2 flex-shrink-0 mt-0.5" style={{ color: '#c49557' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
              </div>
              <span className="text-base">{item}</span>
            </div>
          ))}
          {selectedSection === 'Account Management' && [
            'Expense Tracking',
            'Invoice Generation',
            'Tax Compliance',
            'Financial Reporting',
            'Budget Planning',
            'Reports & Analytics'
          ].map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="w-6 h-6 mr-2 flex-shrink-0 mt-0.5" style={{ color: '#c49557' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
              </div>
              <span className="text-base">{item}</span>
            </div>
          ))}
            </div>
          </div>

          {/* Right Side - Diagram or additional content */}
          <div className="md:w-2/3 mt-8 md:mt-0">
            <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="relative w-full" style={{ minHeight: '450px' }}>
            {selectedSection === 'HRMS' && (
              <div className="absolute" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
            <span className="text-4xl font-bold text-gray-700">HRMS Diagram</span>
              </div>
            )}
            {selectedSection === 'CRM' && (
              <div className="absolute" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
            <span className="text-4xl font-bold text-gray-700">CRM Diagram</span>
              </div>
            )}
            {selectedSection === 'Project Management' && (
              <div className="absolute" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
            <span className="text-4xl font-bold text-gray-700">Project Management Diagram</span>
              </div>
            )}
            {selectedSection === 'Account Management' && (
              <div className="absolute" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
            <span className="text-4xl font-bold text-gray-700">Account Management Diagram</span>
              </div>
            )}
          </div>
            </div>
          </div>
        </div>
          {/* CTA Section with Female Image */}
          <div className="max-w-6xl mx-auto px-4 w-full mt-16">
        <div className="rounded-lg overflow-hidden bg-gradient-to-r from-blue-700 to-purple-600 p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-0 md:mr-6 md:flex-1">
         Tech powered success awaits empower your journey! 
        </h2>
        <button className="flex items-center bg-white text-blue-900 font-semibold px-6 py-3 rounded-full w-fit whitespace-nowrap">
          Schedule a Call
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
          </div>
        </div>
      </div>
           
          </div>
        );
      }

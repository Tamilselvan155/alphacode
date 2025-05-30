import React from 'react';
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <div className="bg-gray-50 text-gray-800 px-4 sm:px-6 lg:px-12">
      <footer className="bg-gray-50 text-gray-800 py-8 sm:py-12">
        <div className="container mx-auto">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row justify-between mb-8 lg:mb-12">
            {/* Links */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 lg:gap-10 mb-8 lg:mb-0">
              {/* SERVICES */}
              <div>
                <h3 className="text-[#b5824e] font-bold text-xl sm:text-2xl mb-4">SERVICES</h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li><Link to="/services/software-development" className="hover:text-blue-500">Software Development</Link></li>
                  <li><Link to="/services/mobile-app-development" className="hover:text-blue-500">Mobile App Development</Link></li>
                  <li><Link to="/services/web-development" className="hover:text-blue-500">Web Development</Link></li>
                  <li><Link to="/services/ai-development" className="hover:text-blue-500">AI Development Services</Link></li>
                  <li><Link to="/services/ecommerce-development" className="hover:text-blue-500">Ecommerce Development</Link></li>
                  <li><Link to="/services/digital-marketing" className="hover:text-blue-500">Digital Marketing</Link></li>
                </ul>
              </div>

              {/* INDUSTRIES
              <div>
                <h3 className="text-[#b5824e] font-bold text-xl sm:text-2xl mb-4">INDUSTRIES</h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li><Link to="/industries/logistics" className="hover:text-blue-500">Logistics</Link></li>
                  <li><Link to="/industries/healthcare" className="hover:text-blue-500">Healthcare</Link></li>
                  <li><Link to="/industries/real-estate" className="hover:text-blue-500">Real Estate</Link></li>
                  <li><Link to="/industries/travel-hospitality" className="hover:text-blue-500">Travel & Hospitality</Link></li>
                  <li><Link to="/industries/education" className="hover:text-blue-500">Education</Link></li>
                  <li><Link to="/industries/media-entertainment" className="hover:text-blue-500">Media & Entertainment</Link></li>
                  <li><Link to="/industries/on-demand" className="hover:text-blue-500">On-Demand</Link></li>
                </ul>
              </div> */}

              {/* COMPANY */}
              <div>
                <h3 className="text-[#b5824e] font-bold text-xl sm:text-2xl mb-4">COMPANY</h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li><Link to="/about" className="hover:text-blue-500">About Us</Link></li>
                  <li><Link to="/" className="hover:text-blue-500">Contact Us</Link></li>
                </ul>
              </div>
            </div>

            {/* Contacts */}
            <div className="mt-8 lg:mt-0">
              <h3 className="text-[#b5824e] font-bold text-xl sm:text-2xl mb-4">CONTACTS</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="mr-3 text-xl">📞</span>
                  <a href="tel:+917603846245" className="hover:text-blue-500">+91 76038 46245</a>
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-xl">📧</span>
                  <a href="mailto:info@Tekvian.ai" className="hover:text-blue-500">info@Tekvian.ai</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-4"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center text-xs py-2">
            <div className="flex flex-wrap text-sm sm:text-base font-semibold mb-2 md:mb-0">
              <Link to={"/privacy-policy"} className="hover:text-blue-500 mr-2">Privacy Policy</Link>
              <span className="text-gray-400 mx-1">|</span>
              <Link to={"/privacy-policy"} className="hover:text-blue-500 mr-2">Disclaimer</Link >
              <span className="text-gray-400 mx-1">|</span>
              <Link  to={"/privacy-policy"} className="hover:text-blue-500 mr-2">Terms and Conditions</Link >
              <span className="text-gray-400 mx-1">|</span>
              <Link to={"/privacy-policy"} className="hover:text-blue-500">Standard Policies</Link >
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm sm:text-lg font-semibold mb-0">Copyright © 2025 Tekvian , All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>

  );
}





import { useState } from 'react';
import HeroPrivacy from './HeroPrivacy'
import { Circle } from 'lucide-react';

export default function PrivacyPolicySection() {
  const [expandedSections, setExpandedSections] = useState({
    personalData: true,
    informationCollect: true,
    howWeUse: true,
    howProtect: true,
    sharing: true,
    cookies: true,
    rights: true,
    dataRetention: true,
    international: true,
    thirdParty: true,
    children: true,
    changes: true
  });

  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

  return (

    <>
    <HeroPrivacy/>
    <div className="max-w-4xl mx-auto p-6 bg-white">
     
      
      {/* Information We Collect */}
      <div className="flex mb-6">
        <div className="flex flex-col items-center mr-4">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0"></div>
          <div className="w-0.5 bg-gray-200 h-full"></div>
        </div>
        
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
          
          <div className="ml-2 text-gray-700">
            <p className="mb-4">
              We collect the following types of personal information when you interact with our website or use our products and services:
            </p>
            
            <div className="mb-4">
              <p className="font-medium mb-2">Personal Identification Information:</p>
              <p className="ml-4 mb-4">Name, email address, phone number, company name, job title, and other details you provide when submitting inquiries, signing up for services, or using our products.</p>
            </div>
            
            <div className="mb-4">
              <p className="font-medium mb-2">Technical Information:</p>
              <p className="ml-4 mb-4">IP address, browser type, operating system, device information, and other technical data to improve the functionality of our website and services.</p>
            </div>
            
            <div className="mb-4">
              <p className="font-medium mb-2">Payment Information:</p>
              <p className="ml-4">If you make a purchase or pay for our services, we collect billing details and payment information to process your transactions.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* How We Use Your Information */}
      <div className="flex mb-6">
        <div className="flex flex-col items-center mr-4">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0"></div>
          <div className="w-0.5 bg-gray-200 h-full"></div>
        </div>
        
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
          
          <div className="ml-2 text-gray-700">
            <p className="mb-4">We use your personal information to:</p>
            
            <ul className="list-disc ml-8 mb-4">
              <li className="mb-2">Provide IT services, solutions, and products as requested.</li>
              <li className="mb-2">Communicate with you regarding your inquiries, updates, and support.</li>
              <li className="mb-2">Process payments for our products and services.</li>
              <li className="mb-2">Improve the quality of our website and services.</li>
              <li>Send promotional emails, newsletters, or updates, only if you have opted in to receive such communications.</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* How We Protect Your Information */}
      <div className="flex mb-6">
        <div className="flex flex-col items-center mr-4">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0"></div>
          <div className="w-0.5 bg-gray-200 h-full"></div>
        </div>
        
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">3. How We Protect Your Information</h2>
          
          <div className="ml-2 text-gray-700">
            <p>
              We take appropriate security measures to protect your personal information. These include using encryption technologies, secure payment gateways, and restricted access to sensitive data. However, no system is completely secure, and while we strive to protect your information, we cannot guarantee its absolute security.
            </p>
          </div>
        </div>
      </div>
      
      {/* Sharing Your Information */}
      <div className="flex mb-6">
        <div className="flex flex-col items-center mr-4">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0"></div>
          <div className="w-0.5 bg-gray-200 h-full"></div>
        </div>
        
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">4. Sharing Your Information</h2>
          
          <div className="ml-2 text-gray-700">
            <p>
              We do not sell, trade, or rent your personal information to third parties. However, we may share your information with trusted service providers and partners who assist us in operating our business, providing services to you, and managing our products. These third parties are obligated to keep your information confidential and are prohibited from using it for any other purpose.
            </p>
          </div>
        </div>
      </div>
      
      {/* Cookies and Tracking Technologies */}
      <div className="flex mb-6">
        <div className="flex flex-col items-center mr-4">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0"></div>
          <div className="w-0.5 bg-gray-200 h-full"></div>
        </div>
        
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">5. Cookies and Tracking Technologies</h2>
          
          <div className="ml-2 text-gray-700">
            <p className="mb-4">
              We use cookies and similar technologies to enhance your experience on our website. Cookies are small files stored on your device that allow us to collect information about your interactions with our site. This helps us improve functionality, understand user behavior, and provide more personalized services.
            </p>
            <p>
              You can adjust your browser settings to disable cookies, but this may affect your ability to access certain features of the site.
            </p>
          </div>
        </div>
      </div>
      
      {/* Your Rights */}
      <div className="flex mb-6">
        <div className="flex flex-col items-center mr-4">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0"></div>
          <div className="w-0.5 bg-gray-200 h-full"></div>
        </div>
        
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
          
          <div className="ml-2 text-gray-700">
            <p className="mb-4">You have the right to:</p>
            
            <ul className="list-disc ml-8">
              <li className="mb-2">Request access to the personal data we hold about you.</li>
              <li className="mb-2">Request correction of any inaccurate or incomplete personal data.</li>
              <li className="mb-2">Request deletion of your personal data, subject to legal obligations.</li>
              <li className="mb-2">Object to or restrict the processing of your personal data under certain circumstances.</li>
              <li>Withdraw your consent to receive marketing communications at any time.</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Data Retention */}
      <div className="flex mb-6">
        <div className="flex flex-col items-center mr-4">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0"></div>
          <div className="w-0.5 bg-gray-200 h-full"></div>
        </div>
        
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">7. Data Retention</h2>
          
          <div className="ml-2 text-gray-700">
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy. When your personal information is no longer needed, we securely delete, anonymize, or archive it in compliance with applicable laws.
            </p>
          </div>
        </div>
      </div>
      
      {/* International Data Transfers */}
      <div className="flex mb-6">
        <div className="flex flex-col items-center mr-4">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0"></div>
          <div className="w-0.5 bg-gray-200 h-full"></div>
        </div>
        
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">8. International Data Transfers</h2>
          
          <div className="ml-2 text-gray-700">
            <p>
              If you are located outside of India, please be aware that your information may be transferred to and processed in Chennai. By using our services, you consent to the transfer of your data to a jurisdiction with different privacy laws than your own.
            </p>
          </div>
        </div>
      </div>
      
      {/* Third-Party Websites */}
      <div className="flex mb-6">
        <div className="flex flex-col items-center mr-4">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0"></div>
          <div className="w-0.5 bg-gray-200 h-full"></div>
        </div>
        
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">9. Third-Party Websites</h2>
          
          <div className="ml-2 text-gray-700">
            <p>
              Our website may contain links to third-party websites. This Privacy Policy applies only to Tekvian website and services. We are not responsible for the privacy practices or content of external sites, and we encourage you to review their privacy policies.
            </p>
          </div>
        </div>
      </div>
      
      {/* Children's Privacy */}
      <div className="flex mb-6">
        <div className="flex flex-col items-center mr-4">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0"></div>
          <div className="w-0.5 bg-gray-200 h-full"></div>
        </div>
        
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">10. Children's Privacy</h2>
          
          <div className="ml-2 text-gray-700">
            <p>
              Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected personal information from a child under 16, we will take steps to delete such information promptly.
            </p>
          </div>
        </div>
      </div>
      
      {/* Changes to This Privacy Policy */}
      <div className="flex">
        <div className="flex flex-col items-center mr-4">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0"></div>
        </div>
        
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">11. Changes to This Privacy Policy</h2>
          
          <div className="ml-2 text-gray-700">
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we will update the "Last Updated" date accordingly. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
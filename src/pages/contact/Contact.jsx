import React from 'react';
import Logo from '../../components/Logo';

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-navy-900">
      {/* Logo */}
      <div className="absolute top-6 left-6 z-30">
        <Logo />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-white">Contact</h1>
      </div>
    </div>
  );
};

export default Contact;
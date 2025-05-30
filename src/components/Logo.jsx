import React from 'react';

const Logo = ({ className = '' }) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo mark: Stylized "T" with a futuristic geometric style */}
      <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-lg shadow-lg">
        {/* Geometric T shape using borders */}
        <div className="absolute top-2 left-4 w-2 h-6 bg-white rounded-sm"></div>
        <div className="absolute top-2 left-2 w-6 h-2 bg-white rounded-sm"></div>
      </div>

      {/* Text part */}
      <div className="flex flex-col leading-none select-none">
        <span className="text-white font-extrabold text-xl tracking-wide uppercase font-sans">
          TEKVIAN
        </span>
        <span className="text-blue-300 text-xs tracking-widest font-mono uppercase">
          Software Development
        </span>
      </div>
    </div>
  );
};

export default Logo;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        <div className="flex space-x-6 mb-6">
          <a href="#" className="text-gray-400 hover:text-white transition duration-300 font-medium">GitHub</a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300 font-medium">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300 font-medium">Email</a>
        </div>
        
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Mayur Hon. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;

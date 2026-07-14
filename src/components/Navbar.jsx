import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-blue-600">
              Mayur<span className="text-gray-800">.</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">About</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">Skills</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">Contact</a>
          </div>

         {/* Resume Button */}
          <div className="hidden md:flex">
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              download="Mayur_Hon_Resume.pdf"
              className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition duration-300 shadow-sm"
            >
              Resume
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
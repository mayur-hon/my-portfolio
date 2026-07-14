import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Mayur.</h1>
        <div className="hidden md:flex gap-8 font-medium">
          <a href="#home" className="hover:text-blue-600 transition">Home</a>
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
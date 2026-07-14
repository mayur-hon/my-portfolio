import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <p className="text-blue-600 font-semibold tracking-wide uppercase mb-3">
          👋 Welcome to my portfolio
        </p>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-4">
          Hi, I'm <span className="text-blue-600">Mayur Hon</span>
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-medium text-gray-700 mb-6">
          Java Full Stack Developer
        </h2>
        
        <p className="max-w-2xl text-lg text-gray-500 mb-10 leading-relaxed">
          Passionate about crafting robust backend architectures and designing intuitive frontend interfaces. I specialize in building scalable web applications and seamless digital experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300 shadow-md">
            View Projects
          </a>
          <a href="#contact" className="bg-white text-gray-800 border border-gray-300 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition duration-300 shadow-sm">
            Contact Me
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
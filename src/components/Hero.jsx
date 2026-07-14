import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">Hi, I'm <span className="text-blue-600">Mayur Hon</span></h1>
          <p className="text-xl text-gray-600">Java Full Stack Developer specialized in building scalable web applications.</p>
          <div className="flex gap-4">
            <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition">View Projects</a>
            <a href="/resume.pdf" target="_blank" className="border border-gray-900 px-8 py-3 rounded-full hover:bg-gray-900 hover:text-white transition">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
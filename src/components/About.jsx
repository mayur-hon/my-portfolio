import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">About Me</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        {/* About Content */}
        <div className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed text-center">
          <p className="mb-6">
            Hello! I'm a highly motivated aspiring Software Developer with a strong foundation in Java Full Stack Development. I have a keen interest in building efficient, scalable, and user-friendly web applications.
          </p>
          <p>
            I enjoy solving complex problems and continuously expanding my skill set. Whether it's designing robust relational databases, building secure APIs, or creating intuitive front-end interfaces, I am passionate about every aspect of the software development lifecycle. I am always eager to learn new technologies and apply my knowledge to real-world projects.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default About;
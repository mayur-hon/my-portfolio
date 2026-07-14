import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Car Rental System Hub",
      tech: "Spring Boot + MySQL",
      desc: "A full-stack application to manage car rentals in Himachal, featuring automated booking systems and real-time availability tracking.",
      github: "#",
      demo: "#"
    },
    {
      title: "Portfolio Website",
      tech: "React + Tailwind CSS",
      desc: "My professional personal portfolio built to showcase my skills, projects, and career journey in software development.",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">My Projects</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-blue-400 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <span className="text-blue-600 font-semibold text-sm bg-blue-50 px-3 py-1 rounded-full">{project.tech}</span>
              <p className="text-gray-600 mt-4 mb-6">{project.desc}</p>
              <div className="flex gap-4">
                <a href={project.github} className="text-gray-800 font-medium hover:text-blue-600">GitHub</a>
                <a href={project.demo} className="text-blue-600 font-medium hover:text-blue-800">Live Demo →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
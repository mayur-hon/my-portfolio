import React from 'react';

const Projects = () => {
  // इथे तुझा प्रोजेक्ट्सचा डेटा व्यवस्थित डिफाइन केला आहे
  const projects = [
    {
      title: "Car Rental System Hub",
      description: "A full-stack application for managing car rentals with real-time availability tracking.",
      tech: ["Java", "Spring Boot", "MySQL"]
    },
    {
      title: "Portfolio Website",
      description: "My professional personal portfolio built to showcase my skills, projects, and career journey.",
      tech: ["React", "Tailwind CSS"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 hover:shadow-2xl transition-all duration-300 p-8">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
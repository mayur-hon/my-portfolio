import React from 'react';

const Skills = () => {
  // आपण इथे तुझे स्किल्स वेगवेगळ्या कॅटेगरीमध्ये विभागले आहेत
  const skillsData = [
    { 
      category: "Frontend", 
      items: ["HTML & CSS", "React & Vite", "JavaScript", "Tailwind CSS"] 
    },
    { 
      category: "Backend", 
      items: ["Java", "Python", "Spring Boot", "Django"] 
    },
    { 
      category: "Databases", 
      items: ["MySQL", "Oracle SQL", "Relational DB Design", "Data Cleansing"] 
    },
    { 
      category: "Tools & Platforms", 
      items: ["Git & GitHub", "Postman & Swagger UI", "IntelliJ IDEA", "RapidMiner"] 
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">My Skills</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skillGroup, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">{skillGroup.category}</h3>
              <ul className="space-y-3">
                {skillGroup.items.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-600 font-medium">
                    <span className="w-2.5 h-2.5 bg-blue-500 rounded-sm mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Skills;
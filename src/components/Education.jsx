import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Computer Application",
      college: "Your University Name",
      percentage: "66%",
      year: "2021 - 2024"
    },
    {
      degree: "Higher Secondary (HSC)",
      college: "Shri Shanishwar Junior College, Sonai",
      percentage: "80.17%",
      year: "2020 - 2021"
    },
    {
      degree: "Secondary School (SSC)",
      college: "Your School Name",
      percentage: "70.60%",
      year: "2019 - 2020"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="grid gap-6">
          {educationData.map((edu, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition">
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.college}</p>
                </div>
                <div className="text-left md:text-right">
                  <span className="block text-blue-600 font-bold text-lg">{edu.percentage}</span>
                  <span className="text-sm text-gray-500">{edu.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
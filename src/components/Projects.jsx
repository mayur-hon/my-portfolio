// Projects.jsx साठी नवीन मॉडर्न स्टाईल
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {projects.map((project, index) => (
    <div key={index} className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 hover:shadow-2xl transition-all duration-300">
      <div className="p-8">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex gap-2">
           {project.tech.map((t) => <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold">{t}</span>)}
        </div>
      </div>
    </div>
  ))}
</div>
// Projects.jsx च्या शेवटी हे नक्की आहे ना ते चेक कर:
export default Projects;
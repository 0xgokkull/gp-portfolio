import React from "react";

const projects = [
  {
    name: "Portfolio Website",
    description:
      "A fully responsive and modern portfolio showcasing my projects and skills.",
    link: "https://github.com/your-portfolio",
  },
  {
    name: "E-commerce App",
    description:
      "An e-commerce platform with a robust cart system, payment integration, and admin panel.",
    link: "https://github.com/ecommerce-app",
  },
  {
    name: "AI Chatbot",
    description:
      "An AI-driven chatbot capable of understanding natural language and providing instant responses.",
    link: "https://github.com/ai-chatbot",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 animate-fadeIn">
      <div className="max-w-5xl bg-neutral-900 rounded-2xl shadow-2xl p-8 md:p-12 border border-purple-900 animate-slideIn">
        <h2 className="text-4xl font-bold mb-6 text-purple-500 text-center">
          Projects
        </h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-purple-900 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-purple-300">
                {project.name}
              </h3>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-md transition-colors"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

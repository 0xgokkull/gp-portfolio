import React from "react";

function ProjectCard({ name, description, link, image }) {
  return (
    <div className="border border-purple-900 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow w-full max-w-sm mx-auto h-[400px]">
      {/* Image Section */}
      <div
        className="h-48 bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${image})` }}
      />
      <h3 className="text-2xl font-semibold text-purple-300 mt-4">{name}</h3>
      <p className="text-gray-300 mt-2">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-md transition-colors"
      >
        View Project
      </a>
    </div>
  );
}

export default ProjectCard;

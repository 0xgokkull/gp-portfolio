import React from "react";
import { motion } from "framer-motion";

function ProjectCard({ name, description, link, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Starting state
      animate={{ opacity: 1, y: 0 }} // Final state
      transition={{ duration: 0.6, ease: "easeOut" }} // Animation settings
      whileHover={{
        scale: 1.05, // Slight zoom on hover
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Add shadow on hover
      }}
      className="border border-purple-900 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow w-full max-w-sm mx-auto h-[400px]"
    >
      {/* Image Section */}
      <img
        src={image}
        alt={name}
        className="h-48 w-full object-cover rounded-lg"
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
    </motion.div>
  );
}

export default ProjectCard;

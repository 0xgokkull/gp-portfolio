import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

function ProjectCard({ name, description, link, image, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col rounded-3xl overflow-hidden border border-purple-600/30 bg-gradient-to-br from-purple-900/30 via-purple-800/20 to-fuchsia-900/10 backdrop-blur-xl shadow-[0_0_25px_-10px_rgba(168,85,247,0.35)] hover:border-fuchsia-400/50 transition-all"
    >
      {/* Glow Layer */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_30%_20%,rgba(217,70,239,0.18),transparent_70%)]" />

      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent opacity-60 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative flex flex-col flex-1 p-5">
        <h3 className="text-lg md:text-xl font-semibold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-fuchsia-200 to-pink-200">
          {name}
        </h3>
        <p className="mt-2 text-xs md:text-sm text-gray-300 leading-relaxed flex-1">
          {description}
        </p>

        <div className="mt-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-xs md:text-sm border border-purple-500/40 bg-purple-900/30 hover:bg-purple-800/40 hover:border-fuchsia-400/60 transition-all group/button"
          >
            <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-700/0 via-fuchsia-600/10 to-purple-700/0 opacity-0 group-hover/button:opacity-100 transition-opacity" />
            View Project
            <ExternalLink size={16} className="text-fuchsia-300 group-hover/button:rotate-12 transition-transform" />
          </a>
        </div>
      </div>

      {/* Accent badge */}
      <div className="absolute top-3 left-3 text-[10px] uppercase tracking-wider text-fuchsia-300/60">GP</div>
    </motion.article>
  );
}

export default ProjectCard;

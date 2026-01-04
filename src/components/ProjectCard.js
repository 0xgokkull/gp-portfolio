import React, { memo } from "react";

// Simplified Project Card Component
const ProjectCard = memo(({ name, description, image }) => {
    return (
        <div className="flex-shrink-0 w-80 group relative rounded-2xl overflow-hidden border border-cyan-600/30 bg-gradient-to-br from-slate-900/40 via-slate-800/25 to-cyan-900/15 backdrop-blur-xl shadow-[0_0_20px_-10px_rgba(56,189,248,0.4)] hover:border-sky-400/60 transition-all">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.15),transparent_70%)]" />

            <div className="relative h-40 w-full overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/50 via-transparent to-transparent opacity-60 mix-blend-overlay" />
            </div>

            <div className="relative p-4">
                <h3 className="text-base font-semibold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-cyan-200 to-blue-200">
                    {name}
                </h3>
                <p className="mt-1 text-xs text-gray-300 leading-relaxed line-clamp-2">
                    {description}
                </p>
            </div>

            <div className="absolute top-2 left-2 text-[10px] uppercase tracking-wider text-cyan-300/60">GP</div>
        </div>
    );
});

export default ProjectCard;

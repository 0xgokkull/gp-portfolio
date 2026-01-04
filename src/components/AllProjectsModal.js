import React, { memo } from "react";
import { X, ExternalLink } from "lucide-react";

// All Projects Modal Component
const AllProjectsModal = memo(({ projects, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
            <div
                className="relative max-w-7xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-cyan-900/20 backdrop-blur-xl rounded-3xl border border-cyan-600/40 shadow-[0_0_50px_-10px_rgba(56,189,248,0.5)] p-8"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-slate-900/50 border border-cyan-600/30 hover:border-sky-400/60 transition-all"
                >
                    <X size={20} className="text-cyan-200" />
                </button>

                <div className="mb-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-cyan-200 to-blue-200 mb-2">
                        All Projects
                    </h2>
                    <p className="text-gray-300">Browse through all my projects</p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={project.name + index}
                            className="group relative rounded-2xl overflow-hidden border border-cyan-600/30 bg-gradient-to-br from-slate-900/40 via-slate-800/25 to-cyan-900/15 backdrop-blur-xl shadow-[0_0_20px_-8px_rgba(56,189,248,0.4)] hover:border-sky-400/60 transition-all"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.15),transparent_70%)]" />

                            <div className="relative h-40 w-full overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                            </div>

                            <div className="relative p-5">
                                <h3 className="text-lg font-semibold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-cyan-200 to-blue-200 mb-2">
                                    {project.name}
                                </h3>
                                <p className="text-xs text-gray-300 leading-relaxed mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-xs border border-cyan-500/40 bg-slate-900/30 hover:bg-slate-800/40 hover:border-sky-400/60 transition-all"
                                >
                                    View Project
                                    <ExternalLink size={14} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
});

export default AllProjectsModal;

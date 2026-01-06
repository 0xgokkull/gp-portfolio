import React, { memo, useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

// Black Hole Animation Component
const BlackHole = ({ isActive }) => {
    return (
        <AnimatePresence>
            {isActive && (
                <motion.div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Outer Glow Ring */}
                    <motion.div
                        className="absolute w-64 h-64 rounded-full"
                        style={{
                            background: "conic-gradient(from 0deg, transparent, rgba(6,182,212,0.4), transparent, rgba(147,51,234,0.4), transparent)",
                            filter: "blur(20px)",
                        }}
                        initial={{ scale: 0, rotate: 0 }}
                        animate={{
                            scale: [0, 2, 3],
                            rotate: 360,
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 1.2,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Accretion Disk */}
                    <motion.div
                        className="absolute w-48 h-48 rounded-full"
                        style={{
                            background: "conic-gradient(from 0deg, #0891b2, #06b6d4, #22d3ee, #67e8f9, #0891b2)",
                            filter: "blur(8px)",
                        }}
                        initial={{ scale: 0, rotate: 0 }}
                        animate={{
                            scale: [0, 1.5, 2],
                            rotate: [0, 180, 360],
                            opacity: [0, 0.8, 0]
                        }}
                        transition={{
                            duration: 1.2,
                            ease: "easeOut",
                        }}
                    />

                    {/* Event Horizon */}
                    <motion.div
                        className="absolute rounded-full"
                        style={{
                            background: "radial-gradient(circle, #000 0%, #000 60%, transparent 100%)",
                            boxShadow: "0 0 60px 30px rgba(0,0,0,0.9), 0 0 100px 60px rgba(6,182,212,0.3)",
                        }}
                        initial={{ width: 0, height: 0 }}
                        animate={{
                            width: [0, 120, 800],
                            height: [0, 120, 800],
                        }}
                        transition={{
                            duration: 1.2,
                            ease: [0.25, 0.1, 0.25, 1],
                        }}
                    />

                    {/* Center Singularity */}
                    <motion.div
                        className="absolute w-4 h-4 rounded-full bg-black"
                        style={{
                            boxShadow: "0 0 20px 10px rgba(147,51,234,0.5)",
                        }}
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1, 0] }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// All Projects Modal Component
const AllProjectsModal = memo(({ projects, onClose }) => {
    const [isClosing, setIsClosing] = useState(false);
    const [projectPositions, setProjectPositions] = useState([]);
    const containerRef = useRef(null);
    const projectRefs = useRef([]);

    // Calculate center position when closing
    const calculatePositions = () => {
        if (!containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const centerX = containerRect.width / 2;
        const centerY = containerRect.height / 2;

        const positions = projectRefs.current.map((ref) => {
            if (!ref) return { x: 0, y: 0 };
            const rect = ref.getBoundingClientRect();
            const elemCenterX = rect.left - containerRect.left + rect.width / 2;
            const elemCenterY = rect.top - containerRect.top + rect.height / 2;

            return {
                x: centerX - elemCenterX,
                y: centerY - elemCenterY,
            };
        });

        setProjectPositions(positions);
    };

    const handleClose = () => {
        calculatePositions();
        setIsClosing(true);

        // Wait for animation to complete before actually closing
        setTimeout(() => {
            onClose();
        }, 1300);
    };

    // Handle escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && !isClosing) {
                handleClose();
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isClosing]);

    return (
        <motion.div
            ref={containerRef}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-hidden"
            onClick={!isClosing ? handleClose : undefined}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Black Hole Effect */}
            <BlackHole isActive={isClosing} />

            <motion.div
                className="relative max-w-7xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-cyan-900/20 backdrop-blur-xl rounded-3xl border border-cyan-600/40 shadow-[0_0_50px_-10px_rgba(56,189,248,0.5)] p-8"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={isClosing ? {
                    scale: 0,
                    opacity: 0,
                    transition: { delay: 0.8, duration: 0.5 }
                } : {
                    scale: 1,
                    opacity: 1
                }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
                {/* Close Button */}
                <motion.button
                    onClick={handleClose}
                    disabled={isClosing}
                    className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-slate-900/50 border border-cyan-600/30 hover:border-sky-400/60 transition-all disabled:opacity-50"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <X size={20} className="text-cyan-200" />
                </motion.button>

                {/* Header */}
                <motion.div
                    className="mb-8 text-center"
                    animate={isClosing ? {
                        scale: 0,
                        y: 100,
                        opacity: 0
                    } : {}}
                    transition={{ duration: 0.4 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-cyan-200 to-blue-200 mb-2">
                        All Projects
                    </h2>
                    <p className="text-gray-300">Browse through all my projects</p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.name + index}
                            ref={(el) => (projectRefs.current[index] = el)}
                            className="group relative rounded-2xl overflow-hidden border border-cyan-600/30 bg-gradient-to-br from-slate-900/40 via-slate-800/25 to-cyan-900/15 backdrop-blur-xl shadow-[0_0_20px_-8px_rgba(56,189,248,0.4)] hover:border-sky-400/60 transition-all"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isClosing ? {
                                x: projectPositions[index]?.x || 0,
                                y: projectPositions[index]?.y || 0,
                                scale: 0,
                                rotate: (index % 2 === 0 ? 1 : -1) * (180 + Math.random() * 180),
                                opacity: 0,
                            } : {
                                opacity: 1,
                                y: 0,
                            }}
                            transition={isClosing ? {
                                duration: 0.8,
                                delay: index * 0.05,
                                ease: [0.4, 0, 0.2, 1],
                            } : {
                                delay: index * 0.05,
                                type: "spring",
                                damping: 20,
                            }}
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
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    View Project
                                    <ExternalLink size={14} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
});

export default AllProjectsModal;

import React from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import resumePDF from "../assets/gp-resume-june.pdf"; // PDF file

const Resume = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative min-h-screen flex items-center justify-center px-4 py-16 text-white overflow-hidden"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 left-0 w-72 h-72 rounded-full bg-gradient-to-tr from-purple-600/20 via-fuchsia-500/15 to-pink-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gradient-to-br from-indigo-600/20 via-purple-500/15 to-fuchsia-500/15 blur-3xl" />
      </div>

      {/* Center Card */}
      <div className="w-full max-w-5xl relative rounded-3xl border border-purple-600/30 bg-gradient-to-br from-purple-900/40 via-purple-800/25 to-fuchsia-900/10 backdrop-blur-xl shadow-[0_0_45px_-15px_rgba(168,85,247,0.4)] p-6 md:p-10">
        <div className="absolute -inset-1 rounded-3xl pointer-events-none opacity-40 bg-[radial-gradient(circle_at_20%_20%,rgba(217,70,239,0.15),transparent_60%)]" />
        <header className="relative text-center mb-8 space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-300 drop-shadow-[0_0_10px_rgba(168,85,247,0.35)]">
            Resume
          </h1>
          <p className="text-xs md:text-sm text-gray-300 max-w-2xl mx-auto">
            Concise overview of my experience, impact, and technical focus.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <ActionButton href={resumePDF} download icon={Download} label="Download" />
            <ActionButton href={resumePDF} target="_blank" icon={ExternalLink} label="Open PDF" variant="outline" />
          </div>
        </header>

        {/* Mobile animation + buttons (no animation shown on desktop) */}
        <div className="relative mb-6 md:hidden">
          <div className="relative rounded-2xl overflow-hidden border border-purple-600/30 bg-purple-900/30 backdrop-blur-md p-3">
            <iframe
              src="https://lottie.host/embed/2a070129-db6c-4cc5-8f98-3e8a733ea0b7/6Z1wdFnuEb.lottie"
              className="w-full h-48 rounded-xl opacity-90"
              title="resume animation"
            />
            <div className="absolute bottom-2 right-3 text-[10px] uppercase tracking-widest text-fuchsia-300/50">focus</div>
          </div>
        </div>

  {/* PDF viewer - hidden on mobile */}
  <div className="hidden md:block relative h-[78vh] rounded-2xl border border-purple-600/30 bg-gradient-to-br from-purple-900/40 via-purple-800/25 to-fuchsia-900/10 backdrop-blur-lg shadow-[0_0_35px_-12px_rgba(168,85,247,0.4)] overflow-hidden">
          <object data={resumePDF} type="application/pdf" className="w-full h-full">
            <div className="flex flex-col items-center justify-center h-full p-8 text-center text-gray-300">
              <p className="mb-4 text-sm md:text-base">PDF preview not supported in this browser.</p>
              <ActionButton href={resumePDF} download icon={Download} label="Download Resume" />
            </div>
          </object>
        </div>
      </div>
    </motion.main>
  );
};

const ActionButton = ({ href, icon: Icon, label, variant = "solid", download, target }) => {
  const base = "relative inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium text-sm tracking-wide transition-all group overflow-hidden";
  const variants = {
    solid: "bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 text-white shadow-lg shadow-fuchsia-800/30 hover:shadow-fuchsia-500/40",
    outline: "border border-purple-500/40 hover:border-fuchsia-400/70 bg-purple-900/20 hover:bg-purple-800/30 text-fuchsia-100",
  };
  return (
    <a
      href={href}
      {...(download ? { download: true } : {})}
      {...(target ? { target, rel: "noopener noreferrer" } : {})}
      className={`${base} ${variants[variant]}`}
    >
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.18),transparent)] opacity-0 group-hover:opacity-100 transition-opacity" />
      {Icon && <Icon size={16} className="text-white/90" />}
      <span>{label}</span>
    </a>
  );
};

export default Resume;

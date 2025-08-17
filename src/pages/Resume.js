import React from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import resumePDF from "../assets/gp-resume-june.pdf"; // PDF file
import LottieFrame from "../components/LottieFrame";

const Resume = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative min-h-screen flex items-center justify-center px-4 py-16 text-white overflow-hidden"
    >
  {/* Background glows removed for simplified aesthetic */}

      {/* Center Card */}
      <div className="w-full max-w-5xl relative rounded-3xl border border-cyan-600/30 bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-cyan-900/15 backdrop-blur-xl shadow-[0_0_45px_-15px_rgba(56,189,248,0.4)] p-6 md:p-10">
        <div className="absolute -inset-1 rounded-3xl pointer-events-none opacity-40 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.15),transparent_60%)]" />
        <header className="relative text-center mb-8 space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-cyan-200 to-blue-200 drop-shadow-[0_0_10px_rgba(56,189,248,0.45)]">
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
          <LottieFrame size="medium" label="focus" src="https://lottie.host/embed/2a070129-db6c-4cc5-8f98-3e8a733ea0b7/6Z1wdFnuEb.lottie" />
        </div>

  {/* PDF viewer - hidden on mobile */}
  <div className="hidden md:block relative h-[78vh] rounded-2xl border border-cyan-600/30 bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-cyan-900/15 backdrop-blur-lg shadow-[0_0_35px_-12px_rgba(56,189,248,0.4)] overflow-hidden">
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
    solid: "bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-500 text-white shadow-lg shadow-cyan-800/30 hover:shadow-sky-500/40",
    outline: "border border-cyan-500/40 hover:border-sky-400/70 bg-slate-900/30 hover:bg-slate-800/40 text-cyan-100",
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

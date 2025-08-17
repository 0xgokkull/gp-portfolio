import React from "react";
import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/gokkull-15",
      hoverColor: "hover:text-white",
      bgHover: "hover:bg-gray-800",
      tooltip: "GitHub Profile",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/gokkull-s",
      hoverColor: "hover:text-white",
      bgHover: "hover:bg-blue-900",
      tooltip: "LinkedIn Profile",
    },
    {
      icon: Twitter,
      href: "https://x.com/Gokkull15",
      hoverColor: "hover:text-white",
      bgHover: "hover:bg-blue-900",
      tooltip: "Twitter Profile",
    },
  ];

  return (
  <footer className="relative mt-20 backdrop-blur-xl border-t border-cyan-700/40 bg-[#0c1322]/80 supports-[backdrop-filter]:bg-[#0c1322]/60 shadow-[0_-2px_25px_-8px_rgba(56,189,248,0.35)] overflow-hidden z-30">
      {/* Ambient gradient accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[60%] h-40 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.25),transparent_70%)] opacity-40" />
  <div className="absolute -bottom-12 -left-10 w-72 h-72 rounded-full bg-gradient-to-tr from-cyan-500/25 via-sky-500/20 to-blue-500/10 blur-3xl animate-[floatSlow_12s_ease-in-out_infinite]" />
  <div className="absolute -top-14 -right-10 w-72 h-72 rounded-full bg-gradient-to-br from-sky-500/25 via-cyan-600/20 to-blue-500/10 blur-3xl animate-[floatSlow_14s_ease-in-out_infinite]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-8">
          {/* Developer Info */}
          <div className="text-center md:text-left w-full md:w-auto">
            <h1 className="relative inline-block text-xl sm:text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-cyan-200 to-blue-200 drop-shadow-[0_0_6px_rgba(56,189,248,0.45)]">
              Developed by GP
            </h1>
            <p className="mt-2 text-[11px] tracking-widest text-cyan-200/60 uppercase">
              Enter • Prove • Grow
            </p>
          </div>

          {/* Copyright */}
      <div className="text-xs sm:text-sm text-cyan-200/80 flex items-center justify-center w-full md:w-auto px-4 py-2 rounded-xl border border-cyan-700/30 bg-slate-900/30 backdrop-blur-md shadow-[0_0_14px_-6px_rgba(56,189,248,0.45)]">
            <span className="flex items-center gap-2">
              <span>&copy; {new Date().getFullYear()} GP</span>
        <Heart size={16} className="text-sky-400 animate-pulse" />
            </span>
          </div>

          {/* Social Links (unchanged position - last) */}
          <div className="flex space-x-4 w-full md:w-auto justify-center md:justify-end">
            {socialLinks.map(
              ({ icon: Icon, href, hoverColor, bgHover, tooltip }, index) => (
                <div key={index} className="relative group">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={tooltip}
                    className={`relative transition-all duration-300 flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-xl border border-cyan-600/30 bg-slate-900/30 backdrop-blur-xl text-cyan-200 hover:border-sky-400/60 hover:bg-slate-900/50 hover:shadow-[0_0_18px_-4px_rgba(56,189,248,0.5)] focus:outline-none focus:ring-2 focus:ring-sky-500/60 ${hoverColor} ${bgHover}`}
                  >
                    <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-cyan-700/0 via-sky-500/15 to-blue-700/0" />
                    <Icon size={18} strokeWidth={1.5} className="relative" />
                  </a>
                  <div className="hidden md:block absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#101826]/95 border border-cyan-700/40 backdrop-blur-xl text-cyan-100 text-[10px] tracking-wide px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_12px_-4px_rgba(56,189,248,0.4)]">
                    {tooltip}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

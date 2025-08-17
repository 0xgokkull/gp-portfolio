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
    <footer className="relative mt-20 backdrop-blur-xl border-t border-purple-800/40 bg-[#141627]/85 supports-[backdrop-filter]:bg-[#141627]/65 shadow-[0_-2px_25px_-8px_rgba(168,85,247,0.35)] overflow-hidden z-30">
      {/* Ambient gradient accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[60%] h-40 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),transparent_70%)] opacity-40" />
        <div className="absolute -bottom-12 -left-10 w-72 h-72 rounded-full bg-gradient-to-tr from-fuchsia-500/25 via-purple-600/20 to-pink-500/10 blur-3xl animate-[floatSlow_12s_ease-in-out_infinite]" />
        <div className="absolute -top-14 -right-10 w-72 h-72 rounded-full bg-gradient-to-br from-indigo-500/25 via-purple-600/20 to-fuchsia-500/10 blur-3xl animate-[floatSlow_14s_ease-in-out_infinite]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-8">
          {/* Developer Info */}
          <div className="text-center md:text-left w-full md:w-auto">
            <h1 className="relative inline-block text-xl sm:text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-fuchsia-200 to-pink-300 drop-shadow-[0_0_6px_rgba(168,85,247,0.45)]">
              Developed by GP
            </h1>
            <p className="mt-2 text-[11px] tracking-widest text-fuchsia-200/60 uppercase">
              Enter • Prove • Grow
            </p>
          </div>

          {/* Copyright */}
          <div className="text-xs sm:text-sm text-fuchsia-200/75 flex items-center justify-center w-full md:w-auto px-4 py-2 rounded-xl border border-purple-700/30 bg-purple-900/20 backdrop-blur-md shadow-[0_0_14px_-6px_rgba(168,85,247,0.45)]">
            <span className="flex items-center gap-2">
              <span>&copy; {new Date().getFullYear()} GP</span>
              <Heart size={16} className="text-fuchsia-400 animate-pulse" />
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
                    className={`relative transition-all duration-300 flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-xl border border-purple-600/25 bg-purple-900/20 backdrop-blur-xl text-fuchsia-200 hover:border-fuchsia-400/60 hover:bg-purple-900/40 hover:shadow-[0_0_18px_-4px_rgba(217,70,239,0.5)] focus:outline-none focus:ring-2 focus:ring-fuchsia-500/60 ${hoverColor} ${bgHover}`}
                  >
                    <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-purple-700/0 via-fuchsia-600/15 to-purple-700/0" />
                    <Icon size={18} strokeWidth={1.5} className="relative" />
                  </a>
                  <div className="hidden md:block absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#1c1f30]/95 border border-purple-700/40 backdrop-blur-xl text-fuchsia-100 text-[10px] tracking-wide px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_12px_-4px_rgba(168,85,247,0.4)]">
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

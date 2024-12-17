import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      hoverColor: "hover:text-white",
      bgHover: "hover:bg-gray-800",
      tooltip: "GitHub Profile",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      hoverColor: "hover:text-white",
      bgHover: "hover:bg-blue-900",
      tooltip: "LinkedIn Profile",
    },
    {
      icon: Mail,
      href: "mailto:alex@digitalrealm.com",
      hoverColor: "hover:text-white",
      bgHover: "hover:bg-red-900",
      tooltip: "Send Email",
    },
  ];

  return (
    <footer className="bg-black text-gray-300 py-6 px-4 mt-4 border-t border-purple-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 px-4 lg:px-8">
          {/* Developer Info */}
          <div className="text-center md:text-left w-full md:w-auto">
            <h1
              className="text-xl md:text-2xl font-bold text-purple-500 tracking-wider 
              transition-all duration-300 hover:text-purple-400 
              hover:tracking-widest"
            >
              Developed by GP
            </h1>
          </div>

          {/* Copyright */}
          <div className="text-sm md:text-base text-gray-500 flex items-center justify-center w-full md:w-auto">
            <p className="flex items-center">
              <span className="mr-2">&copy; {new Date().getFullYear()} GP</span>
              <Heart size={16} className="text-purple-500 animate-pulse" />
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 w-full md:w-auto justify-center md:justify-end">
            {socialLinks.map(
              ({ icon: Icon, href, hoverColor, bgHover, tooltip }, index) => (
                <div key={index} className="relative group">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={tooltip}
                    className={`transition-all duration-300 transform 
                      flex items-center justify-center 
                      w-10 h-10 md:w-12 md:h-12 rounded-full 
                      bg-transparent border border-purple-900/30
                      text-gray-400 
                      ${hoverColor} ${bgHover}
                      hover:scale-110 hover:shadow-lg
                      focus:outline-none focus:ring-2 focus:ring-purple-500
                    `}
                  >
                    <Icon
                      size={20}
                      className="md:scale-125"
                      strokeWidth={1.5}
                    />
                  </a>
                  {/* Tooltip */}
                  <div
                    className="hidden md:block absolute bottom-full mb-2 left-1/2 -translate-x-1/2 
                      bg-purple-900 text-white text-xs 
                      px-3 py-1 rounded-md 
                      opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300"
                  >
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

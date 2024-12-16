import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = ["Home", "About", "Projects", "Resume", "Certificates"];

  return (
    <nav className="bg-black text-white fixed w-full z-50 shadow-2xl border-b border-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-purple-500 tracking-wider animate-pulse">
              GP's Portfolio
            </h1>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-purple-400 hover:text-purple-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section.toLowerCase())}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 
                    ${
                      activeSection === section.toLowerCase()
                        ? "bg-purple-800 text-white scale-105"
                        : "text-gray-300 hover:bg-purple-900 hover:text-white hover:scale-105"
                    }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-black">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    setActiveSection(section.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 
                    ${
                      activeSection === section.toLowerCase()
                        ? "bg-purple-800 text-white"
                        : "text-gray-300 hover:bg-purple-900 hover:text-white"
                    }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      hoverColor: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      hoverColor: "hover:text-blue-500",
    },
    {
      icon: Mail,
      href: "mailto:alex@digitalrealm.com",
      hoverColor: "hover:text-red-500",
    },
  ];

  return (
    <footer className="bg-black text-gray-300 py-5 px-4 mt-8 text-center border-t border-purple-900">
      <div className="lg:ml-20 lg:mr-20 flex justify-between items-center">
        <div className="flex-shrink-0">
          <h1 className="text-2xl font-bold text-purple-500 tracking-wider animate-pulse">
            Developed by GP
          </h1>
        </div>
        {/* Bottom Section */}
        <div className="text-sm">
          <p className="text-gray-500 animate-pulse">
            &copy; {new Date().getFullYear()} GP. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-4">
          {socialLinks.map(({ icon: Icon, href, hoverColor }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-300 transform hover:scale-125 hover:rotate-6 p-2 rounded-full ${hoverColor}`}
            >
              <Icon size={30} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

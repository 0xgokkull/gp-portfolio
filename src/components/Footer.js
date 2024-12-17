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
    <footer className="bg-black text-gray-300 py-8 px-4">
      {/* Bottom Section */}
      <div className="mt-8 text-center border-t border-purple-900 pt-4 text-sm">
        <p className="text-gray-500 animate-pulse">
          &copy; {new Date().getFullYear()} GP. All rights reserved.
              </p>
              
      </div>
    </footer>
  );
};

export default Footer;

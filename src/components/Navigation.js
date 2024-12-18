import React, { useState, useEffect } from "react";
import { Menu, X, Star, Code, FileText, User, Home } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const sections = [
    { name: "Home", icon: Home, path: "/" },
    { name: "About", icon: User, path: "/about" },
    { name: "Projects", icon: Code, path: "/projects" },
    { name: "Resume", icon: FileText, path: "/resume" },
    { name: "Certificates", icon: Star, path: "/certificates" },
  ];

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle outside click to close menu
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const mobileMenuButton = document.querySelector("#mobile-menu-button");
      const mobileMenu = document.querySelector("#mobile-menu");

      if (
        isMenuOpen &&
        mobileMenu &&
        !mobileMenu.contains(event.target) &&
        !mobileMenuButton.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  // Close the mobile menu when a menu item is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-transparent backdrop-blur-sm shadow-2xl border-b border-purple-900/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with hover effect */}
          <div className="flex-shrink-0 group">
            <h1
              className="text-xl sm:text-2xl font-bold text-purple-500 tracking-wider 
              transition-all duration-300 group-hover:text-purple-400 
              group-hover:tracking-widest"
            >
              GP's Portfolio
            </h1>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-purple-400 hover:text-purple-600 focus:outline-none 
                transform transition-transform hover:rotate-180 p-2"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <div className="ml-10 flex items-center space-x-6">
              {sections.map(({ name, icon: Icon, path }) => (
                <Link
                  key={name}
                  to={path} // Use Link to navigate between pages
                  className={`group flex items-center px-3 py-2 rounded-md 
                    text-sm font-medium transition-all duration-300 
                    hover:border-b-2 hover:border-purple-500`}
                >
                  <Icon
                    size={16}
                    className={`mr-2 transition-colors duration-300 
                      text-gray-400 group-hover:text-white`}
                  />
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          id="mobile-menu"
          className={`md:hidden fixed left-0 right-0 top-16 transition-all duration-300 ease-in-out transform 
            ${
              isMenuOpen
                ? "translate-y-0 opacity-100 visible"
                : "-translate-y-full opacity-0 invisible"
            } bg-black/95 backdrop-blur-sm`}
        >
          <div className="px-6 pt-4 pb-3 space-y-2">
            {sections.map(({ name, icon: Icon, path }) => (
              <Link
                key={name}
                to={path} // Use Link to navigate between pages
                className={`w-full flex items-center text-left px-4 py-3 rounded-md 
                  text-base font-medium transition-all duration-300 
                  hover:border-b-2 hover:border-purple-500`}
                onClick={closeMenu} // Close menu when a link is clicked
              >
                <Icon
                  size={18}
                  className={`mr-3 transition-colors 
                    text-gray-400 group-hover:text-white`}
                />
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

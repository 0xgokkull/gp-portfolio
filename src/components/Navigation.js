import React, { useState, useEffect } from "react";
import { Menu, X, Star, Code, FileText, User, Home, Heart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

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

  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out backdrop-blur-xl border-b ${
        isScrolled
          ? "bg-[#141627]/85 border-purple-800/40 shadow-[0_0_25px_-8px_rgba(168,85,247,0.35)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 group relative inline-flex items-center gap-2">
            <span className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-100 blur-lg bg-gradient-to-r from-purple-600/40 via-fuchsia-500/30 to-pink-500/20 transition" />
            <h1 className="relative flex items-center gap-1 text-xl sm:text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-fuchsia-200 to-pink-300 drop-shadow-[0_0_6px_rgba(168,85,247,0.4)] group-hover:tracking-wider transition-all">
              <span>GP</span>
              <Heart size={18} className="text-fuchsia-300 group-hover:scale-110 transition-transform animate-pulse" />
            </h1>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex ml-6">
            <div className="flex items-center gap-2">
              {sections.map(({ name, icon: Icon, path }) => (
                <Link
                  key={name}
                  to={path}
                  className={`relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium tracking-wide transition-all group overflow-hidden border ${
                    isActive(path)
                      ? "border-fuchsia-400/60 bg-purple-900/30 shadow-[0_0_18px_-4px_rgba(217,70,239,0.4)]"
                      : "border-purple-600/20 hover:border-fuchsia-400/50 bg-purple-900/10 hover:bg-purple-900/20"
                  }`}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-700/0 via-fuchsia-600/10 to-purple-700/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Icon size={16} className="text-fuchsia-300" />
                  <span className="relative text-fuchsia-100">{name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Toggle */}
            <button
              id="mobile-menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative p-2 rounded-lg border border-purple-600/30 bg-purple-900/30 backdrop-blur-lg text-fuchsia-200 hover:border-fuchsia-400/60 hover:bg-purple-800/40 transition-all"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
        </div>
      </div>

      {/* Mobile Panel */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-400 ease-out origin-top overflow-hidden ${
          isMenuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 mt-2 mb-4 rounded-2xl border border-purple-600/30 bg-[#141627]/90 backdrop-blur-xl shadow-[0_0_25px_-8px_rgba(168,85,247,0.35)] p-4 space-y-2">
          {sections.map(({ name, icon: Icon, path }) => (
            <Link
              key={name}
              to={path}
              onClick={closeMenu}
              className={`relative flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium tracking-wide transition-all border overflow-hidden ${
                isActive(path)
                  ? "border-fuchsia-400/60 bg-purple-900/40 shadow-[0_0_18px_-4px_rgba(217,70,239,0.4)]"
                  : "border-purple-600/20 hover:border-fuchsia-400/60 bg-purple-900/10 hover:bg-purple-900/30"
              }`}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-700/0 via-fuchsia-600/10 to-purple-700/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Icon size={18} className="text-fuchsia-300" />
              <span className="relative text-fuchsia-100">{name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

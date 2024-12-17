import React, { useState, useMemo, useRef, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowDownRight,
  Sparkles,
  Target,
  Award,
  Code,
  Cpu,
  Building,
} from "lucide-react";

const Home = () => {
  const [isNameHovered, setIsNameHovered] = useState(false);
  const introRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (introRef.current) {
      observer.observe(introRef.current);
    }

    return () => {
      if (introRef.current) {
        observer.unobserve(introRef.current);
      }
    };
  }, []);

  const socialLinks = useMemo(
    () => [
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
    ],
    []
  );

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen bg-black flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:ml-20 lg:mr-20 p-4">
        {/* Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start text-left space-y-4 px-4 py-6">
          <h1
            className={`text-4xl md:text-5xl font-bold text-purple-500 transition-all duration-500 ${
              isNameHovered && window.innerWidth >= 768 ? "tracking-widest" : ""
            }`}
            onMouseEnter={() => {
              if (window.innerWidth >= 768) {
                setIsNameHovered(true);
              }
            }}
            onMouseLeave={() => {
              if (window.innerWidth >= 768) {
                setIsNameHovered(false);
              }
            }}
          >
            GOKUL PRIYAN S
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <span className="flex items-center">
              <Code size={24} className="mr-2" />
              Blockchain Dev
            </span>
            <span className="flex items-center">
              <Cpu size={24} className="mr-2" />
              Full Stack Dev
            </span>
            <span className="flex items-center">
              <Building size={24} className="mr-2" />
              Digital Architect
            </span>
          </p>
          {/* Social Links */}
          <div className="mt-8 flex space-x-6">
            {socialLinks.map(({ icon: Icon, href, hoverColor }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-all duration-300 transform hover:scale-125 hover:rotate-6 p-2 rounded-full ${hoverColor}`}
              >
                <Icon size={36} />
              </a>
            ))}
          </div>
        </div>

        {/* Animation Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mt-6 lg:mb-36 lg:mt-0">
          <iframe
            src="https://lottie.host/embed/6eed80dc-7a32-4e1e-8ee7-7b9e3678feca/El25YvPRNL.lottie"
            className="w-full lg:h-[300px] h-[200px] opacity-80 hover:opacity-100 transition-opacity"
          ></iframe>
        </div>
      </div>

      {/* Introduction Section */}
      <div
        ref={introRef}
        className={`flex flex-col lg:flex-row w-full px-8 py-8 space-y-8 lg:space-y-0 items-center justify-center lg:ml-20 lg:mr-20 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-500 flex items-center">
            Introduction
            <Sparkles
              size={32}
              className="ml-4 text-purple-300 animate-pulse"
            />
          </h2>
          <p className="text-sm md:text-lg text-gray-100">
            I am <span className="text-white font-bold">Gokul Priyan S,</span>{" "}
            currently pursuing my{" "}
            <span className="text-purple-400 font-semibold">B.E. degree</span>{" "}
            at{" "}
            <span className="text-white font-bold">
              Jaya Engineering College
            </span>
            .
          </p>
          <p className="text-sm md:text-lg text-gray-100">
            I specialize in building{" "}
            <span className="text-purple-300 font-semibold">
              efficient, scalable, and cutting-edge solutions
            </span>{" "}
            for the digital world.
          </p>

          {/* Experience Highlights */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-purple-500 flex items-center">
              Experience
              <Target size={28} className="ml-4 text-purple-300" />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-900/30 hover:bg-purple-900/40 transition-all duration-300">
                <Award size={20} className="mr-2 text-purple-400" />
                <span className="font-bold text-white">
                  Full Stack Development
                </span>
                <p className="text-gray-300">
                  <span className="text-white font-bold">2+ years</span> of
                  crafting web solutions
                </p>
              </div>
              <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-900/30 hover:bg-purple-900/40 transition-all duration-300">
                <ArrowDownRight size={20} className="mr-2 text-purple-400" />
                <span className="font-bold text-white">
                  Blockchain Development
                </span>
                <p className="text-gray-300">
                  <span className="text-white font-bold">1+ year</span> of
                  decentralized exploration
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Animation */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <iframe
            src="https://lottie.host/embed/8a5d3bd7-3997-4d40-9c65-53b8a075e0cd/K3BROBW30C.lottie"
            className="w-full lg:h-[600px] h-[250px] opacity-80 hover:opacity-100 transition-opacity"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;
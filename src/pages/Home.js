import React, { useState, useMemo } from "react";
import { Github, Linkedin, Mail, Code, Cpu, Building } from "lucide-react";
import gp from "../assets/owner.jpeg"

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const socialLinks = useMemo(
    () => [
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
    ],
    []
  );

  return (
    <div>
      {/* Starting Page Section */}
      <div className="relative min-h-screen bg-black flex flex-col md:flex-row justify-center md:justify-between items-center text-white">
        {/* Content Section */}
        <div className="lg:ml-20 w-full md:w-1/2 flex flex-col justify-center items-start h-full px-6 py-6 text-left">
          <h1
            className={` sm:block text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-purple-500 transition-all duration-500 ${
              isHovered ? "tracking-widest" : ""
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            GOKUL PRIYAN S
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
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

        {/* Image Section (hidden on smaller screens) */}
        <div className="md:flex flex-[4] justify-center items-center">
          <iframe
            src="https://lottie.host/embed/8a5d3bd7-3997-4d40-9c65-53b8a075e0cd/K3BROBW30C.lottie"
            className="w-full lg:h-[600px] h-[300px]"
          ></iframe>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="flex flex-col lg:flex-row w-full h-full px-8 py-8 space-y-8 lg:space-y-0 lg:space-x-0 items-center justify-center lg:ml-20">
        {/* Introduction Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start text-left">
          <h2 className="text-4xl lg:text-5xl font-bold text-purple-500 mb-6">
            Introduction
          </h2>
          <p className="text-2xl text-gray-100">
            I am <span className="text-white font-bold">Gokul Priyan S,</span>
            <span> </span>
            currently pursuing my{" "}
            <span className="text-purple-400 font-semibold">
              B.E. degree
            </span>{" "}
            at
            <span className="text-white font-bold">
              <span> </span>
              Jaya Engineering College
            </span>
            . I specialize in building{" "}
            <span className="text-purple-300 font-semibold">efficient</span>,
            <span> </span>
            <span className="text-purple-300 font-semibold">scalable</span>,
            <span> </span> and
            <span className="text-purple-300 font-semibold">
              <span> </span>
              cutting-edge solutions
            </span>{" "}
            for the digital world.
          </p>
          <div className="mt-6">
            <h3 className="text-3xl font-semibold text-purple-500 mb-4">
              Experience
            </h3>
            <ul className="list-disc list-inside text-2xl text-gray-100 space-y-4">
              <li>
                <span className="text-white font-bold">2+ years</span> in
                <span className="text-purple-300 font-semibold">
                  <span> </span>
                  Full Stack Development
                </span>
              </li>
              <li>
                <span className="text-white font-bold">1+ year</span> in
                <span className="text-purple-300 font-semibold">
                  <span> </span>
                  Blockchain Development
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center py-8">
          <img src={gp} className="w-80 h-80 bg-gray-700 rounded-full"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;

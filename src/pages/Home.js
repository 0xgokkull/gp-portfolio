import React, { useState, useMemo, useRef, memo } from "react";
import { ExternalLink, Download, Code, Cpu, Building, Award } from "lucide-react";
import Aboutcard from "./about/AboutCard";
import Techstack from "./about/Techstack";
import Toolstack from "./about/Toolstack";
import GithubStats from "./about/Github";
import ProjectsCarousel from "../components/ProjectsCarousel";
import AllProjectsModal from "../components/AllProjectsModal";
import { socialLinks, projects } from "../data";
import resumePDF from "../assets/gp-resume-june.pdf";
import "../shooting-stars.css";

// Memoize imported components to prevent re-renders
const MemoizedAboutCard = memo(Aboutcard);
const MemoizedTechstack = memo(Techstack);
const MemoizedToolstack = memo(Toolstack);
const MemoizedGithubStats = memo(GithubStats);

const Home = ({ isProjectModalOpen, setIsProjectModalOpen }) => {
  // const [selectedProject, setSelectedProject] = useState(null); // Local state removed
  const scrollContainerRef = useRef(null);

  // Refs for direct DOM manipulation (Performance Optimization)
  const titleRef = useRef(null);
  const glowRef = useRef(null);
  const descriptionRef = useRef(null);

  // Role badges data
  const roles = useMemo(() => [
    { icon: Code, label: "Blockchain Engineer" },
    { icon: Cpu, label: "Full Stack Architect" },
    { icon: Building, label: "System Designer" },
  ], []);

  // Shooting stars data - memoized to prevent recreating on each render
  const shootingStars = useMemo(() => [...Array(20)].map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${Math.random() * 3 + 2}s`,
  })), []);

  // Optimized Mouse Move Handler using requestAnimationFrame
  const handleMouseMove = (e) => {
    if (window.requestAnimationFrame) {
      window.requestAnimationFrame(() => {
        const { clientX, clientY } = e;
        const moveX = (clientX - window.innerWidth / 2) / 25;
        const moveY = (clientY - window.innerHeight / 2) / 25;

        if (titleRef.current) {
          titleRef.current.style.transform = `rotateX(${moveY * 0.5}deg) rotateY(${moveX * 0.5}deg)`;
        }
        if (glowRef.current) {
          glowRef.current.style.transform = `translate(${moveX * 2}px, ${moveY * 2}px)`;
        }
        if (descriptionRef.current) {
          descriptionRef.current.style.transform = `translateY(${moveY * 0.1}px)`;
        }
      });
    }
  };

  return (
    <main className="text-white overflow-x-hidden relative" onMouseMove={handleMouseMove}>

      {/* GLOBAL BACKGROUND REMOVED - Using Particles + SolarSystem in App.js */}

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center px-6 md:px-12 xl:px-24 py-16 overflow-hidden">
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center z-10">

          {/* Title */}
          <div className="relative mb-8 perspective-text group">
            <h1
              ref={titleRef}
              className="relative text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400 select-none transition-transform duration-75 ease-out hover:scale-[1.02]"
              style={{ textShadow: '0 0 30px rgba(255,255,255,0.1)' }}
            >
              GOKUL PRIYAN
            </h1>
            <div
              ref={glowRef}
              className="absolute -inset-10 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-blue-500/0 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            />
          </div>

          {/* Description */}
          <p
            ref={descriptionRef}
            className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-10 tracking-wide transition-transform duration-75 ease-out"
          >
            Constructing <span className="text-cyan-200 font-medium glow-text">decentralized realities</span> &
            <span className="text-sky-200 font-medium glow-text"> intelligent interfaces</span>.
          </p>

          {/* Role Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {roles.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/40 border border-cyan-500/20 backdrop-blur-md text-sm md:text-base hover:border-cyan-400/50 hover:bg-slate-800/60 transition-all cursor-default group"
              >
                <Icon size={16} className="text-sky-400 group-hover:text-cyan-300 transition-colors" />
                <span className="font-medium text-cyan-100/80 group-hover:text-cyan-100 transition-colors">{label}</span>
              </span>
            ))}
          </div>

          {/* Social & CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <div className="flex items-center gap-4 px-6 py-3 rounded-2xl bg-slate-900/30 border border-cyan-500/10 backdrop-blur-sm">
              {socialLinks.map(({ icon: Icon, href, tooltip }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={tooltip}
                  className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-cyan-300 transition-all hover:scale-110"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>

            <div className="h-8 w-px bg-cyan-800/30 hidden sm:block" />

            <a
              href="#projects"
              className="group relative px-8 py-3 rounded-xl font-bold text-sm overflow-hidden bg-cyan-500 text-white shadow-[0_0_20px_-5px_rgba(6,182,212,0.5)] transition-all hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.7)] hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
              <span className="relative flex items-center gap-2">
                Explore Work <Award size={16} />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative px-6 md:px-12 xl:px-24 py-16">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-10 left-0 w-72 h-72 rounded-full bg-gradient-to-tr from-cyan-600/15 via-sky-500/10 to-blue-500/10 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-cyan-200 to-blue-200 mb-8">
            About Me
          </h2>

          <div className="space-y-8">
            <MemoizedAboutCard />

            {/* Tech Stack and Tools */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-cyan-600/30 bg-gradient-to-br from-slate-900/40 via-slate-800/25 to-cyan-900/15 backdrop-blur-xl p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-cyan-200 mb-4 text-center">Tech Stack</h3>
                <MemoizedTechstack />
              </div>

              <div className="rounded-2xl border border-cyan-600/30 bg-gradient-to-br from-slate-900/40 via-slate-800/25 to-cyan-900/15 backdrop-blur-xl p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-cyan-200 mb-4 text-center">Tools</h3>
                <MemoizedToolstack />
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-cyan-200 mb-4">GitHub Stats</h3>
              <MemoizedGithubStats />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative px-6 md:px-12 xl:px-24 py-16">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-10 right-0 w-72 h-72 rounded-full bg-gradient-to-tr from-cyan-600/15 via-sky-500/10 to-blue-500/10 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-cyan-200 to-blue-200 mb-4">
            Projects
          </h2>
          <p className="text-sm md:text-base text-gray-300 mb-8">
            Decentralized protocols & AI‑assisted platforms
          </p>

          <ProjectsCarousel projects={projects} scrollContainerRef={scrollContainerRef} />

          <div className="flex justify-center mt-6">
            <button
              onClick={() => setIsProjectModalOpen(true)}
              className="px-6 py-2.5 rounded-lg font-semibold text-sm bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-500 text-white shadow-lg transition-all"
            >
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* All Projects Modal */}
      {selectedProject && (
        <AllProjectsModal projects={projects} onClose={() => setSelectedProject(null)} />
      )}

      {/* Resume Section */}
      <section id="resume" className="relative px-6 md:px-12 xl:px-24 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-cyan-600/30 bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-cyan-900/15 backdrop-blur-xl shadow-[0_0_40px_-15px_rgba(56,189,248,0.45)] p-6 md:p-8">
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-cyan-200 to-blue-200 mb-4 text-center">
              Resume
            </h2>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <a
                href={resumePDF}
                download
                className="inline-flex items-center gap-2 px-5 py-2 rounded-lg font-medium text-sm bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-500 text-white shadow-lg transition-all"
              >
                <Download size={16} />
                Download
              </a>
              <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-lg font-medium text-sm border border-cyan-500/40 hover:border-sky-400/70 bg-slate-900/30 hover:bg-slate-800/40 text-cyan-100 transition-all"
              >
                <ExternalLink size={16} />
                Open PDF
              </a>
            </div>

            <div className="hidden md:block h-[70vh] rounded-xl border border-cyan-600/30 bg-slate-900/30 overflow-hidden">
              <object data={resumePDF} type="application/pdf" className="w-full h-full">
                <div className="flex flex-col items-center justify-center h-full p-8 text-center text-gray-300">
                  <p className="mb-4">PDF preview not supported in this browser.</p>
                  <a
                    href={resumePDF}
                    download
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-lg font-medium text-sm bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-500 text-white"
                  >
                    <Download size={16} />
                    Download Resume
                  </a>
                </div>
              </object>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

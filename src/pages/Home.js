import React, { useState, useMemo, useRef, useEffect, memo } from "react";
import { X, ExternalLink, Download, Github, Linkedin, Twitter, Code, Cpu, Building, Award } from "lucide-react";
import Aboutcard from "./about/AboutCard";
import Techstack from "./about/Techstack";
import Toolstack from "./about/Toolstack";
import GithubStats from "./about/Github";
import gp from "../assets/gp.jpeg";
import resumePDF from "../assets/gp-resume-june.pdf";
import "../shooting-stars.css";

// Import project images
import blockinsure from "../assets/blockinsure.png";
import medico from "../assets/medico.png";
import devma from "../assets/devma.png";
import mahalakshmi from "../assets/mahalakshmi.png";
import billing from "../assets/billing.png";
import imdb from "../assets/imdb.png";
import shopx from "../assets/shopx.png";
import testimonial from "../assets/testimonial.png";
import trsa from "../assets/trsa.png";
import landingpage from "../assets/landingpage.png";
import web3 from "../assets/web3.png";
import qr from "../assets/qr.png";
import chained from "../assets/chained.png";
import smartwill from "../assets/smartwill.jpeg";
import eduxlite from "../assets/eduxlite.jpeg";
import arcadeblock from "../assets/arcadeblock.jpeg";
import tnkun from "../assets/tnkun.jpeg";
import ipfs from "../assets/pinata-ipfs.jpeg";
import firm from "../assets/firm.png";
import ava from "../assets/ava.png";
import ghostpic from "../assets/ghostpic.png";

const MemoizedAboutCard = memo(Aboutcard);
const MemoizedTechstack = memo(Techstack);
const MemoizedToolstack = memo(Toolstack);
const MemoizedGithubStats = memo(GithubStats);

const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollContainerRef = useRef(null);

  // Refs for direct DOM manipulation
  const titleRef = useRef(null);
  const glowRef = useRef(null);
  const descriptionRef = useRef(null);

  const socialLinks = useMemo(
    () => [
      {
        icon: Github,
        href: "https://github.com/0xgokkull",
        tooltip: "GitHub Profile",
      },
      {
        icon: Linkedin,
        href: "https://www.linkedin.com/in/gokkull-s",
        tooltip: "LinkedIn Profile",
      },
      {
        icon: Twitter,
        href: "https://x.com/0xgokkull",
        tooltip: "Twitter Profile",
      },
    ],
    []
  );

  const projects = useMemo(() => [
    {
      name: "GhostPic",
      description: "A decentralized civic platform for anonymous communication",
      link: "https://metis-ghostpic.vercel.app/",
      image: ghostpic,
    },
    {
      name: ".Ava",
      description: "A programming language built for avalanche chain",
      link: "https://dotava.vercel.app/",
      image: ava,
    },
    {
      name: "FirM (Winner)",
      description: "A decentralized Fir management system with AI agent support",
      link: "https://devfolio.co/projects/aipowered-emergency-response-and-fir-management-3f74",
      image: firm,
    },
    {
      name: "IPFS npm package",
      description: "Published npm package for ipfs hash conversion using pinata",
      link: "https://www.npmjs.com/package/ipfs-pinata-toolkit",
      image: ipfs,
    },
    {
      name: "TNKun (Winner)",
      description: "A decentralized blockchain Auth with AI agent Support.",
      link: "https://github.com/gokkull-15/advaya.git",
      image: tnkun,
    },
    {
      name: "Arcadeblock (Top 25)",
      description: "A defi learning platform with AI agent Support.",
      link: "https://github.com/gokkull-15/hack-hazards.git",
      image: arcadeblock,
    },
    {
      name: "EduXlite (Top 75)",
      description: "A defi learning platform with AI agent Support.",
      link: "https://github.com/EmmanuellDev/eduXlite.git",
      image: eduxlite,
    },
    {
      name: "SmartWill",
      description: "A decentralized land registration platform with AI agent Support.",
      link: "https://devfolio.co/projects/smartwill-d041",
      image: smartwill,
    },
    {
      name: "ChainED",
      description: "A decentralized learning platform with AI assistant.",
      link: "https://github.com/gokkull-15/ChainEdu.git",
      image: chained,
    },
    {
      name: "BlockInsure",
      description: "A decentralized platform to apply for the insurance.",
      link: "https://github.com/gokkull-15/Blockinsure-V1.git",
      image: blockinsure,
    },
    {
      name: "DevMa (Winner)",
      description: "A decentalized platform that combines Devfolio and Luma.",
      link: "https://github.com/gokkull-15/devma-v1.git",
      image: devma,
    },
    {
      name: "MediCO",
      description:
        "A platform to create interaction between the patient and doctor through onchain.",
      link: "https://github.com/gokkull-15/medico-app.git",
      image: medico,
    },
    {
      name: "ShopX",
      description:
        "A decentralized platform for buying and selling ebooks through onchain.",
      link: "https://github.com/gokkull-15/shopx-app.git",
      image: shopx,
    },
    {
      name: "TRSA (Client)",
      description:
        "A social platform to organise events and view the skaters around the region.",
      link: "https://github.com/Sunil0881/TRSA.git",
      image: trsa,
    },
    {
      name: "Mahalakshmi (Client)",
      description: "A real-estate side build for my client.",
      link: "https://github.com/gokkull-15/mahalakshmi-app.git",
      image: mahalakshmi,
    },
    {
      name: "Testimonial",
      description: "A website to get testimonials from my clients.",
      link: "https://github.com/gokkull-15/testimonials-app.git",
      image: testimonial,
    },
    {
      name: "Imdb-next",
      description: "Cloned version of IMDB using nextjs.",
      link: "https://github.com/gokkull-15/imdb-next.git",
      image: imdb,
    },
    {
      name: "Wallet-connect",
      description: "A mini project to connect web3 wallet.",
      link: "https://github.com/gokkull-15/wallet-connect.git",
      image: web3,
    },
    {
      name: "Landing Page (Client)",
      description: "A landing page for musical band for my client.",
      link: "https://github.com/gokkull-15/Landipage.git",
      image: landingpage,
    },
    {
      name: "Qr code",
      description: "Mini project that generates qr code for the given links.",
      link: "https://github.com/gokkull-15/Qr-code.git",
      image: qr,
    },
    {
      name: "Billing System (Client)",
      description: "A fully functioning billing system for my client.",
      link: "https://github.com/gokkull-15/billing-system-app.git",
      image: billing,
    },
  ], []);

  // ... (handleMouseMove) ...
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
      {/* GLOBAL BACKGROUND */}
      <div className="fixed inset-0 -z-50 bg-[#020617] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#020617] to-[#020617]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        {/* Shooting Stars Container */}
        <div className="absolute inset-0 rotate-[20deg] opacity-60">
          {useMemo(() => [...Array(20)].map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3 + 2}s`,
          })), []).map((star) => (
            <div
              key={star.id}
              className="shooting-star"
              style={{
                left: star.left,
                top: star.top,
                animationDelay: star.animationDelay,
                animationDuration: star.animationDuration,
              }}
            />
          ))}
        </div>
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center px-6 md:px-12 xl:px-24 py-16 overflow-hidden">
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center z-10">
          <div className="relative mb-8 perspective-text group">
            <h1 ref={titleRef} className="relative text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400 select-none transition-transform duration-75 ease-out hover:scale-[1.02]" style={{ textShadow: '0 0 30px rgba(255,255,255,0.1)' }}>
              GOKUL PRIYAN
            </h1>
            <div ref={glowRef} className="absolute -inset-10 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-blue-500/0 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>

          <p ref={descriptionRef} className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-10 tracking-wide transition-transform duration-75 ease-out">
            Constructing <span className="text-cyan-200 font-medium glow-text">decentralized realities</span> &
            <span className="text-sky-200 font-medium glow-text"> intelligent interfaces</span>.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { icon: Code, label: "Blockchain Engineer" },
              { icon: Cpu, label: "Full Stack Architect" },
              { icon: Building, label: "System Designer" },
            ].map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/40 border border-cyan-500/20 backdrop-blur-md text-sm md:text-base hover:border-cyan-400/50 hover:bg-slate-800/60 transition-all cursor-default group">
                <Icon size={16} className="text-sky-400 group-hover:text-cyan-300 transition-colors" />
                <span className="font-medium text-cyan-100/80 group-hover:text-cyan-100 transition-colors">{label}</span>
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-5">
            <div className="flex items-center gap-4 px-6 py-3 rounded-2xl bg-slate-900/30 border border-cyan-500/10 backdrop-blur-sm">
              {socialLinks.map(({ icon: Icon, href, tooltip }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={tooltip} className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-cyan-300 transition-all hover:scale-110">
                  <Icon size={24} />
                </a>
              ))}
            </div>
            <div className="h-8 w-px bg-cyan-800/30 hidden sm:block" />
            <div className="flex gap-4">
              <a href="#projects" className="group relative px-8 py-3 rounded-xl font-bold text-sm overflow-hidden bg-cyan-500 text-white shadow-[0_0_20px_-5px_rgba(6,182,212,0.5)] transition-all hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.7)] hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                <span className="relative flex items-center gap-2">Explore Work <Award size={16} /></span>
              </a>
            </div>
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

      {/* Projects Section - Auto-scroll */}
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
              onClick={() => setSelectedProject(true)}
              className="px-6 py-2.5 rounded-lg font-semibold text-sm bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-500 text-white shadow-lg transition-all"
            >
              View All Projects
            </button>
          </div>
        </div>
      </section>

    </main>
  );
};

// Projects Auto-scroll Carousel Component - Memoized
const ProjectsCarousel = memo(({ projects, scrollContainerRef }) => {
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || isPaused) return;

    let scrollInterval;
    const scroll = () => {
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 1;
      }
    };

    scrollInterval = setInterval(scroll, 30);

    return () => clearInterval(scrollInterval);
  }, [isPaused, scrollContainerRef]);

  return (
    <div
      ref={scrollContainerRef}
      className="flex gap-6 overflow-x-auto pb-6 scrollbar-custom"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{ scrollBehavior: 'auto' }}
    >
      {[...projects, ...projects].map((project, index) => (
        <ProjectCard key={`project-${index}`} {...project} />
      ))}
    </div>
  );
});

// Simplified Project Card Component - Memoized
const ProjectCard = memo(({ name, description, image }) => {
  return (
    <div className="flex-shrink-0 w-80 group relative rounded-2xl overflow-hidden border border-cyan-600/30 bg-gradient-to-br from-slate-900/40 via-slate-800/25 to-cyan-900/15 backdrop-blur-xl shadow-[0_0_20px_-10px_rgba(56,189,248,0.4)] hover:border-sky-400/60 transition-all">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.15),transparent_70%)]" />
      <div className="relative h-40 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/50 via-transparent to-transparent opacity-60 mix-blend-overlay" />
      </div>
      <div className="relative p-4">
        <h3 className="text-base font-semibold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-cyan-200 to-blue-200">
          {name}
        </h3>
        <p className="mt-1 text-xs text-gray-300 leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
      <div className="absolute top-2 left-2 text-[10px] uppercase tracking-wider text-cyan-300/60">GP</div>
    </div>
  );
});

export default Home;

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
    </main>
  );
};

export default Home;

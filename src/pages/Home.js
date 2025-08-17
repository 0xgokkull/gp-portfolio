import React, { useState, useMemo, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowDownRight,
  Sparkles,
  Target,
  Award,
  Code,
  Cpu,
  Building,
} from "lucide-react";
import LottieFrame from "../components/LottieFrame";

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
        href: "https://github.com/gokkull-15",
        hoverColor: "hover:text-white",
        bgHover: "hover:bg-gray-800",
        tooltip: "GitHub Profile",
      },
      {
        icon: Linkedin,
        href: "https://www.linkedin.com/in/gokkull-s",
        hoverColor: "hover:text-white",
        bgHover: "hover:bg-blue-900",
        tooltip: "LinkedIn Profile",
      },
      {
        icon: Twitter,
        href: "https://x.com/Gokkull15",
        hoverColor: "hover:text-white",
        bgHover: "hover:bg-blue-900",
        tooltip: "Twitter Profile",
      },
    ],
    []
  );

  return (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="text-white overflow-x-hidden relative"
    >
  {/* Background overlays removed for cleaner subtle particle-driven backdrop */}
      {/* Hero Section */}
  {/* On mobile we want content first and animation below -> remove flex-col-reverse */}
  <section className="relative min-h-[92vh] flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 px-6 md:px-12 xl:px-24 pt-10 md:pt-0">
        {/* Decorative gradients / glows */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* Softened decorative glows (reduced opacity) */}
          <div className="absolute top-1/4 -left-10 w-72 h-72 bg-gradient-to-tr from-cyan-600/25 via-sky-500/25 to-blue-400/20 blur-3xl rounded-full animate-floatSlow" />
          <div className="absolute bottom-10 -right-16 w-80 h-80 bg-gradient-to-br from-sky-600/25 via-cyan-500/20 to-blue-400/20 blur-3xl rounded-full animate-floatSlow [animation-delay:3s]" />
          {/* Shimmer sweep */}
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(110deg,transparent,rgba(56,189,248,0.12),transparent)] bg-[length:200%_100%] animate-shimmer" />
        </div>

        {/* Left content */}
  <div className="w-full lg:w-1/2 flex flex-col gap-6 order-1 lg:order-1">
          <div>
            <div className="inline-block relative">
              <span className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-500 rounded-lg blur opacity-60 animate-gradientShift" />
              <h1
                className={`relative text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-cyan-200 to-blue-200 drop-shadow-[0_0_10px_rgba(56,189,248,0.55)] transition-all duration-500 ${
                  isNameHovered && window.innerWidth >= 768
                    ? "tracking-widest scale-[1.015]"
                    : ""
                }`}
                onMouseEnter={() => window.innerWidth >= 768 && setIsNameHovered(true)}
                onMouseLeave={() => window.innerWidth >= 768 && setIsNameHovered(false)}
              >
                GOKUL PRIYAN S
              </h1>
            </div>
            <p className="mt-4 text-sm md:text-base text-gray-300 max-w-xl leading-relaxed">
              Crafting immersive digital & decentralized experiences with a taste for bold design, performant architectures, and resilient blockchain implementations.
            </p>
          </div>

            {/* Roles Pills */}
          <div className="flex flex-wrap gap-3">
            {[
              { icon: Code, label: "Blockchain Dev" },
              { icon: Cpu, label: "Full Stack Dev" },
              { icon: Building, label: "Digital Architect" },
            ].map(({ icon: Icon, label }, i) => (
              <span
                key={label}
                className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900/30 border border-cyan-600/30 backdrop-blur-md hover:border-sky-400/60 hover:bg-slate-800/40 transition-all text-sm md:text-base overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-700/0 via-sky-500/10 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Icon size={18} className="text-sky-300" />
                <span className="font-semibold tracking-wide text-cyan-100">{label}</span>
              </span>
            ))}
          </div>

          {/* Social Links */}
          <div className="mt-4 flex items-center gap-5">
            {socialLinks.map(({ icon: Icon, href, tooltip }, i) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={tooltip}
                className="relative group p-3 rounded-xl bg-gradient-to-br from-slate-900/30 to-slate-800/20 border border-cyan-700/40 hover:border-sky-400/60 hover:from-slate-800/40 hover:to-cyan-700/20 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:-rotate-3"
              >
                <span className="absolute inset-0 rounded-xl shadow-[0_0_0_0_rgba(14,165,233,0.45)] group-hover:shadow-[0_0_25px_4px_rgba(56,189,248,0.40)] transition-shadow" />
                <Icon size={28} className="text-sky-300 group-hover:text-cyan-200" />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="/resume"
              className="relative overflow-hidden group px-8 py-3 rounded-lg font-semibold text-sm md:text-base tracking-wide bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-500 text-white shadow-lg shadow-cyan-900/30 hover:shadow-sky-500/40 transition-all"
            >
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.25),transparent)] opacity-0 group-hover:opacity-100 transition-opacity" />
              View Resume
            </a>
            <a
              href="#intro"
              className="relative px-8 py-3 rounded-lg font-semibold text-sm md:text-base tracking-wide border border-cyan-600/40 hover:border-sky-400/70 bg-slate-900/30 hover:bg-slate-800/40 backdrop-blur-md transition-all"
            >
              Know More ↓
            </a>
          </div>
        </div>

        {/* Right visual using shared LottieFrame */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative order-2 lg:order-2">
          <div className="w-full max-w-lg">
            <LottieFrame size="hero" orbit label="GP" src="https://lottie.host/embed/6eed80dc-7a32-4e1e-8ee7-7b9e3678feca/El25YvPRNL.lottie" />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section
        id="intro"
        ref={introRef}
        className={`relative flex flex-col lg:flex-row items-center justify-center gap-12 px-6 md:px-12 xl:px-24 py-20 scroll-mt-24 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-1/3 right-0 w-64 h-64 bg-gradient-to-br from-cyan-600/25 via-sky-500/20 to-blue-500/20 blur-3xl rounded-full animate-floatSlow" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-gradient-to-tr from-sky-500/20 via-cyan-400/15 to-blue-500/10 blur-3xl rounded-full animate-floatSlow [animation-delay:4s]" />
        </div>

        {/* Textual */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-cyan-200 to-blue-200 flex items-center gap-3">
              Introduction
              <Sparkles size={38} className="text-sky-300 animate-pulse" />
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-200 leading-relaxed">
              I am <span className="font-bold text-white">Gokul Priyan S</span>, currently pursuing my <span className="text-sky-300 font-semibold">B.E. degree</span> at <span className="font-bold text-white">Jaya Engineering College</span>. Passionate about shipping futuristic, performant, and resilient products.
            </p>
            <p className="mt-3 text-base md:text-lg text-gray-300 leading-relaxed">
              I obsess over <span className="text-sky-300 font-medium">scalability</span>, <span className="text-sky-300 font-medium">developer experience</span>, and pushing boundaries across the web3 x full‑stack spectrum.
            </p>
          </div>

          {/* Experience Grid */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold flex items-center gap-3 text-cyan-200">
              Experience <Target size={26} className="text-sky-400" />
            </h3>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  title: 'Full Stack Development',
                  years: '2+ years',
                  desc: 'of crafting robust web ecosystems',
                  icon: Award,
                },
                {
                  title: 'Blockchain Development',
                  years: '1+ year',
                  desc: 'building decentralized solutions',
                  icon: ArrowDownRight,
                },
              ].map(({ title, years, desc, icon: Icon }, i) => (
                <div
                  key={title}
                  className="group relative p-5 rounded-2xl border border-cyan-700/40 bg-gradient-to-br from-slate-900/30 via-slate-800/20 to-cyan-900/10 backdrop-blur-xl overflow-hidden hover:border-sky-400/60 transition-all"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.15),transparent_70%)]" />
                  <div className="flex items-center gap-3 mb-2">
                    <span className="p-2 rounded-xl bg-slate-800/40 border border-sky-400/30 text-sky-300 shadow-inner shadow-cyan-700/40 animate-wiggle">
                      <Icon size={20} />
                    </span>
                    <h4 className="font-semibold text-[15px] md:text-base tracking-wide text-cyan-200">{title}</h4>
                  </div>
                  <p className="text-sm text-gray-300"><span className="font-semibold text-white">{years}</span> {desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animation / Visual using shared frame */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="w-full max-w-xl">
            <LottieFrame size="hero" orbit label="GP" src="https://lottie.host/embed/8a5d3bd7-3997-4d40-9c65-53b8a075e0cd/K3BROBW30C.lottie" />
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default Home;

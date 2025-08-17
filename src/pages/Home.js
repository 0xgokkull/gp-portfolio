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
      {
        icon: Mail,
        href: "mailto:gokkull04@gmail.com",
        hoverColor: "hover:text-white",
        bgHover: "hover:bg-red-900",
        tooltip: "Send Email",
      },
    ],
    []
  );

  return (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="text-white overflow-x-hidden"
    >
      {/* Hero Section */}
  {/* On mobile we want content first and animation below -> remove flex-col-reverse */}
  <section className="relative min-h-[92vh] flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 px-6 md:px-12 xl:px-24 pt-10 md:pt-0">
        {/* Decorative gradients / glows */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* Softened decorative glows (reduced opacity) */}
          <div className="absolute top-1/4 -left-10 w-72 h-72 bg-gradient-to-tr from-purple-600/30 via-fuchsia-500/25 to-pink-500/20 blur-3xl rounded-full animate-floatSlow" />
          <div className="absolute bottom-10 -right-16 w-80 h-80 bg-gradient-to-br from-indigo-600/25 via-purple-500/20 to-rose-500/20 blur-3xl rounded-full animate-floatSlow [animation-delay:3s]" />
        </div>

        {/* Left content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <div>
            <div className="inline-block relative">
              <span className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 rounded-lg blur opacity-60 animate-gradientShift" />
              <h1
                className={`relative text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all duration-500 ${
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
                className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 backdrop-blur-md hover:border-fuchsia-400/60 hover:bg-purple-800/40 transition-all text-sm md:text-base overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-700/0 via-fuchsia-600/10 to-purple-700/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Icon size={18} className="text-fuchsia-300" />
                <span className="font-semibold tracking-wide text-fuchsia-100">{label}</span>
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
                className="relative group p-3 rounded-xl bg-gradient-to-br from-purple-900/30 to-purple-700/20 border border-purple-700/40 hover:border-fuchsia-400/60 hover:from-purple-800/40 hover:to-fuchsia-700/20 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:-rotate-3"
              >
                <span className="absolute inset-0 rounded-xl shadow-[0_0_0_0_rgba(217,70,239,0.4)] group-hover:shadow-[0_0_25px_4px_rgba(217,70,239,0.35)] transition-shadow" />
                <Icon size={28} className="text-fuchsia-300 group-hover:text-fuchsia-200" />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="/resume"
              className="relative overflow-hidden group px-8 py-3 rounded-lg font-semibold text-sm md:text-base tracking-wide bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 text-white shadow-lg shadow-fuchsia-800/30 hover:shadow-fuchsia-500/40 transition-all"
            >
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.25),transparent)] opacity-0 group-hover:opacity-100 transition-opacity" />
              View Resume
            </a>
            <a
              href="#intro"
              className="relative px-8 py-3 rounded-lg font-semibold text-sm md:text-base tracking-wide border border-purple-500/40 hover:border-fuchsia-400/70 bg-purple-900/20 hover:bg-purple-800/30 backdrop-blur-md transition-all"
            >
              Know More ↓
            </a>
          </div>
        </div>

        {/* Right visual */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative">
          <div className="relative w-full max-w-lg">
            {/* Dimmed reactive glow (reduced opacity & blur) */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600/20 via-fuchsia-500/15 to-pink-500/10 rounded-3xl blur-xl animate-gradientShift" />
            <div className="relative rounded-3xl backdrop-blur-xl border border-purple-700/30 bg-purple-900/20 p-3 md:p-6 overflow-hidden shadow-[0_0_25px_-8px_rgba(168,85,247,0.25)]">
              <iframe
                src="https://lottie.host/embed/6eed80dc-7a32-4e1e-8ee7-7b9e3678feca/El25YvPRNL.lottie"
                className="w-full h-[240px] sm:h-[300px] md:h-[340px] lg:h-[380px] opacity-90 hover:opacity-100 transition-opacity"
                title="developer animation"
              />
              <div className="absolute top-2 right-2 text-[10px] uppercase tracking-widest text-fuchsia-300/50">GP</div>
            </div>
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
          <div className="absolute top-1/3 right-0 w-64 h-64 bg-gradient-to-br from-fuchsia-600/25 via-pink-500/20 to-purple-500/20 blur-3xl rounded-full animate-floatSlow" />
        </div>

        {/* Textual */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-300 flex items-center gap-3">
              Introduction
              <Sparkles size={38} className="text-fuchsia-300 animate-pulse" />
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-200 leading-relaxed">
              I am <span className="font-bold text-white">Gokul Priyan S</span>, currently pursuing my <span className="text-fuchsia-300 font-semibold">B.E. degree</span> at <span className="font-bold text-white">Jaya Engineering College</span>. Passionate about shipping futuristic, performant, and resilient products.
            </p>
            <p className="mt-3 text-base md:text-lg text-gray-300 leading-relaxed">
              I obsess over <span className="text-fuchsia-300 font-medium">scalability</span>, <span className="text-fuchsia-300 font-medium">developer experience</span>, and pushing boundaries across the web3 x full‑stack spectrum.
            </p>
          </div>

          {/* Experience Grid */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold flex items-center gap-3 text-fuchsia-200">
              Experience <Target size={26} className="text-fuchsia-400" />
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
                  className="group relative p-5 rounded-2xl border border-purple-700/40 bg-gradient-to-br from-purple-900/30 via-purple-800/20 to-fuchsia-900/10 backdrop-blur-xl overflow-hidden hover:border-fuchsia-400/60 transition-all"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.15),transparent_70%)]" />
                  <div className="flex items-center gap-3 mb-2">
                    <span className="p-2 rounded-xl bg-purple-700/40 border border-fuchsia-400/30 text-fuchsia-300 shadow-inner shadow-fuchsia-700/40 animate-wiggle">
                      <Icon size={20} />
                    </span>
                    <h4 className="font-semibold text-[15px] md:text-base tracking-wide text-fuchsia-200">{title}</h4>
                  </div>
                  <p className="text-sm text-gray-300"><span className="font-semibold text-white">{years}</span> {desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animation / Visual */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative w-full max-w-xl">
            <div className="absolute -inset-4 bg-gradient-to-br from-fuchsia-600/30 via-purple-600/30 to-indigo-600/20 rounded-3xl blur-2xl animate-gradientShift" />
            <div className="relative rounded-3xl backdrop-blur-xl border border-fuchsia-700/40 bg-purple-900/10 p-3 md:p-6 overflow-hidden shadow-[0_0_35px_-5px_rgba(217,70,239,0.35)]">
              <iframe
                src="https://lottie.host/embed/8a5d3bd7-3997-4d40-9c65-53b8a075e0cd/K3BROBW30C.lottie"
                className="w-full h-[260px] sm:h-[340px] md:h-[480px] lg:h-[560px] opacity-90 hover:opacity-100 transition-opacity"
                title="intro animation"
              />
              <div className="absolute bottom-3 left-4 text-[10px] uppercase tracking-widest text-fuchsia-300/50">GP</div>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default Home;

import React from "react";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import gp from "../../assets/gp.jpeg";
import Toolstack from "./Toolstack";
import Github from "./Github";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative px-6 md:px-12 xl:px-24 py-16 text-white overflow-hidden"
    >
      {/* Soft background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 left-0 w-72 h-72 rounded-full bg-gradient-to-tr from-purple-600/25 via-fuchsia-500/20 to-pink-500/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gradient-to-br from-indigo-600/20 via-purple-500/15 to-fuchsia-500/15 blur-3xl" />
      </div>

      {/* Intro Section */}
      <section id="about-top" className="scroll-mt-24">
  <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text + Card */}
          <div className="w-full lg:w-7/12 space-y-6">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-300">
              Know Who <span className="drop-shadow-[0_0_8px_rgba(168,85,247,0.45)]">I'M</span>
            </h1>
            <Aboutcard />
          </div>

          {/* Image */}
            <div className="w-full lg:w-5/12 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-purple-600/30 via-fuchsia-500/25 to-pink-400/20 blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative overflow-hidden rounded-2xl border border-purple-600/30 bg-purple-900/20 backdrop-blur-md shadow-[0_0_30px_-10px_rgba(168,85,247,0.35)] group-hover:shadow-[0_0_35px_-4px_rgba(217,70,239,0.45)] transition-all">
                  <img
                    src={gp}
                    alt="Gokul Priyan"
                    className="object-cover w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[420px] select-none"
                    draggable={false}
                  />
                  <div className="absolute bottom-2 right-3 text-[10px] tracking-widest uppercase text-fuchsia-300/50">vision</div>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Skillset */}
      <section id="skills" className="mt-24 scroll-mt-24">
        <Header title="Professional" accent="Skillset" subtitle="Core technologies I wield with intention." />
        <Techstack />
      </section>

      {/* Tools */}
      <section id="tools" className="mt-10 scroll-mt-24">
        <Header title="Tools" accent="I use" subtitle="A refined toolkit powering rapid iteration & delivery." />
        <Toolstack />
      </section>

      {/* Github */}
      <section id="github" className="mt-10 scroll-mt-24">
        <Header title="Github" accent="Status" subtitle="Activity & consistency snapshots." />
        <Github />
      </section>
    </motion.main>
  );
}

// Reusable heading component
const Header = ({ title, accent, subtitle }) => (
  <div className="mb-4 space-y-2">
    <h2 className="text-2xl md:text-4xl font-bold flex flex-wrap gap-2 items-end leading-tight">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-300 drop-shadow-[0_0_6px_rgba(168,85,247,0.35)]">{title}</span>
      <span className="text-fuchsia-300">{accent}</span>
    </h2>
    {subtitle && <p className="text-sm md:text-base text-gray-300 max-w-xl">{subtitle}</p>}
  </div>
);

export default About;

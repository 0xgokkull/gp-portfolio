import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import blockinsure from "../../assets/blockinsure.png";
import medico from "../../assets/medico.png";
import devma from "../../assets/devma.png";
import mahalakshmi from "../../assets/mahalakshmi.png";
import billing from "../../assets/billing.png";
import imdb from "../../assets/imdb.png";
import shopx from "../../assets/shopx.png";
import testimonial from "../../assets/testimonial.png";
import trsa from "../../assets/trsa.png";
import landingpage from "../../assets/landingpage.png";
import web3 from "../../assets/web3.png";
import qr from "../../assets/qr.png";
import chained from "../../assets/chained.png";
import smartwill from "../../assets/smartwill.jpeg";
import eduxlite from "../../assets/eduxlite.jpeg";
import arcadeblock from "../../assets/arcadeblock.jpeg";
import tnkun from "../../assets/tnkun.jpeg";
import ipfs from "../../assets/pinata-ipfs.jpeg";
import firm from "../../assets/firm.png";
import ava from "../../assets/ava.png";

function Projects() {
  const projects = [
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
  ];

  return (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative px-6 md:px-12 xl:px-24 py-20 text-white overflow-hidden"
    >
      {/* Soft background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 left-0 w-72 h-72 rounded-full bg-gradient-to-tr from-cyan-600/20 via-sky-500/15 to-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gradient-to-br from-cyan-700/15 via-sky-600/15 to-blue-500/10 blur-3xl" />
      </div>

      <header className="max-w-3xl mx-auto text-center mb-14 space-y-4">
  <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-cyan-200 to-blue-200 drop-shadow-[0_0_10px_rgba(56,189,248,0.45)]">
          Projects
        </h1>
        <p className="text-sm md:text-base text-gray-300">
          A curated selection of builds ranging from decentralized protocols & AI‑assisted platforms to client deliverables and experimental utilities.
        </p>
      </header>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.name + index} {...project} index={index} />
        ))}
      </div>
    </motion.main>
  );
}

export default Projects;

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

// Memoize imported components
const MemoizedAboutCard = memo(Aboutcard);
const MemoizedTechstack = memo(Techstack);
const MemoizedToolstack = memo(Toolstack);
const MemoizedGithubStats = memo(GithubStats);

const Home = () => {
  return (
    <main className="text-white overflow-x-hidden relative">
      <div className="fixed inset-0 -z-50 bg-[#020617] overflow-hidden">
        {/* Background Placeholders */}
      </div>
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl">Gokul Priyan Portfolio</h1>
      </div>
    </main>
  );
};

export default Home;

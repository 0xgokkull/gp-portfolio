import { Github, Linkedin, Twitter } from "lucide-react";

// Project images
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

// Social Links - used in Hero section and Footer
export const socialLinks = [
    {
        icon: Github,
        href: "https://github.com/0xgokkull",
        tooltip: "GitHub Profile",
        hoverColor: "hover:text-white",
        bgHover: "hover:bg-gray-800",
    },
    {
        icon: Linkedin,
        href: "https://www.linkedin.com/in/gokkull-s",
        tooltip: "LinkedIn Profile",
        hoverColor: "hover:text-white",
        bgHover: "hover:bg-blue-900",
    },
    {
        icon: Twitter,
        href: "https://x.com/0xgokkull",
        tooltip: "Twitter Profile",
        hoverColor: "hover:text-white",
        bgHover: "hover:bg-blue-900",
    },
];

// Projects data
export const projects = [
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
];

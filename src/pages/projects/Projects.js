import React from "react";
import ProjectCard from "./ProjectCard";
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

function Projects() {
  const projects = [
    {
      name: "BlockInsure",
      description: "A decentralized platform to apply for the insurance.",
      link: "https://github.com/gokkull-15/Blockinsure-V1.git",
      image: blockinsure, // Example image
    },
    {
      name: "DevMa",
      description: "A decentalized platform that combines Devfolio and Luma.",
      link: "https://github.com/gokkull-15/devma-v1.git",
      image: devma, // Example image
    },
    {
      name: "MediCO",
      description:
        "A platform to create interaction between the patient and doctor through onchain.",
      link: "https://github.com/gokkull-15/medico-app.git",
      image: medico, // Example image
    },
    {
      name: "ShopX",
      description:
        "A decentralized platform for buying and selling ebooks through onchain.",
      link: "https://github.com/gokkull-15/shopx-app.git",
      image: shopx, // Example image
    },
    {
      name: "TRSA",
      description:
        "A social platform to organise events and view the skaters around the region.",
      link: "https://github.com/Sunil0881/TRSA.git",
      image: trsa, // Example image
    },
    {
      name: "Mahalakshmi build",
      description: "A real-estate side build for my client.",
      link: "https://github.com/gokkull-15/mahalakshmi-app.git",
      image: mahalakshmi, // Example image
    },
    {
      name: "Testimonial",
      description: "A website to get testimonials from my clients.",
      link: "https://github.com/gokkull-15/testimonials-app.git",
      image: testimonial, // Example image
    },
    {
      name: "Imdb-next",
      description: "Cloned version of IMDB using nextjs.",
      link: "https://github.com/gokkull-15/imdb-next.git",
      image: imdb, // Example image
    },
    {
      name: "Wallet-connect",
      description: "A mini project to connect web3 wallet.",
      link: "https://github.com/gokkull-15/wallet-connect.git",
      image: web3, // Example image
    },
    {
      name: "Landing Page",
      description: "A landing page for musical band for my client.",
      link: "https://github.com/gokkull-15/Landipage.git",
      image: landingpage, // Example image
    },
    {
      name: "Qr code",
      description: "Mini project that generates qr code for the given links.",
      link: "https://github.com/gokkull-15/Qr-code.git",
      image: qr, // Example image
    },
    {
      name: "Billing System",
      description: "A fully functioning billing system for my client.",
      link: "https://github.com/gokkull-15/billing-system-app.git",
      image: billing, // Example image
    },
  ];

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <div className="max-w-7xl w-full px-4">
        <h2 className="text-4xl font-bold text-purple-500 text-center mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              link={project.link}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

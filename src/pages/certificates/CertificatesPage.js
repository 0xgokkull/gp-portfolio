import React from "react";
import CertificateCard from "./CertificateCard";
import { motion } from "framer-motion";
import codsoft from "../../assets/codsoft.jpeg";
import aws from "../../assets/aws.jpeg";
import js from "../../assets/js.jpeg";
import nft from "../../assets/nft.jpeg";
import nm from "../../assets/nm.jpeg";
import mongo from "../../assets/mongo.jpeg";
import bestperformer from "../../assets/best_performer.jpg";

function CertificatesPage() {
  // List of Certificates (Example Data)
  const certificates = [
    {
      name: "SecureDapp",
      description: "Best Quarter Performer in internship.",
      image: bestperformer,
    },
    {
      name: "CodSoft",
      description: "Internship certificate for frontend development.",
      image: codsoft,
    },
    {
      name: "Udemy",
      description: "Complete NFT course.",
      image: nft,
    },
    {
      name: "AWS academy",
      description: "AWS cloud foundations.",
      image: aws,
    },
    {
      name: "MongoDB",
      description: "MongoDB CRUD operations.",
      image: mongo,
    },
    {
      name: "Udemy",
      description: "JavaScript crash course.",
      image: js,
    },
    {
      name: "Naan Mudhalvan",
      description: "Entrepreneurship skills training.",
      image: nm,
    },
  ];

  return (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative min-h-screen px-6 md:px-12 xl:px-24 py-20 text-white overflow-hidden"
    >
      {/* Soft glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 left-0 w-72 h-72 rounded-full bg-gradient-to-tr from-cyan-600/25 via-sky-500/20 to-blue-500/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gradient-to-br from-cyan-700/20 via-sky-600/15 to-blue-500/15 blur-3xl" />
      </div>

      <header className="max-w-3xl mx-auto text-center mb-14 space-y-4">
  <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-cyan-200 to-blue-200 drop-shadow-[0_0_10px_rgba(56,189,248,0.45)]">
          Certificates
        </h1>
        <p className="text-sm md:text-base text-gray-300">
          Recognitions & credentials earned along the journey—internships, courses, performance awards, and specialization tracks.
        </p>
      </header>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate, index) => (
          <CertificateCard key={certificate.name + index} index={index} {...certificate} />
        ))}
      </div>
    </motion.main>
  );
}

export default CertificatesPage;

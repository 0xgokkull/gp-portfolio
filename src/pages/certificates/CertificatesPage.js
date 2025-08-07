import React from "react";
import CertificateCard from "./CertificateCard";
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
    <div className="min-h-screen flex justify-center items-center p-4">
      <div className="max-w-7xl w-full px-4">
      <h1 className="text-4xl font-bold text-purple-300 text-center mb-8">
        My Certificates
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((certificate, index) => (
          <CertificateCard
            key={index}
            name={certificate.name}
            description={certificate.description}
            image={certificate.image}
          />
        ))}
        </div>
      </div>
    </div>
  );
}

export default CertificatesPage;

import React from "react";
import { motion } from "framer-motion";

function CertificateCard({ name, description, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
      }}
      className="border border-purple-900 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow w-full max-w-sm mx-auto h-[350px]"
    >
      {/* Image Section */}
      <img
        src={image}
        alt={name}
        className="h-48 w-full object-cover rounded-lg"
      />
      <h3 className="text-2xl font-semibold text-purple-300 mt-4">{name}</h3>
      <p className="text-gray-300 mt-2">{description}</p>
    </motion.div>
  );
}

export default CertificateCard;

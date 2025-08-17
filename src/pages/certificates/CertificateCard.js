import React from "react";
import { motion } from "framer-motion";

function CertificateCard({ name, description, image, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.05 }}
      whileHover={{ y: -6 }}
  className="group relative flex flex-col rounded-3xl overflow-hidden border border-cyan-600/30 bg-gradient-to-br from-slate-900/40 via-slate-800/25 to-cyan-900/15 backdrop-blur-xl shadow-[0_0_25px_-10px_rgba(56,189,248,0.4)] hover:border-sky-400/60 transition-all h-full"
    >
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.18),transparent_70%)]" />
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/50 via-transparent to-transparent opacity-60 mix-blend-overlay" />
      </div>
      <div className="relative flex flex-col flex-1 p-5">
  <h3 className="text-lg md:text-xl font-semibold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-cyan-200 to-blue-200">
          {name}
        </h3>
        <p className="mt-2 text-xs md:text-sm text-gray-300 leading-relaxed flex-1">
          {description}
        </p>
      </div>
  <div className="absolute top-3 left-3 text-[10px] uppercase tracking-wider text-cyan-300/60">cert</div>
    </motion.article>
  );
}

export default CertificateCard;

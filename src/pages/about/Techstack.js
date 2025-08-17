import React from "react";
import { motion } from "framer-motion";
import {
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import { SiFirebase, SiNextdotjs, SiPostgresql } from "react-icons/si";
import { FaRust } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";

function Techstack() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-center flex-wrap gap-5 py-12"
    >
      {[
        <DiReact />,
        <SiNextdotjs />,
        <DiJavascript1 />,
        <TbBrandTypescript />,
        <FaRust />,
        <DiPython />,
        <DiMongodb />,
        <SiPostgresql />,
        <SiFirebase />,
        <DiGit />,
      ].map((icon, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
          whileHover={{ scale: 1.12, rotate: 2 }}
          whileTap={{ scale: 0.94 }}
          className="lg:text-8xl text-6xl m-2 p-4 rounded-2xl border border-cyan-600/30 bg-slate-900/30 backdrop-blur-md shadow-[0_0_18px_-6px_rgba(56,189,248,0.4)] text-cyan-200/90 hover:border-sky-400/60 hover:shadow-[0_0_25px_-4px_rgba(56,189,248,0.55)] transition-all"
        >
          {icon}
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Techstack;

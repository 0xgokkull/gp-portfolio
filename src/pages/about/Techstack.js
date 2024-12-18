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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-center flex-wrap gap-4 py-12"
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
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut",
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="lg:text-9xl text-8xl m-4 sm:m-2 p-3 opacity-90 border border-purple-400 rounded-md shadow-lg transition-transform duration-300 hover:border-purple-500"
        >
          {icon}
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Techstack;

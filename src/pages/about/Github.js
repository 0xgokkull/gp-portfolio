import React from "react";
import { motion } from "framer-motion";

function Github() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-center items-center py-12"
    >
      {/* GitHub Stats */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="text-center"
      >
        <a href="#gokkull-15-title">
          <motion.img
            src="https://github-readme-stats.vercel.app/api?username=gokkull-15&show_icons=true&theme=react&count_private=true&include_all_commits=true"
            alt="gokkull-15"
            className="mx-auto lg:h-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </a>
      </motion.div>
    </motion.div>
  );
}

export default Github;

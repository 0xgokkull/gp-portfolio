import React from "react";
import { motion } from "framer-motion";

function Github() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-center items-center py-12"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.95 }}
        className="relative group p-4 rounded-3xl border border-purple-600/30 bg-purple-900/20 backdrop-blur-xl shadow-[0_0_30px_-10px_rgba(168,85,247,0.35)] hover:border-fuchsia-400/50 transition-all"
      >
        <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-purple-600/25 via-fuchsia-500/20 to-pink-500/15 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
        <a href="https://github.com/gokkull-15" target="_blank" rel="noopener noreferrer" className="relative block">
          <motion.img
            src="https://github-readme-stats.vercel.app/api?username=gokkull-15&show_icons=true&theme=react&count_private=true&include_all_commits=true"
            alt="gokkull-15 stats"
            className="mx-auto lg:h-80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          />
        </a>
        <div className="absolute bottom-2 right-4 text-[10px] uppercase tracking-widest text-fuchsia-300/50">GP</div>
      </motion.div>
    </motion.div>
  );
}

export default Github;

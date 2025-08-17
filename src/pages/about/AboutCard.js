import React from "react";
import { motion } from "framer-motion";
import { FaMedal, FaChalkboardTeacher, FaRunning } from "react-icons/fa";
import { SiHiveBlockchain } from "react-icons/si";

const AboutCard = () => {
  const activities = [
    {
      icon: FaMedal,
      text: "Participating in Hackathons",
  color: "text-sky-300",
    },
    {
      icon: FaChalkboardTeacher,
      text: "Mentoring and Teaching",
  color: "text-cyan-300",
    },
    {
      icon: SiHiveBlockchain,
      text: "Exploring Blockchain Technology",
  color: "text-sky-400",
    },
    {
      icon: FaRunning,
      text: "Involving in sports activities",
  color: "text-blue-400",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
  className="relative max-w-4xl mx-auto p-6 md:p-8 lg:p-10 text-white rounded-3xl border border-cyan-600/30 bg-gradient-to-br from-slate-900/40 via-slate-800/25 to-cyan-900/10 backdrop-blur-xl shadow-[0_0_35px_-10px_rgba(56,189,248,0.35)] overflow-hidden"
    >
  <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-tr from-cyan-600/20 via-sky-500/15 to-blue-500/10 blur-3xl rounded-full pointer-events-none" />
  <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-700/15 via-sky-600/10 to-blue-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative space-y-8">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-cyan-200 to-blue-200 drop-shadow-[0_0_10px_rgba(56,189,248,0.45)]">
            Gokul Priyan S
          </h1>
          <p className="text-lg md:text-2xl text-cyan-200/90 mt-3 font-medium">
            Blockchain Full Stack Developer
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm md:text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto"
        >
          <p>
            Passionate about shaping resilient, scalable products across the web3 & full‑stack space—engineering experiences that feel elegant, purposeful, and future‑ready.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-4"
        >
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
                className="group relative flex items-center gap-4 p-4 rounded-2xl border border-cyan-600/30 bg-slate-900/30 backdrop-blur-md overflow-hidden transition-all hover:border-sky-400/60 hover:bg-slate-800/40"
            >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.18),transparent_70%)]" />
                <activity.icon className={`relative text-3xl ${activity.color} flex-shrink-0 filter drop-shadow-[0_0_6px_rgba(56,189,248,0.4)]`} />
                <span className="relative text-sm md:text-base font-medium tracking-wide text-cyan-100/95">
                {activity.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center pt-2"
        >
            <blockquote className="text-lg md:text-2xl italic text-cyan-100/80 max-w-2xl mx-auto">
            "Live and Let Live !"
          </blockquote>
            <p className="text-cyan-300 mt-2 text-xs tracking-wider">~ Gokul</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutCard;

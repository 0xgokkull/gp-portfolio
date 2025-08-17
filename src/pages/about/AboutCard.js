import React from "react";
import { motion } from "framer-motion";
import { FaMedal, FaChalkboardTeacher, FaRunning } from "react-icons/fa";
import { SiHiveBlockchain } from "react-icons/si";

const AboutCard = () => {
  const activities = [
    {
      icon: FaMedal,
      text: "Participating in Hackathons",
      color: "text-purple-400",
    },
    {
      icon: FaChalkboardTeacher,
      text: "Mentoring and Teaching",
      color: "text-purple-500",
    },
    {
      icon: SiHiveBlockchain,
      text: "Exploring Blockchain Technology",
      color: "text-purple-600",
    },
    {
      icon: FaRunning,
      text: "Involving in sports activities",
      color: "text-purple-700",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative max-w-4xl mx-auto p-6 md:p-8 lg:p-10 text-white rounded-3xl border border-purple-600/30 bg-gradient-to-br from-purple-900/30 via-purple-800/20 to-fuchsia-900/10 backdrop-blur-xl shadow-[0_0_35px_-10px_rgba(168,85,247,0.35)] overflow-hidden"
    >
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-tr from-purple-600/20 via-fuchsia-500/15 to-pink-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-indigo-600/15 via-purple-500/10 to-fuchsia-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative space-y-8">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-fuchsia-200 to-pink-300 drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]">
            Gokul Priyan S
          </h1>
          <p className="text-lg md:text-2xl text-fuchsia-200/90 mt-3 font-medium">
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
              className="group relative flex items-center gap-4 p-4 rounded-2xl border border-purple-600/30 bg-purple-900/20 backdrop-blur-md overflow-hidden transition-all hover:border-fuchsia-400/50 hover:bg-purple-800/30"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_30%_20%,rgba(217,70,239,0.15),transparent_70%)]" />
              <activity.icon className={`relative text-3xl ${activity.color} flex-shrink-0 drop-shadow`} />
              <span className="relative text-sm md:text-base font-medium tracking-wide text-fuchsia-100">
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
          <blockquote className="text-lg md:text-2xl italic text-fuchsia-100/80 max-w-2xl mx-auto">
            "Live and Let Live !"
          </blockquote>
          <p className="text-fuchsia-300 mt-2 text-xs tracking-wider">~ Gokul</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutCard;

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
      className="max-w-4xl mx-auto p-6 md:p-8 lg:p-10 text-white"
    >
      <div className="space-y-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-white"><span className="text-purple-400">G</span>okul <span className="text-purple-400">P</span>riyan S</span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 mt-2">
            Blockchain Full Stack Developer
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-base md:text-xl text-white/90 leading-relaxed space-y-4"
        >
          <p>
            Passionate about creating innovative solutions that bridge
            technology and real-world challenges, with a deep focus on
            blockchain development and scalable applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-4"
        >
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 hover:bg-white/10"
            >
              <activity.icon
                className={`text-3xl ${activity.color} flex-shrink-0`}
              />
              <span className="text-white font-medium">{activity.text}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-6"
        >
          <blockquote className="text-xl md:text-2xl italic text-white/80 max-w-2xl mx-auto">
            "Live and Let Live !"
          </blockquote>
          <p className="text-purple-200 mt-2 text-sm">~ Gokul</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutCard;

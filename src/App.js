import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye } from "lucide-react";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";

import SolarSystem from "./components/SolarSystem";
import ShootingStars from "./components/ShootingStars";

const App = () => {
  const [sceneryMode, setSceneryMode] = useState(false);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    let timer;
    if (sceneryMode && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      setSceneryMode(false);
      setCountdown(10);
    }
    return () => clearInterval(timer);
  }, [sceneryMode, countdown]);

  return (
    <div className="relative min-h-screen text-white flex flex-col overflow-hidden">
      {/* Fixed Deep Space Background */}
      <div className="fixed inset-0 bg-[#020617] -z-20" />
      <SolarSystem />
      <ShootingStars />

      {/* View Scenery Button - Centered Top */}
      <AnimatePresence>
        {!sceneryMode && (
          <div className="fixed top-0 left-0 w-full flex justify-center pt-6 z-50 pointer-events-none">
            <motion.button
              onClick={() => setSceneryMode(true)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="pointer-events-auto flex items-center gap-2 px-6 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-md text-cyan-300 hover:bg-cyan-500/20 hover:text-cyan-200 transition-all shadow-[0_0_15px_rgba(6,182,212,0.2)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye size={18} />
              <span className="font-medium">View Scenery</span>
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      {/* Countdown Timer - Top Center */}
      <AnimatePresence>
        {sceneryMode && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed top-0 left-0 w-full z-50 flex justify-center pt-3 pointer-events-none"
          >
            <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-200 to-transparent drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">
              {countdown}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content - Fades out in Scenery Mode */}
      <AnimatePresence>
        {!sceneryMode && (
          <motion.div
            className="flex flex-col min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            {/* Single Page Content - No Navigation */}
            <div className="flex-grow relative z-10">
              <HomePage />
            </div>

            {/* Footer */}
            <div className="relative z-30"><Footer /></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;

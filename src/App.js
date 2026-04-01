import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, X } from "lucide-react";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";

import RealisticSolarSystem from "./components/RealisticSolarSystem";
import ShootingStars from "./components/ShootingStars";

const App = () => {
  const [sceneryMode, setSceneryMode] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  // Handle closing the scenery mode
  const handleCloseScenery = () => {
    setSceneryMode(false);
  };

  return (
    <div className="relative min-h-screen text-white flex flex-col overflow-hidden">
      {/* Fixed Deep Space Background */}
      <div className="fixed inset-0 bg-[#020617] -z-30" />
      <RealisticSolarSystem sceneryMode={sceneryMode} />
      <ShootingStars />

      {/* View Scenery Button - Centered Top */}
      <AnimatePresence>
        {!sceneryMode && !isProjectModalOpen && (
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

      {/* Close Button - Top Center */}
      <AnimatePresence>
        {sceneryMode && (
          <motion.button
            onClick={handleCloseScenery}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            whileHover={{ scale: 1.15, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 p-2 rounded-full bg-red-500/20 border border-red-400/40 backdrop-blur-md text-red-300 hover:bg-red-500/30 hover:text-red-200 hover:border-red-400/60 transition-colors shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_25px_rgba(239,68,68,0.5)]"
            aria-label="Close scenery mode"
          >
            <X size={24} strokeWidth={2.5} />
          </motion.button>
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
              <HomePage
                isProjectModalOpen={isProjectModalOpen}
                setIsProjectModalOpen={setIsProjectModalOpen}
              />
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

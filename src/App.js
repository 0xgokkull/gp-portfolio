import React from "react";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";

import SolarSystem from "./components/SolarSystem";
import ShootingStars from "./components/ShootingStars";

const App = () => {
  return (
    <div className="relative min-h-screen text-white flex flex-col">
      {/* Fixed Deep Space Background */}
      <div className="fixed inset-0 bg-[#020617] -z-20" />
      {/* Particles background */}
      {/* Particles background removed */}
      <SolarSystem />
      <ShootingStars />


      {/* Single Page Content - No Navigation */}
      <div className="flex-grow relative z-10">
        <HomePage />
      </div>

      {/* Footer */}
      <div className="relative z-30"><Footer /></div>
    </div>
  );
};

export default App;

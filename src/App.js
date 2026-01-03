import React from "react";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import ParticlesComponent from "./components/Particle";

const App = () => {
  return (
    <div className="relative min-h-screen bg-transparent text-white flex flex-col">
      {/* Particles background */}
      <ParticlesComponent id="particles" />

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

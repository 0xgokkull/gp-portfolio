import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import About from "./pages/about/About";
import Resume from "./pages/Resume";
import CertificatesPage from "./pages/certificates/CertificatesPage";
import Projects from "./pages/projects/Projects";
import Home from "./pages/Home";
import ParticlesComponent from "./components/Particle"; // Assuming this is the file where the Particles component is defined

const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen bg-transparent text-white flex flex-col">
        {/* Particles background */}
        <ParticlesComponent id="particles" />

        {/* Navigation Bar */}
        <Navigation />

        {/* Page Content */}
  <div className="flex-grow pt-16 relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/certificates" element={<CertificatesPage />} />
          </Routes>
        </div>

        {/* Footer */}
  <div className="relative z-30"><Footer /></div>
      </div>
    </Router>
  );
};

export default App;

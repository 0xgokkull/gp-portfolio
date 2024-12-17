import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer"; // Import Footer Component
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Certificates from "./pages/Certificates";
import Projects from "./pages/Projects";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "resume":
        return <Resume />;
      case "certificates":
        return <Certificates />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Navigation Bar */}
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Page Content */}
      <div className="flex-grow pt-16">{renderSection()}</div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;

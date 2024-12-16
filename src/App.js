import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Certificates from "./pages/Certificates";

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
    <div className="min-h-screen bg-black text-white">
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div className="pt-16">{renderSection()}</div>
    </div>
  );
};

export default App;

import React from "react";
import Particles from "react-tsparticles";

const ParticleBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1]">
      <Particles
        id="tsparticles"
        options={{
          particles: {
            number: {
              value: 29,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff", // Change particle color to white
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
            },
            opacity: {
              value: 0.5,
            },
            size: {
              value: 20,
              random: true,
            },
            move: {
              enable: true,
              speed: 6,
              direction: "none",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
};

export default ParticleBackground;

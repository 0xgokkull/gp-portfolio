import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = ({ id = "tsparticles", className = "" }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // Particles loaded
  };

  const options = useMemo(
    () => ({
      // Darker background tone reinstated
      background: { color: { value: "#070b12" } },
      fpsLimit: 60,
      particles: {
        number: {
          value: 300,
          density: { enable: true, value_area: 800 },
        },
        color: { value: ["#ffffff", "#ffcc00", "#ff66cc", "#66ffff", "#99ccff"] }, // Multi-colored stars
        shape: { type: "circle" },
        opacity: {
          value: 0.8,
          random: true,
          anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
        },
        size: {
          value: 2,
          random: true,
          anim: { enable: true, speed: 3, size_min: 0.1, sync: false },
        },
        move: {
          enable: true,
          speed: 0.2, // Slower movement for deep space feel
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "bubble" },
          onClick: { enable: true, mode: "repulse" },
        },
        modes: {
          bubble: { distance: 220, size: 0, duration: 2, opacity: 0, speed: 3 },
          repulse: { distance: 180, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: true,
    }),
    []
  );

  return (
    <div className={`pointer-events-none fixed inset-0 -z-10 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#05070b]/95 via-[#060a11]/95 to-[#04060a]/95" />
      <Particles id={id} init={particlesLoaded} options={options} />
    </div>
  );
};

export default ParticlesComponent;

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
          value: 140, // reduce count (previous was 220)
          density: { enable: true, value_area: 1000 },
        },
        // Lighter blue particle palette
        color: { value: ["#bae6fd", "#a5f3fc", "#bfdbfe", "#e0f2fe"] }, // sky-200, cyan-200, blue-200, sky-100
        shape: { type: "circle" },
        opacity: {
          value: 0.75,
          random: true,
          anim: { enable: true, speed: 0.8, opacity_min: 0.12, sync: false },
        },
        size: {
          value: 3.6, // slightly larger for glow presence
          random: true,
          anim: { enable: true, speed: 2.2, size_min: 0.6, sync: false },
        },
        shadow: {
          enable: true,
          color: "#7dd3fc", // cyan-300
          blur: 6,
          offset: { x: 0, y: 0 },
        },
        move: {
          enable: true,
          speed: 0.75,
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

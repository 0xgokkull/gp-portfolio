import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#21253d", 
        },
      },
      fpsLimit: 60,
      particles: {
        number: {
          value: 220, // further increased quantity
          density: {
            enable: true,
            value_area: 1000, // expand area a bit to avoid overcrowding
          },
        },
        color: {
          value: "#ffffff", // White particles
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.7, // Slightly transparent particles
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 2, // keep small for performance with higher count
          random: true,
          anim: {
            enable: true,
            speed: 3,
            size_min: 0.3,
            sync: false,
          },
        },
        move: {
          enable: true,
          speed: 0.8, // slightly slower to keep calm despite higher count
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "bubble", // Bubble effect when hovering
          },
          onClick: {
            enable: true,
            mode: "repulse", // Repulse effect when clicked
          },
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 250,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3,
          },
          repulse: {
            distance: 200, // Reduced repulse distance
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    }),
    []
  );

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;

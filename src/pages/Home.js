import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const InteractiveBackground = () => {
  const [lines, setLines] = useState([]);
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);

  const drawLines = useCallback((ctx, currentLines) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = "lighter";

    currentLines.forEach((line) => {
      ctx.beginPath();
      ctx.globalAlpha = line.opacity;
      ctx.strokeStyle = line.color;
      ctx.lineWidth = 2;
      ctx.moveTo(line.startX, line.startY);
      ctx.lineTo(line.endX, line.endY);
      ctx.stroke();
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Animation loop
    const animate = () => {
      setLines((prevLines) => {
        // Fade out and remove lines
        const updatedLines = prevLines
          .map((line) => ({ ...line, opacity: line.opacity - 0.05 }))
          .filter((line) => line.opacity > 0);

        // Draw lines
        drawLines(ctx, updatedLines);

        return updatedLines;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationFrameRef.current = requestAnimationFrame(animate);

    // Mouse move handler
    const handleMouseMove = (e) => {
      setLines((prevLines) => {
        const newLine = {
          startX: e.clientX - 10,
          startY: e.clientY - 10,
          endX: e.clientX,
          endY: e.clientY,
          opacity: 1,
          color: `hsl(${Math.random() * 360}, 70%, 70%)`,
        };

        return [...prevLines.slice(-9), newLine];
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [drawLines]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
};

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const socialLinks = useMemo(
    () => [
      {
        icon: Github,
        href: "https://github.com",
        hoverColor: "hover:text-gray-400",
      },
      {
        icon: Linkedin,
        href: "https://linkedin.com",
        hoverColor: "hover:text-blue-500",
      },
      {
        icon: Mail,
        href: "mailto:alex@digitalrealm.com",
        hoverColor: "hover:text-red-500",
      },
    ],
    []
  );

  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center text-white">
      <InteractiveBackground />
      <div className="text-center z-10">
        <h1
          className={`text-5xl md:text-6xl font-bold mb-4 text-purple-500 transition-all duration-500 ${
            isHovered ? "tracking-widest" : ""
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          GOKUL PRIYAN S
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          Blockchain Developer | Full Stack Developer | Digital Architect
        </p>
        <div className="mt-8 flex justify-center space-x-6">
          {socialLinks.map(({ icon: Icon, href, hoverColor }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-all duration-300 transform hover:scale-125 hover:rotate-6 p-2 rounded-full ${hoverColor}`}
            >
              <Icon size={36} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

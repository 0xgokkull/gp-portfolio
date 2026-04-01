import React from "react";
import { motion } from "framer-motion";

const planets = [
    {
        name: "Mercury",
        orbit: 180,
        duration: 5,
        size: 20,
        background: "radial-gradient(circle at 30% 30%, #e0e0e0, #7f7f7f 40%, #2b2b2b 100%)",
    },
    {
        name: "Venus",
        orbit: 260,
        duration: 8,
        size: 32,
        background: "radial-gradient(circle at 30% 30%, #fffacd, #daa520 40%, #8b4500 100%)",
    },
    {
        name: "Earth",
        orbit: 360,
        duration: 12,
        size: 36,
        background: "radial-gradient(circle at 30% 30%, #4facfe, #00f2fe 15%, #2e86de 50%, #1e3799 100%)",
        glow: "0 0 5px rgba(79, 172, 254, 0.4)",
    },
    {
        name: "Mars",
        orbit: 460,
        duration: 15,
        size: 26,
        background: "radial-gradient(circle at 30% 30%, #ff6347, #b22222 40%, #5e1914 100%)",
    },
    {
        name: "Jupiter",
        orbit: 650,
        duration: 30,
        size: 75,
        background:
            "linear-gradient(160deg, #6f4e37 0%, #deb887 20%, #8b4513 40%, #f4a460 60%, #cd853f 80%, #5c4a3d 100%)",
    },
    {
        name: "Saturn",
        orbit: 850,
        duration: 45,
        size: 60,
        background: "radial-gradient(circle at 30% 30%, #f0e68c, #bdb76b 50%, #556b2f 100%)",
        hasRing: true,
    },
    {
        name: "Uranus",
        orbit: 1000,
        duration: 60,
        size: 44,
        background: "radial-gradient(circle at 30% 30%, #e0ffff, #00ced1 50%, #008b8b 100%)",
    },
    {
        name: "Neptune",
        orbit: 1150,
        duration: 80,
        size: 42,
        background: "radial-gradient(circle at 30% 30%, #4169e1, #0000cd 50%, #191970 100%)",
    },
];

const SolarSystem = () => {
    return (
        <div
            className="fixed top-1/2 left-1/2 pointer-events-none -z-10"
            style={{
                width: 1000,
                height: 1000,
                transform: "translate(-50%, -50%) rotateX(60deg) scale(1.1)",
                transformStyle: "preserve-3d",
            }}
        >
            <motion.div
                className="absolute top-1/2 left-1/2 rounded-full"
                style={{
                    width: 130,
                    height: 130,
                    background:
                        "radial-gradient(circle at center, #ffffff 0%, #ffd700 10%, #ff8c00 40%, #ff4500 70%, #8b0000 100%)",
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {planets.map((planet) => (
                <motion.div
                    key={planet.name}
                    className="absolute top-1/2 left-1/2 rounded-full"
                    style={{
                        width: planet.orbit,
                        height: planet.orbit,
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        translateX: "-50%",
                        translateY: "-50%",
                        transformStyle: "preserve-3d",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: planet.duration, repeat: Infinity, ease: "linear" }}
                >
                    <div
                        className="absolute rounded-full"
                        style={{
                            width: planet.size,
                            height: planet.size,
                            left: "50%",
                            top: 0,
                            translateX: "-50%",
                            translateY: "-50%",
                            background: planet.background,
                            boxShadow: `inset -6px -6px 12px rgba(0, 0, 0, 0.9), ${planet.glow || "0 0 10px rgba(255, 255, 255, 0.1)"}`,
                        }}
                    >
                        {planet.hasRing && (
                            <div
                                className="absolute top-1/2 left-1/2 rounded-full"
                                style={{
                                    width: 100,
                                    height: 30,
                                    border: "8px solid rgba(218, 165, 32, 0.5)",
                                    borderTop: "8px solid rgba(218, 165, 32, 0.8)",
                                    transform: "translate(-50%, -50%) rotate(-20deg)",
                                }}
                            />
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default SolarSystem;

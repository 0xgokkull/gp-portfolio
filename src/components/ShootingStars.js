import React, { useMemo } from 'react';
import { motion } from "framer-motion";

const ShootingStars = () => {
    // Shooting stars data - memoized to prevent recreating on each render
    const shootingStars = useMemo(() => [...Array(20)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${Math.random() * 3 + 2}s`,
        width: `${Math.random() * 60 + 70}px`,
    })), []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Container specifically for the shooting stars - Transparent background */}
            <div className="absolute inset-0 rotate-[20deg] opacity-60">
                {shootingStars.map((star) => (
                    <motion.div
                        key={star.id}
                        className="absolute h-[2px] rounded-full"
                        style={{
                            left: star.left,
                            top: star.top,
                            width: star.width,
                            background: "linear-gradient(-45deg, rgba(95, 145, 255, 1), rgba(0, 0, 255, 0))",
                            filter: "drop-shadow(0 0 6px rgba(105, 155, 255, 1))",
                            transformOrigin: "right center",
                        }}
                        initial={{ x: 0, y: 0, opacity: 0, rotate: 45 }}
                        animate={{
                            x: [0, 210, 300],
                            y: [0, 210, 300],
                            opacity: [0, 1, 1, 0],
                            rotate: 45,
                        }}
                        transition={{
                            duration: Number.parseFloat(star.animationDuration),
                            delay: Number.parseFloat(star.animationDelay),
                            repeat: Infinity,
                            ease: "linear",
                            repeatDelay: 0.3,
                        }}
                    >
                        <div
                            className="absolute top-1/2 right-0 rounded-full"
                            style={{
                                width: 4,
                                height: 4,
                                transform: "translateY(-50%)",
                                background: "rgba(255, 255, 255, 0.8)",
                                boxShadow: "0 0 5px rgba(255, 255, 255, 0.8)",
                            }}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ShootingStars;

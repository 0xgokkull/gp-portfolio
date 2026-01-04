import React, { useMemo } from 'react';
import "../shooting-stars.css";

const ShootingStars = () => {
    // Shooting stars data - memoized to prevent recreating on each render
    const shootingStars = useMemo(() => [...Array(20)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${Math.random() * 3 + 2}s`,
    })), []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Container specifically for the shooting stars - Transparent background */}
            <div className="absolute inset-0 rotate-[20deg] opacity-60">
                {shootingStars.map((star) => (
                    <div
                        key={star.id}
                        className="shooting-star"
                        style={{
                            left: star.left,
                            top: star.top,
                            animationDelay: star.animationDelay,
                            animationDuration: star.animationDuration,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default ShootingStars;

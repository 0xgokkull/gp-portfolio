import React from "react";
import "./solar-system.css";

const SolarSystem = () => {
    return (
        <div className="solar-system-container">
            <div className="sun" />

            {/* Mercury */}
            <div className="orbit orbit-mercury">
                <div className="planet planet-mercury" style={{ top: '0', left: '50%' }} />
            </div>

            {/* Venus */}
            <div className="orbit orbit-venus">
                <div className="planet planet-venus" style={{ top: '0', left: '50%' }} />
            </div>

            {/* Earth */}
            <div className="orbit orbit-earth">
                <div className="planet planet-earth" style={{ top: '0', left: '50%' }} />
            </div>

            {/* Mars */}
            <div className="orbit orbit-mars">
                <div className="planet planet-mars" style={{ top: '0', left: '50%' }} />
            </div>

            {/* Jupiter */}
            <div className="orbit orbit-jupiter">
                <div className="planet planet-jupiter" style={{ top: '0', left: '50%' }} />
            </div>

            {/* Saturn */}
            <div className="orbit orbit-saturn">
                <div className="planet planet-saturn" style={{ top: '0', left: '50%' }} />
            </div>

            {/* Uranus */}
            <div className="orbit orbit-uranus">
                <div className="planet planet-uranus" style={{ top: '0', left: '50%' }} />
            </div>

            {/* Neptune */}
            <div className="orbit orbit-neptune">
                <div className="planet planet-neptune" style={{ top: '0', left: '50%' }} />
            </div>
        </div>
    );
};

export default SolarSystem;

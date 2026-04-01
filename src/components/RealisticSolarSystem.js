import React, { useRef, useMemo, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

// Detect mobile for performance optimization
const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

// Collaborative circular texture for all points
const useCircularTexture = () => {
    return useMemo(() => {
        const canvas = document.createElement("canvas");
        canvas.width = 64; canvas.height = 64;
        const ctx = canvas.getContext("2d");
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, "rgba(255,255,255,1)");
        gradient.addColorStop(0.2, "rgba(255,255,255,0.8)");
        gradient.addColorStop(0.5, "rgba(255,255,255,0.2)");
        gradient.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
        return new THREE.CanvasTexture(canvas);
    }, []);
};

// Component for the "Cool" Interactive Background Animation
const FloatingParticles = ({ mouse, texture }) => {
    const pointsRef = useRef();
    const count = isMobile ? 1500 : 4000;
    
    const [positions, colors] = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const colorPalette = ["#4facfe", "#00f2fe", "#2e86de", "#1e3799", "#ffffff", "#06b6d4"];
        
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 150;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 150;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 150;
            
            const color = new THREE.Color(colorPalette[Math.floor(Math.random() * colorPalette.length)]);
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }
        return [positions, colors];
    }, [count]);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        pointsRef.current.rotation.y = t * 0.03;
        pointsRef.current.rotation.z = t * 0.02;
        
        if (mouse.current) {
            pointsRef.current.position.x = THREE.MathUtils.lerp(pointsRef.current.position.x, mouse.current[0] * 5, 0.05);
            pointsRef.current.position.y = THREE.MathUtils.lerp(pointsRef.current.position.y, mouse.current[1] * 5, 0.05);
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
                <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial 
                size={isMobile ? 0.3 : 0.6} 
                vertexColors 
                transparent 
                opacity={0.8} 
                map={texture}
                alphaTest={0.01}
                sizeAttenuation={true} 
                blending={THREE.AdditiveBlending} 
            />
        </points>
    );
};

const CosmicVapors = () => {
    const meshRef = useRef();
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        meshRef.current.rotation.y = t * 0.1;
        meshRef.current.position.y = Math.sin(t * 0.5) * 5;
    });

    return (
        <mesh ref={meshRef} position={[0, 0, -50]}>
            <sphereGeometry args={[80, 32, 32]} />
            <meshBasicMaterial color="#0c1d3b" transparent opacity={0.15} side={THREE.BackSide} wireframe />
        </mesh>
    );
};

const CSSStarfield = () => (
    <div className="absolute inset-0 pointer-events-none -z-10 bg-[#000001]" 
         style={{ background: 'radial-gradient(circle at center, #020617 0%, #000000 100%)' }}>
        {[...Array(isMobile ? 125 : 400)].map((_, i) => (
            <div
                key={i}
                className="absolute rounded-full bg-white transition-opacity duration-1000"
                style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    width: `${Math.random() * 3}px`,
                    height: `${Math.random() * 3}px`,
                    opacity: Math.random() * 0.6 + 0.1,
                    boxShadow: Math.random() > 0.8 ? '0 0 8px #fff, 0 0 12px rgba(255,255,255,0.4)' : '0 0 2px rgba(255,255,255,0.5)',
                    animation: `starPulse ${Math.random() * 5 + 3}s infinite ease-in-out`,
                    animationDelay: `${Math.random() * 5}s`,
                }}
            />
        ))}
        <style dangerouslySetInnerHTML={{ __html: `
            @keyframes starPulse {
                0%, 100% { opacity: 0.1; transform: scale(0.8); }
                50% { opacity: 0.8; transform: scale(1.1); }
            }
        `}} />
    </div>
);

const InteractiveScene = ({ mouse }) => {
    const texture = useCircularTexture();
    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 100]} fov={50} />
            <ambientLight intensity={0.5} />
            <FloatingParticles mouse={mouse} texture={texture} />
            <CosmicVapors />
            <fog attach="fog" args={["#000005", 50, 200]} />
        </>
    );
};

const BackgroundAnimation = ({ sceneryMode }) => {
    const mouse = useRef([0, 0]);
    const [isLost, setIsLost] = useState(false);
    const [sceneKey, setSceneKey] = useState(0);

    const onMouseMove = (e) => {
        mouse.current = [
            (e.clientX / window.innerWidth) * 2 - 1,
            -(e.clientY / window.innerHeight) * 2 + 1,
        ];
    };

    useEffect(() => {
        window.addEventListener("mousemove", onMouseMove);
        const handleLost = (e) => { e.preventDefault(); setIsLost(true); };
        const handleRestored = () => { setIsLost(false); setSceneKey(k => k + 1); };
        window.addEventListener('webglcontextlost', handleLost, false);
        window.addEventListener('webglcontextrestored', handleRestored, false);
        
        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener('webglcontextlost', handleLost);
            window.removeEventListener('webglcontextrestored', handleRestored);
        };
    }, []);

    return (
        <div className={`fixed inset-0 transition-opacity duration-1000 ${sceneryMode ? 'z-40' : 'z-0'}`} 
             style={{ pointerEvents: sceneryMode ? 'auto' : 'none', backgroundColor: '#000005' }}>
            
            <CSSStarfield />

            <div className="absolute inset-0">
                <Suspense fallback={null}>
                    <Canvas
                        key={sceneKey}
                        gl={{ antialias: true, alpha: true, powerPreference: "low-power", stencil: false }}
                        dpr={1}
                        camera={{ position: [0, 0, 100] }}
                    >
                        {!isLost && <InteractiveScene mouse={mouse} />}
                    </Canvas>
                </Suspense>
            </div>
            {/* Clean scenery mode - Text removed as requested */}
        </div>
    );
};

export default BackgroundAnimation;

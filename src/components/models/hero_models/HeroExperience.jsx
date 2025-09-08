import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Optimized-room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const canvasRef = useRef();

  return (
    <Canvas
      ref={canvasRef}
      camera={{ position: [0, 0, 15], fov: 45 }}
      gl={{ alpha: true, antialias: true }} // Transparent background, smooth edges
      onCreated={({ gl }) => gl.setPixelRatio(window.devicePixelRatio * 0.8)} // Optimize pixel ratio
    >
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
        enableDamping={true}
        dampingFactor={0.05}
      />
      <Suspense fallback={null}>
        <HeroLights />
        <Particles count={isMobile ? 50 : 100} />{" "}
        {/* Reduce particles on mobile */}
        <group
          scale={isMobile ? 0.7 : 1}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;

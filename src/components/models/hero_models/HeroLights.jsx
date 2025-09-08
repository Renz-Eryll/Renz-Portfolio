import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const HeroLights = () => {
  const lights = [
    {
      pos: [2, 5, 6],
      angle: 0.15,
      penumbra: 0.2,
      intensity: 100,
      color: "white",
    },
    {
      pos: [4, 5, 4],
      angle: 0.3,
      penumbra: 0.5,
      intensity: 40,
      color: "#4cc9f0",
    },
    {
      pos: [-3, 5, 5],
      angle: 0.4,
      penumbra: 1,
      intensity: 60,
      color: "#9d4edd",
    },
  ];

  useFrame(() => {
    // Optional: Animate light intensity for subtle effect
    lights.forEach((light, i) => {
      if (i === 0) light.intensity = 100 + Math.sin(Date.now() * 0.001) * 10;
    });
  });

  return (
    <>
      {lights.map((light, index) => (
        <spotLight
          key={index}
          position={light.pos}
          angle={light.angle}
          penumbra={light.penumbra}
          intensity={light.intensity}
          color={light.color}
          castShadow={index === 2} // Only cast shadow from one light to optimize
          shadow-mapSize={[512, 512]} // Lower resolution for performance
        />
      ))}
      <primitive
        object={new THREE.RectAreaLight("#a259ff", 8, 3, 2)}
        position={[1, 3, 4]}
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
        intensity={15}
      />
      <pointLight position={[0, 1, 0]} intensity={10} color="#7209b7" />
      <pointLight position={[1, 2, -2]} intensity={10} color="#0d00a4" />
    </>
  );
};

export default HeroLights;

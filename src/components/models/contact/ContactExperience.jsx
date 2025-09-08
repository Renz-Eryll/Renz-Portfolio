import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Computer from "./Computer";

const ContactExperience = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 3, 7], fov: 45 }}
      gl={{ antialias: true }} // Smooth edges
    >
      <ambientLight intensity={0.5} color="#e9d5ff" />
      <directionalLight position={[5, 5, 3]} intensity={2.5} color="#e9d5ff" />
      <directionalLight
        position={[5, 9, 1]}
        castShadow
        intensity={2.5}
        color="#e9d5ff"
        shadow-mapSize={[1024, 1024]} // Optimize shadow resolution
      />
      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
        enableDamping={true} // Smooth camera movement
        dampingFactor={0.05}
      />
      <group scale={[1, 1, 1]}>
        <mesh
          receiveShadow
          position={[0, -1.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial color="#e9d5ff" roughness={0.7} />{" "}
          {/* Add realism */}
        </mesh>
      </group>
      <Suspense
        fallback={
          <mesh>
            <boxGeometry />
            <meshBasicMaterial color="gray" />
          </mesh>
        }
      >
        <group scale={0.03} position={[0, -1.49, -2]} castShadow>
          <Computer />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default ContactExperience;

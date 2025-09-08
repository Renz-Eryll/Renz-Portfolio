import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

export function Computer({ ...props }) {
  const { nodes, materials } = useGLTF(
    "/models/computer-optimized-transformed.glb"
  );

  // Memoize the group to prevent unnecessary re-renders
  const computerGroup = useMemo(
    () => (
      <group {...props} dispose={null}>
        <group position={[-4.005, 67.549, 58.539]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube000_ComputerDesk_0001_1.geometry}
            material={materials["ComputerDesk.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube000_ComputerDesk_0001_2.geometry}
            material={materials["FloppyDisk.001"]}
          />
        </group>
      </group>
    ),
    [nodes, materials, props]
  );

  return computerGroup;
}

useGLTF.preload("/models/computer-optimized-transformed.glb");

export default Computer;

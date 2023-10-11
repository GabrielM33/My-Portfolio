import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./earth2/scene.gltf");

  return (
    <primitive object={earth.scene} scale={3.2} position-y={0} rotation-x={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 40,
        near: 0.1,
        far: 200,
        position: [-50, 0, 150],
      }
      
    }
    >
      <hemisphereLight intensity={0.15} groundColor='black' />
      <directionalLight
        position={[-12000, -5000, 500]}
        angle={-0.1}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={3}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;

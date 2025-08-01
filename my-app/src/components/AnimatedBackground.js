'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function FloatingShapes() {
  const sphereRef = useRef();
  const sphere2Ref = useRef();
  
  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
      sphereRef.current.rotation.y = Math.cos(state.clock.elapsedTime) * 0.2;
    }
    if (sphere2Ref.current) {
      sphere2Ref.current.rotation.x = Math.cos(state.clock.elapsedTime) * 0.3;
      sphere2Ref.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      <Sphere ref={sphereRef} visible position={[-4, 0, 0]} args={[1, 100, 200]}>
        <MeshDistortMaterial
          color="#8B5CF6"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0}
        />
      </Sphere>
      
      <Sphere ref={sphere2Ref} visible position={[4, 0, 0]} args={[1.5, 100, 200]}>
        <MeshDistortMaterial
          color="#06B6D4"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0}
        />
      </Sphere>
    </>
  );
}

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <FloatingShapes />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}

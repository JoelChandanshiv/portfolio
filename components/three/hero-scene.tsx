'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, type ThreeEvent } from '@react-three/fiber';
import { Float, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '@/components/providers/theme-provider';

function WireGeometry({
  position,
  geometry,
  color,
  speed = 0.4,
}: {
  position: [number, number, number];
  geometry: 'box' | 'sphere' | 'torus' | 'octahedron';
  color: string;
  speed?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x += 0.002 * speed;
    ref.current.rotation.y += 0.003 * speed;
    const t = state.clock.elapsedTime;
    ref.current.position.y = position[1] + Math.sin(t * speed) * 0.2;
  });

  return (
    <Float speed={speed * 2} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={ref} position={position}>
        {geometry === 'box' && <boxGeometry args={[1, 1, 1]} />}
        {geometry === 'sphere' && <sphereGeometry args={[0.7, 16, 16]} />}
        {geometry === 'torus' && <torusGeometry args={[0.6, 0.18, 12, 32]} />}
        {geometry === 'octahedron' && <octahedronGeometry args={[0.8, 0]} />}
        <meshBasicMaterial color={color} wireframe transparent opacity={0.5} />
      </mesh>
    </Float>
  );
}

function ParticleField({ color }: { color: string }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(800 * 3);
    for (let i = 0; i < 800; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.05;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={0.022}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  );
}

function MouseTilt({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y +=
      (mouse.current.x * 0.3 - groupRef.current.rotation.y) * 0.05;
    groupRef.current.rotation.x +=
      (-mouse.current.y * 0.2 - groupRef.current.rotation.x) * 0.05;
  });

  const handlePointer = (e: ThreeEvent<PointerEvent>) => {
    mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
  };

  return (
    <group ref={groupRef} onPointerMove={handlePointer}>
      {children}
    </group>
  );
}

export function HeroScene() {
  const { theme } = useTheme();
  const primary = theme === 'dark' ? '#00F0FF' : '#0EA5E9';
  const secondary = theme === 'dark' ? '#8B5CF6' : '#7C3AED';
  const particle = theme === 'dark' ? '#7DD3FC' : '#0EA5E9';

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 55 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ position: 'absolute', inset: 0 }}
    >
      <ambientLight intensity={0.5} />
      <MouseTilt>
        <ParticleField color={particle} />
        <WireGeometry position={[-3.2, 1.4, -1]} geometry="box" color={primary} speed={0.4} />
        <WireGeometry position={[3.4, -1.1, -1]} geometry="sphere" color={secondary} speed={0.5} />
        <WireGeometry position={[2.5, 1.8, -2]} geometry="torus" color={primary} speed={0.3} />
        <WireGeometry
          position={[-2.8, -1.6, -2]}
          geometry="octahedron"
          color={secondary}
          speed={0.45}
        />
        <WireGeometry position={[0, 2.4, -3]} geometry="torus" color={primary} speed={0.25} />
      </MouseTilt>
    </Canvas>
  );
}

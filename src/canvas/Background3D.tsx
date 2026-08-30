import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float, Stars, TorusKnot, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

const ComplexScene = ({ isMobile }: { isMobile: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);
  const targetRotation = useRef({ x: 0, y: 0 });
  const scrollOffset = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates from -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      
      targetRotation.current.x = y * 0.3;
      targetRotation.current.y = x * 0.3;
    };

    const handleScroll = () => {
      // Simple parallax based on scroll
      scrollOffset.current = window.scrollY * 0.001;
    }

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      if (!isMobile) window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Smoothly interpolate current rotation to target rotation + scroll
      const targetX = targetRotation.current.x + scrollOffset.current;
      groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 3 * delta;
      groupRef.current.rotation.y += (targetRotation.current.y - groupRef.current.rotation.y) * 3 * delta;
      
      // Add constant slow continuous rotation to the whole group
      groupRef.current.rotation.z = state.clock.getElapsedTime() * 0.05;
    }
  });

  // Scale down the entire composition on mobile to fit the screen
  const scale = isMobile ? 0.6 : 1;

  return (
    <group ref={groupRef} scale={scale}>
      {/* Central Solid Core - Dark and distorted */}
      <Float speed={isMobile ? 1 : 2} rotationIntensity={1} floatIntensity={1}>
        <Sphere args={[1, isMobile ? 32 : 64, isMobile ? 32 : 64]} scale={1.8}>
          <MeshDistortMaterial
            color="#000000"
            attach="material"
            distort={0.4}
            speed={isMobile ? 1 : 2}
            roughness={0.1}
            metalness={1}
            wireframe={false}
          />
        </Sphere>
      </Float>

      {/* Orbiting Wireframe Icosahedron */}
      <Float speed={2} rotationIntensity={2} floatIntensity={2}>
        <Icosahedron args={[2.5, 1]} rotation={[Math.PI / 4, 0, 0]}>
          <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.15} />
        </Icosahedron>
      </Float>

      {/* Complex Outer Torus Knot (Hidden on mobile for performance) */}
      {!isMobile && (
        <Float speed={1.5} rotationIntensity={1.5} floatIntensity={0.5}>
          <TorusKnot args={[3.2, 0.05, 128, 16]} rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
            <meshStandardMaterial color="#ffffff" wireframe transparent opacity={0.1} />
          </TorusKnot>
        </Float>
      )}
      
      {/* Additional Floating Geometric Shards */}
      <Float speed={2.5} rotationIntensity={3} floatIntensity={1.5}>
        <Icosahedron args={[0.4, 0]} position={[3.5, 2, -1]}>
          <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.25} />
        </Icosahedron>
      </Float>
      
      <Float speed={3} rotationIntensity={2} floatIntensity={2}>
        <Icosahedron args={[0.25, 0]} position={[-3.5, -2, 1.5]}>
          <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.2} />
        </Icosahedron>
      </Float>

      <Float speed={2} rotationIntensity={4} floatIntensity={1}>
        <Icosahedron args={[0.3, 0]} position={[-2, 3, -2]}>
          <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.15} />
        </Icosahedron>
      </Float>
    </group>
  );
};

export const Background3D = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-black">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 45 }} 
        dpr={[1, 1.5]}
        gl={{ powerPreference: "high-performance", antialias: false }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <directionalLight position={[-10, -10, -5]} intensity={1} />
        
        <ComplexScene isMobile={isMobile} />
        
        <Stars 
          radius={100} 
          depth={50} 
          count={isMobile ? 1000 : 3500} 
          factor={4} 
          saturation={0} 
          fade 
          speed={isMobile ? 0.5 : 1} 
        />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />
    </div>
  );
};

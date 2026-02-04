'use client'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Sphere, Cylinder, Points, PointMaterial, Html } from '@react-three/drei'
import { useRef, useMemo, useEffect, Suspense } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'

const glassMaterial = new THREE.MeshPhysicalMaterial({
  transmission: 0.9,
  opacity: 0.5,
  metalness: 0,
  roughness: 0,
  ior: 1.45,
  thickness: 0.1,
  envMapIntensity: 1,
  clearcoat: 1,
  clearcoatRoughness: 0,
  color: 'white'
})

const liquidMaterial = new THREE.MeshPhysicalMaterial({
  color: '#9dcd5a',
  transmission: 0.8,
  opacity: 0.8,
  metalness: 0,
  roughness: 0.1,
})

function Glassware({ position, scale = 1, hasLiquid = true }) {
  const groupRef = useRef()
  const liquidRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005
      groupRef.current.rotation.x += 0.002
    }
  })

  const handlePointerOver = () => {
    gsap.to(groupRef.current.rotation, { y: '+=0.5', duration: 1, ease: 'power2.out' })
  }

  return (
    <group ref={groupRef} position={position} scale={scale} onPointerOver={handlePointerOver}>
      <Cylinder args={[0.5, 0.3, 1, 32]} material={glassMaterial} />
      {hasLiquid && (
        <Cylinder ref={liquidRef} args={[0.4, 0.2, 0.6, 32]} position={[0, -0.2, 0]} material={liquidMaterial} />
      )}
    </group>
  )
}

function Particles() {
  const pointsRef = useRef()
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < 1000; i++) {
      temp.push(new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      ))
    }
    return temp
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001
      pointsRef.current.rotation.x += 0.0005
    }
  })

  return (
    <Points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length}
          array={new Float32Array(particles.flatMap(v => [v.x, v.y, v.z]))}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#9dcd5a" size={0.02} transparent opacity={0.6} />
    </Points>
  )
}

function Scene() {
  const { camera, gl } = useThree()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      camera.position.z = 10 + scrollY * 0.01
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [camera])

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} color="#9dcd5a" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="white" />

      <Particles />

      <Glassware position={[-3, 2, -5]} scale={0.8} />
      <Glassware position={[3, -1, -3]} scale={1.2} hasLiquid={false} />
      <Glassware position={[0, -3, -4]} scale={0.6} />
      <Glassware position={[-2, -2, -6]} scale={1} />

      <Sphere args={[0.3, 32, 32]} position={[2, 3, -5]} material={glassMaterial} />
      <Cylinder args={[0.1, 0.1, 1, 8]} position={[2, 3, -5]} material={liquidMaterial} />
    </>
  )
}

export default function Hero3DBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={<Html center>Loading...</Html>}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}
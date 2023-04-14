import { useState, useRef, Suspense } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import Loader from "../Loader"
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = () => {

  const ref = useRef()
  const sphere = random.inSphere(new Float32Array(3000), { radius: 1.2 })

  useFrame((state, delta) => {
    ref.current.rotation.x += delta / 10
    ref.current.rotation.y += delta / 10
  })

  return (
    <group rotation={[0, 0, Math.PI/4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttribute={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return(
    <div className="w-full h-auto absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 1] }}
      >
        <Suspense fallback={ <Loader /> }>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas
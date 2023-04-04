import { Suspense, suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { meshBounds, OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader"

const Computers = (isMobile) => {

  const computer = useGLTF("../../../desktop_pc/scene.gltf")

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        castShadow
        mapSize={1024}
        angle={0.12}
        penumbra={1}
        intensity={1}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.4 : 0.75}
        position={ isMobile ? [0, -1.5, -1] : [0, -3.25, -1]}
        rotation={[0, -0.2, -0.03]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    function handleMQChange(e){
      setIsMobile(e.matches)
    }

    mediaQuery.addEventListener('change', handleMQChange)

    return () => {
      mediaQuery.removeEventListener("change", handleMQChange);
    }
  }, [])

  return (
    <Canvas 
      frameLoop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingbuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
          <OrbitControls 
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas
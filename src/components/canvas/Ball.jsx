import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Decal, Float, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader"

const Ball = (props) => {

  const [ decal ] = useTexture([props.imgUrl])

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.3}/>
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 10]} />
        <meshStandardMaterial color="white" polygonOffset polygonOffsetFactor={5} flatShading/>
        <Decal map={decal} position={[0, 0, 1]} rotation={[2*Math.PI, 0, Math.PI*2]} flatShading/>
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      gl={{ preserveDrawingbuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
          <OrbitControls 
            enableZoom={false}
          />
          <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default BallCanvas
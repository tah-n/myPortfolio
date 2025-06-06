'use client'
import React, { Suspense, useEffect } from 'react';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { Cloud, Html, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import ShatteredPlanet, { Particles } from './ShatteredPlanet';
import WaterEffect from './WaterEffect';
import CameraMotion from './CameraMotion';
import FallBack from './FallBack';
import Name from './Name';
import ButtonContainer from './ButtonContainer';
import Container from './Container';
import ProfileContent from './ProfileContent';
import useProps from './lib/useStore';
import Contact from './Contact';
import WorksPart from './WorksPart';



const Planet = () => {
  const displayProfile = useProps(state => state.displayProfile);
  const displayContact = useProps(state => state.displayContact);
  const displayWorks = useProps(state => state.displayWorks)


  return (
    <div className='relative w-full h-full flex items-center justify-center lg:justify-end'>
      {displayProfile && (
        <ProfileContent />
      )}
      {displayContact && (
        <Contact />
        )}
      {displayWorks && (
        <WorksPart />
      )}    
        <Canvas className='absolute top-0 left-0 ' style={{height: "100vh", width: "100vw"}} >
          <PerspectiveCamera makeDefault position={[0,-18,71]} />
          <pointLight color={'#b84da9'} position={[0,10,0]} intensity={900} />
          <ambientLight color={'white'} intensity={0.8} position={[0,30,0]} />
          <directionalLight color={'white'} intensity={10} position={[5,5,5]} />
          <Suspense fallback={<FallBack />}>
          
          {!displayProfile && !displayContact && !displayWorks && (
            <Html className='absolute w-[98vw] h-[80vh] -bottom-[56vh]  -left-[49vw] flex items-end justify-between px-4'>
              <div className='relative w-full h-full'>
                <Name />
                <ButtonContainer />
              </div>
            </Html>
          )}
          
            <ShatteredPlanet />
            <Particles />
            <WaterEffect />
            <CameraMotion />
          </Suspense>
        </Canvas>
    </div>
  )
}

export default Planet;

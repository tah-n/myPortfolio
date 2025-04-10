'use client'
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'
import SkillMesh from './SkillMesh';
import * as THREE from 'three';
import { Html } from '@react-three/drei';
import LightOnStraightPath from './LightOnStraightPath';
import SkillsCircle from './SkillsCircle';

const SkillsSection = () => {
    
    
  return (
    <div>
      <Canvas className='' style={{height: '550px'}}>
         <SkillsCircle />
      </Canvas>
    </div>
  )
}

export default SkillsSection;

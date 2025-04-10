'use client'
import React from 'react'
import Skill from './Skill';
import * as THREE from 'three';

type MeshProps = {
    position: THREE.Vector3;
    skillPosition: THREE.Vector3;
    text: string;
    imgSrc: string;
    textClassName?: string;
    imgWidth: number;
}

const SkillMesh = ({position, skillPosition, text, imgSrc, textClassName, imgWidth}: MeshProps) => {
  return (
    <mesh position={position}>
        <planeGeometry args={[1,1]}/>
        <meshBasicMaterial color={'#ffffff'} transparent opacity={0} />
        <Skill position={skillPosition} text={text} textClassName={textClassName} imgSrc={imgSrc} imgWidth={imgWidth} />
    </mesh>
  )
}

export default SkillMesh;

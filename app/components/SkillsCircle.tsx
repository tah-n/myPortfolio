'use client'
import { Html } from '@react-three/drei';
import React, { useRef } from 'react'
import SkillMesh from './SkillMesh';
import LightOnStraightPath from './LightOnStraightPath';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';


const SkillsCircle = () => {
    const groupRef = useRef<THREE.Group>(null);

    const points1 : THREE.Vector3[] = [
      new THREE.Vector3(0.5,0.5,1),
      new THREE.Vector3(2,0.5,0),
    ] 
    const pointsArray1 = new Float32Array(points1.flatMap(p => [p.x, p.y, p.z]));

    const points2 : THREE.Vector3[] = [
        new THREE.Vector3(0.4,0.8,1),
        new THREE.Vector3(1.5,2,0),
      ] 
      const pointsArray2 = new Float32Array(points2.flatMap(p => [p.x, p.y, p.z]));
  
    const points3 : THREE.Vector3[] = [
      new THREE.Vector3(0,0.8,1),
      new THREE.Vector3(0,2.8,0),
    ] 
    const pointsArray3 = new Float32Array(points3.flatMap(p => [p.x, p.y, p.z]));
    
    const points4 : THREE.Vector3[] = [
        new THREE.Vector3(-0.5,0.5,1),
        new THREE.Vector3(-2.2,0.5,0),
      ] 
    const pointsArray4 = new Float32Array(points4.flatMap(p => [p.x, p.y, p.z]));
    
    const points5 : THREE.Vector3[] = [
        new THREE.Vector3(-0.3,0.8,1),
        new THREE.Vector3(-1.5,2,0),
      ] 
    const pointsArray5 = new Float32Array(points5.flatMap(p => [p.x, p.y, p.z]));
      

    const points6 : THREE.Vector3[] = [
        new THREE.Vector3(0,-0,1),
        new THREE.Vector3(0,-1.8,0),
      ] 
    const pointsArray6 = new Float32Array(points6.flatMap(p => [p.x, p.y, p.z]));
      
    const points7 : THREE.Vector3[] = [
        new THREE.Vector3(0.3,0.1,1),
        new THREE.Vector3(1.5,-1,0),
      ] 
    const pointsArray7 = new Float32Array(points7.flatMap(p => [p.x, p.y, p.z]));
      
    const points8 : THREE.Vector3[] = [
        new THREE.Vector3(-0.3,0.1,1),
        new THREE.Vector3(-1.5,-1,0),
      ] 
    const pointsArray8 = new Float32Array(points8.flatMap(p => [p.x, p.y, p.z]));
    



    useFrame(({clock}) => {
        const elapsedTime = clock.elapsedTime;
        if (groupRef.current) {
            groupRef.current.children.forEach((mesh) => {
                mesh.position.y += Math.sin(elapsedTime) * 0.001;
                mesh.position.z += Math.sin(elapsedTime) * -0.004;
            })
        }
    })
  return (
    <>
      <mesh position={[0,0.5,1]}>
            <sphereGeometry args={[0.5]}/>
            <meshBasicMaterial color={'#ffffff'} opacity={0} transparent />
            <Html position={[-0.3,0.1,0]}>
                <div className='font-semibold font-jura name'>
                    <p>SKILLS</p>
                </div>
            </Html>
        </mesh>
        <group ref={groupRef}>
        <SkillMesh position={new THREE.Vector3(2.2,0.5,0)} skillPosition={new THREE.Vector3(-0.67,0.5,0)} text='HTML5' imgSrc='skills/html5/Light.svg' imgWidth={90} />
        <SkillMesh position={new THREE.Vector3(1.5,2,0)} skillPosition={new THREE.Vector3(-0.67,0.5,0)}  text='JavaScript' textClassName='!left-5' imgSrc='skills/js/Light.svg' imgWidth={80} />
        <SkillMesh position={new THREE.Vector3(0,2.8,0)} skillPosition={new THREE.Vector3(-0.67,0.5,0)} text='CSS' textClassName='!left-9' imgSrc='skills/csslogo.png' imgWidth={70} />
        <SkillMesh position={new THREE.Vector3(-2.2,0.5,0)} skillPosition={new THREE.Vector3(-0.67,0.5,0)} text='THREE.JS' textClassName='!left-4 !bottom-4' imgSrc='skills/threejs 1.png' imgWidth={50} />
        <SkillMesh position={new THREE.Vector3(-1.5,2,0)} skillPosition={new THREE.Vector3(-0.67,0.5,0)} text='React.Js' textClassName='!left-6' imgSrc='skills/reactjs/Light.svg' imgWidth={100} />
        <SkillMesh position={new THREE.Vector3(0,-1.8,0)} skillPosition={new THREE.Vector3(-0.67,0.5,0)} text='TailwindCSS' textClassName='!left-3' imgSrc='skills/tailwindcss.png' imgWidth={50} />
        <SkillMesh position={new THREE.Vector3(1.5,-1,0)} skillPosition={new THREE.Vector3(-0.67,0.5,0)} text='TypeScript' textClassName='!left-5' imgSrc='skills/tslogo.png' imgWidth={50} />
        <SkillMesh position={new THREE.Vector3(-1.5,-1,0)} skillPosition={new THREE.Vector3(-0.67,0.5,0)} text='Next.Js' textClassName='' imgSrc='skills/nextjs.png' imgWidth={70} />
        <LightOnStraightPath pointsArray={pointsArray1} />
        <LightOnStraightPath pointsArray={pointsArray2} />
        <LightOnStraightPath pointsArray={pointsArray3} />
        <LightOnStraightPath pointsArray={pointsArray4} />
        <LightOnStraightPath pointsArray={pointsArray5} />
        <LightOnStraightPath pointsArray={pointsArray6} />
        <LightOnStraightPath pointsArray={pointsArray7} />
        <LightOnStraightPath pointsArray={pointsArray8} />
        </group>
        

    </>
  )
}

export default SkillsCircle;

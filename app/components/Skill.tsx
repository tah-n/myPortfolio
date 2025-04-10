'use client'
import { Html } from '@react-three/drei';
import React, { useState } from 'react'
import * as THREE from 'three'

type SkillProps = {
    position: THREE.Vector3;
    text: string;
    imgSrc: string;
    textClassName?: string;
    imgWidth: number;
}

const Skill = ({position,text,imgSrc,textClassName,imgWidth}: SkillProps) => {
    const [displayText,setDisplayText] = useState(false);


  return (
   <Html position={position} className=''>
        <div className='w-[100px] h-24 flex items-center justify-center' onMouseEnter={() => setDisplayText(true)} onMouseLeave={() => setDisplayText(false)}>
            <div className='relative w-full h-full text-center flex items-center justify-center pb-4'>
                <img src={imgSrc} width={imgWidth} className={`opacity-30 ${displayText? 'opacity-100 -translate-y-4': 'translate-y-0'} transition-all duration-300 ease-in-out`} />
                <p className={`${textClassName} absolute pointer-events-none left-[30px] bottom-7 text-xs ${displayText? 'opacity-100 translate-y-1': 'opacity-0 translate-y-0'} transition-all duration-300 ease-in-out`}>{text}</p>
            </div>
        </div>
    </Html>
  )
}

export default Skill;

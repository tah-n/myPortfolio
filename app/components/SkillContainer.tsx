'use client'
import React from 'react'
import SkillsSection from './SkillsSection';

const SkillContainer = () => {
  return (
    <div className='text-white w-full !h-[350px] font-jura mt-32'>
        <div className='relative w-full h-full flex items-center justify-center'>
            <SkillsSection />
        </div>        
    </div>
  )
}

export default SkillContainer;

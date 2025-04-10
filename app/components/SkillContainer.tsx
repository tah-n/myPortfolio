'use client'
import React from 'react'
import SkillsSection from './SkillsSection';

const SkillContainer = () => {
  return (
    <div className='text-white w-full h-[550px] font-jura mt-32 border-t border-t-white/10'>
        <div className='w-full h-full'>
            <SkillsSection />

            <div className='w-full h-[150px] name '>
               <h4 className='font-semibold mb-2'>Tools and Workflow</h4>
               <div className='text-sm text-white/60 leading-5'>
                <p>Git & GitHub</p> 
                <p>Zustand</p> 
                <p>Responsive Design</p> 
                <p>Performance Optimization</p> 
               </div>
            </div>
        </div>        
    </div>
  )
}

export default SkillContainer;

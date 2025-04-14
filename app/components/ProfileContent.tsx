'use client'
import React, { useEffect, useRef } from 'react'
import Container from './Container'
import gsap from 'gsap';
import ParagraphAnim from './ui/ParagraphAnim';
import SkillContainer from './SkillContainer';
import { useStore } from '@react-three/fiber';
import useProps from './lib/useStore';

const ProfileContent = () => {
    const text1 = `Hi, I'm Tahere, a frontend developer passionate about creating seamless and engaging digital experiences.`;
    const words1 = text1.split(' ');
    const text2 = 'Originally from chemistry background, I transitioned into web developement through self-learning and hands-on projects.'
    const words2 = text2.split(' ');
    const text3 = 'Now, I focus on crafting elegant UI solutions using modern frameworks, Always eager to learn and Build something impactful.';
    const words3 = text3.split(' ');
    const setDisplayProfile = useProps(state => state.setDisplayProfile)
    

    const handleClose = () => {
        setDisplayProfile(false);
    }


    return (
    <Container closeButton={handleClose}>
        <div className='w-full h-[90vh] p-5 py-9 overflow-y-auto no-scrollbar tracking-wider text-7/80'>
            <ParagraphAnim words={words1} delay={0}/>
            <br/>
            <ParagraphAnim words={words2} delay={1.4} />
            <br/>
            <ParagraphAnim words={words3} delay={2.8} />
            <br/>
            
            {/* skills */}
            <SkillContainer />
            
        </div>
    </Container>
  )
}

export default ProfileContent

'use client'
import gsap from 'gsap';
import React, { useRef, useState } from 'react'
import useProps from './lib/useStore';

type TextType = {
    className?: string;
    text?: string;
    imgSrc?: string;
    href?: string;
    containerRef?: React.RefObject<HTMLDivElement | null>;
}

const WorksText = ({className, href, text, imgSrc, containerRef}: TextType) => {
    const imgRef = useRef<HTMLDivElement>(null);
    const [mouseMoved,setMouseMoved] = useState(false);
    const setCircleScale = useProps(state => state.setCircleScale)
    
    const handleMouseEnter = (e: React.MouseEvent) => {
        if(imgRef.current && mouseMoved && containerRef?.current) {
        const containerRect = containerRef.current?.getBoundingClientRect();    
        const x = e.clientX - containerRect.left - imgRef.current.offsetWidth/2 - 20;
        const y = e.clientY - containerRect.top - imgRef.current.offsetHeight/2;

            gsap.to(imgRef.current, {
                duration: 1,
                opacity: 1,
                x,
                y,
            })
        } 
    }
    
        


   
    const handleEnter = () => {
        setMouseMoved(true);
        setCircleScale(true);
        if(imgRef.current) {
            gsap.to(imgRef.current, {
                duration: 1,
                opacity: 1,
                width: 100,
            })
        }
    }
    
    const handleLeave = () => {
        setMouseMoved(false);
        setCircleScale(false);
        if(imgRef.current) {
            gsap.to(imgRef.current, {
                duration: 1,
                opacity: 0,
                width: 0
            })
        }
    }            

  return (
    <>
        <div className={`${className} relative z-10 rotate-2 w-fit h-fit`} onMouseEnter={handleEnter} onMouseLeave={handleLeave} onMouseMove={handleMouseEnter}>
        <a href={href} target='_blank'>
            <p className='lg:text-[50px] text-[40px] font-semibold cursor-pointer italic text-[rgba(250,250,250,1)] capitalize'>
                {text} 
            </p>
        </a>
        </div>
        <div className='absolute z-20 opacity-0 w-0 overflow-hidden ' ref={imgRef}>
            <div className='relative w-fit h-fit'>
                <img src={imgSrc} width={100} />
                <div className='absolute z-10 top-0 bg-black/50 w-full h-full' />    
            </div>
        </div>
    </>
    
  )
}


export default WorksText;
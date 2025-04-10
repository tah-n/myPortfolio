'use client'
import gsap from 'gsap';
import React, { useEffect, useState } from 'react'

const CloseButton = ({color}: {color?: string}) => {
    const [show,setShow] = useState<Boolean>(false)
    const lineClassName = 'absolute left-1/3 top-1/2 bg-2 h-1 w-8 rounded-full';

    useEffect(() => {
        gsap.to('#line1', {
            delay: 0.8,
            rotate: 45,
            y: 0,
            duration: 1,
            ease: 'power2.inOut',
        })
        gsap.to('#line2', {
            delay: 1,
            rotate: -45,
            y: 0,
            duration: 1,
            ease: 'power2.inOut',
        })
    },[])

    if(show) {
        gsap.fromTo('#container', {
            opacity: 0.3,
            x: 16,
            duration: 0.01,
        }, {
            opacity: 0.3,
            delay: 0.02,
            x: -16,
            duration: 0.01,
        })
        gsap.to('#container', {
            delay: 0.04,
            opacity: 1,
            duration: 0.01,
            x: 0,
            y: 0,
        })
    }


  return (
    <div id='container' className='relative opacity-100 w-full h-full cursor-pointer group' onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
        <div id='line1' className={`${lineClassName} ${color} translate-y-2`} />
        <div id='line2' className={`${lineClassName} ${color} -translate-y-1`} />
    </div>
  )
}

export default CloseButton;

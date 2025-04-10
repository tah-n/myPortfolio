'use client'
import React, { ForwardedRef, useEffect, useState } from 'react'
import CloseButton from './ui/CloseButton';
import gsap from 'gsap';

type Props = {
  children: React.ReactNode;
  closeButton?: () => void;
  className?: string;
  ref?: ForwardedRef<HTMLDivElement>;
}

const Container = ({children,closeButton,className, ref}: Props) => {

  useEffect(() => {
    gsap.to('.btnContainer', {
      delay: 2,
      y: 0,
      opacity: 1,
      duration: 0.7,

    })
  })

  return (
    <div ref={ref} className={`${className} absolute z-20 w-[90vw] md:w-[72vw] lg:w-[40vw] lg:mr-8 h-fit group mt-10`} >
      <div className='w-full h-full relative'>
        <div onClick={closeButton} className={`btnContainer absolute -top-12 border-1 backdrop-blur-3xl bg-1/40 -right-[0.5px] w-24 h-12 border-t border-l border-r rounded-tl-3xl rounded-tr-3xl transition-transform duration-1000 ease-in-out opacity-0 translate-y-9`}>
          <CloseButton color='!bg-white' />
        </div>
        <div className='w-full border border-white/10 min-h-[200px] rounded-tl-3xl rounded-bl-3xl rounded-br-3xl backdrop-blur-sm overflow-hidden'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Container;

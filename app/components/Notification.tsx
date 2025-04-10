'use client'
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import useProps from './lib/useStore';

type Notification = {
  text?: string; 
}

const Notification = ({text}: Notification) => {
  const notifRef = useRef<HTMLDivElement>(null);
  const showNotification = useProps(state => state.showNotification);


  const timeOut = setTimeout(() => {
      if(showNotification) {
        useProps.getState().setShowNotification(false);
      }
    },4000)
  

  useEffect(() => {
    if (notifRef.current) {
      gsap.to(notifRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
      })
    }

    timeOut;



    return () => clearTimeout(timeOut);
  },[showNotification])





  return (
    showNotification? (
      <div ref={notifRef} className="absolute bottom-[2px] w-full min-h-[70px] flex items-center justify-center font-semibold text-white capitalize pointer-events-none translate-y-3 opacity-0">
      <p>
        {text}
      </p>
      </div>
    ) : null
  )
}

export default Notification;

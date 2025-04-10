'use client'
import React from 'react'
import Button from './ui/Button';
import { MdCopyright } from 'react-icons/md';

const Name = () => {
  return (
    <div className='absolute bottom-0'>
        <div className='w-full h-full flex gap-1 text-xs text-white/70 name'>
          <MdCopyright />
          <p>TAHERE NAJAFI</p>
        </div>
    </div>
  )
}

export default Name;

'use client'
import React from 'react'
import Button from './ui/Button'
import ButtonContent from './ui/ButtonContent'
import useProps from './lib/useStore'

const ContactMe = () => {
  const handleContact = () => {
    useProps.getState().setDisplayContact(true);
  }
  return (
    <Button className='relative group cursor-pointer hover:!text-white text-white/70' borderClassName='!border-white/50 cursor-pointer' onClick={handleContact}>
        <ButtonContent text='Contact' />
    </Button>
  )
}

export default ContactMe

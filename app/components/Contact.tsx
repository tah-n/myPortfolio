'use client'
import React, { useEffect, useState } from 'react'
import Button from './ui/Button';
import InputPlaceHolder from './ui/InputPlaceHolder';
import useProps from './lib/useStore';
import CloseButton from './ui/CloseButton';
import Notification from './Notification';


const Contact = () => {
    const [message,setMessage] = useState('');
    const name = useProps(state => state.name);
    const setName = useProps(state => state.setName);  
    const {email,setEmail} = useProps();
    const setDisplayContact = useProps(state => state.setDisplayContact);
    const [notifText,setNotifText] = useState('');
    const setShowNotification = useProps(state => state.setShowNotification);
    const server = process.env.NEXT_PUBLIC_SERVER_ADR;
    



    const handleSubmit= async (e: React.FormEvent) => {
        e.preventDefault();

        if(message !== '' && email !== '') {
            setShowNotification(true);
            setNotifText('sending...');
            const response = await fetch(`${server}/send-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name,email,message})
            });
            if (!response.ok) {
                setNotifText('failed to send email');
                setShowNotification(true);
                } else {
                setNotifText('email sent');
                setShowNotification(true);
                setEmail('');
                setMessage('');
                setName('');
                }
        } else {
            setShowNotification(true);
            setNotifText('please fill email and message');
        }

    }





  return (
    <div className='absolute z-10 md:left-10'>
            <div className='relative w-[90vw] h-[80vh] max-w-[600px] backdrop-blur-3xl'>
                <div className={`absolute backdrop-blur-3xl cursor-pointer w-12 h-12 flex items-center border-t  rounded-tl-3xl rounded-tr-3xl justify-center border-white/20 -top-[47px] left-0`} onClick={() => setDisplayContact(false)}>
                    <CloseButton color='!bg-white !left-2' />
                </div>
                <div className='w-full h-[25%] flex items-center justify-center overflow-hidden'>
                   <div className='w-full h-14 bg-1 -skew-6 flex items-center justify-center mt-5'>
                    <p className='text-xl font-semibold name'>
                        Get in Touch
                    </p>
                   </div>
                </div>

                {/* inputs here */}
                <div className='w-full flex flex-col items-center justify-center gap-5'>
                    <form className='flex flex-col items-center justify-center w-full gap-5 p-5' onSubmit={handleSubmit}>
                        <InputPlaceHolder text={'Name'} type='text' value={name} onChange={(e) => setName(e.target.value)} length={name.length} />
                        <InputPlaceHolder text={'Email'} type='email' value={email} onChange={(e) => setEmail(e.target.value)} length={email.length} />
                        <Button className='!p-1 !relative' borderClassName='opacity-10'>
                            <textarea className='outline-none h-32 p-3 resize-none md:w-[300px] w-[200px]' placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} />
                        </Button> 
                       
                    </form>
                    <button className='relative w-30 h-10 cursor-pointer border border-white/40 overflow-hidden hover:border-1 transition-all duration-100 ease-in-out m-auto' onClick={handleSubmit}>
                        <div className='w-full h-full relative flex items-center justify-center group'>
                            <p className='z-10'>
                                Submit
                            </p>
                            <div className='absolute top-full group-hover:top-0 bg-1 w-full h-full transition-all ease-in-out duration-300' />
                        </div>
                    </button>
                </div>
                <Notification text={notifText} />
            </div>
    </div>
  )
}

export default Contact;

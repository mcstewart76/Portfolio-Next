import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

type Props = {}

function ContactMe({ }: Props) {
    return (
        <div className='h-screen relative mx-auto items-center text-center flex flex-col md:text-left md:flex-row max-w-7xl px-10 justify-evenly'>
            <h3 className='absolute top-24 uppercase tracking-[20px] pb-3 text-2xl text-zinc-500'>Contact</h3>

            <div className='flex flex-col justify-center space-y-5 md:space-y-8 '>
                <h4 className='text-2xl md:text-3xl font-semibold text-center'>
                    Let me know what I can do <span className='decoration-blue-400/50 underline'>for you</span> .
                </h4>
                <div className='space-y-6'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-blue-400 h-5 w-5 md:h-6 md:w-6 inline-block animate-pulse' />
                        <p className='md:text-xl text-lg'>+1 404-655-3657</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-blue-400 h-5 w-5 md:h-6 md:w-6 inline-block animate-pulse' />
                        <p className='md:text-xl text-lg'>Douglasville, GA</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-blue-400 h-5 w-5 md:h-6 md:w-6 inline-block animate-pulse' />
                        <p className='md:text-xl text-lg'>mcstewart76@gmail.com</p>
                    </div>
                </div>
                <form action="" className='flex flex-col mx-auto space-y-2'>
                    <div className='flex space-x-2'>
                        <input type="text" className='contactMeInput' />
                        <input type="text" className='contactMeInput' />
                    </div>
                    <input type="text" className='contactMeInput' />
                    <textarea name="" id="" className='contactMeInput'></textarea>
                    <button className='py-4 px-10 rounded-md text-zinc-900 font-bold text-md md:text-xl bg-blue-400/40'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe
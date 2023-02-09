import React from 'react'
import { motion } from 'framer-motion'

type Props = { skillsRight: boolean }

function Skill({ skillsRight }: Props) {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.img src='https://avatars.githubusercontent.com/u/90533949?s=96&v=4' alt='about-img'
                className='rounded-full object-cover h-16 w-16 xl:h-32 xl:w-32 border-zinc-500 border filter
            group-hover:grayscale transition duration-500 ease-in-out'
                initial={{
                    opacity: 0,
                    x: skillsRight ? 200 : -200,
                }}
                transition={{ duration: 1.6 }}
                whileInView={{ opacity: 1, x: 0 }}
            />
            <div className='absolute opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out group-hover:bg-white
                           h-16 w-16 xl:h-32 xl:w-32 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-2xl font-bold text-black'>
                        80%
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Skill
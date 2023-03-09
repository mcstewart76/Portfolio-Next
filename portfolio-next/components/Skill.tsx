import React from 'react'
import { motion } from 'framer-motion'

type Props = { skillsRight: boolean }

function Skill({ skillsRight }: Props) {
    return (
        <div className='group relative flex sm:my-2 md:my-4 cursor-pointer'>
            <motion.img
                src="https://i.seadn.io/gae/JtcNSW3E6V94rwCnmt-sRUyXwvE9mLU5n9MZ15XMDDbI_S8mf3QI7GKU3f1ldDGZXl14ss9BMWbEJaYcYYAAB-yfBQn0sJOzzNs-NQ?auto=format&w=1000"
                alt='about-img'
                className='rounded-full object-cover h-12 w-12 sm:h-20 sm:w-20 md:w-32 md:h-32  border-zinc-500 border filter
            group-hover:grayscale transition duration-500 ease-in-out'
                initial={{
                    opacity: 0,
                    x: skillsRight ? 200 : -200,
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
            />
            {/* <div className='absolute opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out group-hover:bg-white
                           h-12 w-12 sm:h-20 sm:w-20 md:w-32 md:h-32 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-base sm:text-xl md:text-3xl font-bold text-black'>
                        80%
                    </p>
                </div>
            </div> */}
        </div>
    )
}


export default Skill
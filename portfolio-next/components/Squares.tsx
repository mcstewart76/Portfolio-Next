import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Squares({ }: Props) {
    return (
        <div className='relative flex justify-center items-center'>
            <div className='border rounded-full absolute  mt-52  border-zinc-600 h-[400px] w-[400px] border-x-8 border-y-8' />
            <div className='border rounded-full absolute  mt-52 border-zinc-600 h-[380px] w-[380px] border-x-6 border-y-8  ' />
            <div />
            <motion.div
                className='border rounded-full absolute  mt-52 border-zinc-600 h-[360px] w-[360px] border-x-8 border-y-6'
                animate={{ rotate: 360 }}
                transition={{
                    duration: 15,
                    ease: "linear",
                }}
                
                >
                </motion.div>
            <div className='border rounded-full absolute  mt-52 border-zinc-600 h-[300px] w-[300px]' />
            <div className='border rounded-full absolute  mt-52 border-zinc-600 h-[200px] w-[200px]   ' />
        </div>
    )
}

export default Squares
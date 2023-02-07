import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Squares({ }: Props) {
    return (
        <div className='relative flex justify-center items-center'>
            <motion.div className='border rounded-full absolute  mt-52 border-zinc-700 h-[500px] w-[500px] border-x-2 border-y-2 '
                animate={{
                    scale: [2.5, 2.2, 2.75, 2, 1.5, 1],
                    opacity: [0, 1, 0, 1, 0, 1],

                }}
                initial={{ opacity: 0 }}
                transition={{
                    duration: 1.8
                }}
            />
            <motion.div className='border rounded-full absolute  mt-52 border-zinc-700 h-[500px] w-[500px] border-x-2 border-y-2 '
                animate={{
                    opacity: [0, 1, 1, 0],

                }}
                initial={{ opacity: 0 }}
                transition={{
                    duration: 20, repeat: Infinity
                }}
            />
            <motion.div
                className='border rounded-full absolute  mt-52 border-blue-400 h-[420px] w-[420px] ring ring-inset-4
                 ring-blue-400  ring-offset-blue-400 border-x-2 border-y-2 '
                animate={{
                    rotate: 360,
                    opacity: [0, 1, 1, 1, 0],

                }}
                initial={{ opacity: 0 }}
                transition={{
                    duration: 10, repeat: Infinity
                }}
            >
            </motion.div>
            <motion.div className='border rounded-full absolute  mt-52  border-zinc-600 h-[400px] w-[400px] border-x-8 border-y-6' />
            <motion.div className='border rounded-full absolute  mt-52 border-zinc-600 h-[380px] w-[380px] border-x-6 border-y-8  ' />
            <motion.div
                className='border rounded-full absolute  mt-52 border-blue-400 h-[440px] w-[440px] ring ring-inset-4
                 ring-blue-400 ring-offset-blue-400 border-x-8 border-y-8 '
                animate={{
                    rotate: 360,
                    opacity: [0, 1, 1, 1, 0],

                }}
                initial={{ opacity: 0 }}
                transition={{
                    duration: 10, repeat: Infinity
                }}
            >
            </motion.div>

            <motion.div className='border rounded-full absolute  mt-52 border-blue-300 h-[330px] w-[330px] border-x-8 border-y-6 '
                animate={{
                    rotate: 360,
                    opacity: [0, .5, 0, .5, 0, .5, 0, .5, 0, .5, 0, .5, 0],

                }}
                initial={{ opacity: 0 }}
                transition={{
                    duration: 20, repeat: Infinity
                }} />

        </div>
    )
}

export default Squares
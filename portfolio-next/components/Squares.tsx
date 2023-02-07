import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Squares({ }: Props) {
    return (
        <div className='relative flex justify-center items-center'>
            <motion.div className='border rounded-full absolute  mt-52 border-zinc-700 h-[700px] w-[700px] border-x-2 border-y-2 '
                animate={{
                    scale: [2, 1.8, 2.3, 1.5, 1.2, 1],
                    opacity: [0, 1, 0, 1, 0, 1],

                }}
                initial={{ opacity: 0 }}
                transition={{
                    duration: 1.8
                }}
            />
            <motion.div className='border rounded-full absolute  mt-52 border-zinc-700 h-[700px] w-[700px] border-x-2 border-y-2 '
                animate={{
                    opacity: [0, 1, 1, 0],

                }}
                initial={{ opacity: 0 }}
                transition={{
                    duration: 20, repeat: Infinity
                }}
            />
            <motion.div
                className='border rounded-full absolute  mt-52 border-blue-400 h-[620px] w-[620px] ring ring-inset-4
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
            <motion.div className='border rounded-full absolute  mt-52  border-zinc-600 h-[600px] w-[600px] border-x-8 border-y-6' />
            <motion.div className='border rounded-full absolute  mt-52 border-zinc-600 h-[580px] w-[580px] border-x-6 border-y-8  ' />
            <motion.div
                className='border rounded-full absolute  mt-52 border-blue-400 h-[640px] w-[640px] ring ring-inset-4
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

            <motion.div className='border rounded-full absolute  mt-52 border-blue-300 h-[530px] w-[530px] border-x-8 border-y-6 '
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
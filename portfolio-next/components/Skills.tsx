import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Skills({ }: Props) {
    return (
        <motion.div className='h-screen flex relative flex-col text-center md:text-left justify-center items-center xl:flex-row'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl ml-3.5 text-zinc-500'>
                Skills
            </h3>
        </motion.div>
    )
}

export default Skills
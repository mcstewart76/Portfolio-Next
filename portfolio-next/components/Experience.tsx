import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

type Props = {}

function Experience({ }: Props) {
    return (
        <motion.div className='h-screen flex relative overflow-hidden text-left md:flex-row
                        max-w-full px-10 justify-evenly mx-auto items-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6 }}>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl ml-3.5 text-zinc-500'>
                Experience
            </h3>
            <div className='flex w-full overflow-x-scroll space-x-5 p-10 mx-20 snap-x snap-mandatory'>
                <ExperienceCard />

                <ExperienceCard />
                <ExperienceCard />
            </div>
        </motion.div>
    )
}

export default Experience
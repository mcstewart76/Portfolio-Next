import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

type Props = {}

function Skills({ }: Props) {
    return (
        <motion.div className='h-screen grid grid-cols-[1fr_6fr_1fr] grid-rows-[48px_1fr_4fr_2fr_48px] gap-3 relative overflow-hidden
                            text-center md:text-left justify-center min-h-screen space-y-0 items-center xl:flex-row'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className='col-span-3 row-start-2 items-start text-center'>
                <h3 className='uppercase tracking-[20px] pb-3 text-2xl text-zinc-500'>
                    Skills
                </h3>
                <h3 className='uppercase tracking-widest text-base text-zinc-500'>
                    Hover a skill for proficiency
                </h3>
            </div>
            <div className='col-start-2 col-end-3 row-start-3 row-end-4'>
                <div className='grid grid-cols-4 sm:grid-cols-4 gap-3 md:gap-5 justify-items-center place-items-start'>
                    <Skill skillsRight={false} />
                    <Skill skillsRight={false} />
                    <Skill skillsRight={false} />
                    <Skill skillsRight={false} />
                    <Skill skillsRight={false} />
                    <Skill skillsRight={false} />
                    <Skill skillsRight={false} />
                    <Skill skillsRight={false} />
                    <Skill skillsRight={false} />

                </div>
            </div>
        </motion.div>
    )
}

export default Skills
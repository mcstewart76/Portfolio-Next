import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

type Props = {}

function Skills({ }: Props) {
    return (
        <motion.div className='h-screen flex relative flex-col text-center md:text-left justify-center min-h-screen space-y-0 items-center xl:flex-row'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl ml-3.5 text-zinc-500'>
                Skills
            </h3>
            <h3 className='absolute top-36 uppercase tracking-widest text-base text-zinc-500'>
                Hover a skill for proficiency
            </h3>
            <div className='grid grid-cols-4 gap-5'>
                <Skill skillsRight={false} />
                <Skill skillsRight={false} />
                <Skill skillsRight={false} />
                <Skill skillsRight={false} />
                <Skill skillsRight={false} />
                <Skill skillsRight={false} />
                <Skill skillsRight={false} />
                <Skill skillsRight={false} />
                <Skill skillsRight={true} />
                <Skill skillsRight={true} />
                <Skill skillsRight={true} />
                <Skill skillsRight={true} />
                <Skill skillsRight={true} />
                <Skill skillsRight={true} />
                <Skill skillsRight={true} />
                <Skill skillsRight={true} />
            </div>
        </motion.div>
    )
}

export default Skills
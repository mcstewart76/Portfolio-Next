import React from 'react'
import { motion } from 'framer-motion'

type Props = {skillsRight: boolean}

function Skill({ skillsRight }: Props) {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.img src='https://avatars.githubusercontent.com/u/90533949?s=96&v=4' alt='about-img'
            initial={{
                opacity: 0,
                x: skillsRight ? 300 : -300,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{opacity: 1, x: 0}}
            />
        </div>
    )
}

export default Skill
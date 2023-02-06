import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

export default function Header({ }: Props) {
    return (
        <header className='sticky flex top-0 mt-3 items-start justify-between mx-auto xl:items-center max-w-7xl'>
            <motion.div className='flex flex-row items-center'>
                {/* Socials(github, linkedin, share) */}
                <SocialIcon className='' fgColor='transparent' bgColor='grey' url="https://www.linkedin.com/in/chris-stewart-79b283204/" />
                <SocialIcon className='' fgColor='grey' bgColor='transparent' url="https://github.com/mcstewart76" />
            </motion.div>
            <motion.div className='flex flex-row items-center text-gray-300 cursor-pointer'>
                <SocialIcon className='' fgColor='grey' bgColor='transparent' network='email' url='mailto:mcstewart76@gmail.com' />
                <p className='hidden md:inline-flex text-sm text-gray-400'>Email me!</p>
            </motion.div>
        </header>
    )
}
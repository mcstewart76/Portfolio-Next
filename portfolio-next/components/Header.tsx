import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {}

export default function Header({ }: Props) {
    return (
        <header className='sticky flex top-0 px-5 pt-3 items-start justify-between mx-auto xl:items-center max-w-7xl'>
            <motion.div className='flex flex-row items-center'
                initial={{
                    opacity: 0,
                    y: -100,
                    scale: 0.5,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                }}
                transition={{
                    duration: .5,
                }}
            >
                {/* Socials(github, linkedin, share) */}
                <SocialIcon className='' fgColor='transparent' bgColor='grey' url="https://www.linkedin.com/in/chris-stewart-79b283204/" />
                <SocialIcon className='' fgColor='grey' bgColor='transparent' url="https://github.com/mcstewart76" />
            </motion.div>
            <motion.div className='flex flex-row items-center text-gray-300 cursor-pointer'
                initial={{
                    opacity: 0,
                    y: -100,
                    scale: 0.5,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                }}
                transition={{
                    duration: .5,
                }}
            >
                <Link href='#contact'>
                    {/* <SocialIcon className='' fgColor='grey' bgColor='transparent' network='email' /> */}
                    <p className='hidden md:inline-flex text-sm text-gray-400'>Email me!</p>
                </Link>
            </motion.div>
        </header>
    )
}
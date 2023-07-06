import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Social from '../lib/typings'

// type Props = {
//     socials: Social[];
// }

export default function Header(
    // { socials }: Props
    ){
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
                {/* {socials.map((social) => (
                    <SocialIcon
                        key={social.id}
                        className=''
                        fgColor='transparent'
                        bgColor='grey'
                        url={social.url} />

                ))} */}
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
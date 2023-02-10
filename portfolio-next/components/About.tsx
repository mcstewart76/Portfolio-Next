import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function About({ }: Props) {
    return (
        <motion.div className='flex flex-col relative h-screen text-center
                            md:text-left md:flex-row max-w-7xl px-10 pt-5 justify-center mx-auto items-center '
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6 }}
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl ml-3.5 mb-3.5 text-zinc-500'>About</h3>
            <motion.img src='https://avatars.githubusercontent.com/u/90533949?s=96&v=4' alt='about-img'
                className='h-48 w-48 mb-8 sm:mb-14 md:mb-0 md:rounded-lg md:w-64 md:h-64 xl:h-100 xl:w-100
            rounded-full object-cover'
                initial={{
                    opacity: 0,
                    x: -200
                }}
                whileInView={{
                    opacity: 1,
                    x: 0
                }}
                transition={{ duration: 1.2 }}
            />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='font-semibold text-3xl'>
                    A little about me
                </h4>
                <p className='text-base'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ut tempus vulputate dui vitae vehicula. Suspendisse facilisis sollicitudin metus,
                    at sodales felis malesuada sit amet. Etiam sit amet neque at nulla blandit condimentum at vitae nisi.
                </p>
            </div>
        </motion.div>
    )
}

export default About
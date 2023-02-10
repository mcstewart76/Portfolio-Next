import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Squares from './Squares';

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: ['Hello My Name Is Chris', 'This is my Portfolio Site', 'I am also a Coffee Lover'],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <div className='flex flex-col '>
                <Squares />
                <img className='h-32 w-32 mx-auto object-cover relative rounded-full' src='https://avatars.githubusercontent.com/u/90533949?s=96&v=4' alt='portfolio img'></img>
                <div className='z-20'>
                    <h2 className='text-lg uppercase text-zinc-500 pb-5 tracking-[8px]'>Fullstack Web Developer</h2>
                    <h1 className='text-3xl font-semibold px-10'>
                        <span className='mr-3'>{text}</span>
                        <Cursor />
                    </h1>
                    <div className='pt-3'>
                        <Link href='#about'>
                            <button className='heroButton'>About</button>
                        </Link>
                        <Link href='#experience'>
                            <button className='heroButton'>Experience</button>
                        </Link>
                        <Link href='skills'>
                            <button className='heroButton'>Skills</button>
                        </Link>
                        <Link href='projects'>
                            <button className='heroButton'>Projects</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}
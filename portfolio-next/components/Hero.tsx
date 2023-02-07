import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Squares from './Squares';

type Props = {}

export default function Hero({}: Props) {
    const [text, count]  = useTypewriter({
    words: ['Hello My Name Is Chris', 'This is my Portfolio Site', 'I am a Full Stack Developer', 'I am also a Coffee Lover'],
    loop: true,
    delaySpeed: 2000,
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <Squares/>
        <h1 className='text-xl'>
            <span >{text}</span>
            <Cursor />
        </h1>
    </div>
  )
}

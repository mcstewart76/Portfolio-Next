import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Squares from './Squares';

type Props = {}

export default function Hero({}: Props) {
    const [text, count]  = useTypewriter({
    words: ['Hello', 'World'],
    loop: true,
    delaySpeed: 2000,
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <Squares/>
        <h1>
            <span>{text}</span>
            <Cursor />
        </h1>

    </div>
  )
}

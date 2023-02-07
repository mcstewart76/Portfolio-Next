import React from 'react'

type Props = {}

function About({ }: Props) {
    return (
        <div className='flex flex-col relative h-screen text-center
     md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
<h3 className='absolute top-24 uppercase tracking-[20px] text-2xl text-zinc-500'>About</h3>
        </div>
    )
}

export default About
import React from 'react'

type Props = {}

function Projects({ }: Props) {
    const projects = [{
        id: 1,
        name: 'Project 1',
        description: 'Project 1 description'
    },
    {
        id: 2,
        name: 'Project 2',
        description: 'Project 1 description'
    },
    {
        id: 3,
        name: 'Project 3',
        description: 'Project 1 description'

    }
    ];
    return (
        <div className='h-screen overflow-y-auto scrollbar-none relative mx-auto items-center max-w-full flex flex-col text-left justify-evenly md:flex-row z-0 mb-20'>
            <div className='w-full absolute top-[30%] bg-blue-400/20 left-0 h-[400px] -skew-y-12'></div>
            <h3 className='absolute top-24 uppercase tracking-[20px] pb-3 text-2xl text-zinc-500'>Projects</h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 
            scrollbar scrollbar-track-slate-700/30 scrollbar-thumb-blue-400'>
                {projects.map((project) => (
                    <div key={project.id} className='flex flex-col items-center justify-center flex-shrink-0 snap-center space-y-4
                                                p-20 md:p-30 h-screen rounded-2xl w-screen m-4'>
                        <h3 className='text-2xl text-zinc-500'>{project.name}</h3>
                        <p className='text-zinc-500'>{project.description}</p>
                    </div>
                ))}
                {/* projects */}
            </div>

        </div>

    )
}

export default Projects
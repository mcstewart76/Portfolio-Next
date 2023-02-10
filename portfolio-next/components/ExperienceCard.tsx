import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function ExperienceCard({ }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
                           w-[340px] sm:w-[400px] md:w-[900px] xl:max-w-[900px] snap-center bg-zinc-700 px-12 p-10'>

            <motion.img className='rounded-full h-32 w-32 object-cover xl:w-100 xl:h-100'
                src="https://i.seadn.io/gae/JtcNSW3E6V94rwCnmt-sRUyXwvE9mLU5n9MZ15XMDDbI_S8mf3QI7GKU3f1ldDGZXl14ss9BMWbEJaYcYYAAB-yfBQn0sJOzzNs-NQ?auto=format&w=1000"
                alt=""
                initial={{
                    y: -25,
                    opacity: 0
                }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            />
            <div className='px-0 md:px-10 flex flex-col justify-start'>
                <h4 className='text-4xl '>Future Executive</h4>
                <p className='font-semibold text-3xl mt-1'>Google</p>
                <div className='flex space-x-2 my-2'>
                    <img
                        className='h-10 w-10 object-cover rounded-full'
                        src="https://img.icons8.com/stickers/512/css3.png" alt=""
                    />
                    {/* tech used */}
                    {/* tech used */}
                    {/* tech used */}

                </div>
                <p className='uppercase py-4'>January 2030 - December 2034</p>
                <ul className='list-disc space-y-4 ml-5 text-md'>
                    <li>Work description</li>
                    <li>Work description</li>
                    <li>Work description</li>
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard
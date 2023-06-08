import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = {};

function Experience({ }: Props) {
    return (
        <motion.div
            className="h-screen grid sm:grid-cols-[1fr_6fr_1fr] grid-cols-[24px_1fr_6fr_1fr_24px] grid-rows-[48px_1fr_4fr_2fr_48px]
                relative overflow-hidden md:flex-row max-w-full mx-auto items-center "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6 }}
        >
            <div className="col-span-6 row-start-2 text-center">
                <h3 className="uppercase tracking-[20px] text-2xl ml-4 text-zinc-500 text-center">
                    Experience
                </h3>
            </div>
            <div className="flex overflow-x-scroll space-x-6 snap-x snap-mandatory col-start-1 col-end-5 sm:col-start-2 sm:col-end-3
                     row-start-3 row-end-6 scrollbar-thin scrollbar-track-slate-700/30 scrollbar-thumb-blue-400">
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
            </div>
        </motion.div>
    );
}

export default Experience;

'use client'
import React from 'react'
import { motion } from 'framer-motion'

import SectionHeading from './section-heading'
import useSectionInView from '../hooks/useSectionInView'
import { skillsData } from '../lib/data'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
        delay: 0.05 * index,
      }
  }),
  
}

export default function Skills() {
  const { ref } = useSectionInView('Skills', 0.99)
  return (
    <section
      className={`text-center max-w-[53rem] scroll-mt-28 mb-28 sm:mb-[15rem]`}
      ref={ref}
      id="skills"
    >
      <SectionHeading>Skills</SectionHeading>
      <ul
        className={`flex flex-wrap justify-center gap-2 text-lg text-gray-800`}
      >
        {skillsData.map((skills, index) => (
          <motion.li
            className={`bg-white border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80`}
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{once: true}}
            custom={index}
          >
            {skills}
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

'use client'
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import SectionHeading from './section-heading'
import { useActiveSectionContext } from '../context/active-section-context'

export default function About() {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()
  const { ref, inView } = useInView({
    threshold: 0.75,
  })

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection('About')
    }
  }, [inView, setActiveSection, timeOfLastClick])

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a diploma in{' '}
        <span className="font-medium">Information Systems Security</span>, I was
        determined to combine my education in cybersecurity with my passion for
        software development. I kickstarted my journey by joining a cyber
        solutions company, where I had the opportunity to work on diverse
        projects. One of my proudest achievements was the development of a{' '}
        <span className="font-medium">
          React Native-based iOS and Android app
        </span>{' '}
        built from the ground up. The comprehensive backend for this app was
        powered by <span className="font-medium">Firebase</span>. In addition,
        I've designed and developed a cutting-edge website using{' '}
        <span className="font-medium">React and Next.js</span>, developed a{' '}
        <span className="italic">vulnerability scanner</span> designed to
        enhance client's domain security, and developed some chrome extensions
        and outlook add-ins to boot. Throughout my short career, I've also had
        the <span className="underline">privilege</span> of{' '}
        <span className="font-medium">managing and mentoring</span> a team of
        junior developers.
      </p>
      <p className="mb-3">
        <span className="italic">Beyond the digital realm</span>, I have a range
        of passions that keep me balanced. As a{' '}
        <span className="font-medium">black belt in Taekwon-Do</span>, I
        understand the importance of discipline and perseverance. I also enjoy
        outdoor activities like hiking, backpacking, and camping. When it comes
        to team sports, you can often find me on the volleyball court.
      </p>
    </motion.section>
  )
}
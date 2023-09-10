'use client'
import React, { useEffect } from 'react'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'
import { useInView } from 'react-intersection-observer'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import portraitPhoto from '@/public/portrait.jpg'
import { useActiveSectionContext } from '../context/active-section-context'

export default function Intro() {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()
  const { ref, inView } = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection('Home')
    }
  }, [inView, setActiveSection, timeOfLastClick])

  return (
    <section
      className={`text-center max-w-[50rem] mb-28 sm:mb-0 scroll-mt-[100rem]`}
      id="home"
      ref={ref}
    >
      <div className={`flex flex-col items-center justify-center`}>
        <div className={`relative`}>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              className={`h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl`} // object-cover will perserve the aspect ratio
              src={portraitPhoto}
              alt="Alex portrait"
              width={192}
              height={192}
              quality={95}
              priority={true} // Will prioritize load time
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className={`mb-10 mt-4 px-4 text-2xl sm:text-4xl !leading-[1.5]`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* !leading == important tag. This will override the text default spacing */}
        <span className="font-bold">Hello, I'm Alex.</span> I'm a{' '}
        <span className="font-bold">full-stack developer</span> with{' '}
        <span className="font-bold">2 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{' '}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      <motion.div
        className={`flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack"
          href="/CV.pdf"
          download
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
          href="https://www.linkedin.com/in/alex-s-9b5722231/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack"
          href="https://github.com/bhappen"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  )
}
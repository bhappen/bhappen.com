import React from 'react'
import { LuGraduationCap } from 'react-icons/lu'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'React Native',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'MongoDB',
  'Firebase',
  'Supabase',
  'Redux',
  'GraphQL',
  'Express',
  'Python',
  'Framer Motion',
] as const

export const experiencesData = [
  {
    title: 'Diploma in Information Systems Security Program',
    location: 'Calgary, AB',
    description:
      'Achieved a notable GPA of 3.7. Shortly after graduating, I embarked on my professional journey as a Pentester, specializing in Android application security.',
    icon: React.createElement(LuGraduationCap),
    date: '2021',
  },
  {
    title: 'Back-End Developer',
    location: 'Calgary, AB',
    description:
      'I transitioned into the role of a Back-End Developer, where I dedicated six months to honing my skills in backend development. Gradually, I expanded my expertise to encompass full-stack development.',
    icon: React.createElement(CgWorkAlt),
    date: '2022',
  },
  {
    title: 'Project Manager & Full-Stack Developer',
    location: 'Calgary, AB',
    description:
      'Currently, I hold the position of Project Manager and Full-Stack Developer at s01ve Cyber Solutions. My current stack includes React, Next.js, TypeScript, Tailwind, and Firebase.',
    icon: React.createElement(FaReact),
    date: '2023 - present',
  },
] as const

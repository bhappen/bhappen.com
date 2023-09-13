'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

import SectionHeading from './section-heading'
import SubmitButton from './submit-button'
import useSectionInView from '../hooks/useSectionInView'
import { sendEmail } from '../actions/sendEmail'

export default function Contact() {
  const { ref } = useSectionInView('Contact', 0.75)

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <motion.section
      className={`text-center w-[min(100%,38rem)] mb-20 sm:mb-28`}
      id="contact"
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{' '}
        <a className="underline" href="mailto:alex@silverone.dev">
          {' '}
          alex@silverone.dev
        </a>{' '}
        or through this form.
      </p>
      <form
        className={`flex flex-col mt-10 dark:text-black`}
        action={async (formData) => {
          const { data, error } = await sendEmail(formData)
          if (error) {
            toast.error(error)
            return
          }

          toast.success('Email sent successfully')

          // Reset fields
          setEmail('')
          setMessage('')
        }}
      >
        <input
          className={`h-14 p-4 rounded-lg borderGrey dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none`}
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          placeholder="Your email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        <textarea
          className={`h-52 p-4 my-3 rounded-lg borderGrey dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none`}
          name="emailMessage"
          required
          maxLength={500}
          placeholder="Your message"
          onChange={(event) => setMessage(event.target.value)}
          value={message}
        />
        <SubmitButton />
      </form>
    </motion.section>
  )
}

'use client'
import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './section-heading'
import useSectionInView from '../hooks/useSectionInView'
import { sendEmail } from '../actions/sendEmail'
import SubmitButton from './submit-button'
import toast from 'react-hot-toast'

export default function Contact() {
  const { ref } = useSectionInView('Contact', 0.75)

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
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{' '}
        <a className="underline" href="mailto:alex@silverone.dev">
          {' '}
          alex@silverone.dev
        </a>{' '}
        or through this form.
      </p>
      <form
        className={`flex flex-col mt-10`}
        action={async (formData) => {
          const { data, error } = await sendEmail(formData)
          if(error){
            toast.error(error)
            return
          }

          toast.success('Email sent successfully')
        }}
      >
        <input
          className={`h-14 p-4 rounded-lg borderGrey`}
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className={`h-52 p-4 my-3 rounded-lg borderGrey`}
          name="emailMessage"
          required
          maxLength={500}
          placeholder="Your message"
        />
        <SubmitButton />
      </form>
    </motion.section>
  )
}

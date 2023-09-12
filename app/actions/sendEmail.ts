'use server'
import React from 'react'
import { Resend } from 'resend'
import ContactFormEmail from '../email/contact-form-email'
import { validateString } from '../lib/utils'
import { getErrorMessage } from '../lib/utils'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
  console.log('Running on server')
  const email = formData.get('senderEmail')
  const message = formData.get('emailMessage')

  // Simple server-side validation
  if (!validateString(email, 500) || !validateString(message, 5000)) {
    return {
      error: 'Invalid resend action',
    }
  }

  let data;
  try {
    // Asserting as string due to validation
    data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'alex@silverone.dev',
      subject: 'Message from Contact Form',
      reply_to: email as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: email as string,
      }),
    })
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    }
  }

  return {
    data,
  }
}

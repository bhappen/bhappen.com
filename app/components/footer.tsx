import React from 'react'

export default function Footer() {
  return (
    <footer className='text-center text-gray-500 mb-10 px-4'>
      <small className='block mb-2'>&copy; 2023 Silver One Software. All rights reserved.</small>
      <p className='text-xs'>
        <span className='font-semibold'>About this website:</span> built with React & Next.js (App Router
        & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email
        & Resend, Vercel hosting.
      </p>
    </footer>
  )
}
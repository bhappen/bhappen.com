'use client'
import './globals.css'
import { useEffect, useState } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/header'

export const metadata: Metadata = {
  title: 'Alex | Personal Portfolio',
  description: 'Alex is a full-stack developer with 2 years of experience.',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Don't prerender
    setIsClient(true)
  }, [])

  return (
    <html lang="en">
      {isClient ? <Header /> : <></>}
      <body
        className={`pt-28 sm:pt-36 bg-gray-50 text-gray-950 ${inter.className}`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]" />
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" />
        {children}
      </body>
    </html>
  )
}

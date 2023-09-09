import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import SectionDivider from './components/section-divider'
import About from './components/about'
 
const Intro = dynamic(() => import('./components/intro'), { ssr: false })

export const metadata: Metadata = {
  title: 'Alex | Personal Portfolio',
  description: 'Alex is a full-stack developer with 2 years of experience.',
}

export default function Home() {
  return (
    <main className={`flex flex-col items-center px-4`}>
      <Intro />
      <SectionDivider />
      <About />
    </main>
  )
}

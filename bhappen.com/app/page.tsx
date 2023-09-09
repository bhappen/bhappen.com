import dynamic from 'next/dynamic'
import SectionDivider from './components/section-divider'
import About from './components/about'
 
const Intro = dynamic(() => import('./components/intro'), { ssr: false })

export default function Home() {
  return (
    <main className={`flex flex-col items-center px-4`}>
      <Intro />
      <SectionDivider />
      <About />
    </main>
  )
}

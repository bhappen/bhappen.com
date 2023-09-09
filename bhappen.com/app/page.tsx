import dynamic from 'next/dynamic'
 
const Intro = dynamic(() => import('./components/intro'), { ssr: false })

export default function Home() {
  return (
    <main className={`flex flex-col items-center px-4`}>
      <Intro />
    </main>
  )
}

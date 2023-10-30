"use client"
import UnderContruction from './component/ui/undercontruct/page'
import Lottie from 'lottie-react'
import houseAnimation from './animation/house.json'

export default function Home() {
  return (
    <main className='w-full'>
      <section id='hero'>
        <div className="grid grid-cols-1 xl:grid-cols-2 w-full h-screen">
          <div className="xl:order-2 w-full h-full flex justify-center items-center border-2">
            <Lottie animationData={houseAnimation} className='w-3/4' />
          </div>
          <div className="w-full h-full flex justify-center items-center border-2">
            <h1 className="text-3xl font-bold text-center xl:text-start">Website under contruct</h1>
          </div>
        </div>
      </section>
      <UnderContruction />
    </main>
  )
}

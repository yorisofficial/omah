"use client"
import UnderContruction from './component/ui/undercontruct/page'
import Lottie from 'lottie-react'
import houseAnimation from './animation/house.json'

export default function Home() {
  return (
    <main className='w-full'>
      <section id='hero'>
        <div className="grid grid-cols-2">
          <div className="xl:order-2">
            <Lottie animationData={houseAnimation} />
          </div>
          <div className="flex justify-center items-center">
            <h1 className="text-3xl font-bold">Website under contruct</h1>
          </div>
        </div>
      </section>
      <UnderContruction />
    </main>
  )
}

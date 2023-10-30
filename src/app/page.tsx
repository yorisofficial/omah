import Image from 'next/image'
import UnderContruction from './component/ui/undercontruct/page'
import { IconChevronDown } from '@tabler/icons-react'

export default function Home() {
  return (
    <main className='w-full'>
      <section id='hero'>
        <div className="w-full h-full mt-14 py-32">
          <div className="header-text flex flex-col xl:flex-row w-full justify-between items-center px-4 p-4 xl:px-20">
            <div className="flex w-full xl:w-[650px]">
              <h1 className="text-6xl font-semibold w-full">Ready to <br></br> find your new home</h1>
            </div>
            <div className="flex items-start xl:w-[434px] gap-5">
              <span className='w-8 h-2 rounded bg-primary mt-2'></span>
              <p className="text-lg text-black w-3/4 flex">looking for a house with a low price and quality here, and sell your house quickly here</p>
            </div>
          </div>
          <div className="content-menu w-full h-full mt-8 md:mt-12 xl:mt-20 bg-black">
            <div className="w-full h-full flex flex-col justify-center items-center relative p-4 xl:p-0">
              <Image className="w-full h-full xl:pr-20 object-contain" src="/home/home-img.svg" height={1300} width={480} alt='hero-image' />
              <div className="w-full xl:w-3/4 h-fit p-4 xl:px-20 py-4 bg-white drop-shadow-lg xl:absolute xl:-bottom-10 right-20">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                  <div className="w-full h-full flex justify-center items-center flex-col">
                    <h1 className='flex items-center gap-2 font-semibold'>Footage <IconChevronDown /></h1>
                    <p>Jakarta</p>
                  </div>
                  <div className="w-full h-full flex justify-center items-center flex-col">
                    <h1 className='flex items-center gap-2 font-semibold'>Footage <IconChevronDown /></h1>
                    <p>$1000 - $2000</p>
                  </div>
                  <div className="w-full h-full flex justify-center items-center flex-col">
                    <h1 className='flex items-center gap-2 font-semibold'>Footage <IconChevronDown /></h1>
                    <p>3 rooms</p>
                  </div>
                  <div className="w-full h-full flex justify-center items-center flex-col">
                    <h1 className='flex items-center gap-2 font-semibold'>Footage <IconChevronDown /></h1>
                    <p>2 footage</p>
                  </div>
                  <div className="button-group w-full h-full col-span-2 md:col-auto flex justify-center items-center mt-4 md:mt-0">
                    <button className='px-8 py-3 xl:w-full xl:h-full bg-primary text-white font-semibold'>login</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
      <UnderContruction />
    </main >
  )
}

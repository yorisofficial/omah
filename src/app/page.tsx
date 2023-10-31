import Image from 'next/image'
import UnderContruction from './component/ui/undercontruct/page'
import { IconChevronDown } from '@tabler/icons-react'
export default function Home() {
  const locationMenu = [
    {
      label: '1',
      value: 'Denpasar'
    },
    {
      label: '2',
      value: 'Badung'
    },
    {
      label: '3',
      value: 'Bangli'
    },
    {
      label: '4',
      value: 'Gianyar'
    },
  ]
  const priceMenu = [
    {
      label: '1',
      value: '$1300 - $3000'
    },
    {
      label: '2',
      value: '$2300 - $2800'
    },
    {
      label: '3',
      value: '$2200 - $2900'
    },
    {
      label: '4',
      value: '$4000 - $5200'
    },
  ]
  const roomMenu = [
    {
      label: '1',
      value: '1'
    },
    {
      label: '2',
      value: '2'
    },
    {
      label: '3',
      value: '3'
    },
  ]
  const footageMenu = [
    {
      label: '1',
      value: '1'
    },
    {
      label: '2',
      value: '2'
    },
  ]
  return (
    <main className='w-full'>
      <section id='hero'>
        <div className="w-full h-full py-32">
          <div className="header-text flex flex-col xl:flex-row w-full justify-between items-center px-4 p-4 xl:px-20">
            <div className="flex w-full xl:w-[650px]">
              <h1 className="text-6xl font-semibold w-full">Ready to <br></br> find your new home</h1>
            </div>
            <div className="flex items-start xl:w-[434px] gap-5">
              <span className='w-8 h-2 rounded bg-primary mt-2'></span>
              <p className="text-lg text-black w-3/4 flex">looking for a house with a low price and quality here, and sell your house quickly here</p>
            </div>
          </div>
          <div className="content-menu w-full h-full mt-8">
            <div className="w-full h-full flex flex-col justify-center items-center relative p-4 xl:p-0">
              <Image className="w-full h-full xl:pr-20 object-contain" src="/home/home-img.svg" height={1300} width={480} alt='hero-image' />
              <div className="w-full xl:w-3/4 h-fit p-4 xl:px-20 py-4 bg-white drop-shadow-lg xl:absolute xl:-bottom-10 right-20">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                  <div className="w-full h-full flex justify-center items-center flex-col">
                    <label className='font-semibold'>Location</label>
                    <select>
                      {locationMenu.map((item, index) => (
                        <option key={index} value={item.value}>{item.value}</option>
                      ))}
                    </select>
                  </div>
                  <div className="w-full h-full flex justify-center items-center flex-col">
                    <label className='font-semibold'>Price</label>
                    <select>
                      {priceMenu.map((item, index) => (
                        <option key={index} value={item.value}>{item.value}</option>
                      ))}
                    </select>
                  </div>
                  <div className="w-full h-full flex justify-center items-center flex-col">
                    <label className='font-semibold'>Room</label>
                    <select>
                      {roomMenu.map((item, index) => (
                        <option key={index} value={item.value}>{item.value} Rooms</option>
                      ))}
                    </select>
                  </div>
                  <div className="w-full h-full flex justify-center items-center flex-col">
                    <label className='font-semibold'>Footage</label>
                    <select>
                      {footageMenu.map((item, index) => (
                        <option key={index} value={item.value}>{item.value} Footage</option>
                      ))}
                    </select>
                  </div>
                  <div className="button-group w-full h-full col-span-2 md:col-auto flex justify-center items-center mt-4 md:mt-0">
                    <button className='px-8 py-3 xl:w-full xl:h-full bg-primary text-white font-semibold'>Search</button>
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

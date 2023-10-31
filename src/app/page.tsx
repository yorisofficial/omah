"use client"
import Image from 'next/image'
import UnderContruction from './component/ui/undercontruct/page'
import { useState } from 'react'
import Button from './component/ui/button/page';
import menuData from '@/app/api/search.json'

interface Option {
  label: string;
  value: string;
}

const locationMenu: Option[] = menuData.locationMenu;
const priceMenu: Option[] = menuData.priceMenu;
const roomMenu: Option[] = menuData.roomMenu;
const footageMenu: Option[] = menuData.footageMenu;

export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('');
  const [selectedFootage, setSelectedFootage] = useState('');

  const handleLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLocation(event.target.value);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPrice(event.target.value);
  };

  const handleRoomChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRoom(event.target.value);
  };

  const handleFootageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFootage(event.target.value);
  };

  const handleSearch = () => {
    console.log('Search result:', 'Location:', selectedLocation, 'Price:', selectedPrice, 'Room:', selectedRoom, 'Footage:', selectedFootage);
  };
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
              <Image className="w-full h-full xl:pr-20 object-contain" src="/home/home-img.svg" height={1300} width={500} alt='hero-image' />
              <div className="w-full xl:w-3/4 h-fit p-4 xl:px-20 py-4 bg-white drop-shadow-lg xl:absolute xl:-bottom-10 right-20">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                  <div className="w-full h-full flex justify-center items-start flex-col">
                    <label className='font-semibold'>Location</label>
                    <select className='' value={selectedLocation} onChange={handleLocationChange}>
                      <option value="" className='cursor-none'>-- Select Location</option>
                      {locationMenu.map((item, index) => (
                        <option key={index} value={item.value}>{item.value}</option>
                      ))}
                    </select>
                  </div>
                  <div className="w-full h-full flex justify-center items-start flex-col">
                    <label className='font-semibold'>Price</label>
                    <select value={selectedPrice} onChange={handlePriceChange}>
                      <option value="" className='cursor-none'>-- Select Price</option>
                      {priceMenu.map((item, index) => (
                        <option key={index} value={item.value}>{item.value}</option>
                      ))}
                    </select>
                  </div>
                  <div className="w-full h-full flex justify-center items-start flex-col">
                    <label className='font-semibold'>Room</label>
                    <select value={selectedRoom} onChange={handleRoomChange}>
                      <option value="" className='cursor-none'>-- Select Room</option>
                      {roomMenu.map((item, index) => (
                        <option key={index} value={item.value}>{item.value} Rooms</option>
                      ))}
                    </select>
                  </div>
                  <div className="w-full h-full flex justify-center items-start flex-col">
                    <label className='font-semibold'>Footage</label>
                    <select value={selectedFootage} onChange={handleFootageChange}>
                      <option value="" className='cursor-none'>-- Select Footage</option>
                      {footageMenu.map((item, index) => (
                        <option key={index} value={item.value}>{item.value} Footage</option>
                      ))}
                    </select>
                  </div>
                  <div className="button-group w-full h-full col-span-2 md:col-auto flex justify-center items-center mt-4 md:mt-0">
                    <Button onClick={handleSearch} className="" variant="primary">Search</Button>
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

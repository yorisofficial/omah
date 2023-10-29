"use client"
import Lottie from "lottie-react";
import animadata from "@/app/animation/anima.json"

const UnderContruction = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center flex-col'>
            <Lottie animationData={animadata} />
            <h1 className="text-3xl font-bold">Sorry the page is under construction</h1>
        </div>
    )
}

export default UnderContruction

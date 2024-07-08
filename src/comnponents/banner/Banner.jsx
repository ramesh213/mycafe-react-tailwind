import React from 'react'
import Apple from "../../assets/png/apple.png"
import Kiwi from "../../assets/png/kiwi.png"
import Leaf from "../../assets/png/leaf.png"
import Lemon from "../../assets/png/lemon.png"
import Tomato from "../../assets/png/tomato.png"
import PrimaryButton from '../../shared/PrimaryButton'



const Banner = () => {
  return (
    <>
        <div className="container py-12 relative">
            <div>
                <h1 className='py-8 text-2xl tracking-wider text-center'>Taste & Feel the tastes</h1>
                <div className='space-y-10'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
                        <div>
                            <p>
                                We know that <span className='text-primary'>Time </span>
                                is the greatest value in the modern world. Our healthy meal plan delivery service good food in Kathmandu is the answer for those who want to eat healthily, saving time for buying food and preparing delicious, healthy meal..
                            </p>
                        </div>
                        <div></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
                    <div></div>

                        <div>
                            <p>
                                We know that <span className='text-primary'>Time </span>
                                is the greatest value in the modern world. Our healthy meal plan delivery service good food in Kathmandu is the answer for those who want to eat healthily, saving time for buying food and preparing delicious, healthy meal..
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mt-10 sm:mt-14'>
                    <PrimaryButton />
                </div>
            </div>
            <div className='absolute top-6 -left-8 sm:bottom-0 sm:left-0 opacity-60'>
                <img src={Kiwi} alt="" className='max-w-[160px]'/>
            </div>
            <div className='absolute bottom right-8 sm:bottom-0 sm:left-0 opacity-60'>
                <img src={Tomato} alt="" className='max-w-[260px]'/>
            </div>
            <div className='absolute top-14 -right-16 sm:right-0 opacity-60'>
                <img src={Leaf} alt="" className='max-w-[260px]'/>
            </div>
            <div className='hidden sm:block absolute bottom-0 right-0'>
                <img src={Apple} alt="" className='max-w-[200px]'/>
            </div>
        </div>
    </>
  )
}

export default Banner

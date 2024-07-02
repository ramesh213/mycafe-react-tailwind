import React from 'react'
import heroImage from "../../assets/hero.png"
import PrimaryButton from '../../shared/PrimaryButton'

const Hero = () => {
  return (
    <>

    <div className="relative z-[-1]">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
                {/* left text side*/}
                <div className='space-y-7 text-dark order-2 sm:order-1'>
                    <h1 className='text-5xl'>Fresh & Healthy Meal Plan <span className='text-secondary font-cursive text-7xl'>Delivery</span> in Kathmandu</h1>
                    <p className='lg:pr-64'>
                        Delicious Meals Delivered to Your Doorstep From $95 per week..
                    </p>
                    <div>
                        <PrimaryButton/>
                    </div>
                </div>
                {/* right image side */}
                <div className='order-1 sm:order-2'>
                    <img src={heroImage} alt="" />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero

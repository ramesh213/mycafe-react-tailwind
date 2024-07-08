import React from 'react'
// import heroBg from "../../assets/heroBg.png"
import heroImage from "../../assets/heroimg.png"
import PrimaryButton from '../../shared/PrimaryButton'

// const bgStyle = {
//     backgroundImage: `url(${heroBg})`,
//     backgroundRepeat: "no-reaper",
//     backgroundPosition: "center",
//     backgroundSize: "cover",
//     width: "100%",
//     height: "100%",
// };

const Hero = () => {
  return (
    <>
    {/* This style attr. 'style={bgStyle}'is used parent below div if incase */}
    <div className="relative z-[-1] bg-gray-100">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
                {/* left text side*/}
                <div className='space-y-7 text-dark order-2 sm:order-1'>
                    <h1 className='text-5xl'>Fresh & Healthy Meal Plan <span className='text-secondary font-cursive text-7xl'>Delivery</span> in Kathmandu</h1>
                    <p className='lg:pr-64'>
                        Delicious Meals Delivered to Your Doorstep From Rs.205 per meal..
                    </p>
                    <div>
                        <PrimaryButton/>
                    </div>
                </div>
                {/* right image side */}
                <div className='order-1 sm:order-2 w-[350px] h[350px]'>
                    <img src={heroImage} alt="image" />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero

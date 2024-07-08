import React from 'react'
import bgPolygon from '../../assets/polygon.jpg'
import Vector from '../../assets/vector-wave.png'

const bgStyle = {
    backgroundImage: `url(${bgPolygon})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
    position: 'relative',
};

const AboutUs = () => {
  return (
    <>
      <div style={bgStyle} className='py-14'>
        <div className="container min-h-[400px] relative z-10">
            <h1 className="pt-20 mb-4 tracking-wider text-4xl font-semibold text-white text-center">
                About Us
            </h1>
            <div className="bg-white" />
            <div className="bg-white/80 p-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, cumque libero deleniti corrupti, perspiciatis in neque sed optio, laborum repellendus eos repudiandae accusamus dolorem ducimus itaque minus. Repudiandae, fugiat minima.Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, cumque libero deleniti corrupti, perspiciatis in neque sed optio, laborum repellendus eos repudiandae accusamus dolorem ducimus itaque minus. Repudiandae, fugiat minima.
            <div className="pt-10 flex justify-center">
                <button className="flex justify-center items-center gap-2 bg-secondary text-xl h-[40px] w-[150px] text-white px-5 hover:scale-105 duration-300">Know more</button>
            </div>
            </div>
        </div>
        <div>
            <img src={Vector} alt="" className='absolute top-0 right-0 w-full mx-auto'/>
        </div>
      </div>
    </>
  )
}

export default AboutUs

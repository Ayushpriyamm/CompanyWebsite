import React from 'react'
import Feature1 from '../assets/featureImage1.svg'
import Feature2 from '../assets/featureImage2.svg'
import Pseudo from '../assets/pseudo.svg'
import F1 from '../assets/feature1.svg'
import F2 from '../assets/feature2.svg'
import F3 from '../assets/feature3.svg'
import F4 from '../assets/feature4.svg'

export const Features = () => {
  return (
    <div className='p-4 sm:p-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-white'>
      <div className="sm:hidden relative inline-block w-full">
          <span
            className='w-max mx-auto block text-7xl sm:text-9xl text-transparent text-center font-bold opacity-20 leading-none pointer-events-none select-none'
            style={{
              WebkitTextStroke: '1.5px #cbd5e1', // Tailwind's slate-300
            }}
          >
            <img src={Pseudo} alt="" />
            Features

          </span>
          <h1 className='relative text-center font-semibold sm:text-2xl -mt-16 sm:px-4 z-10 w-max flex mx-auto '>Explore Our Professional<br></br>
            Business Solutions</h1>
        </div>
      <div className="w-full sm:w-1/2 flex flex-row items-center  ">
        <img src={Feature2} alt="" className='w-1/4 sm:w-1/2 max-w-full h-auto object-cover' />
        <img src={Feature1} alt="" className='w-3/4 sm:w-3/4 max-w-full h-auto object-cover' />
      </div>
      <div className="w-full  flex flex-col mx-auto items-center space-y-3 p-4">
        <div className="hidden relative sm:inline-block w-full">
          <span
            className='w-max mx-auto block text-7xl sm:text-9xl text-transparent text-center font-bold opacity-20 leading-none pointer-events-none select-none'
            style={{
              WebkitTextStroke: '1.5px #cbd5e1', // Tailwind's slate-300
            }}
          >
            <img src={Pseudo} alt="" />
            Features

          </span>
          <h1 className='relative text-center font-semibold sm:text-2xl -mt-16 sm:px-4 z-10 w-max flex mx-auto '>Explore Our Professional<br></br>
            Business Solutions</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-between  ">

          <div className=" flex flex-row ">
            <img src={F2} alt="" />
            <div className="flex flex-col p-2 space-y-2">
              <h1 className='text-2xl font-semibold'>User Research</h1>
              <p className='text-xs'>
                Gain deep insights into your target audience through comprehensive user research. We help uncover user needs, behaviors, and motivations to inform product strategies and create meaningful user experiences.
              </p>
            </div>
      
          </div>
          <div className=" flex flex-row">
            <img src={F3} alt="" />
            <div className="flex flex-col p-2 space-y-2">
              <h1 className='text-2xl font-semibold'>Big Data Solution</h1>
              <p className='text-xs'>Unlock the full potential of your data with our scalable Big Data solutions. From data collection to real-time analytics, we empower your business to make informed, data-driven decisions.</p>
            </div>
          </div>
          <div className=" flex flex-row">
            <img src={F4} alt="" />
            <div className="flex flex-col p-2 space-y-2">
              <h1 className='text-2xl font-semibold'>Product Design</h1>
              <p className='text-xs'>Transform ideas into intuitive and engaging digital products. Our user-centric design approach ensures your product not only looks great but also delivers seamless functionality and value to users.</p>
            </div>
          </div>
          <div className=" flex flex-row">
            <img src={F1} alt="" />
            <div className="flex flex-col p-2 space-y-2">
              <h1 className='text-2xl font-semibold'>Business Growth</h1>
              <p className='text-xs'>Accelerate your company’s growth with tailored strategies that drive performance, efficiency, and market expansion. We focus on measurable outcomes to help you scale sustainably.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

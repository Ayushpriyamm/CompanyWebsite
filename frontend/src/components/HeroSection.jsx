import React from 'react'
import HeroForeground from '../../src/assets/HeroForground.svg'
import HeroBackground from '../../src/assets/HeroBackground.svg'
import Pseudo from '../../src/assets/pseudo.svg'
import P1 from '../../src/assets/partenerLogo1.svg'
import P2 from '../../src/assets/partenerLogo2.svg'
import P3 from '../../src/assets/partenerLogo3.svg'
import P4 from '../../src/assets/partenerLogo4.svg'
import P5 from '../../src/assets/partenerLogo5.svg'


export const HeroSection = () => {
  return (
    <div className="p-4 sm:p-10">
      <div className='w-full flex flex-row justify-center bg-no-repeat bg-cover bg-center items-center '
        style={{ backgroundImage: `url(${HeroBackground})` }}>

        <div className=" w-full  text-white  p-4">
          <p className='text-xl sm:text-5xl font-semibold  '>We Provide Smart Business Solutions</p>
          <p className='text-xs sm:text-lg'>We help businesses grow by combining smart tech, thoughtful strategy, and solutions that actually scale. </p>
        </div>
        <div className=" w-full ">
          <img src={HeroForeground}
            alt=""
            className='w-full sm:w-3/4 max-w-[500px] mx-auto object-contain z-50 '
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row text-white p-4 gap-2 sm:gap-10  mx-auto items-center space-y-3">
        <div className="relative inline-block w-full">
          {/* Background Text */}
          <span
            className="block text-7xl sm:text-9xl font-extrabold text-transparent opacity-20 select-none pointer-events-none text-center leading-none"
            style={{
              WebkitTextStroke: '1.5px #cbd5e1', // Tailwind's slate-300
            }}
          >
            <img className='text-center' src={Pseudo} alt="" />
            BRANDS
          </span>

          {/* Foreground Text - Positioned on top using negative margin or absolute if needed */}
          <h1 className="relative text-center font-semibold sm:text-2xl -mt-16 sm:px-4 z-10 w-max flex mx-auto ">
            We’ve More Than <br />
            254+ Global Partners
          </h1>
        </div>

        <div className="w-full">
          <p>Sed ut perspiciatis unde omnis natus error voluptatem santium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae
            ab nllo inventore veritatis quasi architecto beatae vitae</p>
        </div>
      </div>

      <div className="logos p-4 ">
        <div className="flex flex-row gap-4 justify-center border-t-2 flex-wrap border-t- -300 p-4">
            <img src={P1} alt="partner logo" />
            <img src={P2} alt="partner logo" />
            <img src={P3} alt="partner logo" />
            <img src={P4} alt="partner logo" />
            <img src={P5} alt="partner logo" />
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import landingImg from '../assets/landingImg.png'

const HeroSection = () => {
  return (
    <div className='w-full bg-white'>
      {/* Centered max-width container */}
      <div className='max-w-7xl min-h-screen mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-around py-12 lg:h-[90vh]'>

        {/* Text Content */}
        <div className='text-center lg:text-left max-w-xl'>
          <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold py-4'>
            Keep all your important <br /> links in one place
          </h1>
          <p className='text-base sm:text-lg md:text-xl mb-6'>
            LinkKeeper helps you organize, manage, and access your <br className='hidden sm:inline' />
            important links from anywhere. Never lose a valuable resource again.
          </p>

          <form className='flex flex-col sm:flex-row gap-4 sm:gap-2 justify-center lg:justify-start'>
            <button className='bg-black text-white px-6 py-2 rounded-lg'>
              Get started
            </button>
            <button className='bg-[#f3eefd] px-6 py-2 rounded-lg'>
              Learn more
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="mb-8 lg:mb-0">
          <div className="bg-[#f3eefd] p-3 rounded-2xl">
            <img
              src={landingImg}
              className='h-[200px] sm:h-[250px] md:h-[300px] border border-[#f3eefd] rounded-2xl'
              alt="Landing"
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeroSection

import React from 'react'
import giphy from '../assets/giphy-unscreen.gif'
import './Hero.css'

const Hero = () => {
  return (
    <>
<section class="background-radial-gradient mb-20 overflow-hidden">
  <div class="px-6 py-12 text-center md:px-12 lg:py-24 lg:text-left">
    <div class="w-100 mx-auto text-neutral-800 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <div class="mt-12 lg:mt-0" style={{zIndex:10}}>
          <h1
            class="mt-0 mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-[hsl(218,81%,95%)]">
            Connecting #<br /><span class="text-[hsl(218,81%,75%)] text-4xl md:text-5xl xl:text-6xl">College Life with young minds.</span>
          </h1>
          <p class="text-[hsl(221,100%,95%)]">
          "Explore a vibrant hub where UIT and SOIT Rgpv's clubs, societies, events, and startups come together. Discover a place that connects every aspect of campus life, making your journey at the university even more enriching. 
          Welcome to the heart of UIT and SOIT Rgpv, where connections are made, and experiences are crafted."
          </p>
          <div className='w-full xl:block mt-6'>
          <a href="" className='text-gray-200 hero-a bg-yellow-900 px-4 py-2  rounded-lg z-10' >See Upcoming Events ... </a>
          </div>
          <div className='w-full  xl:block mt-6'>
          <a href="" className='text-gray-200 hero-a2 bg-yellow-900 px-4 py-2  rounded-lg z-10' >Official Site <i class="ri-arrow-right-up-fill"></i></a>
          </div>
          
        </div>
        <div class="relative mb-12 lg:mb-0">
          <div id="radius-shape-1" class="absolute rounded-full shadow-lg"></div>
          <div id="radius-shape-2" class="absolute shadow-lg"></div>
          <div
            class="hero-bg relative bg-[hsla(0,0%,100%,0.9)] backdrop-blur-[25px] backdrop-saturate-[200%] block rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[#14194f] md:px-12">
            <img src="https://i.ibb.co/nBRQgmq/IMG-20221013-204524-526.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Hero
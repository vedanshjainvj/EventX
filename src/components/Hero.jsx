import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    'https://i.ibb.co/nBRQgmq/IMG-20221013-204524-526.jpg',
    'https://i.ibb.co/TKJksnG/IMG-20221013-204534-947.jpg',
    'https://d35y6w71vgvcg1.cloudfront.net/media/2022/10/hindi-festival-shankhnaad-22-organized-at-rajiv-gandhi-university-of-technology_730X365.jpg'
    // Add other image URLs as needed
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Change the image every 1.5 seconds
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <>
      <section className="background-radial-gradient mb-20 overflow-hidden">
        <div className="px-6 py-12 text-center md:px-12 lg:py-24 lg:text-left">
          <div className="w-100 mx-auto text-neutral-800 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="mt-12 lg:mt-0" style={{ zIndex: 10 }}>
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
              </div></div>
              <div className="relative mb-12 lg:mb-0">
                <div id="radius-shape-1" className="absolute rounded-full shadow-lg"></div>
                <div id="radius-shape-2" className="absolute shadow-lg"></div>
                <div 
                  className="hero-bg relative bg-[hsla(0,0%,100%,0.9)] backdrop-blur-[25px] backdrop-saturate-[200%] block rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[#14194f] md:px-12"
                >
                  {/* Change the image source dynamically */}
                  <img className='border-2 border-blue-900' src={images[imageIndex]} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

import React from 'react'
import {Link} from 'react-router-dom'
import startupsimg from '../assets/startups2.png'
const StartupsSection = () => {
  return (
    <>

    <section class="startupsection-bg mt-20">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="w-full mb-4 text-4xl font-extrabold tracking-tight leading-none text-center lg:text-start md:text-5xl xl:text-6xl dark:text-white">Startup Culture : <br /> More On The Way</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-center lg:text-start dark:text-gray-400">Young talented minds wants to establish their own brand identity and business but only some get a way ahead.</p>
            <Link onClick={() => {
            window.scrollTo(0, 0);
          }} to='/start-ups' href="#" class="inline-flex items-center justify-center bg-pink-700 px-5 py-3 mr-3 md:text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 text-sm dark:focus:ring-primary-900">
                Check Startups
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
            <a href="https://www.rgpv.ac.in/Campus/I_EPolicy.pdf" target='blank' class="items-center justify-center px-5 py-3 md:text-base text-sm font-medium text-center border border-gray-300 rounded-lg text-white">
                Speak to Sales
            </a> 
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={startupsimg} className='rounded-xl border-b border-r startups-section-shadow' alt="mockup"/>
        </div>                
    </div>
</section>
    </>
  )
}

export default StartupsSection
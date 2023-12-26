import React from 'react'
import vedanshdeveloper from '../assets/vedanshdeveloper5.png'
import shreyashdeveloper from '../assets/shreyashdeveloper2.png'

const Team = () => {
  return (
    <>
    <section class="md:px-12 overflow-hidden">
    <div class="container px-6 my-10 mx-auto">
        <div class="xl:flex xl:items-center xL:-mx-4">
            <div class="xl:w-1/2 xl:mx-4">
                <h1 class="text-5xl text-center md:text-start font-semibold  capitalize lg:text-6xl">Developers Team</h1>

                <p class="max-w-2xl mt-4 text-center md:text-start text-gray-300">
                    We both identify the problem that first year students are always confused about college clubs, events, start-ups and other necessary details. Hence, we made a common platform where anyone can explore about the college. This platform is an absolute solution to bring all the pearls together in a single thread.
                </p>
            </div>

            <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2 justify-center place-items-center">
                <div>
                    <img class="object-cover rounded-xl aspect-square teamimg" src={vedanshdeveloper} alt=""/>

                    <h1 class="mt-4 text-2xl font-semibold  capitalize">Vedansh Jain</h1>

                    <p class="mt-2  capitalize ">Frontend Developer</p>
                    <a href="https://www.linkedin.com/in/vedanshcode" target='blank'><p className='text-white text-2xl'><i class="ri-arrow-right-up-fill"></i></p></a>
                </div>

                <div>
                    <img class="object-cover rounded-xl aspect-square teamimg" src={shreyashdeveloper} alt=""/>

                    <h1 class="mt-4 text-2xl font-semibold  capitalize ">Shreyash Jain</h1>

                    <p class="mt-2 capitalize">Full Stack Developer</p>
                    <a href="https://www.linkedin.com/in/shreyash-jain-b43572286/" target='blank'><p className='text-white text-2xl'><i class="ri-arrow-right-up-fill"></i></p></a>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default Team
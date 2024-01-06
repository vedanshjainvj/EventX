import React from 'react'
import Navbar from "./Navbar";
import hashlogo from '../assets/startupslogos/hashlogo.jpg'
import devoiclogo from '../assets/Devoiclogo.png'
import connectuplogo from '../assets/startupslogos/connectuplogo.jpg'
import gearfilogo from '../assets/startupslogos/gearfilogo.jpg'
import tdplogo from '../assets/startupslogos/tdplogo.jpg'
import semikolanlogo from '../assets/startupslogos/semikolanlogo.jpg'
import boostemlogo from '../assets/startupslogos/boostemlogo.jpg'
import agilelogo from '../assets/startupslogos/agilelogo.jpg'
import shopdesilogo from '../assets/startupslogos/shopdesilogo.jpg'
import shringarlogo from '../assets/startupslogos/shringarlogo.jpg'
import Footer from "./Footer";


const Statups = () => {
  return (
    <>
    <Navbar></Navbar>
    <main className="flex mb-4 flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-12 mt-20">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-5xl">
          Proud
          <span className="relative whitespace-nowrap text-pink-700">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/90"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative ml-4">Start-ups</span>
          </span>
        </h1>
      </main>
<section class="overflow-hidden">
        <div class="container px-16 pt-10 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 h-full md:1/2 lg:w-1/4">
              <div class=" rounded-xl shadow-cla-blue border overflow-hidden">
                <img class="lg:h-40 pt-10 md:h-36 h-28 w-full object-contain object-center scale-90 transition-all duration-400 hover:scale-100" src={hashlogo} alt="blog"/>
                <div class="p-6">
                  {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-300 mb-1">CATEGORY-1</h2> */}
                  <h1 class="title-font text-lg font-medium startups-heading py-2 rounded-xl text-center mb-3">Hash Clothings</h1>
                  <p class="">Founder : Harsh Vishwakarma <a href="" className='text-lg'><i class="ri-linkedin-box-fill"></i></a></p>
                  <p class="leading-relaxed mb-3 text-gray-300">Founded In : 2022</p>
                  <div class="flex items-center flex-wrap ">
                    <button class="bg-gradient-to-r from-cyan-800 to-blue-800 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">LinkedIn <i class="ri-linkedin-box-fill"></i></button>
                    <button class="bg-gradient-to-r from-fuchsia-800 to-pink-700 hover:scale-105 sm:ml-4 drop-shadow-md  shadow-cla-blue px-4 py-1 ml-0 rounded-lg">Official Site <i class="ri-global-fill"></i></button>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:1/2 lg:w-1/4">
                <div class=" rounded-xl shadow-cla-violate border overflow-hidden">
                  <img class="lg:h-40 pt-10  md:h-36 h-28 w-full object-contain object-center scale-90 transition-all duration-400 hover:scale-100" src={devoiclogo} alt="blog"/>
                  <div class="p-6">
                    {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY-1</h2> */}
                    <h1 class="title-font text-lg font-medium startups-heading py-2 rounded-xl text-center  mb-3">The Devoic</h1>
                    <p class="">Founder : Shivam Singh <a href="" className='text-lg'><i class="ri-linkedin-box-fill"></i></a></p>
                  <p class="leading-relaxed mb-3 text-gray-300">Founded In : 2022</p>
                  <div class="flex items-center flex-wrap ">
                    <button class="bg-gradient-to-r from-cyan-800 to-blue-800 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">LinkedIn <i class="ri-linkedin-box-fill"></i></button>
                    <button class="bg-gradient-to-r from-fuchsia-800 to-pink-700 hover:scale-105 sm:ml-4 drop-shadow-md  shadow-cla-blue px-4 py-1 ml-0 rounded-lg">Official Site <i class="ri-global-fill"></i></button>                  </div>
                  </div>
                </div>
              </div>
              <div class="p-4 md:1/2 lg:w-1/4">
                <div class=" rounded-xl shadow-cla-pink border overflow-hidden">
                  <img class="lg:h-40 pt-10  md:h-36 h-28 w-full object-contain object-center scale-110 transition-all duration-400 hover:scale-100" src={connectuplogo} alt="blog"/>
                  <div class="p-6">
                    {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY-1</h2> */}
                    <h1 class="title-font text-lg font-medium startups-heading py-2 rounded-xl text-center  mb-3">Connectup</h1>
                    <p class="">Founder : Harsh Vishwakarma <a href="" className='text-lg'><i class="ri-linkedin-box-fill"></i></a></p>
                  <p class="leading-relaxed mb-3 text-gray-300">Founded In : 2022</p>
                  <div class="flex items-center flex-wrap ">
                    <button class="bg-gradient-to-r from-cyan-800 to-blue-800 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">LinkedIn <i class="ri-linkedin-box-fill"></i></button>
                    <button class="bg-gradient-to-r from-fuchsia-800 to-pink-700 hover:scale-105 sm:ml-4 drop-shadow-md  shadow-cla-blue px-4 py-1 ml-0 rounded-lg">Official Site <i class="ri-global-fill"></i></button>                  </div>
                  </div>
                </div>
              </div>
              <div class="p-4 md:1/2 lg:w-1/4">
                <div class=" rounded-xl shadow-cla-pink border overflow-hidden">
                  <img class="lg:h-40 pt-10  md:h-36 h-28 w-full object-contain object-center scale-90 transition-all duration-400 hover:scale-100" src={gearfilogo} alt="blog"/>
                  <div class="p-6">
                    {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY-1</h2> */}
                    <h1 class="title-font text-lg font-medium startups-heading py-2 rounded-xl text-center mb-3">Gearfi</h1>
                    <p class="">Founder : Rounak Dubey <a href="" className='text-lg'><i class="ri-linkedin-box-fill"></i></a></p>
                  <p class="leading-relaxed mb-3 text-gray-300">Founded In : 2022</p>
                  <div class="flex items-center flex-wrap ">
                    <button class="bg-gradient-to-r from-cyan-800 to-blue-800 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">LinkedIn <i class="ri-linkedin-box-fill"></i></button>
                    <button class="bg-gradient-to-r from-fuchsia-800 to-pink-700 hover:scale-105 sm:ml-4 drop-shadow-md  shadow-cla-blue px-4 py-1 ml-0 rounded-lg">Official Site <i class="ri-global-fill"></i></button>                  </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
      <section class="">
        <div class="container px-16 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:1/2 lg:w-1/4">
              <div class=" rounded-xl shadow-cla-blue border overflow-hidden">
                <img class="lg:h-40 pt-10  md:h-36 h-28 w-full object-contain object-center scale-90 transition-all duration-400 hover:scale-100" src={tdplogo} alt="blog"/>
                <div class="p-6">
                  {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-300 mb-1">CATEGORY-1</h2> */}
                  <h1 class="title-font text-lg font-medium startups-heading py-2 rounded-xl text-center mb-3">TDP Vista</h1>
                  <p class="">Founder : Divyanshu Pateria <a href="" className='text-lg'><i class="ri-linkedin-box-fill"></i></a></p>
                  <p class="leading-relaxed mb-3 text-gray-300">Founded In : 2021</p>
                  <div class="flex items-center flex-wrap ">
                    <button class="bg-gradient-to-r from-cyan-800 to-blue-800 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">LinkedIn <i class="ri-linkedin-box-fill"></i></button>
                    <button class="bg-gradient-to-r from-fuchsia-800 to-pink-700 hover:scale-105 sm:ml-4 drop-shadow-md  shadow-cla-blue px-4 py-1 ml-0 rounded-lg">Official Site <i class="ri-global-fill"></i></button>                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:1/2 lg:w-1/4">
                <div class=" rounded-xl shadow-cla-violate border overflow-hidden">
                  <img class="lg:h-40 pt-10  md:h-36 h-28 w-full object-contain object-center scale-90 transition-all duration-400 hover:scale-100" src={semikolanlogo} alt="blog"/>
                  <div class="p-6">
                    {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY-1</h2> */}
                    <h1 class="title-font text-lg font-medium startups-heading py-2 rounded-xl text-center mb-3">Semikolan</h1>
                    <p class="">Founder : ABC@123 <a href="" className='text-lg'><i class="ri-linkedin-box-fill"></i></a></p>
                  <p class="leading-relaxed mb-3 text-gray-300">Founded In : 2021</p>
                  <div class="flex items-center flex-wrap ">
                    <button class="bg-gradient-to-r from-cyan-800 to-blue-800 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">LinkedIn <i class="ri-linkedin-box-fill"></i></button>
                    <button class="bg-gradient-to-r from-fuchsia-800 to-pink-700 hover:scale-105 sm:ml-4 drop-shadow-md  shadow-cla-blue px-4 py-1 ml-0 rounded-lg">Official Site <i class="ri-global-fill"></i></button>                  </div>
                  </div>
                </div>
              </div>
              <div class="p-4 md:1/2 lg:w-1/4">
                <div class=" rounded-xl shadow-cla-pink border overflow-hidden">
                  <img class="lg:h-40 pt-10  md:h-36 h-28 w-full object-contain object-center scale-90 transition-all duration-400 hover:scale-100" src={boostemlogo} alt="blog"/>
                  <div class="p-6">
                    {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY-1</h2> */}
                    <h1 class="title-font text-lg font-medium startups-heading py-2 rounded-xl text-center mb-3">Boostem</h1>
                    <p class="">Founder : Sumit Choudhary <a href="" className='text-lg'><i class="ri-linkedin-box-fill"></i></a></p>
                  <p class="leading-relaxed mb-3 text-gray-300">Founded In : 2022</p>
                  <div class="flex items-center flex-wrap ">
                    <button class="bg-gradient-to-r from-cyan-800 to-blue-800 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">LinkedIn <i class="ri-linkedin-box-fill"></i></button>
                    <button class="bg-gradient-to-r from-fuchsia-800 to-pink-700 hover:scale-105 sm:ml-4 drop-shadow-md  shadow-cla-blue px-4 py-1 ml-0 rounded-lg">Official Site <i class="ri-global-fill"></i></button>                  </div>
                  </div>
                </div>
              </div>
              <div class="p-4 md:1/2 lg:w-1/4">
                <div class=" rounded-xl shadow-cla-pink border overflow-hidden">
                  <img class="lg:h-40 pt-10  md:h-36 h-28 w-full object-contain object-center scale-90 transition-all duration-400 hover:scale-100" src={agilelogo} alt="blog"/>
                  <div class="p-6">
                    {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY-1</h2> */}
                    <h1 class="title-font text-lg font-medium startups-heading py-2 rounded-xl text-center mb-3">Agile Support</h1>
                    <p class="">Founder : ABC@123 <a href="" className='text-lg'><i class="ri-linkedin-box-fill"></i></a></p>
                  <p class="leading-relaxed mb-3 text-gray-300">Founded In : 2022</p>
                  <div class="flex items-center flex-wrap ">
                    <button class="bg-gradient-to-r from-cyan-800 to-blue-800 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">LinkedIn <i class="ri-linkedin-box-fill"></i></button>
                    <button class="bg-gradient-to-r from-fuchsia-800 to-pink-700 hover:scale-105 sm:ml-4 drop-shadow-md  shadow-cla-blue px-4 py-1 ml-0 rounded-lg">Official Site <i class="ri-global-fill"></i></button>                  </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
      <section class="mb-10">
        <div class="container px-16 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:1/2 lg:w-1/4">
              <div class=" rounded-xl shadow-cla-blue border overflow-hidden">
                <img class="lg:h-40 pt-10  md:h-36 h-28 w-full object-contain object-center scale-90 transition-all duration-400 hover:scale-100" src={shringarlogo} alt="blog"/>
                <div class="p-6">
                  {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-300 mb-1">CATEGORY-1</h2> */}
                  <h1 class="title-font text-lg font-medium startups-heading py-2 rounded-xl text-center mb-3">Shringar</h1>
                  <p class="">Founder : Sumit Choudhary <a href="" className='text-lg'><i class="ri-linkedin-box-fill"></i></a></p>
                  <p class="leading-relaxed mb-3 text-gray-300">Founded In : 2023</p>
                  <div class="flex items-center flex-wrap ">
                    <button class="bg-gradient-to-r from-cyan-800 to-blue-800 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">LinkedIn <i class="ri-linkedin-box-fill"></i></button>
                    <button class="bg-gradient-to-r from-fuchsia-800 to-pink-700 hover:scale-105 sm:ml-4 drop-shadow-md  shadow-cla-blue px-4 py-1 ml-0 rounded-lg">Official Site <i class="ri-global-fill"></i></button>                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:1/2 lg:w-1/4">
                <div class=" rounded-xl shadow-cla-violate border overflow-hidden">
                  <img class="lg:h-40 pt-10  md:h-36 h-28 w-full object-contain object-center scale-90 transition-all duration-400 hover:scale-100" src={shopdesilogo} alt="blog"/>
                  <div class="p-6">
                    {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY-1</h2> */}
                    <h1 class="title-font text-lg font-medium startups-heading py-2 rounded-xl text-center mb-3">Shopdesi</h1>
                    <p class="">Founder : Abhishek Singh <a href="" className='text-lg'><i class="ri-linkedin-box-fill"></i></a></p>
                  <p class="leading-relaxed mb-3 text-gray-300">Founded In : 2022</p>
                  <div class="flex items-center flex-wrap ">
                    <button class="bg-gradient-to-r from-cyan-800 to-blue-800 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">LinkedIn <i class="ri-linkedin-box-fill"></i></button>
                    <button class="bg-gradient-to-r from-fuchsia-800 to-pink-700 hover:scale-105 sm:ml-4 drop-shadow-md  shadow-cla-blue px-4 py-1 ml-0 rounded-lg">Official Site <i class="ri-global-fill"></i></button>                  </div>
                  </div>
                </div>
              </div>
              <div class="p-4 md:1/2 lg:w-1/4">
                <div class=" rounded-xl shadow-cla-pink border overflow-hidden">
                  <img class="lg:h-40 pt-10  md:h-36 h-28 w-full object-contain object-center scale-90 transition-all duration-400 hover:scale-100" src="data:image/png;base64,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" alt="blog"/>
                  <div class="p-6">
                    {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY-1</h2> */}
                    <h1 class="title-font text-lg font-medium startups-heading py-2 rounded-xl text-center mb-3">BhoomiGrow</h1>
                    <p class="">Founder : ABCD@123 <a href="" className='text-lg'><i class="ri-linkedin-box-fill"></i></a></p>
                  <p class="leading-relaxed mb-3 text-gray-300">Founded In : 2022</p>
                  <div class="flex items-center flex-wrap ">
                    <button class="bg-gradient-to-r from-cyan-800 to-blue-800 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">LinkedIn <i class="ri-linkedin-box-fill"></i></button>
                    <button class="bg-gradient-to-r from-fuchsia-800 to-pink-700 hover:scale-105 sm:ml-4 drop-shadow-md  shadow-cla-blue px-4 py-1 ml-0 rounded-lg">Official Site <i class="ri-global-fill"></i></button>                  </div>
                  </div>
                </div>
              </div>
              <div class="p-4 md:1/2 lg:w-1/4">
                <div class=" rounded-xl shadow-cla-pink border overflow-hidden">
                  <img class="lg:h-40 pt-10  md:h-36 h-28 w-full object-contain object-center scale-90 transition-all duration-400 hover:scale-100" src="data:image/png;base64,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" alt="blog"/>
                  <div class="p-6">
                    {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY-1</h2> */}
                    <h1 class="title-font text-lg font-medium startups-heading py-2 rounded-xl text-center mb-3">Yet to relish !!</h1>
                    <p class="">Founder : ABCD@123</p>
                  <p class="leading-relaxed mb-3 text-gray-300">Founded In : 2022</p>
                  <div class="flex items-center flex-wrap ">
                    <button class="bg-gradient-to-r from-cyan-800 to-blue-800 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">LinkedIn <i class="ri-linkedin-box-fill"></i></button>
                    <button class="bg-gradient-to-r from-fuchsia-800 to-pink-700 hover:scale-105 sm:ml-4 drop-shadow-md  shadow-cla-blue px-4 py-1 ml-0 rounded-lg">Official Site <i class="ri-global-fill"></i></button>                  </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  )
}

export default Statups
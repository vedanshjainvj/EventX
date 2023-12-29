import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Batchmates = () => {
  return (
    <>
    <Navbar></Navbar>
    <section className="">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-10 lg:px-0 lg:flex-row lg:px-10 lg:justify-around">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-[50%] xl lg:text-left">
			<h1 className="text-5xl font-bold leadi sm:text-6xl">Classmates : {" "} <br />
				<span className="dark:text-violet-400 text-5xl">Friendship is Joy</span>
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, laboriosam omnis nobis cumque perferendis ea aliquid itaque ullam. Obcaecati, explicabo.
				{/* <br className="hidden md:inline lg:hidden"></br> turpis pulvinar, est scelerisque ligula sem */}
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-pink-800 ">Upcoming</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Instagram</a>
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="http://localhost:5173/src/assets/grpimg1.jpeg" alt="" className="object-contain h-72 lg:rounded-xl sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
<section class="body-font overflow-hidden">
  <div class="container px-12 pt-16 mx-auto">
   
    <div class="flex flex-wrap -m-4">
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border border-blue-300 flex flex-col relative overflow-hidden">
          <h2 class="text-sm tracking-widest title-font mb-1 font-medium">Amazing Batch of ✌️</h2>
          <h1 class="text-5xl  pb-4 mb-4 border-b border-orange-500 leading-none">2020-2024</h1>
          <a href='#' class="flex items-center  mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-yellow-400  rounded-full flex-shrink-0">
              <svg fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Computer Science 2020-2024
          </a>
          <a href='#' class="flex items-center  mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-pink-400  rounded-full flex-shrink-0">
              <svg fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Information Tech. 2020-2024
          </a>
          <a href='#' class="flex items-center  mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400  rounded-full flex-shrink-0">
              <svg fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Electronics & Comm. 2020-2024
          </a>
		  <a href='#' class="flex items-center  mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-orange-400  rounded-full flex-shrink-0">
              <svg fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Electrical 2020-2024
          </a>
		  <a href='#' class="flex items-center  mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-400  rounded-full flex-shrink-0">
              <svg fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Civil 2020-2024
          </a>
		  <a href='#' class="flex items-center  mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-400  rounded-full flex-shrink-0">
              <svg fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Mechanical 2020-2024
          </a>
		  <a href='#' class="flex items-center  mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-violet-400  rounded-full flex-shrink-0">
              <svg fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Automobile 2020-2024
          </a>
		  <a href='#' class="flex items-center  mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-800  rounded-full flex-shrink-0">
              <svg fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Pterochemical 2020-2024
          </a>
        </div>
      </div>
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border border-blue-300 flex flex-col relative overflow-hidden">
          <h2 class="text-sm tracking-widest title-font mb-1 font-medium">Creative Batch of 💎</h2>
          <h1 class="text-5xl  pb-4 mb-4 border-b border-orange-500 leading-none">2021-2025</h1>
          <a href='#' class="flex items-center  mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-yellow-400  rounded-full flex-shrink-0">
              <svg fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Computer Science 2021-2025
          </a>
          <a href='#' class="flex items-center  mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-pink-400  rounded-full flex-shrink-0">
              <svg fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Information Tech. 2021-2025
          </a>
          <a href='#' class="flex items-center  mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400  rounded-full flex-shrink-0">
              <svg fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Electronics & Comm. 2021-2025
          </a>
		  <a href='#' class="flex items-center  mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-orange-400  rounded-full flex-shrink-0">
              <svg fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Electrical 2021-2025
          </a>
		  <a href='#' class="flex items-center  mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-400  rounded-full flex-shrink-0">
              <svg fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Civil 2021-2025
          </a>
		  <a href='#' class="flex items-center  mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-400  rounded-full flex-shrink-0">
              <svg fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Mechanical 2021-2025
          </a>
		  <a href='#' class="flex items-center  mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-violet-400  rounded-full flex-shrink-0">
              <svg fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Automobile 2021-2025
          </a>
		  <a href='#' class="flex items-center  mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-800  rounded-full flex-shrink-0">
              <svg fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Pterochemical 2021-2025
          </a>
        </div>
      </div>
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border border-blue-300 flex flex-col relative overflow-hidden">
          <h2 class="text-sm tracking-widest title-font mb-1 font-medium">Beautiful Batch of 😍</h2>
          <h1 class="text-5xl  pb-4 mb-4 border-b border-orange-500 leading-none">2022-2026</h1>
          <a href='#' class="flex items-center  mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-yellow-400  rounded-full flex-shrink-0">
              <svg fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Computer Science 2022-2026
          </a>
          <a href='#' class="flex items-center  mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-pink-400  rounded-full flex-shrink-0">
              <svg fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Information Tech. 2022-2026
          </a>
          <a href='#' class="flex items-center  mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400  rounded-full flex-shrink-0">
              <svg fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Electronics & Comm. 2022-2026
          </a>
		  <a href='#' class="flex items-center  mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-orange-400  rounded-full flex-shrink-0">
              <svg fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Electrical 2022-2026
          </a>
		  <a href='#' class="flex items-center  mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-400  rounded-full flex-shrink-0">
              <svg fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Civil 2022-2026
          </a>
		  <a href='#' class="flex items-center  mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-400  rounded-full flex-shrink-0">
              <svg fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Mechanical 2022-2026
          </a>
		  <a href='#' class="flex items-center  mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-violet-400  rounded-full flex-shrink-0">
              <svg fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Automobile 2022-2026
          </a>
		  <a href='#' class="flex items-center  mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-800  rounded-full flex-shrink-0">
              <svg fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Pterochemical 2022-2026
          </a>
        </div>
      </div>
      <div class="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div class="h-full p-6 rounded-lg border border-blue-300 flex flex-col relative overflow-hidden">
          <h2 class="text-sm tracking-widest title-font mb-1 font-medium">Cool Batch of 😎</h2>
          <h1 class="text-5xl  pb-4 mb-4 border-b border-orange-500 leading-none">2023-2027</h1>
          <a href='#' class="flex items-center  mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-yellow-400  rounded-full flex-shrink-0">
              <svg fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Computer Science 2023-2027
          </a>
          <a href='#' class="flex items-center  mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-pink-400  rounded-full flex-shrink-0">
              <svg fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Information Tech. 2023-2027
          </a>
          <a href='#' class="flex items-center  mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400  rounded-full flex-shrink-0">
              <svg fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Electronics & Comm. 2023-2027
          </a>
		  <a href='#' class="flex items-center  mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-orange-400  rounded-full flex-shrink-0">
              <svg fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Electrical 2023-2027
          </a>
		  <a href='#' class="flex items-center  mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-400  rounded-full flex-shrink-0">
              <svg fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Civil 2023-2027
          </a>
		  <a href='#' class="flex items-center  mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-red-400  rounded-full flex-shrink-0">
              <svg fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Mechanical 2023-2027
          </a>
		  <a href='#' class="flex items-center  mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-violet-400  rounded-full flex-shrink-0">
              <svg fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Automobile 2023-2027
          </a>
		  <a href='#' class="flex items-center  mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-800  rounded-full flex-shrink-0">
              <svg fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Pterochemical 2023-2027
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer></Footer>
    </> )
}

export default Batchmates
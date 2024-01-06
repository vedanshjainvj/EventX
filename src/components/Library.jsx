import React,{useState} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import lib1 from '../assets/libraryimages/lib1.jpg'
import lib2 from '../assets/libraryimages/lib2.jpg'
import lib3 from '../assets/libraryimages/lib3.jpg'
import lib4 from '../assets/libraryimages/lib4.jpg'
import lib5 from '../assets/libraryimages/lib5.jpg'
import lib6 from '../assets/libraryimages/lib6.jpg'
import lib7 from '../assets/libraryimages/lib7.jpg'
import {Link} from 'react-router-dom'
import sportscomplex from '../assets/sportscomplex.jpg'
const Library = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <Navbar></Navbar>

    <main className="flex mb-10 flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-12 mt-20">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-5xl">
          Central
          <span className="relative whitespace-nowrap text-pink-700">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/90"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative ml-4">Library</span>
          </span>
        </h1>
      </main>
    

    <div className="">
	<div className="container grid grid-cols-12 mx-auto lg:px-12">
  <div className="bg-no-repeat bg-cover rounded-xl col-span-full lg:col-span-5" style={{ backgroundImage: `url(${lib7})`, backgroundPosition: 'center center', backgroundBlendMode: 'multiply', backgroundSize: 'cover' }}></div>

		<div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-7 lg:py-10">
			<div className="flex justify-start">
				<span className="px-4 py-2 text-sm lg:mb-4 rounded-xl dark:bg-violet-800">Learning Hub : Resources</span>
			</div>
			<h1 className="text-3xl font-semibold">About Central Library</h1>
			<p className="flex-1 pt-2">The central library at RGPV holds a sacred space where students immerse themselves in a diverse tapestry of knowledge found in books, magazines, and articles. This haven of tranquility facilitates deep learning and exploration, providing a serene atmosphere for intellectual growth. Here, students engage in quiet contemplation, absorbing the wisdom contained within the library's walls and expanding their horizons, fostering a culture of continuous learning and academic excellence.</p>
			<a rel="noopener noreferrer" href="#" className="inline-flex bg-pink-600 rounded-xl w-fit px-4 items-center pt-2 pb-2 my-4 space-x-2 text-sm">
				<span>Opens : Monday-Friday 10:00 To 5:00</span>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
					<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
				</svg>
			</a>
			<div className="flex items-center justify-between pt-2">
				<div className="flex space-x-2">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 dark:text-gray-400">
						<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
					</svg>
					<span className="self-center text-sm">Library Head : Sanjeev Rai</span>
				</div>
				
			</div>
		</div>
	</div>
</div>

<section class="body-font">
  <div class="container px-5 lg:px-0 py-12 mx-auto">
    
    <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-blue-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">60,000+ Books</span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-blue-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">Articles and Magzines</span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-blue-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">Engineering Books</span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-blue-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">Self Help Books</span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-blue-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">Resources for GATE & CLAT</span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-blue-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">Quiet Place To Learn</span>
        </div>
      </div>
    </div>
  </div>
</section>

    <section class="text-gray-600 body-font">
  <div class="container px-5 pb-10 lg:px-12 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-72 md:h-36 w-full object-cover object-center" src={lib3} alt="blog"/>
          
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-72 md:h-36 w-full object-cover object-center" src={lib1} alt="blog"/>
          
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-72 md:h-36 w-full object-cover object-center" src={lib5} alt="blog"/>
          
        </div>
      </div>
    </div>
  </div>
</section>
<section class=" body-font">
  <div class="container px-5 py-10 mx-auto">
    <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
      <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font">To Know more about library and it's details, click on this button</h1>
      <Link to='/login' class="flex-shrink-0 text-white bg-indigo-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">Login</Link>
    </div>
  </div>
</section>
    <Footer></Footer>
    </>
  )
}

export default Library
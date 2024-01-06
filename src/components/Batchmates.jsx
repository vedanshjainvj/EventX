import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import grpimg1 from '../assets/batchmatesimages/grpimg1.jpeg'
import ecegrp1 from '../assets/batchmatesimages/ecegrp2.jpg'
import cseimg24 from '../assets/batchmatesimages/cseimg24.jpg'
import civil25 from '../assets/batchmatesimages/civil25.jpg'
import mechimggrp from '../assets/batchmatesimages/augrp.jpg'
import mechimggrp4 from '../assets/batchmatesimages/mechimggrp4.jpg'
import exgrp from '../assets/batchmatesimages/exgrp.png'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
const Batchmates = () => {
  const splideOptions = {
    type: "loop",
    classes: {
		// Add classes for arrows.
		arrows: 'splide__arrows',
		arrow : 'splide__arrow',
		prev  : 'splide__arrow--prev',
		next  : 'splide__arrow--next',
  },

  pagination: true, // Disable default pagination
  arrows: true, // Disable default arrows
    
    perPage: 1, // Show 4 images in a row
    gap: 16, // Set the gap between slides (in pixels)
    breakpoints: {
		640: {
			perPage: 1,
		},
  }
  
  };

  return (
    <>
    <Navbar></Navbar>
    <section className="">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-10 lg:flex-row lg:px-10 lg:justify-around">
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
			<img src={grpimg1} alt="" className="object-cover h-72 lg:rounded-xl  sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>

<main className="flex mb-10 flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-12 mt-20">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-5xl">
          2022 - 2026 
          <span className="relative whitespace-nowrap text-pink-700">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/90"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative ml-4">Batch</span>
          </span>
        </h1>
      </main>
<div className="flex flex-col lg:flex-row px-6 lg:px-20">
      {/* Left Part: Carousel */}
      <div className="lg:w-3/5">
      <Splide options={splideOptions}>
      <SplideSlide>
        {/* Container div for the first image */}
        <div className="w-full h-80 overflow-hidden relative">
          <img
            className="w-full h-full rounded-xl object-cover"
            src={mechimggrp}
            alt="Slide 1"
          />
          {/* Absolute-positioned div for text overlay */}
          <div className="absolute bottom-0 right-0 p-4 bg-gray-200 text-black">
            Automobile 22-26
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        {/* Container div for the second image */}
        <div className="w-full h-80 overflow-hidden relative">
          <img
            className="w-full h-full object-cover"
            src={grpimg1}
            alt="Slide 2"
          />
          {/* Absolute-positioned div for text overlay */}
          <div className="absolute bottom-0 right-0 p-4 bg-gray-200 text-black">
            CSE 22-26
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        {/* Container div for the second image */}
        <div className="w-full h-80 overflow-hidden relative">
          <img
            className="w-full h-full object-cover"
            src={ecegrp1}
            alt="Slide 2"
          />
          {/* Absolute-positioned div for text overlay */}
          <div className="absolute bottom-0 right-0 p-4 bg-gray-200 text-black">
            ECE 22-26
          </div>
        </div>
      </SplideSlide>
      {/* Add more SplideSlide components as needed */}
    </Splide>
      </div>

      

      {/* Right Part: Text Content */}
      <div className="lg:w-2/5 px-0 py-8 lg:pl-8">
        <h2 className="text-3xl font-bold mb-4 text-center bg-blue-700 rounded-lg py-1">Batch 2022-2026</h2>
        <p className="text-gray-300 text-center lg:text-left">
        The batch of 2022-2026 embodies a harmonious blend of creativity and camaraderie, weaving a vibrant tapestry of innovation and enduring friendships. This dynamic cohort, united by a shared commitment to excellence, navigates their academic journey with resilience and unity. Through their collective spirit, they illuminate the years with creativity, fortitude, and an enduring bond, leaving an indelible mark on the fabric of their educational experience. Their journey is a testament to the transformative power of collaboration and the lasting impact of a close-knit community.
        </p>
      </div>
    </div>

    <main className="flex mb-10 flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-0 mt-20">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-5xl">
          2021 - 2025
          <span className="relative whitespace-nowrap text-pink-700">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/90"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative ml-4">Batch</span>
          </span>
        </h1>
      </main>
<div className="flex flex-col lg:flex-row px-6 lg:px-20 ">
<div className="lg:w-2/5 px-0 py-8 lg:pr-8">
        <h2 className="text-3xl font-bold mb-4 text-center bg-violet-700 rounded-lg py-1">Batch 2021-2025</h2>
        <p className="text-gray-300 text-center lg:text-left">
        The batch of 2021-2025 radiates professionalism, exemplifies a robust team-oriented culture, and showcases outstanding management aptitude. Beyond academics, their collective spirit of kindness resonates, contributing to a harmonious and enriching environment. This cohort not only embraces a strong work ethic but also cultivates interpersonal skills, emphasizing collaboration and mutual support. Their positive influence extends far beyond the classroom, leaving an indelible mark on the institution and reflecting a commitment to both individual growth and communal well-
        </p>
      </div>
   
      <div className="lg:w-3/5">
      <Splide options={splideOptions}>
      <SplideSlide>
        {/* Container div for the first image */}
        <div className="w-full h-80 overflow-hidden relative">
          <img
            className="w-full h-full rounded-xl object-cover"
            src={exgrp}
            alt="Slide 1"
          />
          {/* Absolute-positioned div for text overlay */}
          <div className="absolute bottom-0 right-0 p-4 bg-gray-200 text-black">
            Electrical 21-25
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        {/* Container div for the first image */}
        <div className="w-full h-80 overflow-hidden relative">
          <img
            className="w-full h-full rounded-xl object-cover"
            src={civil25}
            alt="Slide 1"
          />
          {/* Absolute-positioned div for text overlay */}
          <div className="absolute bottom-0 right-0 p-4 bg-gray-200 text-black">
            Civil 21-25
          </div>
        </div>
      </SplideSlide>
      
      {/* Add more SplideSlide components as needed */}
    </Splide>
      </div>

      {/* Right Part: Text Content */}
      
    </div>

    <main className="flex mb-10 flex-1 w-full flex-col items-center justify-center text-center px-4 ">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-5xl">
          2020 - 2024
          <span className="relative whitespace-nowrap text-pink-700">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/90"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative ml-4">Batch</span>
          </span>
        </h1>
      </main>
<div className="flex flex-col lg:flex-row px-6 lg:px-20 mb-10">
      {/* Left Part: Carousel */}
      <div className="lg:w-3/5">
      <Splide options={splideOptions}>
      <SplideSlide>
        {/* Container div for the first image */}
        <div className="w-full h-80 overflow-hidden relative">
          <img
            className="w-full h-full rounded-xl object-cover"
            src={mechimggrp4}
            alt="Slide 1"
          />
          {/* Absolute-positioned div for text overlay */}
          <div className="absolute bottom-0 right-0 p-4 bg-gray-200 text-black">
            Mechanical 20-24
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        {/* Container div for the second image */}
        <div className="w-full h-80 overflow-hidden relative">
          <img
            className="w-full h-full object-cover rounded-xl"
            src={cseimg24}
            alt="Slide 2"
          />
          {/* Absolute-positioned div for text overlay */}
          <div className="absolute bottom-0 right-0 p-4 bg-gray-200 text-black">
            CSE 20-24
          </div>
        </div>
      </SplideSlide>
      {/* Add more SplideSlide components as needed */}
    </Splide>
      </div>

      {/* Right Part: Text Content */}
      <div className="lg:w-2/5 px-0 py-8 lg:pl-8">
        <h2 className="text-3xl font-bold mb-4 text-center bg-blue-600 rounded-lg py-1">Batch 2020-2024</h2>
        <p className="text-gray-300 text-center lg:text-left">
        The batch of 2020-2024 radiates a profound sense of camaraderie, fostering strong bonds within their ranks. Known for their unwavering support for juniors, they create a nurturing environment that encourages growth. This spirited cohort takes delight in organizing and participating in events, infusing their academic journey with moments of joy and shared experiences. Their commitment to unity, coupled with a penchant for fun, defines a vibrant community that thrives on collaboration and the celebration of each other's successes, leaving an indelible mark on their academic legacy.
        </p>
      </div>
    </div>

<Footer></Footer>
    </> )
}

export default Batchmates
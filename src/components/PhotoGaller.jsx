import React, { useState } from 'react';
import Navbar from "./Navbar";

import { Link } from "react-router-dom";
import nssimg from "../assets/nssimg2.jpg";
import nccimg from "../assets/nccimg.jpg";
import grpimg1 from '../assets/grpimg1.jpeg'
import grpimg2 from '../assets/grpimg2.jpeg'
import grpimg3 from '../assets/grpimg3.jpg'
import grpimg4 from '../assets/grpimg4.jpg'
import grpimg5 from '../assets/grpimg5.jpg'
import grpimg6 from '../assets/grpimg6.jpeg'
import grpimg9 from '../assets/grpimg9.jpeg'
import grpimg11 from '../assets/grpimg11.jpg'
import grpimg12 from '../assets/grpimg12.jpg'
import grpimg13 from '../assets/grpimg13.jpg'
import Footer from "./Footer";
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'

const PhotoGaller = () => {

  return (
    <>
    


      <Navbar></Navbar>
      <main className="flex mb-2 flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-12 mt-20">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-5xl">
          Photo
          <span className="relative whitespace-nowrap text-pink-700">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/90"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative ml-4">Gallery</span>
          </span>
        </h1>
      </main>

      <section class="">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:pt-8 lg:pb-8 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">The Memories To Relish</h2>
            <p class="mb-4">Photographs, enchanting alchemists of joy, immortalize the essence of our cherished memories. In every college event, they crystallize extraordinary moments—capturing shared laughter, dreams, and the transient beauty of experiences. Each frame is a testament to the enduring magic that resides in the fleeting yet everlasting tapestry of life.</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg border" src={image4} alt=""/>
            <img class="mt-4 w-full lg:mt-10 rounded-lg border" src={image3} alt=""/>
        </div>
        
    </div>
</section>
	
     
      <body class="antialiased  font-sans p-6">
        <div class="container mx-auto">
          <div class="flex flex-wrap -mx-4">
            <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
              <a class="c-card block border shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                <div class="relative pb-48 overflow-hidden">
                  <img
                    class="absolute inset-0 h-full w-full object-cover p-4 rounded "
                    src={nssimg}
                    alt=""
                  />
                </div>
                <div class="p-4">
                  <Link class="inline-block px-4 py-2 leading-none bg-pink-600  rounded-full font-semibold uppercase tracking-wide text-xs">
                    View All <i class="ri-arrow-right-up-fill"></i>
                  </Link>
                  <Link class="inline-block px-4 py-1 leading-none bg-blue-600  rounded-full ml-2 font-semibold uppercase tracking-wide text-sm">
                    <i class="ri-contract-right-fill"></i>
                  </Link>
                  <h2 class="mt-2 mb-1 text-lg">
                    National Service Scheme : Nss{" "}
                  </h2>
                  <p class="text-sm text-gray-300">
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    Donec ullamcorper.
                  </p>
                </div>
              </a>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
              <a class="c-card block border shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                <div class="relative pb-48 overflow-hidden">
                  <img
                    class="absolute inset-0 h-full w-full object-cover p-4 rounded "
                    src="https://i.ibb.co/nBRQgmq/IMG-20221013-204524-526.jpg"
                    alt=""
                  />
                </div>
                <div class="p-4">
                  <Link class="inline-block px-4 py-2 leading-none bg-pink-600  rounded-full font-semibold uppercase tracking-wide text-xs">
                    View All <i class="ri-arrow-right-up-fill"></i>
                  </Link>
                  <Link class="inline-block px-4 py-1 leading-none bg-blue-600  rounded-full ml-2 font-semibold uppercase tracking-wide text-sm">
                    <i class="ri-contract-right-fill"></i>
                  </Link>
                  <h2 class="mt-2 mb-1 text-lg">
                    Shankhnaad : The Cultural Gem{" "}
                  </h2>
                  <p class="text-sm">
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    Donec ullamcorper.
                  </p>
                </div>
              </a>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
              <a class="c-card block border shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                <div class="relative pb-48 overflow-hidden">
                  <img
                    class="absolute inset-0 h-full w-full object-cover p-4 rounded "
                    src="https://mahasangram.in/static/media/DSC_0017_Original.b2fc8657a34884bd4b48.JPG"
                    alt=""
                  />
                </div>
                <div class="p-4">
                  <Link class="inline-block px-4 py-2 leading-none bg-pink-600  rounded-full font-semibold uppercase tracking-wide text-xs">
                    View All <i class="ri-arrow-right-up-fill"></i>
                  </Link>
                  <Link class="inline-block px-4 py-1 leading-none bg-blue-600  rounded-full ml-2 font-semibold uppercase tracking-wide text-sm">
                    <i class="ri-contract-right-fill"></i>
                  </Link>
                  <h2 class="mt-2 mb-1 text-lg">
                    Mahasangram : The Sport's Fest{" "}
                  </h2>
                  <p class="text-sm">
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    Donec ullamcorper.
                  </p>
                </div>
              </a>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
              <a class="c-card block border shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                <div class="relative pb-48 overflow-hidden">
                  <img
                    class="absolute inset-0 h-full w-full object-cover p-4 rounded "
                    src={nccimg}
                    alt=""
                  />
                </div>
                <div class="p-4">
                  <Link class="inline-block px-4 py-2 leading-none bg-pink-600  rounded-full font-semibold uppercase tracking-wide text-xs">
                    View All <i class="ri-arrow-right-up-fill"></i>
                  </Link>
                  <Link class="inline-block px-4 py-1 leading-none bg-blue-600  rounded-full ml-2 font-semibold uppercase tracking-wide text-sm">
                    <i class="ri-contract-right-fill"></i>
                  </Link>
                  <h2 class="mt-2 mb-1 text-lg">
                    National Cadet Corps : NCC{" "}
                  </h2>
                  <p class="text-sm">
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    Donec ullamcorper.
                  </p>
                </div>
              </a>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
              <a class="c-card block border shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                <div class="relative pb-48 overflow-hidden">
                  <img
                    class="absolute inset-0 h-full w-full object-cover p-4 rounded "
                    src={grpimg6}
                    alt=""
                  />
                </div>
                <div class="p-4">
                  <Link class="inline-block px-4 py-2 leading-none bg-pink-600  rounded-full font-semibold uppercase tracking-wide text-xs">
                    View All <i class="ri-arrow-right-up-fill"></i>
                  </Link>
                  <Link class="inline-block px-4 py-1 leading-none bg-blue-600  rounded-full ml-2 font-semibold uppercase tracking-wide text-sm">
                    <i class="ri-contract-right-fill"></i>
                  </Link>
                  <h2 class="mt-2 mb-1 text-lg">
                    Senior Junior Bond String Pearls{" "}
                  </h2>
                  <p class="text-sm">
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    Donec ullamcorper.
                  </p>
                </div>
              </a>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
              <a class="c-card block border shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                <div class="relative pb-48 overflow-hidden">
                  <img
                    class="absolute inset-0 h-full w-full object-cover p-4 rounded "
                    src={grpimg1}
                    alt=""
                  />
                </div>
                <div class="p-4">
                  <Link class="inline-block px-4 py-2 leading-none bg-pink-600  rounded-full font-semibold uppercase tracking-wide text-xs">
                    View All <i class="ri-arrow-right-up-fill"></i>
                  </Link>
                  <Link class="inline-block px-4 py-1 leading-none bg-blue-600  rounded-full ml-2 font-semibold uppercase tracking-wide text-sm">
                    <i class="ri-contract-right-fill"></i>
                  </Link>
                  <h2 class="mt-2 mb-1 text-lg">
                    Batchmates : The Absolute Bond{" "}
                  </h2>
                  <p class="text-sm">
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    Donec ullamcorper.
                  </p>
                </div>
              </a>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
              <a class="c-card block border shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                <div class="relative pb-48 overflow-hidden">
                  <img
                    class="absolute inset-0 h-full w-full object-cover p-4 rounded "
                    src={grpimg13}
                    alt=""
                  />
                </div>
                <div class="p-4">
                  <Link class="inline-block px-4 py-2 leading-none bg-pink-600  rounded-full font-semibold uppercase tracking-wide text-xs">
                    View All <i class="ri-arrow-right-up-fill"></i>
                  </Link>
                  <Link class="inline-block px-4 py-1 leading-none bg-blue-600  rounded-full ml-2 font-semibold uppercase tracking-wide text-sm">
                    <i class="ri-contract-right-fill"></i>
                  </Link>
                  <h2 class="mt-2 mb-1 text-lg">
                    Induction Chapter : The Beginning{" "}
                  </h2>
                  <p class="text-sm">
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    Donec ullamcorper.
                  </p>
                </div>
              </a>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
              <a class="c-card block border shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                <div class="relative pb-48 overflow-hidden">
                  <img
                    class="absolute inset-0 h-full w-full object-cover p-4 rounded "
                    src={grpimg5}
                    alt=""
                  />
                </div>
                <div class="p-4">
                  <Link class="inline-block px-4 py-2 leading-none bg-pink-600  rounded-full font-semibold uppercase tracking-wide text-xs">
                    View All <i class="ri-arrow-right-up-fill"></i>
                  </Link>
                  <Link class="inline-block px-4 py-1 leading-none bg-blue-600  rounded-full ml-2 font-semibold uppercase tracking-wide text-sm">
                    <i class="ri-contract-right-fill"></i>
                  </Link>
                  <h2 class="mt-2 mb-1 text-lg">
                    UIT Rgpv : Amazing Campus{" "}
                  </h2>
                  <p class="text-sm">
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    Donec ullamcorper.
                  </p>
                </div>
              </a>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
              <a class="c-card block border shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                <div class="relative pb-48 overflow-hidden">
                  <img
                    class="absolute inset-0 h-full w-full object-cover p-4 rounded "
                    src={grpimg2}
                    alt=""
                  />
                </div>
                <div class="p-4">
                  <Link class="inline-block px-4 py-2 leading-none bg-pink-600  rounded-full font-semibold uppercase tracking-wide text-xs">
                    View All <i class="ri-arrow-right-up-fill"></i>
                  </Link>
                  <Link class="inline-block px-4 py-1 leading-none bg-blue-600  rounded-full ml-2 font-semibold uppercase tracking-wide text-sm">
                    <i class="ri-contract-right-fill"></i>
                  </Link>
                  <h2 class="mt-2 mb-1 text-lg">
                    Departmental Events : Absolute Fun{" "}
                  </h2>
                  <p class="text-sm">
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    Donec ullamcorper.
                  </p>
                </div>
              </a>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
              <a class="c-card block border shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                <div class="relative pb-48 overflow-hidden">
                  <img
                    class="absolute inset-0 h-full w-full object-cover p-4 rounded "
                    src={grpimg11}
                    alt=""
                  />
                </div>
                <div class="p-4">
                  <Link class="inline-block px-4 py-2 leading-none bg-pink-600  rounded-full font-semibold uppercase tracking-wide text-xs">
                    View All <i class="ri-arrow-right-up-fill"></i>
                  </Link>
                  <Link class="inline-block px-4 py-1 leading-none bg-blue-600  rounded-full ml-2 font-semibold uppercase tracking-wide text-sm">
                    <i class="ri-contract-right-fill"></i>
                  </Link>
                  <h2 class="mt-2 mb-1 text-lg">
                    Various Seminars And Workshops{" "}
                  </h2>
                  <p class="text-sm">
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    Donec ullamcorper.
                  </p>
                </div>
              </a>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
              <a class="c-card block border shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                <div class="relative pb-48 overflow-hidden">
                  <img
                    class="absolute inset-0 h-full w-full object-cover p-4 rounded "
                    src={grpimg12}
                    alt=""
                  />
                </div>
                <div class="p-4">
                  <Link class="inline-block px-4 py-2 leading-none bg-pink-600  rounded-full font-semibold uppercase tracking-wide text-xs">
                    View All <i class="ri-arrow-right-up-fill"></i>
                  </Link>
                  <Link class="inline-block px-4 py-1 leading-none bg-blue-600  rounded-full ml-2 font-semibold uppercase tracking-wide text-sm">
                    <i class="ri-contract-right-fill"></i>
                  </Link>
                  <h2 class="mt-2 mb-1 text-lg">
                    Various Departments : Learning Hub{" "}
                  </h2>
                  <p class="text-sm">
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    Donec ullamcorper.
                  </p>
                </div>
              </a>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
              <a class="c-card block border shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                <div class="relative pb-48 overflow-hidden">
                  <img
                    class="absolute inset-0 h-full w-full object-cover p-4 rounded "
                    src={grpimg9}
                    alt=""
                  />
                </div>
                <div class="p-4">
                  <Link class="inline-block px-4 py-2 leading-none bg-pink-600  rounded-full font-semibold uppercase tracking-wide text-xs">
                    View All <i class="ri-arrow-right-up-fill"></i>
                  </Link>
                  <Link class="inline-block px-4 py-1 leading-none bg-blue-600  rounded-full ml-2 font-semibold uppercase tracking-wide text-sm">
                    <i class="ri-contract-right-fill"></i>
                  </Link>
                  <h2 class="mt-2 mb-1 text-lg">
                    Hostel Events : The Memories{" "}
                  </h2>
                  <p class="text-sm">
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    Donec ullamcorper.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </body>

      
      <Footer></Footer>
    </>
  );
};

export default PhotoGaller;

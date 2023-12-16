import React from "react";
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

const PhotoGaller = () => {
  return (
    <>
      <Navbar></Navbar>

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

      {/* <div class="grid grid-cols-2 md:grid-cols-4 px-24 py-10 cursor-default gap-4">
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
              alt=""
            />
          </div>
        </div>
      </div> */}
      <Footer></Footer>
    </>
  );
};

export default PhotoGaller;

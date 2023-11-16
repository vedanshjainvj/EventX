import React from "react";
import shankhnaadvdo from "../assets/shankhnaadvideo.mp4"
import mahavideo from '../assets/mahavideo.mp4'
import vijayvideo from '../assets/vijayvideo.mp4'
import coverimg1 from '../assets/cover-vdo1.png'
import coverimg2 from '../assets/cover-vdo3.jpeg'
import coverimg3 from '../assets/cover-vdo2.png'

const VIdeographs = () => {
  return (
    <>
      <section class="">
  <div class="container px-24 py-24 mx-auto flex flex-wrap">
    <div class="flex w-full mb-20 flex-wrap">
      <h1 class="sm:text-3xl text-2xl font-medium title-font lg:w-1/3 lg:mb-0 mb-4">Memories : Also called as college life</h1>
      <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">College life, a tapestry of vibrant experiences, is adorned with the priceless jewels of cherished memories, creating a mosaic of laughter, friendship, and growth that lasts a lifetime.</p>
    </div>
    <div class="flex flex-wrap md:-m-2 -m-1">
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
        <video src={vijayvideo} controls poster={coverimg3} className="w-full border-2 rounded-lg border-gray-500 object-cover h-full object-center block"></video>
        </div>
        <div class="md:p-2 p-1 w-full">
        <video src={mahavideo} controls poster={coverimg2} className="w-full border-2 rounded-lg border-gray-500 object-cover h-full object-center block"></video>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-full">
        <video src={shankhnaadvdo} controls poster={coverimg1} className="w-full border-2 rounded-lg border-gray-500 object-cover h-full object-center block"></video>
        </div>
        <div class="md:p-2 p-1 w-1/2">
        <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/503x303"/>        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/503x303"/>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default VIdeographs;

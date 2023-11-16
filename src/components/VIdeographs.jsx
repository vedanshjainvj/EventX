import React from "react";
import shankhnaadvdo from "../assets/shankhnaadvideo.mp4"
import mahavideo from '../assets/mahavideo.mp4'
import coverimg1 from '../assets/cover-vdo1.png'
import coverimg2 from '../assets/cover-vdo3.jpeg'

const VIdeographs = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
  <div class="container px-24 py-24 mx-auto flex flex-wrap">
    <div class="flex w-full mb-20 flex-wrap">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Master Cleanse Reliac Heirloom</h1>
      <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
    </div>
    <div class="flex flex-wrap md:-m-2 -m-1">
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
        <video src={shankhnaadvdo} controls poster={coverimg1} className="w-full object-cover h-full object-center block"></video>
        </div>
        <div class="md:p-2 p-1 w-full">
        <video src={mahavideo} controls poster={coverimg2} className="w-full object-cover h-full object-center block"></video>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-full">
        <video src={shankhnaadvdo} controls poster={coverimg1} className="w-full object-cover h-full object-center block"></video>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <video src={shankhnaadvdo} controls className="w-full object-cover h-full object-center block"></video>
        </div>
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

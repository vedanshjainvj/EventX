import React from "react";
import shankhnaadvdo from "../assets/shankhnaadvideo.mp4";
import mahavideo from "../assets/mahavideo.mp4";
import vijayvideo from "../assets/vijayvideo.mp4";
import coverimg1 from "../assets/cover-vdo1.png";
import coverimg2 from "../assets/coverimg24.png";
import coverimg3 from "../assets/cover-vdo2.png";
import shankhnaadimg from "../assets/shankhnaadimg2.jpg";

const VIdeographs = () => {
  return (
    <>
    <main className="flex mb-0 flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-12 mt-20">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-5xl">
          Memories X 
          <span className="relative whitespace-nowrap text-pink-700">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/90"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative ml-4">Glimpses</span>
          </span>
        </h1>
      </main>
  <div class="container px-4 md:px-16 mt-12 mx-auto overflow-hidden">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <video
                  src={vijayvideo}
                  controls
                  poster={coverimg3}
                  className="w-full"
                ></video>
          <div class="p-6">
          <h2 class="tracking-widest text-xs title-font  font-medium text-gray-300 mb-1">Memories of Civil Culture</h2>
            <h1 class="title-font text-lg font-medium memories-heading w-full px-4 py-[3px] tracking-wider rounded-lg mb-2 mt-2">VIJAYPATH</h1>
            <p class="text-sm mb-3">Shankhnaad, the crown jewel of RGPV's cultural calendar,
                orchestrates an annual symphony of creativity and camaraderie.
                This grand festival, anchored in the spirit of promoting the
                Hindi language, unfolds a magnificent spectrum of events
                encompassing singing, dancing, photography, debates, treasure
                hunts, and painting.</p>
            <div class="flex items-center flex-wrap ">
              <a class=" bg-pink-600 px-2 py-1 rounded-lg text-sm inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>3.2K
              </span>
              <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>965
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <video
                  src={shankhnaadvdo}
                  controls
                  poster={coverimg1}
                  className="w-full"
                ></video>
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-300 mb-1">Grand Annual Cultural Fest</h2>
            <h1 class="title-font text-lg font-medium memories-heading px-4 py-[3px] tracking-wider rounded-lg mb-2 mt-2">SHANKHNAAD</h1>
            <p class="text-sm mb-3">Shankhnaad, the crown jewel of RGPV's cultural calendar,
                orchestrates an annual symphony of creativity and camaraderie.
                This grand festival, anchored in the spirit of promoting the
                Hindi language, unfolds a magnificent spectrum of events
                encompassing singing, dancing, photography, debates, treasure
                hunts, and painting.</p>
            <div class="flex items-center flex-wrap">
            <a class=" bg-yellow-500 px-2 py-1 rounded-lg text-sm inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>9.2K
              </span>
              <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>1.7k
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <video
                  src={mahavideo}
                  controls
                  poster={coverimg2}                  className="w-full"
                ></video>
          <div class="p-6">
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-300 mb-1">Mega Annual Sports Fest</h2>
          <h1 class="title-font text-lg font-medium memories-heading px-4 py-[3px] tracking-wider rounded-lg mb-2 mt-2">MAHASANGRAM</h1>
            <p class="text-sm mb-3">MAHASANGRAM is the biggest annual sports event of our
                prestigious institute - UIT, RGPV. It was first put together in
                2011 and the legacy continues till today! This event aims at
                achieving physical fitness and mental alertness along with
                inculcating qualities like unity, sportsmanship, team spirit,
                self confidence and leadership among participants.</p>
            <div class="flex items-center flex-wrap ">
            <a class=" bg-blue-600 px-2 py-1 rounded-lg text-sm inline-flex items-center md:mb-2 lg:mb-0">Learn More                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>5.6K
              </span>
              <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>1.2
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
    </>
  );
};

export default VIdeographs;

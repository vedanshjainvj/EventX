import React, { useRef } from "react";
import ecelleventimg from "../assets/ecelleventimg.jfif";
import mahasangramimg3 from "../assets/mahasangramimg3.jpg";
import codeadeptimg from "../assets/codeadeptimg.webp";
import tedximg from "../assets/tedximg.webp";
import shankhnaadimg2 from "../assets/shankhnaadimg2.webp";
import { motion, useScroll } from "framer-motion";

const Fest = () => {
  return (
    <>
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-12 mt-20">
        <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal sm:text-6xl">
          Rgpv Annual
          <span className="relative whitespace-nowrap text-pink-700">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/90"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative ml-4">Events</span>
          </span>
        </h1>
        <p className="mx-auto mt-12 text-lg px-1 lg:px-16 text-center md:px-16 md:text-lg md:leading-7">
          "College fests and technical events are the highlights of our
          educational journey, where we come together to celebrate, create
          lasting memories, and strengthen the bonds of joy and happiness that
          define our college experience."
        </p>
      </main>
      <section class="px-8 overflow-x-hidden">
        <div class="container px-5 py-16 mx-auto justify-center flex flex-wrap">
          <div class="flex  flex-wrap -m-4">
            <div class="p-4 lg:w-1/2 md:w-full ">
              <div class="flex  fest-card  rounded-lg py-4 px-3 text-center md:text-start  md:p-0 sm:flex-row flex-col items-center">
                <div
                  class="w-60 m-1 h-44 sm:mr-8 sm:mb-0 border border-yellow-500 md:border-r-2 md:border-blue-900 border-solid mb-4 inline-flex items-center justify-center fest-bg1 text-indigo-500 flex-shrink-0"
                  style={{ backgroundImage: `url(${shankhnaadimg2})` }}
                ></div>
                <div class="flex-grow md:pr-4">
                  <h2 class="text-xl title-font fest-heading text-center mb-2">
                    Shankhnaad
                  </h2>
                  <p class="leading-relaxed text-sm my-1 lg:my-2">
                    RGPV's cultural gem, hosts an annual celebration of
                    creativity. This grand festival features singing, dancing,
                    debates, and more, promoting Hindi language.
                  </p>

                  <a
                    href="https://www.instagram.com/shankhnaad_rgpv/"
                    target="blank"
                    class="mt-1  text-white inline-flex items-center bg-pink-600 text-xs rounded-lg px-2 py-1"
                  >
                    Instagram <i class="ri-instagram-fill ml-1"></i>
                  </a>
                  <a
                    href=""
                    target="blank"
                    class="mt-1 ml-1  text-white inline-flex items-center bg-blue-600 text-xs rounded-lg px-2 py-1"
                  >
                    Site <i class="ri-arrow-right-up-fill ml-1"></i>
                  </a>
                  <a
                    href=""
                    target="blank"
                    class="mt-1 ml-1  text-white inline-flex items-center bg-yellow-600 text-xs rounded-lg px-2 py-1"
                  >
                    Gallery <i class="ri-folder-image-fill ml-1"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="p-4 lg:w-1/2 md:w-full ">
              <div class="flex 2 fest-card py-4 px-3 md:p-0 rounded-lg text-center md:text-start  sm:flex-row flex-col items-center">
                <div
                  class="w-60 m-1 h-44 sm:mr-8 sm:mb-0 border border-yellow-500 md:border-r-2 md:border-blue-900 border-solid mb-4 inline-flex items-center justify-center fest-bg1 text-indigo-500 flex-shrink-0"
                  style={{ backgroundImage: `url(${tedximg})` }}
                ></div>
                <div class="flex-grow pr-4">
                  <h2 class="text-xl title-font fest-heading text-center mb-2">
                    TedX
                  </h2>
                  <p class="leading-relaxed text-sm  my-1 lg:my-2">
                    Tedx RGPV features your favorite stars and influencers on
                    stage, offering guidance and motivation to pursue your
                    passions and dreams.
                  </p>

                  <a
                    href="https://www.instagram.com/tedxrgpv/"
                    target="blank"
                    class="mt-1  text-white inline-flex items-center bg-pink-600 text-xs rounded-lg px-2 py-1"
                  >
                    Instagram <i class="ri-instagram-fill ml-1"></i>
                  </a>
                  <a
                    href=""
                    target="blank"
                    class="mt-1 ml-1  text-white inline-flex items-center bg-blue-600 text-xs rounded-lg px-2 py-1"
                  >
                    Site <i class="ri-arrow-right-up-fill ml-1"></i>
                  </a>
                  <a
                    href=""
                    target="blank"
                    class="mt-1 ml-1  text-white inline-flex items-center bg-yellow-600 text-xs rounded-lg px-2 py-1"
                  >
                    Gallery <i class="ri-folder-image-fill ml-1"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="p-4 lg:w-1/2 md:w-full ">
              <div class="flex 2 fest-card py-4 px-3 md:p-0 rounded-lg text-center md:text-start sm:flex-row flex-col items-center">
                <div
                  class="w-60 m-1 h-44 sm:mr-8 sm:mb-0 border border-yellow-500 md:border-r-2 md:border-blue-900 border-solid mb-4 inline-flex items-center justify-center fest-bg1 text-indigo-500 flex-shrink-0"
                  style={{ backgroundImage: `url(${mahasangramimg3})` }}
                ></div>
                <div class="flex-grow pr-4">
                  <h2 class="text-xl title-font fest-heading text-center mb-2">
                    Mahasangram
                  </h2>
                  <p class="leading-relaxed text-sm my-1 lg:my-2">
                    UIT RGPV's premier annual sports event since 2011, fosters
                    physical fitness, mental alertness, unity, sportsmanship,
                    team spirit, confidence, and leadership.
                  </p>

                  <a
                    href="https://www.instagram.com/mahasangram_x/"
                    target="blank"
                    class="mt-1  text-white inline-flex items-center bg-pink-600 text-xs rounded-lg px-2 py-1"
                  >
                    Instagram <i class="ri-instagram-fill ml-1"></i>
                  </a>
                  <a
                    href=""
                    target="blank"
                    class="mt-1 ml-1  text-white inline-flex items-center bg-blue-600 text-xs rounded-lg px-2 py-1"
                  >
                    Site <i class="ri-arrow-right-up-fill ml-1"></i>
                  </a>
                  <a
                    href=""
                    target="blank"
                    class="mt-1 ml-1  text-white inline-flex items-center bg-yellow-600 text-xs rounded-lg px-2 py-1"
                  >
                    Gallery <i class="ri-folder-image-fill ml-1"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="p-4 lg:w-1/2 md:w-full ">
              <div class="flex 2 fest-card py-4 px-3 md:p-0 rounded-lg text-center md:text-start sm:flex-row flex-col items-center">
                <div
                  class="w-60 m-1 h-44 sm:mr-8 sm:mb-0 border border-yellow-500 md:border-r-2 md:border-blue-900 border-solid mb-4 inline-flex items-center justify-center fest-bg1 text-indigo-500 flex-shrink-0"
                  style={{ backgroundImage: `url(${ecelleventimg})` }}
                ></div>
                <div class="flex-grow pr-4">
                  <h2 class="text-xl title-font fest-heading text-center mb-2">
                    Imprenditore
                  </h2>
                  <p class="leading-relaxed text-sm my-1 lg:my-2">
                    Imprenditore, E-Cell annual fest, promotes entrepreneurship
                    through awareness. Aims to inspire and nurture
                    entrepreneurial spirit and mindset.
                  </p>

                  <a
                    href="https://www.instagram.com/ecell_rgpv/"
                    target="blank"
                    class="mt-1  text-white inline-flex items-center bg-pink-600 text-xs rounded-lg px-2 py-1"
                  >
                    Instagram <i class="ri-instagram-fill ml-1"></i>
                  </a>
                  <a
                    href=""
                    target="blank"
                    class="mt-1 ml-1  text-white inline-flex items-center bg-blue-600 text-xs rounded-lg px-2 py-1"
                  >
                    Site <i class="ri-arrow-right-up-fill ml-1"></i>
                  </a>
                  <a
                    href=""
                    target="blank"
                    class="mt-1 ml-1  text-white inline-flex items-center bg-yellow-600 text-xs rounded-lg px-2 py-1"
                  >
                    Gallery <i class="ri-folder-image-fill ml-1"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2 md:w-full ">
              <div class="flex 2 fest-card py-4 px-3 md:p-0 rounded-lg text-center md:text-start sm:flex-row flex-col items-center">
                <div
                  class="w-60 m-1 h-44 sm:mr-8 sm:mb-0 border border-yellow-500 md:border-r-2 md:border-blue-900 border-solid mb-4 inline-flex items-center justify-center fest-bg1 text-indigo-500 flex-shrink-0"
                  style={{ backgroundImage: `url(${codeadeptimg})` }}
                ></div>
                <div class="flex-grow pr-4">
                  <h2 class="text-xl title-font fest-heading text-center mb-2">
                    CodeAdept
                  </h2>
                  <p class="leading-relaxed text-sm my-1 lg:my-2">
                    Technical Event conducted by the IT Dept. of UIT, RGPV.
                    Coding Competition | Sharpens your placement stratergies |
                    Enhance your coding skills.
                  </p>

                  <a
                    href="https://www.instagram.com/codeadept/"
                    target="blank"
                    class="mt-1  text-white inline-flex items-center bg-pink-600 text-xs rounded-lg px-2 py-1"
                  >
                    Instagram <i class="ri-instagram-fill ml-1"></i>
                  </a>
                  <a
                    href=""
                    target="blank"
                    class="mt-1 ml-1  text-white inline-flex items-center bg-blue-600 text-xs rounded-lg px-2 py-1"
                  >
                    Site <i class="ri-arrow-right-up-fill ml-1"></i>
                  </a>
                  <a
                    href=""
                    target="blank"
                    class="mt-1 ml-1  text-white inline-flex items-center bg-yellow-600 text-xs rounded-lg px-2 py-1"
                  >
                    Gallery <i class="ri-folder-image-fill ml-1"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2 md:w-full ">
              <div class="flex 2 fest-card py-4 px-3 md:p-0 rounded-lg text-center md:text-start sm:flex-row flex-col items-center">
                <div
                  class="w-60 m-1 h-44 sm:mr-8 sm:mb-0 border border-yellow-500 md:border-r-2 md:border-blue-900 border-solid mb-4 inline-flex items-center justify-center fest-bg1 text-indigo-500 flex-shrink-0"
                  style={{
                    backgroundImage: `url(https://blog-c7ff.kxcdn.com/blog/wp-content/uploads/2019/09/Capture_HAckathon_wordpress-1280x720.jpg)`,
                  }}
                ></div>
                <div class="flex-grow pr-4">
                  <h2 class="text-xl title-font fest-heading text-center mb-2 ">
                    Web-Xplore
                  </h2>
                  <p class="leading-relaxed text-sm my-1 lg:my-2">
                    Webxplore, an incredible tech event by the CSE department,
                    strives to create outstanding web projects within a short
                    timeframe.
                  </p>

                  <a
                    href=""
                    target="blank"
                    class="mt-1  text-white inline-flex items-center bg-pink-600 text-xs rounded-lg px-2 py-1"
                  >
                    Instagram <i class="ri-instagram-fill ml-1"></i>
                  </a>
                  <a
                    href=""
                    target="blank"
                    class="mt-1 ml-1  text-white inline-flex items-center bg-blue-600 text-xs rounded-lg px-2 py-1"
                  >
                    Site <i class="ri-arrow-right-up-fill ml-1"></i>
                  </a>
                  <a
                    href=""
                    target="blank"
                    class="mt-1 ml-1  text-white inline-flex items-center bg-yellow-600 text-xs rounded-lg px-2 py-1"
                  >
                    Gallery <i class="ri-folder-image-fill ml-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default Fest;

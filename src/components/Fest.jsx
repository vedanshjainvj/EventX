import React from "react";
import ecelleventimg from '../assets/ecelleventimg.jfif'

const Fest = () => {
  return (
    <>
    <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-12 mt-20">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-7xl">
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
      <p className="mx-auto mt-12 text-center px-32 text-lg leading-7">
      "College fests and technical events are the highlights of our educational journey, where we come together to celebrate, create lasting memories, and strengthen the bonds of joy and happiness that define our college experience."
      </p>
     
    </main>
      <section class="px-8">
        <div class="container px-5 py-16 mx-auto flex flex-wrap">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/2 md:w-full ">
              <div class="flex 2 fest-card rounded-lg sm:flex-row flex-col items-center">
                <div class="w-60 m-1 h-48 sm:mr-8 sm:mb-0 border-r-2 border-purple-900 border-solid mb-4 inline-flex items-center justify-center fest-bg1 text-indigo-500 flex-shrink-0" style={{backgroundImage:  `url(${ecelleventimg})`}}></div>
                <div class="flex-grow pr-4" >
                  <h2 class="text-xl title-font fest-heading text-center mb-2">
                    Shankhnaad
                  </h2>
                  <p class="leading-relaxed text-sm ">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine vedansh jain damoh mp .
                  </p>
                  <p class="leading-relaxed text-sm mt-1">
                    Hosted by : <span className="text-purple-400 text-sm ml-2">Seniors</span>
                  </p>
                  <a href="" class="mt-1  text-indigo-200 inline-flex items-center">
                    Visit Page ...
                  </a>
                </div>
              </div>
            </div>

            <div class="p-4 lg:w-1/2 md:w-full ">
              <div class="flex 2 fest-card rounded-lg sm:flex-row flex-col items-center">
                <div class="w-60 m-1 h-48 sm:mr-8 sm:mb-0 border-r-2 border-purple-900 border-solid mb-4 inline-flex items-center justify-center fest-bg1 text-indigo-500 flex-shrink-0" style={{backgroundImage:  `url(${ecelleventimg})`}}></div>
                <div class="flex-grow pr-4" >
                  <h2 class="text-xl title-font fest-heading text-center mb-2">
                    TedX
                  </h2>
                  <p class="leading-relaxed text-sm ">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine vedansh jain damoh mp .
                  </p>
                  <p class="leading-relaxed text-sm mt-1">
                    Hosted by : <span className="text-purple-400 text-sm ml-2">Asper</span>
                  </p>
                  <a href="" class="mt-1  text-indigo-200 inline-flex items-center">
                    Visit Page ...
                  </a>
                </div>
              </div>
            </div>
            
            <div class="p-4 lg:w-1/2 md:w-full ">
              <div class="flex 2 fest-card rounded-lg sm:flex-row flex-col items-center">
                <div class="w-60 m-1 h-48 sm:mr-8 sm:mb-0 border-r-2 border-purple-900 border-solid mb-4 inline-flex items-center justify-center fest-bg1 text-indigo-500 flex-shrink-0" style={{backgroundImage:  `url(${ecelleventimg})`}}></div>
                <div class="flex-grow pr-4" >
                  <h2 class="text-xl title-font fest-heading text-center mb-2">
                    Mahasangram
                  </h2>
                  <p class="leading-relaxed text-sm ">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine vedansh jain damoh mp .
                  </p>
                  <p class="leading-relaxed text-sm mt-1">
                    Hosted by : <span className="text-purple-400 text-sm ml-2">Seniors</span>
                  </p>
                  <a href="" class="mt-1  text-indigo-200 inline-flex items-center">
                    Visit Page ...
                  </a>
                </div>
              </div>
            </div>

            <div class="p-4 lg:w-1/2 md:w-full ">
              <div class="flex 2 fest-card rounded-lg sm:flex-row flex-col items-center">
                <div class="w-60 m-1 h-48 sm:mr-8 sm:mb-0 border-r-2 border-purple-900 border-solid mb-4 inline-flex items-center justify-center fest-bg1 text-indigo-500 flex-shrink-0" style={{backgroundImage:  `url(${ecelleventimg})`}}></div>
                <div class="flex-grow pr-4" >
                  <h2 class="text-xl title-font fest-heading text-center mb-2">
                    Imprenditore
                  </h2>
                  <p class="leading-relaxed text-sm ">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine vedansh jain damoh mp .
                  </p>
                  <p class="leading-relaxed text-sm mt-1">
                    Hosted by : <span className="text-purple-400 text-sm ml-2">E-cell</span>
                  </p>
                  <a href="" class="mt-1  text-indigo-200 inline-flex items-center">
                    Visit Page ...
                  </a>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2 md:w-full ">
              <div class="flex 2 fest-card rounded-lg sm:flex-row flex-col items-center">
                <div class="w-60 m-1 h-48 sm:mr-8 sm:mb-0 border-r-2 border-purple-900 border-solid mb-4 inline-flex items-center justify-center fest-bg1 text-indigo-500 flex-shrink-0" style={{backgroundImage:  `url(${ecelleventimg})`}}></div>
                <div class="flex-grow pr-4" >
                  <h2 class="text-xl title-font fest-heading text-center mb-2">
                    CodeAdept
                  </h2>
                  <p class="leading-relaxed text-sm ">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine vedansh jain damoh mp .
                  </p>
                  <p class="leading-relaxed text-sm mt-1">
                    Hosted by : <span className="text-purple-400 text-sm ml-2">IT Department</span>
                  </p>
                  <a href="" class="mt-1  text-indigo-200 inline-flex items-center">
                    Visit Page ...
                  </a>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2 md:w-full ">
              <div class="flex 2 fest-card rounded-lg sm:flex-row flex-col items-center">
                <div class="w-60 m-1 h-48 sm:mr-8 sm:mb-0 border-r-2 border-purple-900 border-solid mb-4 inline-flex items-center justify-center fest-bg1 text-indigo-500 flex-shrink-0" style={{backgroundImage:  `url(${ecelleventimg})`}}></div>
                <div class="flex-grow pr-4" >
                  <h2 class="text-xl title-font fest-heading text-center mb-2">
                    Web-A-Thon
                  </h2>
                  <p class="leading-relaxed text-sm ">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine vedansh jain damoh mp .
                  </p>
                  <p class="leading-relaxed text-sm mt-1">
                    Hosted by : <span className="text-purple-400 text-sm ml-2">CSE Department</span>
                  </p>
                  <a href="" class="mt-1  text-indigo-200 inline-flex items-center">
                    Visit Page ...
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

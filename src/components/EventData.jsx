import React from "react";
import stats1 from "../assets/stats2.png";
import stats2 from "../assets/stats7.png";
import stats3 from "../assets/stats8.png";
import stats4 from "../assets/stats9.png";
import eventsgraph from '../assets/eventsgraph.png';

const PastEvents = () => {
  return (
    <>
      <main className="flex mt-4 flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-12 mb-10">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-5xl">
          Event
          <span className="relative whitespace-nowrap text-pink-700">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/90"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative ml-4">Statistics</span>
          </span>
        </h1>
      </main>
      <div class="container mx-auto md:px-6 lg:px-16">
        <section class="mb-10 text-center">
          <div class="grid grid-cols-2 gap-x-6 md:grid-cols-3 lg:grid-cols-6 lg:gap-x-6">
            <div class="mb-12 stats-cards border-2 rounded-xl border-purple-400 lg:mb-0">
              <div class="mb-0 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-sm">
                <img className="h-32 w-32" src={stats1} alt="" />
              </div>
              <h5 class="mb-4 text-lg">Offline Events</h5>
            </div>

            <div class="mb-12 stats-cards border-2 rounded-xl border-purple-400 lg:mb-0">
              <div class="mb-0 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-sm">
                <img className="h-32 w-32" src={stats2} alt="" />
              </div>
              <h5 class="mb-4 text-lg">Online Events</h5>
            </div>

            <div class="mb-12 stats-cards border-2 rounded-xl border-blue-300 md:mb-0">
              <div class="mb-0 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-sm">
                <img className="h-32 w-32" src={stats3} alt="" />
              </div>
              <h5 class="mb-4 text-lg">Tech Events</h5>
            </div>

            <div class="mb-12 stats-cards border-2 rounded-xl border-blue-300 md:mb-0">
              <div class="mb-0 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-sm">
                <img className="h-32 w-32" src={stats4} alt="" />
              </div>
              <h5 class="mb-4 text-lg">Non Tech Events</h5>
            </div>
            <div class="mb-12 stats-cards border-2 rounded-xl border-violet-300 md:mb-0">
              <div class="mb-0 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-sm">
                <img className="h-32 w-32" src={stats1} alt="" />
              </div>
              <h5 class="mb-4 text-lg">Offline Events</h5>
            </div>
            <div class="mb-12 stats-cards border-2 rounded-xl border-violet-300 md:mb-0">
              <div class="mb-0 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-sm">
                <img className="h-32 w-32" src={stats1} alt="" />
              </div>
              <h5 class="mb-4 text-lg">Offline Events</h5>
            </div>
          </div>
        </section>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-2 lg:pb-10">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block lg:pl-1 py-px mb-4 text-sm font-semibold tracking-wider text-pink-700 uppercase rounded-full">
                Event Highlights
              </p>
            </div>
            <h2 className="max-w-lg mb-6  text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none">
              Overall Yearwise Events &
              <br className="hidden md:block" />
              Selection Details
            </h2>
            <p className="text-base text-gray-4 00 md:text-lg">
            The abundance of events on campus is a testament to the enthusiasm of clubs, active student involvement, and the dedicated support of college faculty. This collaborative effort fosters a vibrant and engaging campus culture, where a diverse range of activities enrich the overall student experience, creating a lively and dynamic educational environment.






            </p>
          </div>
          
        </div>
        <div className="relative">
          <img src={eventsgraph} className='w-full' alt="" />
        </div>
      </div>
    </div>
    </>
  );
};

export default PastEvents;

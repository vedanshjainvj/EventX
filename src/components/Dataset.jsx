import React from "react";
import barchart4 from "../assets/barchart4.png";

const Dataset = () => {
  return (
    <>
        <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-12 mt-20">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-5xl">
          Website
          <span className="relative whitespace-nowrap text-pink-700">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/90"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative ml-4">Performance</span>
          </span>
        </h1>
      </main>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-24 row-gap-8 lg:grid-cols-5">
        <div className="grid gap-8 lg:col-span-2">
          <div>
            <p className="mb-2 text-lg font-bold">Old man</p>
            <p className="text-gray-300">
              An old man lived in the village. He was one of the most
              unfortunate people in the world. The whole village was tired of
              him, he was always gloomy, he constantly complained.
            </p>
          </div>
          <div>
            <p className="mb-2 text-lg font-bold">The Wise Man</p>
            <p className="text-gray-300">
              People have been coming to the wise man, complaining about the
              same problems every time. One day he told them a joke and everyone
              roared in laughter.
            </p>
          </div>
        </div>
        <div className="grid border divide-y rounded lg:col-span-3 sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
          <div className="flex flex-col justify-between p-10">
            <div>
              <p className="text-lg font-semibold text-gray-800 sm:text-base">
                Funds Raised
              </p>
              <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                $84 000 000
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-800 sm:text-base">
                Products
              </p>
              <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                52
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-800 sm:text-base">
                Downloads
              </p>
              <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                186M
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-10">
            <div>
              <p className="text-lg font-semibold text-gray-800 sm:text-base">
                Users
              </p>
              <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                86K
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-800 sm:text-base">
                Installations
              </p>
              <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                917 000
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-800 sm:text-base">
                Subscribers
              </p>
              <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                213K
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Dataset;

import React from "react";
import './slider.css'


const SportsGroups = () => {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl text-white md:px-24 lg:px-8 lg:pt-14  lg:pb-0">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-5xl md:mb-12">
        <main className="flex mb-6 flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-12 mt-20">
        <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-normal sm:text-5xl">
          Sports
          <span className="relative ml-4 whitespace-nowrap text-pink-700">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/90"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative ml-4">Groups</span>
          </span>
        </h1>
      </main>
          <p className="text-base text-center px-4 md:px-0 text-gray-300 md:text-lg">
          College sports provide a sense of community, foster teamwork, enhance physical health, instill discipline, and offer stress relief, contributing to holistic student development and memorable university experiences.
          </p>
        </div>
        <div className="grid max-w-screen-lg mx-auto overflow-hidden justify-center space-y-6 lg:grid-cols-2 lg:space-y-0 lg:divide-x">
          <div className="space-y-6 sm:px-16">
            <div className="flex flex-col items-center md:justify-normal max-w-md sm:flex-row ">
              <div className="mb-4 mr-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-pink-500">
                  <img
                    className="w-12 h-12"
                    src="https://static.thenounproject.com/png/108498-200.png"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <h6 className="mb-2 text-xl text-center md:text-start font-bold leading-5">
                  Chess Club
                </h6>
                <p className="text-sm text-center md:text-start text-gray-400">
                  Lead : Abhishek Dixit (2021-2025 @Cse)
                </p>
                <p className="text-sm text-center md:text-start text-gray-500">
                  Join Club <span className="text-white text-lg"><a href=""><i class="ri-arrow-right-up-line"></i></a></span>
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center md:justify-normal max-w-md sm:flex-row">
              <div className="mb-4 mr-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-400">
                  <img
                    className="w-8 h-8 mix-blend-multiply"
                    src="https://static.thenounproject.com/png/2005489-200.png"
                    alt=""
                  />
                </div>
              </div>
              <div>
              <h6 className="mb-2 text-xl text-center md:text-start font-bold leading-5">
                  Cricket Club
                </h6>
                <p className="text-sm text-center md:text-start text-gray-400">
                  Lead : Abhishek Dixit (2021-2025 @Cse)
                </p>
                <p className="text-sm text-center md:text-start text-gray-500">
                  Join Club <span className="text-white text-lg"><a href=""><i class="ri-arrow-right-up-line"></i></a></span>
                </p>
              </div>
            </div>
            <div className="flex flex-col max-w-md items-center md:justify-normal sm:flex-row">
              <div className="mb-4 mr-4">
                <div className="flex items-center justify-center  w-16 h-16 rounded-full bg-blue-500">
                  <img
                    className="w-6 h-6 mix-blend-multiply"
                    src="https://cdn-icons-png.flaticon.com/512/590/590371.png"
                    alt=""
                  />
                </div>
              </div>
              <div>
              <h6 className="mb-2 text-xl text-center md:text-start font-bold leading-5">
                  Badminton Club
                </h6>
                <p className="text-sm text-center md:text-start text-gray-400">
                  Lead : Abhishek Dixit (2021-2025 @Cse)
                </p>
                <p className="text-sm text-center md:text-start text-gray-500">
                  Join Club <span className="text-white text-lg"><a href=""><i class="ri-arrow-right-up-line"></i></a></span>
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6 sm:px-16">
            <div className="flex flex-col max-w-md items-center md:justify-normal sm:flex-row">
              <div className="mb-4 mr-4">
                <div className="flex items-center justify-center  w-16 h-16 rounded-full bg-pink-500">
                <img
                    className="w-12 p-2 h-12 mix-blend-multiply"
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
              </div>
              <div>
              <h6 className="mb-2 text-xl text-center md:text-start font-bold leading-5">
                  Football Club
                </h6>
                <p className="text-sm text-center md:text-start text-gray-400">
                  Lead : Abhishek Dixit (2021-2025 @Cse)
                </p>
                <p className="text-sm text-center md:text-start text-gray-500">
                  Join Club <span className="text-white text-lg"><a href=""><i class="ri-arrow-right-up-line"></i></a></span>
                </p>
              </div>
            </div>
            <div className="flex flex-col max-w-md items-center md:justify-normal sm:flex-row">
              <div className="mb-4 mr-4">
                <div className="flex items-center justify-center  w-16 h-16 rounded-full bg-yellow-400">
                <img
                    className="w-8 h-8 mix-blend-multiply"
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </div>
              </div>
              <div>
              <h6 className="mb-2 text-xl text-center md:text-start font-bold leading-5">
                  Volleyball Club
                </h6>
                <p className="text-sm text-center md:text-start text-gray-400">
                  Lead : Abhishek Dixit (2021-2025 @Cse)
                </p>
                <p className="text-sm text-center md:text-start text-gray-500">
                  Join Club <span className="text-white text-lg"><a href=""><i class="ri-arrow-right-up-line"></i></a></span>
                </p>
              </div>
            </div>
            <div className="flex flex-col max-w-md items-center md:justify-normal sm:flex-row">
              <div className="mb-4 mr-4">
                <div className="flex items-center justify-center  w-16 h-16 rounded-full bg-blue-500">
                <img
                    className="w-6 h-6 mix-blend-multiply"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4rQe10QSv8fGPGxwueQLiA-dEHVvkjOks_g&usqp=CAU"
                    alt=""
                  />
                </div>
              </div>
              <div>
              <h6 className="mb-2 text-xl text-center md:text-start font-bold leading-5">
                  Athletics Club
                </h6>
                <p className="text-sm text-center md:text-start text-gray-400">
                  Lead : Abhishek Dixit (2021-2025 @Cse)
                </p>
                <p className="text-sm text-center md:text-start text-gray-500">
                  Join Club <span className="text-white text-lg"><a href=""><i class="ri-arrow-right-up-line"></i></a></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="pt-10">
</section>


    </>
  );
};

export default SportsGroups;

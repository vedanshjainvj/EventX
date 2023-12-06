import React from 'react'
import codehacklogo from "../assets/codehacklogo.jpeg";
import codingwizlogo from "../assets/codingwizlogo2.jpg";

const DepartmentalClubs = () => {
  return (
    <>
    <main className="flex mb-10 flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-12 mt-20">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-5xl">
          Departmental
          <span className="relative whitespace-nowrap text-pink-700">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/90"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative ml-4">Clubs</span>
          </span>
        </h1>
      </main>
      <div class="flex items-center pb-10 justify-center">
        <div class="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          <div class="relative py-6 px-6 rounded-3xl club-cards w-64 my-4 shadow-xl">
            <div class=" text-white flex items-center absolute card-div-bg rounded-full py-4 px-4 z-50 shadow-xl  left-4 -top-6">
              <img
                src={codehacklogo}
                className="object-contain object-center p-1 rounded-full h-12 border-2 border-blue-400"
                alt=""
              />
            </div>
            <div class="mt-8">
              <p class="text-xl font-semibold my-2">Technophilic Club</p>
              <p class="text-sm font-semibold my-2">By - Civil Department</p>
              <div class="flex space-x-2 text-gray-400 text-sm">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                  repellat?
                </p>
              </div>
              <div class="border-t-2 mt-2"></div>
              <div className="flex gap-2 mt-4 social-links w-fit rounded-lg px-2">
                <h1 className="text-2xl">
                  <a href="" target="_blank">
                    <i class="ri-instagram-line"></i>
                  </a>
                </h1>
                <h1 className="text-2xl">
                  <a href="" target="_blank">
                    <i class="ri-linkedin-fill"></i>
                  </a>
                </h1>
                <h1 className="text-2xl">
                  <a href="" target="_blank">
                    <i class="ri-twitter-x-line"></i>
                  </a>
                </h1>
                <h1 className="text-2xl">
                  <a href="" target="_blank">
                    <i class="ri-links-line"></i>
                  </a>
                </h1>
                <h1 className="text-2xl">
                  <a href="" target="_blank">
                    <i class="ri-whatsapp-fill"></i>
                  </a>
                </h1>
              </div>
            </div>
          </div>

          <div class="relative py-6 px-6 club-cards rounded-3xl w-64 my-4 shadow-xl">
            <div class=" text-white flex items-center card-div-bg absolute rounded-full py-4 px-4 shadow-xl left-4 -top-6">
              <img
                src="https://logogen.gdscasu.com/logos/gdsc-logo.png"
                className="object-contain object-center border-2 p-2 border-blue-400 rounded-full h-12"
                alt=""
              />
            </div>
            <div class="mt-8">
            <p class="text-xl font-semibold my-2">Innovations @EC</p>
              <p class="text-sm font-semibold my-2">By - ECE Department</p>
              <div class="flex space-x-2 text-gray-400 text-sm">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                  repellat?
                </p>
              </div>
              <div class="border-t-2 mt-2"></div>

              <div className="flex gap-2 mt-4 social-links w-fit rounded-lg px-2">
                <h1 className="text-2xl">
                  <a href="" target="_blank">
                    <i class="ri-instagram-line"></i>
                  </a>
                </h1>
                <h1 className="text-2xl">
                  <a href="" target="_blank">
                    <i class="ri-linkedin-fill"></i>
                  </a>
                </h1>
                <h1 className="text-2xl">
                  <a href="" target="_blank">
                    <i class="ri-twitter-x-line"></i>
                  </a>
                </h1>
                <h1 className="text-2xl">
                  <a href="" target="_blank">
                    <i class="ri-links-line"></i>
                  </a>
                </h1>
                <h1 className="text-2xl">
                  <a href="" target="_blank">
                    <i class="ri-whatsapp-fill"></i>
                  </a>
                </h1>
              </div>
            </div>
          </div>

          <div class="relative  py-6 px-6 rounded-3xl w-64 my-4 club-cards shadow-xl">
            <div class=" text-white flex items-center absolute card-div-bg rounded-full py-4 px-4 shadow-xl left-4 -top-6">
              <img
                src={codingwizlogo}
                className="object-contain mix-blend-difference border-2 p-2 border-blue-400 object-center rounded-full h-12"
                alt=""
              />
            </div>
            <div class="mt-8">
            <p class="text-xl font-semibold my-2">DOIT Club</p>
              <p class="text-sm font-semibold my-2">By - IT Department</p>
              <div class="flex space-x-2 text-gray-400 text-sm">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                  repellat?
                </p>
              </div>
              <div class="border-t-2 mt-2"></div>

              <div className="flex gap-2 mt-4 social-links w-fit rounded-lg px-2">
                <h1 className="text-2xl">
                  <a href="" target="_blank">
                    <i class="ri-instagram-line"></i>
                  </a>
                </h1>
                <h1 className="text-2xl">
                  <a href="" target="_blank">
                    <i class="ri-linkedin-fill"></i>
                  </a>
                </h1>
                <h1 className="text-2xl">
                  <a href="" target="_blank">
                    <i class="ri-twitter-x-line"></i>
                  </a>
                </h1>
                <h1 className="text-2xl">
                  <a href="" target="_blank">
                    <i class="ri-links-line"></i>
                  </a>
                </h1>
                <h1 className="text-2xl">
                  <a href="" target="_blank">
                    <i class="ri-whatsapp-fill"></i>
                  </a>
                </h1>
              </div>
            </div>
          </div>

          <div class="relative  py-6 px-6 rounded-3xl w-64 my-4 club-cards shadow-xl">
            <div class=" text-white flex items-center absolute rounded-full card-div-bg py-4 px-4 shadow-xl left-4 -top-6">
              <img
                src="https://miro.medium.com/v2/resize:fit:2400/1*1bmmA88dVbYzsS-K6_FMgQ.png"
                className="border-2 p-2 border-blue-400 object-contain mix-blend-difference object-center rounded-full h-12"
                alt=""
              />
            </div>
            <div class="mt-8">
            <p class="text-xl font-semibold my-2">Technophilic Club</p>
              <p class="text-sm font-semibold my-2">By - EX Department</p>
              <div class="flex space-x-2 text-gray-400 text-sm">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                  repellat?
                </p>
              </div>
              <div class="border-t-2 mt-2"></div>

              <div className="flex gap-2 mt-4 social-links w-fit rounded-lg px-2">
                <h1 className="text-2xl">
                  <a href="" target="_blank">
                    <i class="ri-instagram-line"></i>
                  </a>
                </h1>
                <h1 className="text-2xl">
                  <a href="" target="_blank">
                    <i class="ri-linkedin-fill"></i>
                  </a>
                </h1>
                <h1 className="text-2xl">
                  <a href="" target="_blank">
                    <i class="ri-twitter-x-line"></i>
                  </a>
                </h1>
                <h1 className="text-2xl">
                  <a href="" target="_blank">
                    <i class="ri-links-line"></i>
                  </a>
                </h1>
                <h1 className="text-2xl">
                  <a href="" target="_blank">
                    <i class="ri-whatsapp-fill"></i>
                  </a>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DepartmentalClubs
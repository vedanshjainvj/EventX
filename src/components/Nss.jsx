import React from "react";
import nssimg from "../assets/nssimg2.jpg";
import nccimg from "../assets/nccimg.jpg";

const Nss = () => {
  return (
    <>
    <main className="flex mb-2 flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-12 mt-20">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-5xl">
          NCC And
          <span className="relative whitespace-nowrap text-pink-700">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/90"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative ml-4">NSS Unit</span>
          </span>
        </h1>
      </main>
      <div class="max-w-screen-lg mx-auto p-5 sm:p-10 md:px-16">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
          <div class=" overflow-hidden nss-card shadow-lg flex flex-col">
            <a href="#">
              <img class="w-full" src={nccimg} alt="Sunset in the mountains" />
            </a>
            <div class="px-6 py-4 mb-auto">
              <div class="mb-3">
                <a
                  href="#"
                  class="text-xs text-indigo-600 transition duration-500 ease-in-out"
                >
                  Selfless Service Towards Nation
                </a>
              </div>
              <a
                href="#"
                class="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
              >
                National Cadet Corps
              </a>
              <p class="text-gray-400 text-sm">
                It aims at creating a pool of organized, trained and motivated
                youth with leadership qualities in all walks of life, who will
                serve the Nation regardless of which career they choose.
              </p>
            </div>
            <div class="flex items-center px-6 pb-4">
              <a href="https://www.instagram.com/uitrgpv_ncc/" target="blank">
                <img
                  class="w-12 h-12 rounded-full mr-2"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM8jgznQeoTB5RUboDoDIv132D0sf3hEdbUSzv009NPSmtcQRYrqgLPR8t-gALISKJa3M&usqp=CAU"
                  alt="Avatar of Jonathan Reinink"
                />
              </a>
              <div class="text-sm">
                <a
                  href="https://www.instagram.com/uitrgpv_ncc/"
                  target="blank"
                  class=" font-medium leading-none hover:text-indigo-600"
                >
                  Moto : Unity And Discipline
                </a>
                <p class="text-gray-600">Since 2018 in UIT-Rgpv</p>
              </div>
            </div>
          </div>
          <div class="rounded overflow-hidden nss-card shadow-lg flex flex-col">
            <a href="#">
              <img class="w-full" src={nssimg} alt="Sunset in the mountains" />
            </a>
            <div class="px-6 py-4 mb-auto">
              <div class="mb-3">
                <a
                  href="#"
                  class="text-xs text-indigo-600 transition duration-500 ease-in-out"
                >
                  Discipline, Leadership,{" "}
                </a>
                <a
                  href="#"
                  class="text-xs text-indigo-600 transition duration-500 ease-in-out"
                >
                  Spirit of adventure
                </a>
              </div>
              <a
                href="#"
                class="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2 capitalize"
              >
                National Service Scheme ~ NSS
              </a>
              <p class="text-gray-400 text-sm">
                Its primary objective is to develop personality and character of
                the student youth through voluntary community service.
                'Education through Service' is the purpose of the NSS.
              </p>
            </div>
            <div class="flex items-center px-6 pb-4">
              <a href="https://www.instagram.com/nss_uitrgpv/" target="blank">
                <img
                  class="w-12 h-12 rounded-full mr-2"
                  src="https://seeklogo.com/images/N/nair-service-scheme-logo-FA829FD6C9-seeklogo.com.png"
                  alt="Avatar of Jonathan Reinink"
                />
              </a>
              <div class="text-sm">
                <a
                  href="https://www.instagram.com/nss_uitrgpv/"
                  target="blank"
                  class=" font-medium leading-none hover:text-indigo-600"
                >
                  Moto : Not Me But You
                </a>
                <p class="text-gray-600">Since 2018 in UIT-Rgpv</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nss;

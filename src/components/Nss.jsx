import React from "react";
import nssimg from "../assets/nssimg2.jpg";
import nccimg from "../assets/nccimg.jpg";
import './nss.css';

const Nss = () => {

  return (
    <>
      <div class="max-w-screen-lg mx-auto p-5 sm:p-10 md:p-16">
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
      
      <div class="relative z-20 flex items-center bg-white dark:bg-gray-800">
    <div class="container relative flex flex-col md:flex-row items-center justify-between px-6 py-8 mx-auto">
        <div class="md:w-3/5 md:mr-6">
            <h1 class="w-full text-4xl font-light text-center md:text-left text-gray-800 uppercase sm:text-5xl dark:text-white">
                The React Framework for Production
            </h1>
            <h2 class="w-full max-w-2xl py-8 mx-auto text-xl font-light text-center md:text-left text-gray-500 dark:text-white">
                Next.js gives you the best developer experience with all the features you need for production: hybrid static &amp; server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.
            </h2>
            <div class="flex items-center justify-center mt-4">
                <a href="#" class="px-4 py-2 mr-4 text-white uppercase bg-gray-800 border-2 border-transparent text-md hover:bg-gray-900">
                    Get started
                </a>
                <a href="#" class="px-4 py-2 text-gray-800 uppercase bg-transparent border-2 border-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md">
                    Documentation
                </a>
            </div>
        </div>
        <div class="md:w-2/5">
            <img src="https://www.uitrgpv.ac.in/Images/plgraph.png" class="max-w-xs m-auto md:max-w-2xl"/>
        </div>
    </div>
</div>



    </>
  );
};

export default Nss;

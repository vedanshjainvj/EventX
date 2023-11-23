import React from "react";
import nssimg from "../assets/nssimg2.jpg";
import nccimg from "../assets/nccimg.jpg";

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
    </>
  );
};

export default Nss;

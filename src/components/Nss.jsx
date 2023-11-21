import React from 'react'
import nssimg from '../assets/nssimg2.jpg'
import nccimg from '../assets/nccimg.jpg'

const Nss = () => {
  return (
    <>
<div class="container my-24 mx-auto md:px-72">
  <section class="mb-32 text-center md:text-left">
    <div class="block rounded-lg nss-card">
      <div class="flex flex-wrap items-center">
        <div
          class="block w-full shrink-0 grow-0 basis-auto md:w-4/12 lg:flex">
          <img
            src={nccimg}
            alt="Trendy Pants and Shoes"
            class="w-full md:px-4 md:py-4 md:border-r-2 border-purple-600 rounded-t-lg md:rounded-tr-none md:rounded-bl-lg" />
        </div>
        <div class="w-full shrink-0 grow-0 basis-auto md:w-8/12">
          <div class="px-6 py-6 md:px-10">
            <h2 class="mb-2 text-2xl font-bold">
              <span class="text-danger dark:text-danger-500">NCC : National Cadet Corps</span>
            </h2>
            <p class="mb-2 pb-2 text-neutral-500 text-sm dark:text-neutral-300">
            The NCC aims at developing character, comradeship, discipline, a secular outlook, the spirit of adventure and ideals of selfless service amongst young citizens. Further, it aims at creating a pool of organized, trained and motivated youth with leadership qualities in all walks of life, who will serve the Nation regardless of which career they choose.
            </p>
            <a href='https://www.instagram.com/uitrgpv_ncc/' target='blank'
              type="button"
              class="nss-button inline-block rounded-full bg-danger px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white"
              data-te-ripple-init
              data-te-ripple-color="light">
              Insta Page <i class="ri-instagram-line"></i>
            </a>
            <a href=''
              type="button"
              class="ml-4 nss-button inline-block rounded-full bg-danger px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white"
              data-te-ripple-init
              data-te-ripple-color="light">
              Read More ...
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="block mt-4 rounded-lg nss-card">
      <div class="flex flex-wrap items-center">
        
        <div class="w-full shrink-0 grow-0 basis-auto md:w-8/12">
          <div class="px-6 py-6 md:px-10">
            <h2 class="mb-2 text-2xl font-bold">
              <span class="text-danger dark:text-danger-500">NSS : National Service Scheme</span>
            </h2>
            <p class="mb-2 pb-2 text-neutral-500 text-sm dark:text-neutral-300">
            National Service Scheme (NSS) was introduced in 1969 with the primary objective of developing the personality and character of the student youth through voluntary community service. 'Education through Service' is the purpose of the NSS. The ideological orientation of the NSS is inspired by the ideals of Mahatma Gandhi. Not me but you is the prime moto of Nss.
            </p>
            <a href='https://www.instagram.com/nss_uitrgpv/' target='blank'
              type="button"
              class="nss-button inline-block rounded-full bg-danger px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white"
              data-te-ripple-init
              data-te-ripple-color="light">
              Insta Page <i class="ri-instagram-line"></i>
            </a>
            <a href=''
              type="button"
              class="ml-4 nss-button inline-block rounded-full bg-danger px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white"
              data-te-ripple-init
              data-te-ripple-color="light">
              Read More ...
            </a>
          </div>
        </div>
        <div
          class="block w-full shrink-0 grow-0 basis-auto md:w-4/12 lg:flex">
          <img
            src={nssimg}
            alt="Trendy Pants and Shoes"
            class="w-full md:px-4 md:py-4 md:border-l-2 border-purple-600 rounded-t-lg md:rounded-tr-none md:rounded-bl-lg" />
        </div>
      </div>
    </div>
  </section>
</div>
    </>
  )
}

export default Nss
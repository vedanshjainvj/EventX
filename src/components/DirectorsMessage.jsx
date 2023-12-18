import React, { useState } from 'react';
import Footer from './Footer';
import directorimg from '../assets/directorimg.jpg'
import Navbar from './Navbar';

const DirectorsMessage = () => {

  return (
    <>
    <Navbar></Navbar>
    <div className="w-full">
    <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-16">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-5xl">
          Director's
          <span className="relative whitespace-nowrap text-pink-600">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/90"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative ml-4">Message</span>
          </span>
        </h1>
      </main>
      <section class="px-12 py-14">
        <div class="container mx-auto flex px-5 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center h-96 rounded"
              alt="hero"
              src={directorimg}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium ">
            Dr. Sudhir Singh Bhadauria
            </h1>
            <div class="mb-6 leading-relaxed">
            UIT is an institution with unconditional commitment and total dedication for the cause of development of technical education in the country. This institution is one of the leading institute of central India that aims at producing competent engineers who can contribute in bringing this nation to a greater height. Through this portal of UIT-RGPV I call upon all the stake holders to help this Institute to achieve this goal.

I hope that my Dear students will extend their full support in maintaining discipline & decorum in the Institution and will refrain from mass absenteeism & ragging with your support, I am sure we will very soon convert this Institution in to a world class Academic Institution of Excellence.
            </div>
          </div>
        </div>
      </section>
    </div>
      
      <Footer></Footer>
    </>
  );
};

export default DirectorsMessage;

import React from 'react'
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <footer class="px-12 pb-4 mx-auto footer">
  <div class="container px-5 pt-20 pb-8 mx-auto">
    <div class="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
      <div class="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium  tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a href="#" class="">Library & KRC Lab</a>
          </li>
          <li>
            <a href="#" class="">Important Links</a>
          </li>
          <li>
            <a href="#" class="">Sports Complex</a>
          </li>
          <li>
            <a href="#" class="">About UIT</a>
          </li>
          
        </nav>
      </div>
      <div class="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a href="#" class=""><NavLink to='/scholarships'>Scholarships Info</NavLink></a>
          </li>
          <li>
            <a href="#" class="">Startup Founders</a>
          </li>
          <li>
            <a href="#" class="">Photo Gallery</a>
          </li>
          <li>
            <a href="#" class="">Department Labs</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
          <a href="#" class=""><NavLink to='/hostel-info'>Hostel Info</NavLink></a>
          </li>
          <li>
            <a href="#" class="">Induction Program</a>
          </li>
          <li>
            <a href="#" class="">Placement</a>
          </li>
          <li>
            <a href="#" class="">FAQ's</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a href="#" class="">Nss & Ncc</a>
          </li>
          <li>
            <a href="#" class="">Student's Rating</a>
          </li>
          <li>
            <a href="#" class="">College Clubs</a>
          </li>
          <li>
            <a href="#" class="">College Fests</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium tracking-widest text-sm mb-3 uppercase">Institution</h2>
        <nav class="list-none mb-10">
          <li>
            <a href="#" class=""><NavLink to='/vice-chancellor-message'>VC's Message</NavLink></a>
          </li>
          <li>
            <a href="#" class=""><NavLink to='/director-message'>Director's Message</NavLink></a>
          </li>
          <li>
          <a href="#" class=""><NavLink to='/head-of-departments'>Hod's Team</NavLink></a>
          </li>
          <li>
            <a href="https://www.uitrgpv.ac.in/pdf/nirf_ranking.pdf" target='blank' class="">Nirf Ranking</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium tracking-widest text-sm mb-3 uppercase">Study Material</h2>
        <nav class="list-none mb-10">
          <li>
            <a href="https://www.rgpvnotes.in/btech/grading-system-old/notes/p/first-year" target='blank' class="">Gate Result</a>
          </li>
          <li>
            <a href="https://www.rgpvnotes.in/btech/grading-system-old/notes/" target='blank' class="">Notes & Books</a>
          </li>
          <li>
            <a href="https://www.rgpvnotes.in/btech/grading-system-old/notes/" target='blank' class="">Complaint's Form</a>
          </li>
          <li>
            <a href="https://www.rgpvnotes.in/btech/grading-system-old/notes/" target='blank' class="">Our Team</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div class=" border-gray-200">
    <div class="container px-5 py-8 flex flex-wrap mx-auto items-center">
      <div class="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
        <div class="relative sm:w-64 w-40 sm:mr-4 mr-2">
          <label for="footer-field" class="leading-7 text-sm">Your Email</label>
          <input type="text" id="footer-field" name="footer-field" class="w-full text-blue-500 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button class="inline-flex text-white footer-btn border-0 py-2 px-6 focus:outline-none  rounded">Get Updates</button>
        <p class=" text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">Subscribe to get new updates for everything.
          <br class="lg:block hidden"/>Don't miss out any opportunity.
        </p>
      </div>
      <span class="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
        <a href="#" class="">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a href="#" class="ml-3">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a href="#" class="ml-3">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a href="#" class="ml-3">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
  <div class="">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class=" text-sm text-center sm:text-left">© 2023 LinkUp —
        <a href="" class="ml-1" target="_blank" rel="noopener noreferrer">All Rights Reserved</a>
      </p>
      <span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-sm">Made With ❤️ By Vedansh & Shreyash</span>
    </div>
  </div>
</footer>
    </>
  )
}

export default Footer
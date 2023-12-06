import React from "react";
import csahostel from "../assets/csahostel.jpg";
import apjhostel from "../assets/apjhostel.jpg";
import bhashostel from "../assets/bhashostel.jpg";
import Footer from "./Footer";

const Hostel = () => {
  return (
    <>
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-12 mt-20">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-5xl">
          Hostel
          <span className="relative whitespace-nowrap text-pink-700">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/90"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative ml-4">Life</span>
          </span>
        </h1>
      </main>

      <div class="container m-auto px-24 ">
        <div class="flex flex-col md:flex-row items-center justify-between relative w-100 md:h-32 bg-100 shadow-2xl rounded-lg px-8">
          <div class="text-2xl w-8/12">
            <span class=" text-lg">
              Explore detailed information about hostels in this booklet for a
              comprehensive understanding of facilities, rules, and amenities
              provided for your convenience.
            </span>
          </div>
          <div class="relative shadow-md font-medium my-5 py-2 px-4 text-white cursor-pointer bg-purple-800 hover:bg-purple-700 rounded text-lg text-center w-48">
            <a href="https://www.uitrgpv.ac.in/pdf/hostel_information_booklet_2018_19.pdf" target="blank" class="absolute h-3 w-3 right-0 top-0 animate-ping inline-flex rounded-full bg-purple-800"></a>
            Hostel Booklet
          </div>
        </div>
      </div>
      <section class="px-24">
        <div class="container px-5 mt-4 mx-auto">
          <div class="flex flex-wrap -m-4 justify-center">
            <div class="p-4 lg:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-72 h-64 object-cover object-center sm:mb-0 mb-4"
                  src={csahostel}
                />
                <div class="flex-grow sm:pl-8 text-sm">
                  <h2 class="title-font font-medium text-lg">
                    Chandrashekhar Hostel
                  </h2>
                  <h3 class="text-gray-400 mb-3">Total Rooms : 276</h3>
                  <p class="">Warden : Prof. Bhoopendra Singh </p>

                  <p class="">Care Taker 1 : Narayan Parihar </p>
                  <p class="">Care Taker 2 : Vikram </p>
                  <p class="">For - II & III Year Students </p>
                  <p class="mb-4">Hostel Life : 6⭐ / 10 </p>
                  <span class="inline-flex">
                    <a class="hostel-btn-bg px-3 text-sm py-1 rounded-lg">
                      Images
                    </a>
                    <a class="ml-2 hostel-btn-bg px-3 text-sm py-1 rounded-lg">
                      Contact
                    </a>
                    <a class="ml-2 hostel-btn-bg px-3 text-sm py-1 rounded-lg">
                      Facilities
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-72 h-64 object-cover object-center sm:mb-0 mb-4"
                  src={apjhostel}
                />
                <div class="flex-grow sm:pl-8 text-sm">
                  <h2 class="title-font font-medium text-lg">
                    APK Kalam Hostel{" "}
                  </h2>
                  <h3 class="text-gray-400 mb-3">Total Rooms : 358</h3>
                  <p class="">Warden : Prof. Manoj Pandey </p>

                  <p class="">Care Taker 1 : Pushpendra Rahi </p>
                  <p class="">Care Taker 2 : Deependra Mishra </p>
                  <p class="">For - I & IV Year Students </p>
                  <p class="mb-4">Hostel Life : 5⭐ / 10 </p>
                  <span class="inline-flex">
                    <a class="hostel-btn-bg px-3 text-sm py-1 rounded-lg">
                      Images
                    </a>
                    <a class="ml-2 hostel-btn-bg px-3 text-sm py-1 rounded-lg">
                      Contact
                    </a>
                    <a class="ml-2 hostel-btn-bg px-3 text-sm py-1 rounded-lg">
                      Facilities
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-72 h-64 object-cover object-center sm:mb-0 mb-4"
                  src={bhashostel}
                />
                <div class="flex-grow sm:pl-8 text-sm">
                  <h2 class="title-font font-medium text-lg">
                    Bhaskaracharya Hostel
                  </h2>
                  <h3 class="text-gray-400 mb-3">Total Rooms : 90</h3>
                  <p class="">Warden : Prof. Kaustubh Dwivedi </p>

                  <p class="">Care Taker 1 : Pushpendra Rahi </p>
                  <p class="">Care Taker 2 : Deependra Mishra </p>
                  <p class="">For - II & III Year Students </p>
                  <p class="mb-4">Hostel Life : 8⭐ / 10 </p>
                  <span class="inline-flex">
                    <a class="hostel-btn-bg px-3 text-sm py-1 rounded-lg">
                      Images
                    </a>
                    <a class="ml-2 hostel-btn-bg px-3 text-sm py-1 rounded-lg">
                      Contact
                    </a>
                    <a class="ml-2 hostel-btn-bg px-3 text-sm py-1 rounded-lg">
                      Facilities
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-72 h-64 object-cover object-center sm:mb-0 mb-4"
                  src="https://files.yappe.in/place/full/iiit-bhopal-boys-hostel-c-v-raman-5320396.webp"
                />
                <div class="flex-grow sm:pl-8 text-sm">
                  <h2 class="title-font font-medium text-lg">
                    CV Raman Hostel
                  </h2>
                  <h3 class="text-gray-400 mb-3">Total Rooms : 180</h3>
                  <p class="">Warden : Prof. Manish Ahirwar </p>

                  <p class="">Care Taker 1 : Manish Jawale </p>
                  <p class="">Care Taker 2 : ------------- </p>
                  <p class="">For - IIIT Bhopal Students </p>
                  <p class="mb-4">Hostel Life : 7⭐ / 10 </p>
                  <span class="inline-flex">
                    <a class="hostel-btn-bg px-3 text-sm py-1 rounded-lg">
                      Images
                    </a>
                    <a class="ml-2 hostel-btn-bg px-3 text-sm py-1 rounded-lg">
                      Contact
                    </a>
                    <a class="ml-2 hostel-btn-bg px-3 text-sm py-1 rounded-lg">
                      Facilities
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap -m-4 justify-center">
            <div class="p-4 lg:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-72 h-64 object-cover object-center sm:mb-0 mb-4"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2tCyDgvBArbtJxcrUh-CDy_GTYB4W1tJJmk4JGPTETlOJcL0QycnFab8yCsDF4e99PSk&usqp=CAU"
                />
                <div class="flex-grow sm:pl-8 text-sm">
                  <h2 class="title-font font-medium text-lg">
                    Rani Ahilya Bai Hostel
                  </h2>
                  <h3 class="text-gray-400 mb-3">Total Rooms : 422</h3>
                  <p class="">C Warden : Dr. Anjana Pandey</p>

                  <p class="">Warden : Dr. Swati Gupta </p>
                  <p class="">Care Taker : Ritu Sharma </p>
                  <p class="">For - Girls Only </p>
                  <p class="mb-4">Hostel Life : 6.5⭐ / 10 </p>
                  <span class="inline-flex">
                    <a class="hostel-btn-bg px-3 text-sm py-1 rounded-lg">
                      Images
                    </a>
                    <a class="ml-2 hostel-btn-bg px-3 text-sm py-1 rounded-lg">
                      Contact
                    </a>
                    <a class="ml-2 hostel-btn-bg px-3 text-sm py-1 rounded-lg">
                      Facilities
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/2">
              <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-72 h-64 object-cover object-center sm:mb-0 mb-4"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2tCyDgvBArbtJxcrUh-CDy_GTYB4W1tJJmk4JGPTETlOJcL0QycnFab8yCsDF4e99PSk&usqp=CAU"
                />
                <div class="flex-grow sm:pl-8 text-sm">
                  <h2 class="title-font font-medium text-lg">
                    Maharani Laxmi Bai Hostel
                  </h2>
                  <h3 class="text-gray-400 mb-3">Total Rooms : 328</h3>
                  <p class="">Warden : Dr. Anjana Pandey </p>

                  <p class="">Care Taker 1 : Meena Kumari </p>
                  <p class="">Care Taker 2 : Kunti Tiwari </p>
                  <p class="">For - Girls Only </p>
                  <p class="mb-4">Hostel Life : 6.5⭐ / 10 </p>
                  <span class="inline-flex">
                    <a class="hostel-btn-bg px-3 text-sm py-1 rounded-lg">
                      Images
                    </a>
                    <a class="ml-2 hostel-btn-bg px-3 text-sm py-1 rounded-lg">
                      Contact
                    </a>
                    <a class="ml-2 hostel-btn-bg px-3 text-sm py-1 rounded-lg">
                      Facilities
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main className="flex flex-1 mb-10 w-full flex-col items-center justify-center text-center px-4 sm:mt-16 mt-20">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-5xl">
          Hostel
          <span className="relative whitespace-nowrap text-pink-700">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/90"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative ml-4">Facilities</span>
          </span>
        </h1>
      </main>
      <body class="flex items-center justify-center w-screen ">
        <div class="flex flex-col w-full max-w-screen-md">
          <div class="flex items-center h-20 px-4 border-b border-gray-500">
            <div class="w-40"></div>
            <div class="flex-grow text-lg font-semibold text-center">Small</div>
            <div class="flex-grow text-lg font-semibold text-center">
              Medium
            </div>
            <div class="flex-grow text-lg font-semibold text-center">Large</div>
          </div>
          <div class="flex items-center h-12 px-4 bg-gray-100 border-b border-gray-500">
            <div class="font-medium">Feature Group</div>
          </div>
          <div class="flex items-center h-12 px-4 border-b border-gray-500">
            <div class="w-40">Feature 1</div>
            <div class="flex justify-center flex-grow w-0">
              <svg
                class="w-4 h-4 text-green-600 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="flex justify-center flex-grow w-0">
              <svg
                class="w-4 h-4 text-green-600 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="flex justify-center flex-grow w-0">
              <svg
                class="w-4 h-4 text-green-600 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div class="flex items-center h-12 px-4 border-b border-gray-500">
            <div class="w-40">Feature 2</div>
            <div class="flex-grow w-0"></div>
            <div class="flex justify-center flex-grow w-0">
              <svg
                class="w-4 h-4 text-green-600 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="flex justify-center flex-grow w-0">
              <svg
                class="w-4 h-4 text-green-600 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div class="flex items-center h-12 px-4 border-b border-gray-500">
            <div class="w-40">Feature 3</div>
            <div class="flex-grow w-0"></div>
            <div class="flex-grow w-0"></div>
            <div class="flex justify-center flex-grow w-0">
              <svg
                class="w-4 h-4 text-green-600 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div class="flex items-center h-12 px-4 bg-gray-100 border-b border-gray-500">
            <div class="font-medium">Feature Group</div>
          </div>
          <div class="flex items-center h-12 px-4 border-b border-gray-500">
            <div class="w-40">Feature 1</div>
            <div class="flex justify-center flex-grow w-0">
              <svg
                class="w-4 h-4 text-green-600 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="flex justify-center flex-grow w-0">
              <svg
                class="w-4 h-4 text-green-600 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="flex justify-center flex-grow w-0">
              <svg
                class="w-4 h-4 text-green-600 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div class="flex items-center h-12 px-4 border-b border-gray-500">
            <div class="w-40">Feature 2</div>
            <div class="flex-grow w-0"></div>
            <div class="flex justify-center flex-grow w-0">
              <svg
                class="w-4 h-4 text-green-600 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="flex justify-center flex-grow w-0">
              <svg
                class="w-4 h-4 text-green-600 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div class="flex items-center h-12 px-4 border-b border-gray-500">
            <div class="w-40">Feature 3</div>
            <div class="flex-grow w-0"></div>
            <div class="flex-grow w-0"></div>
            <div class="flex justify-center flex-grow w-0">
              <svg
                class="w-4 h-4 text-green-600 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div class="flex items-center h-12 px-4 bg-gray-100 border-b border-gray-500">
            <div class="font-medium">Feature Group</div>
          </div>
          <div class="flex items-center h-12 px-4 border-b border-gray-500">
            <div class="w-40">Feature 1</div>
            <div class="flex justify-center flex-grow w-0">
              <svg
                class="w-4 h-4 text-green-600 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="flex justify-center flex-grow w-0">
              <svg
                class="w-4 h-4 text-green-600 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="flex justify-center flex-grow w-0">
              <svg
                class="w-4 h-4 text-green-600 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div class="flex items-center h-12 px-4 border-b border-gray-500">
            <div class="w-40">Feature 2</div>
            <div class="flex-grow w-0"></div>
            <div class="flex justify-center flex-grow w-0">
              <svg
                class="w-4 h-4 text-green-600 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="flex justify-center flex-grow w-0">
              <svg
                class="w-4 h-4 text-green-600 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div class="flex items-center h-12 px-4 border-b border-gray-500">
            <div class="w-40">Feature 3</div>
            <div class="flex-grow w-0"></div>
            <div class="flex-grow w-0"></div>
            <div class="flex justify-center flex-grow w-0">
              <svg
                class="w-4 h-4 text-green-600 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div class="flex items-center h-20 px-4">
            <div class="w-40"></div>
            <div class="flex items-center flex-grow w-0 px-8">
              <button class="flex items-center justify-center w-full h-8 text-sm text-white bg-black">
                Start Now
              </button>
            </div>
            <div class="flex items-center flex-grow w-0 px-8">
              <button class="flex items-center justify-center w-full h-8 text-sm text-white bg-black">
                Start Now
              </button>
            </div>
            <div class="flex items-center flex-grow w-0 px-8">
              <button class="flex items-center justify-center w-full h-8 text-sm text-white bg-black">
                Start Now
              </button>
            </div>
          </div>
        </div>
      </body>
      <Footer></Footer>
    </>
  );
};

export default Hostel;

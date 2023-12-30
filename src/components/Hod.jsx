import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import hod1img from "../assets/hod1img.jpg";
import { Link } from "react-router-dom";

const Hod = () => {
  return (
    <>
      <Navbar></Navbar>
      <main className="flex flex-1 w-full pb-6 flex-col items-center justify-center text-center px-4 sm:mt-12 mt-20">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-6xl">
          Head of
          <span className="relative whitespace-nowrap text-pink-700">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/90"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative ml-4">Departments</span>
          </span>
        </h1>
      </main>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-10 lg:pb-0">
        <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-xl">
          <div>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
              <img
                className="absolute object-cover w-full h-full rounded-xl border"
                src={hod1img}
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">Prof Manish Ahirwal </p>
              <p className="mb-2 text-xs ">HOD : Computer Science</p>
              <div className="flex items-center space-x-3 sm:justify-center">
                <Link className="bg-blue-600 py-1 px-4 rounded-lg">
                  View CSE
                </Link>
              </div>
            </div>
          </div>
          <div>
		  <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
              <img
                className="absolute object-cover w-full h-full rounded-xl border"
                src={hod1img}
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">Prof Manish Ahirwal </p>
              <p className="mb-2 text-xs ">HOD : Computer Science</p>
              <div className="flex items-center space-x-3 sm:justify-center">
                <Link className="bg-blue-600 py-1 px-4 rounded-lg">
                  View CSE
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
              <img
                className="absolute object-cover w-full h-full rounded-xl border"
                src={hod1img}
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">Prof Manish Ahirwal </p>
              <p className="mb-2 text-xs ">HOD : Computer Science</p>
              <div className="flex items-center space-x-3 sm:justify-center">
                <Link className="bg-blue-600 py-1 px-4 rounded-lg">
                  View CSE
                </Link>
              </div>
            </div>
          </div>
          <div>
		  <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
              <img
                className="absolute object-cover w-full h-full rounded-xl border"
                src={hod1img}
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">Prof Manish Ahirwal </p>
              <p className="mb-2 text-xs ">HOD : Computer Science</p>
              <div className="flex items-center space-x-3 sm:justify-center">
                <Link className="bg-blue-600 py-1 px-4 rounded-lg">
                  View CSE
                </Link>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-0">
        <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-xl">
          <div>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
              <img
                className="absolute object-cover w-full h-full rounded-xl border"
                src={hod1img}
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">Prof Manish Ahirwal </p>
              <p className="mb-2 text-xs ">HOD : Computer Science</p>
              <div className="flex items-center space-x-3 sm:justify-center">
                <Link className="bg-blue-600 py-1 px-4 rounded-lg">
                  View CSE
                </Link>
              </div>
            </div>
          </div>
          <div>
		  <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
              <img
                className="absolute object-cover w-full h-full rounded-xl border"
                src={hod1img}
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">Prof Manish Ahirwal </p>
              <p className="mb-2 text-xs ">HOD : Computer Science</p>
              <div className="flex items-center space-x-3 sm:justify-center">
                <Link className="bg-blue-600 py-1 px-4 rounded-lg">
                  View CSE
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
              <img
                className="absolute object-cover w-full h-full rounded-xl border"
                src={hod1img}
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">Prof Manish Ahirwal </p>
              <p className="mb-2 text-xs ">HOD : Computer Science</p>
              <div className="flex items-center space-x-3 sm:justify-center">
                <Link className="bg-blue-600 py-1 px-4 rounded-lg">
                  View CSE
                </Link>
              </div>
            </div>
          </div>
          <div>
		  <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
              <img
                className="absolute object-cover w-full h-full rounded-xl border"
                src={hod1img}
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold">Prof Manish Ahirwal </p>
              <p className="mb-2 text-xs ">HOD : Computer Science</p>
              <div className="flex items-center space-x-3 sm:justify-center">
                <Link className="bg-blue-600 py-1 px-4 rounded-lg">
                  View CSE
                </Link>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Hod;

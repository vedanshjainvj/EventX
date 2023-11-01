import React from "react";
import connectuplogo from "../assets/connectuplogo.jfif";
import boostemlogo from "../assets/boostemlogo.jfif";
import agilelogo from "../assets/agilelogo.jfif";
import semikolanlogo from "../assets/semikolanlogo.jfif";
import tdplogo from "../assets/tdplogo.jfif";
import gearfilogo from "../assets/gearfilogo.jfif";


const Startups = () => {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl text-white md:px-24 lg:px-8 lg:pt-14  lg:pb-0">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">
            Start-ups from UIT Rgpv
          </h2>
          <p className="text-base text-gray-400 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div className="grid max-w-screen-lg mx-auto space-y-6 lg:grid-cols-2 lg:space-y-0 lg:divide-x">
          <div className="space-y-6 sm:px-16">
            <div className="flex flex-col max-w-md sm:flex-row ">
              <div className="mb-4 mr-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-500">
                  <img
                    className="w-12 h-12 mix-blend-multiply"
                    src="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-small-ball--png-free-image_1137464.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">
                  Tdp Vista
                </h6>
                <p className="text-sm text-gray-400">
                  Founder - Harsh Vishwakarma
                </p>
                <p className="text-sm text-gray-500">
                  Founded - 2020 <span className="text-white text-lg"><a href=""><i class="ri-arrow-right-up-line"></i></a></span>
                </p>
              </div>
            </div>
            <div className="flex flex-col max-w-md sm:flex-row">
              <div className="mb-4 mr-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400">
                  <img
                    className="w-8 h-8 mix-blend-multiply"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj_XKDFBTXJgCqmRrvOYaoNzpeWc8Wz4rR9Q&usqp=CAU"
                    alt=""
                  />
                </div>
              </div>
              <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                  Semikolan
                </h6>
                <p className="text-sm text-gray-400">
                  Founder - Harsh Vishwakarma
                </p>
                <p className="text-sm text-gray-500">
                  Founded - 2020 <span className="text-white text-lg"><a href=""><i class="ri-arrow-right-up-line"></i></a></span>
                </p>
              </div>
            </div>
            <div className="flex flex-col max-w-md sm:flex-row">
              <div className="mb-4 mr-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500">
                  <img
                    className="w-6 h-6 mix-blend-multiply"
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
              </div>
              <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                  Connect Up
                </h6>
                <p className="text-sm text-gray-400">
                  Founder - Harsh Vishwakarma
                </p>
                <p className="text-sm text-gray-500">
                  Founded - 2020 <span className="text-white text-lg"><a href=""><i class="ri-arrow-right-up-line"></i></a></span>
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6 sm:px-16">
            <div className="flex flex-col max-w-md sm:flex-row">
              <div className="mb-4 mr-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-500">
                <img
                    className="w-12 h-12 mix-blend-multiply"
                    src="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-small-ball--png-free-image_1137464.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                  Gearfi
                </h6>
                <p className="text-sm text-gray-400">
                  Founder - Harsh Vishwakarma
                </p>
                <p className="text-sm text-gray-500">
                  Founded - 2020 <span className="text-white text-lg"><a href=""><i class="ri-arrow-right-up-line"></i></a></span>
                </p>
              </div>
            </div>
            <div className="flex flex-col max-w-md sm:flex-row">
              <div className="mb-4 mr-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400">
                <img
                    className="w-8 h-8 mix-blend-multiply"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj_XKDFBTXJgCqmRrvOYaoNzpeWc8Wz4rR9Q&usqp=CAU"
                    alt=""
                  />
                </div>
              </div>
              <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                  Agile Support
                </h6>
                <p className="text-sm text-gray-400">
                  Founder - Harsh Vishwakarma
                </p>
                <p className="text-sm text-gray-500">
                  Founded - 2020 <span className="text-white text-lg"><a href=""><i class="ri-arrow-right-up-line"></i></a></span>
                </p>
              </div>
            </div>
            <div className="flex flex-col max-w-md sm:flex-row">
              <div className="mb-4 mr-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500">
                <img
                    className="w-6 h-6 mix-blend-multiply"
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </div>
              </div>
              <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                  Boostem
                </h6>
                <p className="text-sm text-gray-400">
                  Founder - Sumit Choudhary
                </p>
                <p className="text-sm text-gray-500">
                  Founded - 2020 <span className="text-white text-lg"><a href=""><i class="ri-arrow-right-up-line"></i></a></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="py-0">
	<div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-0">
		
		<div className="flex flex-row flex-wrap-reverse justify-center">
			<div className="flex flex-col justify-center m-8 text-center">
				<a href=""><img alt="" className="self-center flex-shrink-0 w-24 h-24 border-2 border-purple-600 mb-4 bg-center bg-cover rounded-full " src={connectuplogo} /></a>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<a href=""><img alt="" className="self-center flex-shrink-0 w-24 h-24 border-2 border-purple-600 mb-4 bg-center bg-cover rounded-full " src={boostemlogo} /></a>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<a href=""><img alt="" className="self-center flex-shrink-0 w-24 h-24 border-2 border-purple-600 mb-4 bg-center bg-cover rounded-full " src={gearfilogo} /></a>
			</div>
      <div className="flex flex-col justify-center m-8 text-center">
				<a href=""><img alt="" className="self-center flex-shrink-0 w-24 h-24 border-2 border-purple-600 mb-4 bg-center bg-cover rounded-full " src={tdplogo} /></a>
			</div>
      
			<div className="flex flex-col justify-center m-8 text-center">
				<a href=""><img alt="" className="self-center flex-shrink-0 w-24 h-24 border-2 border-purple-600 mb-4 bg-center bg-cover rounded-full " src={semikolanlogo} /></a>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<a href=""><img alt="" className="self-center flex-shrink-0 w-24 h-24 border-2 border-purple-600 mb-4 bg-center bg-cover rounded-full " src={agilelogo} /></a>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<a href=""><img alt="" className="self-center flex-shrink-0 w-24 h-24 border-2 border-purple-600 mb-4 bg-center bg-cover rounded-full " src={connectuplogo} /></a>
			</div>
		</div>
	</div>
</section>
    </>
  );
};

export default Startups;

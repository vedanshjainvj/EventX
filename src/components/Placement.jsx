import React from 'react'
import placechart from '../assets/placechart8.png';


const Institute = () => {
  return (
    <>
    <main className="flex mb-0 flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-12 mt-20">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-5xl">
          Placement
          <span className="relative whitespace-nowrap text-pink-700">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/90"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative ml-4">Statistics</span>
          </span>
        </h1>
      </main>
      <div className="px-16 py-16 overflow-hidden mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block lg:pl-1 py-px mb-4 text-sm font-semibold tracking-wider text-teal-700 uppercase rounded-full">
                Placement Statics
              </p>
            </div>
            <h2 className="max-w-lg mb-6  text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none">
              Placement Analytics &
              <br className="hidden md:block" />
              Selection Details
            </h2>
            <p className="text-base text-gray-4 00 md:text-lg">
            The Training & Placement Cell, UIT- RGPV plays a crucial role in locating job opportunities for Under Graduates and Post Graduates students passing out from the UIT-RGPV by keeping in touch with reputed firms and industrial establishments.
            </p>
          </div>
          <a
            href="https://www.uitrgpv.ac.in/theinstitute/selectiondetails.aspx" target='blank'
            aria-label=""
            className="inline-flex bg-pink-700 w-fit px-4 py-1 items-center rounded"
          >
            Learn more
          </a>
        </div>
        <div className="relative">
          <img src={placechart} className='w-full' alt="" />
        </div>
      </div>
    </div>
    <div class="lg:flex items-center hidden  justify-center">
    <div class="pb-0 overflow-hidden px-32 w-full">
  <table class="w-full min-w-max table-auto text-left">
    <thead>
      <tr>
        <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
          <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Year</p>
        </th>
        <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
          <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Companies</p>
        </th>
        <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
          <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Selections</p>
        </th>
        <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
          <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Highest Offer</p>
        </th>
        <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
          <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Major Hirings</p>
        </th>
        <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
          <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Avg CTC</p>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="p-4 border-b border-blue-gray-50">
          <div class="flex items-center gap-3">
            <p class="block antialiased font-sans text-sm leading-normal bg-pink-300/10 text-pink-600 py-1 px-2 rounded-md font-bold">2022</p>
          </div>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
          <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">54</p>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
          <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">542</p>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
          <div class="w-max">
            <div class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-400/10 text-green-300 py-1 px-2 text-xs rounded-md">
              <span class="">44 LPA</span>
            </div>
          </div>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
          <div class="flex items-center gap-3">
            <div class="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
              <img src="https://companieslogo.com/img/128/CTSH-2c577e9a.png?t=1652276339" alt="visa" class="inline-block relative object-center !rounded-none rounded-md h-full w-full object-contain p-1"/>
            </div>
            <div class="flex flex-col">
              <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal capitalize">Cognizant 
                
              </p>
              <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">86</p>
            </div>
          </div>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
          <button class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20" type="button">
          <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 bg-yellow-300/10 text-yellow-400 py-1 px-2 text-xs rounded-md">
              4.4
            </span>
          </button>
        </td>
      </tr>
      <tr>
      <td class="p-4 border-b border-blue-gray-50">
          <div class="flex items-center gap-3">
            <p class="block antialiased font-sans text-sm leading-normal bg-pink-300/10 text-pink-600 py-1 px-2 rounded-md font-bold">2021</p>
          </div>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
          <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">47</p>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
          <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">312</p>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
          <div class="w-max">
            <div class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-400/10 text-green-300 py-1 px-2 text-xs rounded-md">
              <span class="">18 LPA</span>
            </div>
          </div>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
          <div class="flex items-center gap-3">
            <div class="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
              <img src="data:image/png;base64,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" alt="visa" class="inline-block relative object-center !rounded-none rounded-md h-full w-full object-contain p-1"/>
            </div>
            <div class="flex flex-col">
              <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal capitalize">TCS Ninja 
                
              </p>
              <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">86</p>
            </div>
          </div>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
          <button class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20" type="button">
          <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 bg-yellow-300/10 text-yellow-400 py-1 px-2 text-xs rounded-md">
              3.5
            </span>
          </button>
        </td>
      </tr>
      <tr>
      <td class="p-4 border-b border-blue-gray-50">
          <div class="flex items-center gap-3">
            <p class="block antialiased font-sans text-sm leading-normal bg-pink-300/10 text-pink-600 py-1 px-2 rounded-md font-bold">2020</p>
          </div>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
          <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">21</p>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
          <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">266</p>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
          <div class="w-max">
            <div class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-400/10 text-green-300 py-1 px-2 text-xs rounded-md">
              <span class="">7.5 LPA</span>
            </div>
          </div>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
          <div class="flex items-center gap-3">
            <div class="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
              <img src="data:image/png;base64,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" alt="visa" class="inline-block relative object-center !rounded-none rounded-md h-full w-full object-contain p-1"/>
            </div>
            <div class="flex flex-col">
              <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal capitalize">TCS Ninja 
                
              </p>
              <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">93</p>
            </div>
          </div>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
          <button class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20" type="button">
          <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 bg-yellow-300/10 text-yellow-400 py-1 px-2 text-xs rounded-md">
              3.5
            </span>
          </button>
        </td>
      </tr>
      <tr>
      <td class="p-4 border-b border-blue-gray-50">
          <div class="flex items-center gap-3">
            <p class="block antialiased font-sans text-sm leading-normal bg-pink-300/10 text-pink-600 py-1 px-2 rounded-md font-bold">2019</p>
          </div>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
          <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">12</p>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
          <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">217</p>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
          <div class="w-max">
            <div class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-400/10 text-green-300 py-1 px-2 text-xs rounded-md">
              <span class="">7 LPA</span>
            </div>
          </div>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
          <div class="flex items-center gap-3">
            <div class="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
              <img src="data:image/png;base64,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" alt="visa" class="inline-block relative object-center !rounded-none rounded-md h-full w-full object-contain p-1"/>
            </div>
            <div class="flex flex-col">
              <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal capitalize">TCS Ninja 
                
              </p>
              <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">95</p>
            </div>
          </div>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
          <button class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20" type="button">
          <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 bg-yellow-300/10 text-yellow-400 py-1 px-2 text-xs rounded-md">
              3.5
            </span>
          </button>
        </td>
      </tr>
      <tr>
      <td class="p-4">
          <div class="flex items-center gap-3">
            <p class="block antialiased font-sans text-sm leading-normal bg-pink-300/10 text-pink-600 py-1 px-2 rounded-md font-bold">2018</p>
          </div>
        </td>
        <td class="p-4 ">
          <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">11</p>
        </td>
        <td class="p-4 ">
          <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">224</p>
        </td>
        <td class="p-4">
          <div class="w-max">
            <div class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-400/10 text-green-300 py-1 px-2 text-xs rounded-md">
              <span class="">4.5 LPA</span>
            </div>
          </div>
        </td>
        <td class="p-4">
          <div class="flex items-center gap-3">
            <div class="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjp_zukEr6-j6M7JxSmq7KryGfRjLDEX89sg&usqp=CAU" alt="visa" class="inline-block relative object-center !rounded-none rounded-md h-full w-full object-contain p-1"/>
            </div>
            <div class="flex flex-col">
              <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal capitalize">TCS 
                
              </p>
              <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">220</p>
            </div>
          </div>
        </td>
        <td class="p-4">
          <button class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20" type="button">
          <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 bg-yellow-300/10 text-yellow-400 py-1 px-2 text-xs rounded-md">
              3.5
            </span>
          </button>
        </td>
      </tr>
      <tr>
      <td class="p-4 border-t ">
          <div class="flex items-center gap-3">
            <p class="block antialiased font-sans text-sm leading-normal bg-pink-300/10 text-pink-600 py-1 px-2 rounded-md font-bold">2017</p>
          </div>
        </td>
        <td class="p-4 border-t">
          <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">8</p>
        </td>
        <td class="p-4 border-t">
          <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">220</p>
        </td>
        <td class="p-4 border-t">
          <div class="w-max">
            <div class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-400/10 text-green-300 py-1 px-2 text-xs rounded-md">
              <span class="">9 LPA</span>
            </div>
          </div>
        </td>
        <td class="p-4 border-t">
          <div class="flex items-center gap-3">
            <div class="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjp_zukEr6-j6M7JxSmq7KryGfRjLDEX89sg&usqp=CAU" alt="visa" class="inline-block relative object-center !rounded-none rounded-md h-full w-full object-contain p-1"/>
            </div>
            <div class="flex flex-col">
              <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal capitalize">TCS 
                
              </p>
              <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">203</p>
            </div>
          </div>
        </td>
        <td class="p-4 border-t">
          <button class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20" type="button">
          <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 bg-yellow-300/10 text-yellow-400 py-1 px-2 text-xs rounded-md">
              3.3
            </span>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

</div>
    </>
  )
}

export default Institute
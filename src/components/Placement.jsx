import React from 'react'
import placechart from '../assets/placechart8.png';


const Institute = () => {
  return (
    <>
    <main className="flex mb-0 flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-12 mt-20">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-4xl">
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
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
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
    <div class="pb-16 overflow-hidden px-32 w-full">
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
      <td class="p-4">
          <div class="flex items-center gap-3">
            <p class="block antialiased font-sans text-sm leading-normal bg-pink-300/10 text-pink-600 py-1 px-2 rounded-md font-bold">2022</p>
          </div>
        </td>
        <td class="p-4 ">
          <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">54</p>
        </td>
        <td class="p-4 ">
          <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">542</p>
        </td>
        <td class="p-4">
          <div class="w-max">
            <div class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-400/10 text-green-300 py-1 px-2 text-xs rounded-md">
              <span class="">44 LPA</span>
            </div>
          </div>
        </td>
        <td class="p-4">
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
        <td class="p-4">
          <button class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20" type="button">
          <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 bg-yellow-300/10 text-yellow-400 py-1 px-2 text-xs rounded-md">
              4.4
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
import React from 'react'
import placechart from '../assets/placechart8.png';


const Institute = () => {
  return (
    <>
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
    <div class="py-6 overflow-hidden px-32 w-full">
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
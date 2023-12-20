import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Scholarships = () => {
  return (
    <>
    <Navbar></Navbar>
    <main className="flex mb-2 flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-12 mt-20">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-5xl">
          Scholarships
          <span className="relative whitespace-nowrap text-pink-700">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/90"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative ml-4">Portal</span>
          </span>
        </h1>
      </main>
    <section class="lg:px-16">
  <div class="container px-5 mt-16 pb-24 mx-auto">
    {/* <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 ">Pitchfork Kickstarter Taxidermy</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-300">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div> */}
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/4  md:w-1/2 p-4">
        <div class=" p-6 rounded-lg border">
          <img class="h-40 rounded w-full object-contain object-center mb-6" src="https://cdn-icons-png.flaticon.com/512/6607/6607447.png" alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">For Medhavi Students</h3>
          <h2 class="text-lg  font-medium title-font mb-2">Mukhya Mantri Medhavi Chhatra Yojna (MMVY)</h2>
          <p class="text-sm mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        <p className='px-3 text-sm text-center py-1 rounded bg-blue-600 mb-2'>Rs : 70,000  <i class="ri-wallet-2-line"></i></p>
        <div className='flex justify-center mb-2 gap-2'>
        <p className='bg-amber-600  text-sm px-3 py-1 w-fit rounded'>Eligibility <i class="ri-check-line"></i></p>
        <p className='bg-green-700  text-sm px-3 py-1 w-fit rounded'>Docs Required <i class="ri-file-download-line"></i></p>
        </div>
        <p className='bg-pink-600 text-center text-sm px-3 py-1  rounded'>Visit offical site <i class="ri-global-line"></i></p>
        </div>
      </div>
      <div class="xl:w-1/4  md:w-1/2 p-4">
        <div class=" p-6 rounded-lg border">
          <img class="h-40 rounded w-full object-contain object-center mb-6" src="https://png.pngtree.com/png-clipart/20230623/original/pngtree-scholarship-sign-or-stamp-tag-vector-png-image_9212253.png" alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">For Medhavi Students</h3>
          <h2 class="text-lg  font-medium title-font mb-2">Mukhya Mantri Medhavi Chhatra Yojna (MMVY)</h2>
          <p class="text-sm mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        <p className='px-3 text-sm text-center py-1 rounded bg-blue-600 mb-2'>Rs : 70,000  <i class="ri-wallet-2-line"></i></p>
        <div className='flex justify-center mb-2 gap-2'>
        <p className='bg-amber-600  text-sm px-3 py-1 w-fit rounded'>Eligibility <i class="ri-check-line"></i></p>
        <p className='bg-green-700  text-sm px-3 py-1 w-fit rounded'>Docs Required <i class="ri-file-download-line"></i></p>
        </div>
        <p className='bg-pink-600 text-center text-sm px-3 py-1  rounded'>Visit offical site <i class="ri-global-line"></i></p>
        </div>
      </div>
      <div class="xl:w-1/4  md:w-1/2 p-4">
        <div class=" p-6 rounded-lg border">
          <img class="h-40 rounded w-full object-contain object-center mb-6" src="https://www.pngall.com/wp-content/uploads/8/Graduation-Scholarship.png" alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">For Medhavi Students</h3>
          <h2 class="text-lg  font-medium title-font mb-2">Mukhya Mantri Medhavi Chhatra Yojna (MMVY)</h2>
          <p class="text-sm mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        <p className='px-3 text-sm text-center py-1 rounded bg-blue-600 mb-2'>Rs : 70,000  <i class="ri-wallet-2-line"></i></p>
        <div className='flex justify-center mb-2 gap-2'>
        <p className='bg-amber-600  text-sm px-3 py-1 w-fit rounded'>Eligibility <i class="ri-check-line"></i></p>
        <p className='bg-green-700  text-sm px-3 py-1 w-fit rounded'>Docs Required <i class="ri-file-download-line"></i></p>
        </div>
        <p className='bg-pink-600 text-center text-sm px-3 py-1  rounded'>Visit offical site <i class="ri-global-line"></i></p>
        </div>
      </div>
      <div class="xl:w-1/4  md:w-1/2 p-4">
        <div class=" p-6 rounded-lg border">
          <img class="h-40 rounded w-full object-contain object-center mb-6" src="https://blogmedia.testbook.com/blog/wp-content/uploads/2023/10/history-of-turkey-bf468a81.jpg" alt="content"/>
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">For Medhavi Students</h3>
          <h2 class="text-lg  font-medium title-font mb-2">Mukhya Mantri Medhavi Chhatra Yojna (MMVY)</h2>
          <p class="text-sm mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        <p className='px-3 text-sm text-center py-1 rounded bg-blue-600 mb-2'>Rs : 70,000  <i class="ri-wallet-2-line"></i></p>
        <div className='flex justify-center mb-2 gap-2'>
        <p className='bg-amber-600  text-sm px-3 py-1 w-fit rounded'>Eligibility <i class="ri-check-line"></i></p>
        <p className='bg-green-700  text-sm px-3 py-1 w-fit rounded'>Docs Required <i class="ri-file-download-line"></i></p>
        </div>
        <p className='bg-pink-600 text-center text-sm px-3 py-1  rounded'>Visit offical site <i class="ri-global-line"></i></p>
        </div>
      </div>
    </div>
  </div>
</section>
    <Footer></Footer>
    </>
  )
}

export default Scholarships
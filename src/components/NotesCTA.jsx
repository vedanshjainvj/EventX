import React from 'react'

const NotesCTA = () => {
  return (
    <>
    <main className="flex mb-0 flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-12 mt-20">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-4xl">
          Study
          <span className="relative whitespace-nowrap text-pink-700">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/90"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative ml-4">Material</span>
          </span>
        </h1>
      </main>
    <section class="">
    <div class="container flex flex-col items-center px-12 md:px-32 my-12 mx-auto xl:flex-row">
        <div class="flex justify-center xl:w-1/2">
            <img class="h-48 w-48 sm:w-[16rem] sm:h-[16rem] flex-shrink-0 object-cover rounded-full" src="https://motionarray.imgix.net/preview-589872-fwZTr6OiZn-high_0005.jpg?w=660&q=60&fit=max&auto=format" alt=""/>
        </div>

        <div class="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
            <h2 class="text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
                Boost Your CGPA / SGPA
            </h2>

            <p class="block max-w-2xl mt-4 text-gray-500 dark:text-gray-300">Access the most recent study materials and resources to enhance your knowledge. Stay updated with the latest educational content, tools, and information for a comprehensive learning experience.</p>

            <div class="mt-6 sm:-mx-2">
                <a href="https://www.rgpvnotes.in/btech/grading-system-old/notes/" target='blank' class="inline-flex items-center justify-center w-full px-2 text-sm py-2 overflow-hidden text-white transition-colors duration-300 bg-blue-900 rounded-lg shadow sm:w-auto sm:mx-2 ">
                   

                    <span class="mx-2">
                         Notes PDF
                    </span>
                </a>

                <a href="https://www.rgpvonline.com/"
                    class="inline-flex items-center justify-center w-full px-2 text-sm py-2 mt-4 overflow-hidden text-white transition-colors duration-300 bg-violet-800 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 ">
                    

                    <span class="mx-2">
                        Pyq PDF
                    </span>
                </a>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default NotesCTA
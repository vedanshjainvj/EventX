import React from 'react'
import Navbar from './Navbar'

const UitrgpvPhotos = () => {
  return (
    <>
    <Navbar></Navbar>
    <section className="">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-10 lg:px-0 lg:flex-row lg:px-10 lg:justify-around">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-[50%] xl lg:text-left">
			<h1 className="text-5xl font-bold leadi sm:text-6xl">UIT Rgpv : {" "} <br />
				<span className="dark:text-violet-400 text-5xl">Lush Green Campus</span>
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, laboriosam omnis nobis cumque perferendis ea aliquid itaque ullam. Obcaecati, explicabo.
				{/* <br className="hidden md:inline lg:hidden"></br> turpis pulvinar, est scelerisque ligula sem */}
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-pink-800 ">Upcoming</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Instagram</a>
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="https://images.collegedunia.com/public/college_data/images/appImage/25681_RJTU_NEW.jpg" alt="" className="object-contain h-72 lg:rounded-xl sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
    </> 
  )
}

export default UitrgpvPhotos
import React from 'react'
import Navbar from './Navbar'

const Shankhnaadphotos = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="dark:bg-gray-800 dark:text-gray-50">
	<div className="container lg:px-12 grid grid-cols-12 mx-auto dark:bg-gray-900">
    <div className="w-full h-64 bg-no-repeat bg-cover dark:bg-gray-700 col-span-full lg:col-span-4" style={{ backgroundImage: "url('https://i.ibb.co/nBRQgmq/IMG-20221013-204524-526.jpg')", backgroundPosition: "center center", backgroundSize: "cover" }}></div>
		<div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
			<div className="flex justify-start">
				<span className="px-4 py-2 text-xs rounded-full bg-pink-700">Upcoming Soon ...</span>
			</div>
			<h1 className="text-3xl lg:mt-2 font-semibold">Shankhnaad : The Cultural Gem</h1>
			<p className="flex-1 pt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, aut? Deleniti possimus molestiae maiores commodi architecto velit cumque distinctio, eveniet voluptatibus ea minus laboriosam ducimus nam iure odit, numquam maxime ut a? Ab voluptatem impedit veniam dolorum consectetur quisquam architecto.</p>
			
			<div className="flex items-center justify-between pt-4">
				<div className="flex space-x-2">
					
					<span className="self-center text-sm">by Leroy Jenkins</span>
				</div>
				<span className="text-sm">7.1k Likes</span>
			</div>
		</div>
	</div>
</div>


<div class="grid grid-cols-2 md:grid-cols-4 gap-4 lg:px-12 lg:py-12">
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
        </div>
    </div>
</div>

    </>
  )
}

export default Shankhnaadphotos
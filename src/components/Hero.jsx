import React from 'react'
import giphy from '../assets/giphy-unscreen.gif'
import img2 from '../assets/img2.png'

const Hero = () => {
  return (
    <>
    {/* <div id="main">
      <div class="main-content">
        <div class="lft">
          <h1>Eat together</h1>
          <h1>Live another day</h1>
          <p>
            Food is any substance consumed by an organism for nutritional
            support. Food is usually of plant, animals, or fungal support. Food
            is usually of plant, animals, or fungal support.
          </p>
          <div class="search">
            <input type="text" placeholder="BHOPAL, MADHYA PRADESH, INDIA" />
            <i class="ri-focus-3-line"></i>
          </div>
          <button>SEARCH</button>
        </div>
        <div class="rght">
          <img id="background" src={img2} alt="" />
          <div id="all-plate">
            <img
              id="img-one"
              src="https://i.ibb.co/TKJksnG/IMG-20221013-204534-947.jpg"
              alt=""
            />
            <img
              id="img-two"
              src="https://i.ibb.co/nBRQgmq/IMG-20221013-204524-526.jpg"
              alt=""
            />
            <img
              id="img-three"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmpch4d8jHNv5bN3Xh6UOOhupMhiyheA1uTdOqlSMpkuOfLIhhACN_KelxEsI8RPWluG0&usqp=CAU"
              alt=""
            />
          </div>
        </div>
      </div>
    </div> */}
    <section class="px-12 h-[85vh] body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium">Get Ready For An Amazing
        <br class="hidden lg:inline-block"/>Event With Us
      </h1>
      <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover mix-blend-multiply object-center rounded" alt="hero" src={giphy}/>
    </div>
    
  </div>
</section>
    </>
  )
}

export default Hero
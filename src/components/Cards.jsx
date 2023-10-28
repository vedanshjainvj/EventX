import React from "react";
import Devoiclogo from '../assets/Devoiclogo.png'
import codingclub from '../assets/codingclub.jpg'

const Cards = () => {
  return (
    <>
      <section class="text-white px-12 cards-section">
        <h1 className="text-center text-5xl">Clubs and Socities</h1>
        <div class="container px-5 py-12 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="club-cards p-6">
                <img
                  class="h-20 rounded w-full object-contain object-center mb-6"
                  src="https://theasperteam.in/static/media/asperlogo_A.87fa4234cd48552f7fd5.png"
                  alt="content"
                />
                <h3 class="tracking-widest text-xs font-medium title-font">
                  For what we aspire
                </h3>
                <h2 class="text-lg  font-medium title-font mb-4">Team Asper</h2>
                <p class="leading-relaxed text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Debitis, mollitia.
                </p>
                <div className="flex gap-2 mt-4 social-links w-fit rounded-lg px-2">
                    <h1 className="text-2xl"><a href=""><i class="ri-instagram-line"></i></a></h1>
                    <h1 className="text-2xl"><a href=""><i class="ri-linkedin-fill"></i></a></h1>
                    <h1 className="text-2xl"><a href=""><i class="ri-twitter-x-line"></i></a></h1>
                    <h1 className="text-2xl"><a href=""><i class="ri-links-line"></i></a></h1>
                    
                </div>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="club-cards  p-6">
                <img
                  class="h-20 rounded w-full object-contain object-center mb-6"
                  src="https://ecellrgpv.com/assets/img/logo.png"
                  alt="content"
                />
                <h3 class="tracking-widest text-xs font-medium title-font">
                Building An Enterprising India
                </h3>
                <h2 class="text-lg  font-medium title-font mb-4">Team E-Cell</h2>
                <p class="leading-relaxed text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Debitis, mollitia.
                </p>
                <div className="flex gap-2 mt-4 social-links w-fit rounded-lg px-2">
                    <h1 className="text-2xl"><a href=""><i class="ri-instagram-line"></i></a></h1>
                    <h1 className="text-2xl"><a href=""><i class="ri-linkedin-fill"></i></a></h1>
                    <h1 className="text-2xl"><a href=""><i class="ri-twitter-x-line"></i></a></h1>
                    <h1 className="text-2xl"><a href=""><i class="ri-links-line"></i></a></h1>
                    
                </div>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="club-cards  p-6">
                <img
                  class="h-20 rounded w-full object-contain object-center mb-6"
                  src={Devoiclogo}
                  alt="content"
                />
                <h3 class="tracking-widest text-xs font-medium title-font">
                  Innovating Creativity
                </h3>
                <h2 class="text-lg  font-medium title-font mb-4">The Devoic</h2>
                <p class="leading-relaxed text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Debitis, mollitia.
                </p>
                <div className="flex gap-2 mt-4 social-links w-fit rounded-lg px-2">
                    <h1 className="text-2xl"><a href=""><i class="ri-instagram-line"></i></a></h1>
                    <h1 className="text-2xl"><a href=""><i class="ri-linkedin-fill"></i></a></h1>
                    <h1 className="text-2xl"><a href=""><i class="ri-twitter-x-line"></i></a></h1>
                    <h1 className="text-2xl"><a href=""><i class="ri-links-line"></i></a></h1>
                    
                </div>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="club-cards  p-6">
                <img
                  class="h-20 rounded w-full object-contain object-center mb-6"
                  src="https://logogen.gdscasu.com/logos/gdsc-logo.png"
                  alt="content"
                />
                <h3 class="tracking-widest text-xs font-medium title-font">
                  Help Learn Connect
                </h3>
                <h2 class="text-lg  font-medium title-font mb-4">
                  Team GDSC
                </h2>
                <p class="leading-relaxed text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, mollitia.
                </p>
                <div className="flex gap-2 mt-4 social-links w-fit rounded-lg px-2">
                    <h1 className="text-2xl"><a href=""><i class="ri-instagram-line"></i></a></h1>
                    <h1 className="text-2xl"><a href=""><i class="ri-linkedin-fill"></i></a></h1>
                    <h1 className="text-2xl"><a href=""><i class="ri-twitter-x-line"></i></a></h1>
                    <h1 className="text-2xl"><a href=""><i class="ri-links-line"></i></a></h1>
                    
                </div>
              </div>
            </div>
            
            
            
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;

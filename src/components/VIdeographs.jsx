import React from "react";
import shankhnaadvdo from "../assets/shankhnaadvideo.mp4";
import mahavideo from "../assets/mahavideo.mp4";
import vijayvideo from "../assets/vijayvideo.mp4";
import coverimg1 from "../assets/cover-vdo1.png";
import coverimg2 from "../assets/cover-vdo3.jpeg";
import coverimg3 from "../assets/cover-vdo2.png";
import shankhnaadimg from "../assets/shankhnaadimg2.jpg";

const VIdeographs = () => {
  return (
    <>
      <div class="container my-0 mx-auto md:px-24">
        <section class="">
          <div class="mb-16 flex flex-wrap">
            <div class="mb-6  w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-2/5 lg:pr-6">
              <div class=" relative overflow-hidden rounded-lg">
                <video
                  src={shankhnaadvdo}
                  controls
                  poster={shankhnaadimg}
                  className="w-full"
                ></video>
              </div>
            </div>

            <div class="w-full video-bg pr-8 rounded-xl shrink-0 grow-0 basis-auto lg:w-3/5 lg:pl-6">
              <h3 class="mb-2 pt-4 text-2xl font-bold">
                Shankhnaad - The Ultimate Cultural Fest
              </h3>
              <p class="mb-3 text-sm text-neutral-500 dark:text-neutral-400">
                Fest Filled With Memories ❤️
              </p>
              <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                Shankhnaad, the crown jewel of RGPV's cultural calendar,
                orchestrates an annual symphony of creativity and camaraderie.
                This grand festival, anchored in the spirit of promoting the
                Hindi language, unfolds a magnificent spectrum of events
                encompassing singing, dancing, photography, debates, treasure
                hunts, and painting. <br /> Drawing participants from far and
                wide, it transforms the campus into a vibrant mosaic of diverse
                talents. Beyond the contests, Shankhnaad is a time-honored
                tradition where we collectively revel in joy, forging enduring
                college memories. Year after year, our hearts eagerly anticipate
                the arrival of this cultural spectacle, a testament to the unity
                and spirit that define our college experience.
              </p>
            </div>
          </div>

          <div class="mb-16 flex flex-wrap lg:flex-row-reverse">
            <div class="mb-6 w-full  shrink-0 grow-0 basis-auto lg:mb-0 lg:w-2/5 lg:pl-6">
              <div class=" relative overflow-hidden rounded-lg">
                <video
                  src={mahavideo}
                  controls
                  poster={coverimg2}
                  className="w-full"
                ></video>
              </div>
            </div>

            <div class="w-full video-bg pl-8 rounded-xl shrink-0 grow-0 basis-auto lg:w-3/5 lg:pr-6">
              <h3 class="mb-2 pt-4 text-2xl font-bold">
                Mahasangram : Annual Sports Fest
              </h3>
              <p class="mb-3 text-sm text-neutral-500 dark:text-neutral-400">
                Hosted Annually With ❤️
              </p>
              <p class="text-neutral-500 pb-4 dark:text-neutral-300">
                MAHASANGRAM is the biggest annual sports event of our
                prestigious institute - UIT, RGPV. It was first put together in
                2011 and the legacy continues till today! This event aims at
                achieving physical fitness and mental alertness along with
                inculcating qualities like unity, sportsmanship, team spirit,
                self confidence and leadership among participants. It put forths
                a stage for students to exhibit
                their talents and skills. It continues to be the most
                awaited event. The enthusiasm to participate in different sport
                activities remains unmatched. Students can choose from a diverse
                lot of sports,
                including cricket, basketball, football, table tennis,
                badminton, carom and many more! Overall, this event has an
                immense underlying positive impact on students along with
                relaxation and recreation.
              </p>
            </div>
          </div>

          <div class="flex flex-wrap">
            <div class="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-2/5 lg:pr-6">
              <div class="ripple relative overflow-hidden rounded-lg">
                <video
                  src={vijayvideo}
                  controls
                  poster={coverimg3}
                  className="w-full"
                ></video>
              </div>
            </div>

            <div class="w-full video-bg pl-8 rounded-xl shrink-0 grow-0 basis-auto lg:w-3/5 lg:pl-6">
              <h3 class="mb-3 pt-4 text-2xl font-bold">Vijay Path 2023</h3>
              <p class="mb-2 text-sm text-neutral-500 dark:text-neutral-400">
                Host : Civil Department ❤️
              </p>
              <p class="text-neutral-500 pb-4 pr-8 dark:text-neutral-300">
              Shankhnaad, the crown jewel of RGPV's cultural calendar,
                orchestrates an annual symphony of creativity and camaraderie.
                This grand festival, anchored in the spirit of promoting the
                Hindi language, unfolds a magnificent spectrum of events
                encompassing singing, dancing, photography, debates, treasure
                hunts, and painting. <br /> Drawing participants from far and
                wide, it transforms the campus into a vibrant mosaic of diverse
                talents. Beyond the contests, Shankhnaad is a time-honored
                tradition where we collectively revel in joy, forging enduring
                college memories. Year after year, our hearts eagerly anticipate
                the arrival of this cultural spectacle, a testament to the unity
                and spirit that define our college experience.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default VIdeographs;

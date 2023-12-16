
import React, { useEffect, useState } from "react";
import axios from "axios";

const Update = () => {
  const [initial, final] = useState([
    {
      Rid:"",
      EventName: "",
      HostName: "",
      Discreption: "",
      EDate: "",
      Place: "",
      Time: "",
    },
  ]);
  
  const co =document.cookie.split('=');
  const token = co[1];

  const allupdate = async () => {

    try {
      const response = await axios.get(`http://127.0.0.1:4000/PastEvent/${token}`);
      const data = response.data.data;
      data.map((object) => {
        final((sdata) => [
          ...sdata,
          {
            Rid:object._id,
            EventName: object.EventName,
            HostName: object.HostName,
            Discreption: object.Discreption,
            EDate: object.EDate,
            Place: object.Place,
            Time: object.Time,
          },
        ]);
      });
    } catch (error) {
      if(error.response.request.status === 401){
        navigate('/errorpage');
    }
    else{
   alert(error);
    }
    }
  };

  useEffect(() => {
    allupdate();
  }, []);

  return (
    <>
         <main className="flex mb-10 flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-12 mt-20">
              <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-4xl">
                Past
                <span className="relative whitespace-nowrap text-pink-700">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 418 42"
                    className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/90"
                    preserveAspectRatio="none"
                  >
                    <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                  </svg>
                  <span className="relative ml-4">Events</span>
                </span>
              </h1>
            </main>
            <div class="flex flex-wrap-reverse  justify-center pt-2">
      {initial.map((info) => {
      if(!info.Rid) return null;
        return (
          <>
       
              <div class="max-w-3xl mt-4 h-auto mx-auto p-4 sm:px-6 border-b-4 border-white ">
                <article class="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">

                  <figure class="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                    <img
                      class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                      src="https://ecellrgpv.com/assets/img/gallery/2.jpg"
                      width="540"
                      height="303"
                      alt="Blog post"
                    />
                  </figure>

                  <div>
                    <header>
                      <div class="mb-3">
                        <ul class="flex flex-wrap text-xs font-medium -m-1">
                          <li class="m-1">
                            <a
                              class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
                              href="#0"
                            >
                              On- {info.EDate}
                            </a>
                          </li>
                          <li class="m-1">
                            <a
                              class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
                              href="#0"
                            >
                              Time- {info.Time}
                            </a>
                          </li>
                          <li class="m-1">
                            <a
                              class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out"
                              href="#0"
                            >
                              Mode : Online
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h3 class="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                        <a
                          class="hover:text-gray-100 transition duration-150 ease-in-out"
                          href="#0"
                        >
                          {info.EventName}
                        </a>
                      </h3>
                    </header>
                    <p class="text-lg text-gray-400 flex-grow">
                     {info.Discreption}
                    </p>
                    <p class="text-sm pt-1 text-blue-400 flex-grow">
                      Venue : {info.Place}
                    </p>
                    <footer class="flex items-center mt-4">
                      <a href="#0">
                        <img
                          class="rounded-full flex-shrink-0 mr-4"
                          src="data:image/jpeg;base64,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"
                          width="40"
                          height="40"
                          alt="Author 04"
                        />
                      </a>
                      <div>
                        <a
                          class="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out"
                          href="#0"
                        >
                          Host : {info.HostName}
                        </a>
                      </div>
                    </footer>
                  </div>
                </article>
              </div>
          </>
        )
      })}
      </div>

    </>
  );
};
export default Update;
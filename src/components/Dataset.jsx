import React from "react";
import barchart4 from "../assets/barchart4.png";

const Dataset = () => {
  return (
    <>
      <section className=" flex flex-col md:flex-row w-full px-12 py-0 justify-between items-center">
        <div>
          <img
            className="mix-blend-difference h-[40vw] w-[50vw]"
            src={barchart4}
            alt=""
          />
        </div>
        <div className="w-1/2">
          <section className="">
            <div className="px-4 py- mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-0">
              <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
                <div className="max-w-md sm:mx-auto sm:text-center">
                  <div className="flex items-center justify-center dataset-circle w-16 h-16 mb-4 rounded-full sm:mx-auto sm:w-24 sm:h-24">
                    <h1 className="text-2xl">78%</h1>
                  </div>
                  <h6 className="mb-3 text-xl font-bold leading-5">
                    Technical Events
                  </h6>
                </div>
                <div className="max-w-md sm:mx-auto sm:text-center">
                <div className="flex items-center justify-center dataset-circle w-16 h-16 mb-4 rounded-full sm:mx-auto sm:w-24 sm:h-24">
                    <h1 className="text-2xl">22%</h1>
                  </div>
                  <h6 className="mb-3 text-xl font-bold leading-5">
                    Non Tech Events
                  </h6>
                  
                 
                </div>
                <div className="max-w-md sm:mx-auto sm:text-center">
                <div className="flex items-center justify-center dataset-circle w-16 h-16 mb-4 rounded-full sm:mx-auto sm:w-24 sm:h-24">
                    <h1 className="text-2xl">54%</h1>
                  </div>
                  <h6 className="mb-3 text-xl font-bold leading-5">
                    Offline Events
                  </h6>
                  
                
                </div>
                <div className="max-w-md sm:mx-auto sm:text-center">
                <div className="flex items-center justify-center dataset-circle w-16 h-16 mb-4 rounded-full sm:mx-auto sm:w-24 sm:h-24">
                    <h1 className="text-2xl">46%</h1>
                  </div>
                  <h6 className="mb-3 text-xl font-bold leading-5">
                    Online Events
                  </h6>
                  
                 
                </div>
              </div>
            </div>
          </section>
          
        </div>
        
      </section>
    </>
  );
};

export default Dataset;

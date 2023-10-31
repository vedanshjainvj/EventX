import React from "react";

const Stats = () => {
  return (
    <>
      <section className="body-font stats-div px-12 mb-12">
        <div className="container px-12 py-0 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-full">
              <h2 className="title-font font-medium sm:text-4xl text-3xl ">
                78+
              </h2>
              <p className="leading-relaxed">Events Posted</p>
            </div>
            <div className="p-4 sm:w-1/4 w-full">
              <h2 className="title-font font-medium sm:text-4xl text-3xl ">
                1000+
              </h2>
              <p className="leading-relaxed">Registrations</p>
            </div>
            <div className="p-4 sm:w-1/4 w-full">
              <h2 className="title-font font-medium sm:text-4xl text-3xl ">
                100+
              </h2>
              <p className="leading-relaxed">Volunteer's</p>
            </div>
            <div className="p-4 sm:w-1/4 w-full">
              <h2 className="title-font font-medium sm:text-4xl text-3xl ">
                8+
              </h2>
              <p className="leading-relaxed">Teams</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;

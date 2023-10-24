import React, { useState } from "react";

const Eventadd = () => {
  const [eventData, seteventData] = useState({
    eventname: "",
    eventdesc: "",
    eventvenue: "",
    eventdate: "",
    eventtime: "",
    eventeligibility: "",
    eventprizes: "",
    eventhost: "",
    eventbanner: "",
  });
  const [mainTask, setMainTask] = useState([]);

  let name, value;
  const postEventData = (e) => {
    name = e.target.name;
    value = e.target.value;
    console.log(name);
    console.log(value);
    seteventData({
      ...eventData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // it stops reloading of the page when form is submitted
    setMainTask([
      ...mainTask,
      { eventname: eventData.eventname, 
        eventdesc: eventData.eventdesc,
        eventvenue: eventData.eventvenue,
        eventhost: eventData.eventhost,
        eventdate: eventData.eventdate,
        eventtime: eventData.eventtime,
        eventeligibility: eventData.eventeligibility,
        eventprizes: eventData.eventprizes },
    ]);
    seteventData({
      // Clear the form fields after submission
      eventname: "",
      eventdesc: "",
      eventvenue: "",
      eventdate: "",
      eventtime: "",
      eventeligibility: "",
      eventprizes: "",
      eventhost: "",
      eventbanner: null,
    });
  };

  let renderTask = <h2>No task available !</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t) => {
      return (
        <>
        <div className="bg-[#171716] event-cards rounded-lg mr-6 w-[20vw] h-[15vw] flex flex-col g-2 justify-center items-center">
            <div className="bg-cyan-800 h-[8vw] rounded-lg mb-4 mt-0 w-[19vw] event-banner-div"></div>
            <h5>Event Name : <span className="text-yellow-500">{t.eventname}</span></h5>
            <h5>Event Host : <span>{t.eventhost}</span></h5>
            <h5>Event Venue :<span>{t.eventvenue}</span></h5>
        </div>
        </>
        
      );
    });
  }

  return (
    <>
      <form
        className="px-16 py-16 event-form text-white"
        onSubmit={handleSubmit}
      >
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text" // Change the input type to "date"
            name="eventname"
            value={eventData.eventname}
            onChange={postEventData}
            id="floating_date"
            className="block py-2.5 px-0 w-full text-sm event-input bg-transparent appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
          />
          <label
            for="floating_date"
            className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name of the event
          </label>
        </div>

        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="eventdesc"
            value={eventData.eventdesc}
            onChange={postEventData}
            id="floating_password"
            class=" event-input block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="floating_password"
            class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Event Description
          </label>
        </div>

        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="eventvenue"
            value={eventData.eventvenue}
            onChange={postEventData}
            id="floating_repeat_password"
            class="event-input block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="floating_repeat_password"
            class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Venue
          </label>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="date"
              name="eventdate"
              value={eventData.eventdate}
              onChange={postEventData}
              id="floating_first_name"
              class="event-input block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="floating_first_name"
              class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Date
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="time"
              name="eventtime"
              value={eventData.eventtime}
              onChange={postEventData}
              id="floating_last_name"
              class="event-input block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="floating_last_name"
              class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Time
            </label>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="eventeligibility"
              value={eventData.eventeligibility}
              onChange={postEventData}
              id="floating_first_name"
              class="event-input block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="floating_first_name"
              class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Eligibility
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="eventprizes"
              value={eventData.eventprizes}
              onChange={postEventData}
              id="floating_last_name"
              class="event-input block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="floating_last_name"
              class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Prizes & Rewards
            </label>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="eventhost"
              value={eventData.eventhost}
              onChange={postEventData}
              id="event-input floating_phone"
              class="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 event-input focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="floating_phone"
              class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Hosted By
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="file"
              name="eventbanner"
              value={eventData.eventbanner}
              accept="image/*"
              onChange={postEventData}
              id="floating_company"
              class="event-input block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="floating_company"
              class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Event Banner (Landscape)
            </label>
          </div>
        </div>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Submit
        </button>
        
      </form>
      <div className="px-12 flex g-4">
       {renderTask}
      </div>
    </>
  );
};

export default Eventadd;

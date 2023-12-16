import React, { useState,useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import emailjs from '@emailjs/browser';

const AddEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const form = useRef();
  const [initial, final] = useState({
   
    EventName: "",
    Discreption: "",
    Place: "",
    EDate: "",
    Time: "",
    Name: "",
    MobileNumber: "",
    RegLink: "",
    EventBanner: "",
    ReqEmail: "",
    Password: "",
  })
 const [initialhost ,finalhost] =useState("");

  const EventData = (e) => {
    const image = e.target.files;
    const { name, value } = e.target;

    if (name === "") {
      return {
        EventName: initial.EventName,
        Discreption: initial.Discreption,
        Place: initial.Place,
        EDate: initial.EDate,
        Time: initial.Time,
        Name: initial.HostName,
        MobileNumber: initial.MobileNumber,
        RegLink: initial.Prize,
        EventBanner: image[0],
        ReqEmail: initial.ReqEmail,
        Password: initial.Password,
      }
    }
    else {
      final((Edata) => {
        return {
          ...Edata,
          [name]: value
        }
      })
    }
  }
  const EventSave = async (event) => {
    event.preventDefault();
    // const EventBanner = new FormData();
    // EventBanner.append('image', initial.EventBanner)
    const { EventBanner,EventName, Discreption, Place, ReqEmail, EDate, Password, Time, Name,MobileNumber,RegLink } = initial;

    try {
      const response = await axios.post("http://127.0.0.1:4000/uplodeData",{
        EventName, Discreption, Place, ReqEmail, EDate, Password, Time, Name,MobileNumber,RegLink,EventBanner
      })

      const HostEmail1 = response.data.HostEmail1;
      console.log(HostEmail1)
      finalhost(HostEmail1);
      if (ReqEmail === HostEmail1) {
        navigate(`/maindashboard/${id}`)
      } else {
        alert("Event Request have been send sucessfully after verification it will added and show in your Dashboard ")
        navigate(`/PersonalPage/${id}`)
        emailjs.sendForm('service_edl04xe','template_nok8by1', form.current, 'fA8kcfAFIvcziEYcA')
        .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }
      );
      }
    } catch (error) {
      alert(error);
      if (ReqEmail === initialhost) {
        navigate(`/maindashboard/${id}`)
      } else {
        navigate(`/PersonalPage/${id}`)
      }
    }
  }

  return (
      <>
        <form
          className="px-16 py-16 event-form text-white"
          onSubmit={EventSave}
          ref={form}
        >
          <div className="relative z-0 w-full mb-6 group">
            <input 
              type="text" // Change the input type to "date"
              name="EventName"
              value={initial.EventName}
              onChange={EventData}
              id="floating_date"
              className="block py-2.5 px-0 w-full text-sm event-input bg-transparent appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              autoComplete="off"
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
              name="Discreption"
              value={initial.Discreption}
              onChange={EventData}
              autoComplete="off"
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
              name="Place"
              value={initial.Place}
              onChange={EventData}
              autoComplete="off"
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
                name="EDate"
                value={initial.EDate}
                onChange={EventData}
                autoComplete="off"
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
                name="Time"
                value={initial.Time}
                onChange={EventData}
                autoComplete="off"
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
                name="MobileNumber"
                value={initial.MobileNumber}
                onChange={EventData}
                autoComplete="off"
                id="floating_first_name"
                class="event-input block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="floating_first_name"
                class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Mobile Number
              </label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="RegLink"
                value={initial.RegLink}
                onChange={EventData}
                autoComplete="off"
                id="floating_last_name"
                class="event-input block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="floating_last_name"
                class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Registration Link
              </label>
            </div>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="Name"
                value={initial.Name}
                onChange={EventData}
                autoComplete="off"
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
                name="EventBanner"
                //   value={initial.EventBanner}
                accept="image/*"
                autoComplete="off"
                onChange={EventData}
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
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="ReqEmail"
                value={initial.ReqEmail}
                onChange={EventData}
                autoComplete="off"
                id="event-input floating_phone"
                class="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 event-input focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="floating_phone"
                class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Register Email
              </label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="password"
                name="Password"
                value={initial.Password}
                //   accept="image/*"
                autoComplete="off"
                onChange={EventData}
                id="floating_company"
                class="event-input block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <input value={initialhost} name="Email" className="hidden"></input>
              <label
                for="floating_company"
                class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>
          </div>
          <input type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          </input>

        </form>
      </>
  )
}
export default AddEvent;
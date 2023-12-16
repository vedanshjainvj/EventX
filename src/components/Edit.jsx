import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const Edit = ()=>{
    const {id} = useParams();
    const navigate = useNavigate();
   const [initial,final] = useState({
    EventName:"",
    Discreption:"",
    Place:"",
    EDate:"",
    Time:"",
    Name:"",
    RegLink:"",
    EventBanner:"",
    Email:"",
    Password:""
   })
  const [ini,fin] =useState("");

   const EventData = (event)=>{
    const {name,value} =  event.target;
    fin((data)=>{
        return{
            ...data,
            [name]:value
        }
   })
}
 

  const EventSave = async(event)=>{
    event.preventDefault();
    const {  EventName, Discreption, Place,EDate,Time, HostName,Email,EventBanner,RegLink,Password} = ini;
    const ReqEmail = Email;
      try {
        const response = await Axios.post(`http://localhost:4000/edit/${id}`,{
          EventName, Discreption, Place,EDate,Time, HostName,ReqEmail,EventBanner,RegLink,Password
         })
         console.log(response.status);
         if(response.status === 404){
          alert('Enter Correct Password...')
         }
         else{
         navigate(`/personalpage/${id}`)
         }
    } catch (error) {
       if(error.message === 'Request failed with status code 401'){
          alert('Please login again....')
          navigate('/login')
       }
       else{
        alert(error);
        navigate(`/personalpage/${id}`)
       }
    } 
  }
   
  
   const getdata = async()=>{

    const response = await Axios.get(`http://127.0.0.1:4000/edit/${id}`);
    
    const Rdata = response.data;

    final((info)=>{
         info.EventName = Rdata.EventName
         info.Discreption = Rdata.Discreption
         info.Place = Rdata.Place
         info.EDate = Rdata.EDate
         info.Time = Rdata.Time
         info.Name = Rdata.Name
         info.RegLink = Rdata.RegLink
         info.EventBanner = Rdata.EventBanner
         info.Email = Rdata.Email
         info.Password = Rdata.Password
    })
       fin(initial);
   }


 useEffect(()=>{
    getdata();
 },[])

    return(
        <>
                <form
          className="px-16 py-16 event-form text-white"
          onSubmit={EventSave}
        >
          <div className="relative z-0 w-full mb-6 group">
            <input 
              type="text" // Change the input type to "date"
              name="EventName"
              value={ini.EventName}
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
              value={ini.Discreption}
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
              value={ini.Place}
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
                value={ini.EDate}
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
                value={ini.Time}
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
                name="RegLink"
                value={ini.RegLink}
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
                value={ini.Name}
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
                //   value={ini.EventBanner}
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
                name="Email"
                value={ini.Email}
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
                value={ini.Password}
                //   accept="image/*"
                autoComplete="off"
                onChange={EventData}
                id="floating_company"
                class="event-input block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              {/* <input value={initialhost} name="Email" className="hidden"></input> */}
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

export default Edit;
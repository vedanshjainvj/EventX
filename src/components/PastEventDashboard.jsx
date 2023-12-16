import axios from "axios";
import {React,useEffect,useState} from "react";
import { useNavigate,useParams } from "react-router-dom";
import MainDashboardNav from "./MainDashboardNav";
const PastEventDashboard =()=>{
    const { id } = useParams();
    const navigate = useNavigate();
  
    const [initial, final] = useState([{
      Rid: "",
      EventName: "",
      Discreption: "",
      Place: "",
      EDate: "",
      Time: "",
      HostName: "",
      Prize: "",
      EventBanner: "",
    }])
    const [inicount,fincount] = useState(0);

    const mydata = async () => {
      const response = await axios.get(`http://127.0.0.1:4000/PastEvent/${id}`);
      const registerData = response.data.data;
      registerData.map((object) => {
        final((info) => [
          ...info, {
            Rid: object._id,
            EventName: object.EventName,
            Discreption: object.Discreption,
            Place: object.Place,
            EDate: object.EDate,
            Time: object.Time,
            HostName: object.HostName,
            Prize: object.Prize,
            EventBanner: object.EventBanner,
          }
  
        ])
      })
  
    }
  
    useEffect(() => {
      mydata();
    }, [])
 
    // const date = new Date;
    // let year = date.getFullYear();
    // let month = date.getMonth() + 1;
    // let day = date.getDate();
    // let min = date.getMinutes();
    // let hour = date.getHours();
    // if(hour>12){
    //   hour = hour-12;
    // }
    // if(day<10){
    //   day = `0${day}`
    // }
    // if(month<10){
    //   month=`0${month}`
    // }
    // if(hour<10){
    //   hour=`0${hour}`
    // }
    // if(min<10){
    //   min=`0${min}`
    // }
    // const eventdate = `${year}-${month}-${day}`;
    // const eventtime =`${hour}:${min}`;


    // initial.map((info)=>{
    //   if(info.EDate === eventdate && info.Time === eventtime){
    //     const autodelete=async()=>{
    //      await axios.delete(`http://127.0.0.1:4000/PersonalPage/${info.Rid}`);
    //    }
    //    autodelete();
    //   }
    // })

    const countEvent = ()=>{
        fincount =inicount+1; 
    }
  


  return(
    <>
     <div className="flex w-full justify-between">
            <MainDashboardNav></MainDashboardNav>
        <div className="w-5/6  justify-center items-center">
          <div class="flex flex-col items-center justify-center bg-gray-900 py-4">
            <h1 class="text-lg text-gray-400 font-medium">
              Students Data Record UIT & SOIT Both
            </h1>
            <div class="flex flex-col mt-6">
              <div class="-my-2 sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block  sm:px-6 lg:px-8">
                  <div class="shadow sm:rounded-lg">
                    <table class=" text-sm text-gray-400">
                      <thead class="bg-gray-800 text-xs uppercase font-medium">
                        <tr>
                          <th></th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-left tracking-wider"
                          >
                            EventBanner
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-left tracking-wider"
                          >
                            EventName
                          </th>
                          {/* <th
                            scope="col"
                            class="px-6 py-3 text-left tracking-wider"
                          >
                            Discreption
                          </th> */}
                          <th
                            scope="col"
                            class="px-6 py-3 text-left tracking-wider"
                          >
                            Place
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-left tracking-wider"
                          >
                            EDate
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-left tracking-wider"
                          >
                            HostName
                          </th>
                     
                          <th
                            scope="col"
                            class="px-6 py-3 text-left tracking-wider"
                          >
                            Total :- {(initial.length-1)}
                          </th>
                        </tr>
                      </thead>
                      {initial.map((Personaldata) => {
                        {if(!Personaldata.Rid) return null}
                        return(<>
                      <tbody class="bg-gray-800">
                        <tr class="bg-black bg-opacity-20">
                          <td class="pl-4">{inicount}</td>
                          <td class="px-6 py-4 whitespace-nowrap">{Personaldata.EventBanner}</td>
                          <td class="flex px-6 py-4 whitespace-nowrap">
                            <span class="ml-2 font-medium">{Personaldata.EventName}</span>
                          </td>
                          {/* <td class="px-6 py-4 whitespace-nowrap text-xs">
                            {Personaldata.Discreption}
                          </td> */}
                          <td class="px-6 py-4 whitespace-nowrap text-xs">
                            {Personaldata.Place}
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-xs">
                            {Personaldata.EDate}
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">{Personaldata.HostName}</td>
                          <td class="flex px-6 py-4 whitespace-nowrap">
                          <button style={{padding:'5px'}} onClick={async()=>{
                            const conformation = confirm("You have conform");
                            if(conformation===true){
                            await axios.delete(`http://127.0.0.1:4000/PastEvent/${Personaldata.Rid}`);
                            final((initial)=>
                            initial.filter(e=>e.Rid!=Personaldata.Rid)
                            )}
                        }}>
                            <svg
                              class="w-4 fill-current text-red-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                      </>)
                      })}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PastEventDashboard;
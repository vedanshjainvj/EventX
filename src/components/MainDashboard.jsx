import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import MainDashboardNav from "./MainDashboardNav";

const MainDashboard = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const navId = document.getElementById('NavLinkId');

  const [initial, final] = useState([{
    id: "",
    EventName: "",
    Discreption: "",
    Place: "",
    EDate: "",
    Time: "",
    HostName: "",
    Eligibility: "",
    Prize: "",
    EventBanner: "",
    Email: "",
  }])

  const getdata = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:4000/MainDashbord/${id}`);
      const requestData = response.data.request;
      requestData.map((object) => {
      final((info) => [
        ...info, {
          id: object._id,
          EventName: object.EventName,
          Discreption: object.Discreption,
          Place: object.Place,
          EDate: object.EDate,
          Time: object.Time,
          Name: object.Name,
          RegLink: object.RegLink,
          EventBanner: object.EventBanner,
          Email: object.ReqEmail,
          MobileNumber: object.MobileNumber,
        }
      ])
    })
  } catch (error) {
  if(error.response.request.status === 401){
      navigate('/errorpage');
  }
  else{
 alert(error);
  }
  }
  }
  useEffect(() => {
    getdata();
  }, [])

  return (
    <>
      <div className="flex w-full justify-between ">
        <MainDashboardNav></MainDashboardNav>
      

        <div className=" w-5/6  justify-center items-center   ">
          <div class="flex  whitespace-nowrap overflow-auto scrollbar-hide flex-col items-center justify-center bg-gray-900 py-4">
            <h1 class="text-lg text-gray-400 font-medium">
              Event Request
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
                            class="px-5 py-3 text-left tracking-wider"
                          >
                            EventBanner
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-left tracking-wider"
                          >
                            EventName
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
                            EDate
                          </th>
                          <th
                            scope="col"
                            class="px-8 py-3 text-left tracking-wider"
                          >
                            Email
                          </th>

                          <th
                            scope="col"
                            class="px-1 py-3 text-left tracking-wider"
                          >
                            Total :- {(initial.length - 1)}
                          </th>
                        </tr>
                      </thead>
                      {initial.map((reqData) => {
                        if(!reqData.id) return null;
                        return (<>
                          <tbody class="bg-gray-800">
                            <tr class="bg-black bg-opacity-20">
                              <td class="pl-4">1</td>
                              <td class="px-2 py-4 whitespace-nowrap">{reqData.EventBanner}</td>
                              <td class="flex px-4 py-4 whitespace-nowrap">
                                <span class="ml-1 font-medium">{reqData.EventName}</span></td>
                              <td class="px-4 py-4 whitespace-nowrap">{reqData.Name}</td>
                              <td class="px-4 py-4 whitespace-nowrap text-xs">{reqData.EDate}</td>
                              <td class="px-4 py-4 whitespace-nowrap">{reqData.Email}</td>
                              <td class="flex px-2 py-4 whitespace-nowrap">
                                <Link to={`/VerifyEvent/${reqData.id}/${id}/`}>
                                  <svg
                                    class="mx-2 w-4 fill-current text-green-600 cursor-pointer"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clip-rule="evenodd"
                                    />
                                  </svg>
                                </Link>

                                <button id="deletebutton" onClick={async () => {
                                  const response = await axios.delete(`http://127.0.0.1:4000/Request/${reqData.id}`);
                                  final((initial)=>
                                    initial.filter(e=>e.id!=reqData.id)
                                  )
                                  // navigate(`/maindashboard/${id}`)
                                }}>
                                  <svg
                                    class="mx-2 w-4 fill-current text-red-500 curs"
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
export default MainDashboard;

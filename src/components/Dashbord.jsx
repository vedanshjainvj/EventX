import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import MainDashboardNav from "./MainDashboardNav";


const Dashbord = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [initial, final] = useState([{
    Rid: "",
    GroupName: "",
    Fname: "",
    CurrentLeader: "",
    Email: "",
    MobileNumber: "",
  }])
  const mydata = async () => {
    try {
      
      const response = await axios.get(`http://127.0.0.1:4000/Dashbord/${id}`);
    console.log(response);
    const registerData = response.data.data;
    registerData.map((object) => {
      final((info) => [
        ...info, {
          Rid: object._id,
          GroupName: object.GroupName,
          Fname: object.Fname,
          CurrentLeader: object.CurrentLeader,
          Email: object.Email,
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
    mydata();
  }, [])

  // const DeletAcount = async ()=>{
  //     // const response = await axios.delete(`http://127.0.0.1:4000/Dashbord/${id}`);
  // }

  return (
    <>
      <div className="flex w-full justify-between">
        <MainDashboardNav></MainDashboardNav>
        <div className="w-5/6  justify-center items-center">
          <div class="flex flex-col items-center justify-center bg-gray-900 py-4">
            <h1 class="text-lg text-gray-400 font-medium">
              Club and Socities
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
                            GroupName
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-left tracking-wider"
                          >
                            Fname
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-left tracking-wider"
                          >
                            CurrentLeader
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-left tracking-wider"
                          >
                            MobileNumber
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-left tracking-wider"
                          >
                            Email
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-left tracking-wider"
                          >
                            Total :- {(initial.length - 1)}
                          </th>
                        </tr>
                      </thead>
                      {initial.map((Personaldata) => {
                        {if(!Personaldata.Rid ) return null}
                        return (<>
                          <tbody class="bg-gray-800">
                            <tr class="bg-black bg-opacity-20">
                              <td class="pl-4">1</td>
                              <td class="flex px-6 py-4 whitespace-nowrap">
                                <span class="ml-2 font-medium">{Personaldata.GroupName}</span>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap text-xs">
                                {Personaldata.Fname}
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap text-xs">
                                {Personaldata.CurrentLeader}
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap text-xs">
                                {Personaldata.MobileNumber}
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">{Personaldata.Email}</td>
                              <td class="flex px-6 py-4 whitespace-nowrap">
                                <button onClick={async () => {
                                  await axios.delete(`http://127.0.0.1:4000/Dashbord/${Personaldata.Rid}`);
                                  final((initial)=>
                                  initial.filter(e=>e.Rid!=Personaldata.Rid)
                                  )
                                  // navigate(`/maindashboard/${id}`)
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
      {/* <table>
                {initial.map((Personaldata)=>{
                    return(<>
                 <tr style={{color:'white',border:'2px solid white',margin:'10px 20px'}}>
                <td>{Personaldata.GroupName}</td>
                <td>{Personaldata.Fname}</td>
                <td>{Personaldata.CurrentLeader}</td>
                <td>{Personaldata.Email}</td>
                <td>
         
                </td>
            </tr>
                </>)
            })}
        </table> */}
    </>
  )
}

export default Dashbord;
import React, { useEffect, useState } from "react";
import { useLocation,useNavigate,NavLink} from "react-router-dom";
import Axios from "axios";

const SRegister = () => {

  const navigate = useNavigate();
  const [initial,final] = useState({
          Name:"",
          Email:"",
          MobileNumber:""
  })

  const StuData = (event)=>{
      const {name,value} = event.target;
      console.log(name,value);
    final((finalValue)=>{
      return{
          ...finalValue,
          [name]:value
      }
    })
  }

  const StuReg = async (event)=>{
      event.preventDefault();
      const { Name, Email, MobileNumber} = initial;
        try {
          const response = await Axios.post("http://localhost:4000/Sregister",{
              Name, Email, MobileNumber
           })
           navigate("/Update")
      } catch (error) {
        alert("Student have register....")
        navigate("/Update")
      }
  }
  return (
    <>
      {/* <form onSubmit={StuReg} method="POST" style={{color:'black',display:'flex',flexDirection:'column'}} >
                    <input type="text" placeholder="Last Name *" name="Name" onChange={StuData}  />
                   <input  type="email" placeholder="Your Email *" name="Email" onChange={StuData} />
                    <input type="number" placeholder="Your Phone *" name="MobileNumber" onChange={StuData} />
                     <input type="submit" value={"Register"} style={{background:'white',margin:'10px'}}/>
        </form> */}
       <form onSubmit={StuReg} method="POST" class="min-w-screen stu-form xl:h-[100vh] flex items-center justify-center px-5 py-5">
        <div
          class="rounded-3xl student-div shadow-xl w-full overflow-hidden"
          style={{ maxWidth: "1000px" }}
        >
          <div class="md:flex ">
            {/* <div class="hidden md:block w-1/2 studentreg-gif  py-10 px-10"></div> */}
            <div class="w-full md:w-full pt-6 form-div-container px-5 md:px-10">
              <div class="text-center mb-4">
                <h1 class="font-bold text-3xl">STUDENT REGISTER</h1>
                <p className="mt-4">Enter your information to register</p>
              </div>
              <div>
                <div class="flex -mx-3">
                  <div class="w-1/2 px-3 mb-5">
                    <label for="" class="text-xs font-semibold px-1">
                      Full Name
                    </label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-account-outline text-lg"></i>
                      </div>
                      <input
                        type="text" name="Name" onChange={StuData}
                        class="w-full -ml-10 pl-2 py-1 pr-2 text-gray-800 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Vedansh Jain"
                      />
                    </div>
                  </div>
                  <div class="w-1/2 px-3 mb-5">
                    <label for="" class="text-xs font-semibold px-1">
                      Phone Number
                    </label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-account-outline  text-lg"></i>
                      </div>
                      <input
                        type="text" name="MobileNumber" onChange={StuData}
                        class="w-full -ml-10 text-gray-800  pl-2 pr-2 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="8415984253"
                      />
                    </div>
                  </div>
                </div>
                <div class="flex -mx-3">
                  <div class="w-1/2 px-3 mb-5">
                    <label for="" class="text-xs font-semibold px-1">
                      Batch Year
                    </label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-account-outline text-lg"></i>
                      </div>
                      <input
                        type="text"
                        class="w-full -ml-10 pl-2 py-1 pr-2 text-gray-800 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="2022-2026"
                      />
                    </div>
                  </div>
                  <div class="w-1/2 px-3 mb-5">
                    <label for="" class="text-xs font-semibold px-1">
                      Branch
                    </label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-account-outline  text-lg"></i>
                      </div>
                      <input
                        type="text"
                        class="w-full -ml-10 text-gray-800  pl-2 pr-2 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Computer Science Engineering"
                      />
                    </div>
                  </div>
                </div>
                <div class="flex -mx-3">
                  <div class="w-full px-3 mb-5">
                    <label for="" class="text-xs  font-semibold px-1">
                      Email Address
                    </label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-email-outline text-lg"></i>
                      </div>
                      <input
                        type="email" name="Email" onChange={StuData}
                        class="w-full -ml-10 pl-2 pr-2 py-1 text-gray-800  rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="vedansh.rgpv.cse@gmail.com"
                      />
                    </div>
                  </div>
                </div>
                <div class="flex -mx-3">
                  <div class="w-full px-4 mb-5">
                    <div className="radio-group">
                      <label for="">
                        College Name : 
                        <input className="ml-4"
                          type="radio"
                          name="college"
                          value="uitrgpc"
                          // onChange={handleInputChange}
                        />
                        <span className="radio-custom"></span>
                        UIT Rgpv
                      </label>
                      <label>
                        <input className="ml-4"
                          type="radio"
                          name="college"
                          value="soitrgpv"
                          // onChange={handleInputChange}
                        />
                        <span className="radio-custom"></span>
                        SOIT Rgpv
                      </label>
                    </div>
                  </div>
                </div>
                <div class="flex -mx-3">
                  <div class="w-full px-3 mb-5">
                    <label for="" class="text-xs font-semibold px-1">
                    Interest, Skills, Hobbies
                    </label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-email-outline text-lg"></i>
                      </div>
                      <input
                        type="email"
                        class="w-full text-gray-800  -ml-10 pl-2 pr-2 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Enter your Hobbies or Skills or Interest"
                      />
                    </div>
                  </div>
                </div>
                <div class="flex -mx-3">
                  <div class="w-full px-3 mb-12">
                    <label for="" class="text-xs font-semibold px-1">
                      Password
                    </label>
                    <div class="flex">
                      <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i class="mdi mdi-lock-outline text-lg"></i>
                      </div>
                      <input
                        type="text"
                        class="w-full -ml-10 pl-2 text-gray-800  pr-2 py-1 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Enter Strong Password"
                      />
                    </div>
                  </div>
                </div>

                <div class="flex -mx-3">
                  <div class="w-full px-3 mb-5">
                    <input type="submit" value={"Register"} class="block w-full max-w-xs mx-auto register-btn-student focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"/>
                     
                    
                  </div>
                </div>
                <div class="flex -mx-3 text-center">
                  <div class="w-full px-3 mb-5">
                  <NavLink to='/' className="block w-full max-w-xs mx-auto register-btn-student2 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                      Back to home<span className="ml-2 "><i class="ri-home-8-line"></i></span>
                    </NavLink>                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </form>
    </>
  );
};
export default SRegister;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Request.css'

const Request = ()=>{
    const navigate = useNavigate();
    
    const [initial,final] = useState({
        GroupName:"",
        Fname:"",
        Lname:"",
        Email:"",
        MobileNumber:"",
        Password:"",
     })

     const ReqData = (item)=>{
        const {name,value} = item.target;
         final((data)=>{
             return{
                 ...data,
                 [name]:value
             }
         })
     }


     const ReqSubmit = async (event)=>{
        event.preventDefault();
        const { GroupName,Fname,Lname, Email, MobileNumber,Password,Cpassword} = initial;
          try {
            const response = await axios.post(`http://localhost:4000/request`,{
                GroupName,Fname,Lname, Email, MobileNumber,Password
             })
             console.log(response);
            navigate(`/`)
        } catch (error) {
            console.log(error);
            alert(error);
        } 
    } 
    return(
        <>
        {/* <form onSubmit={ReqSubmit} method="POST" style={{color:'black',display:'flex',flexDirection:'column'}} >
                    <input type="text" placeholder="Group Name*" name="GroupName" onChange={ReqData}/>
                    <input type="text" placeholder="First Name *" name="Fname" onChange={ReqData}/>
                    <input type="text" placeholder="Last Name *" name="Lname" onChange={ReqData}/>
                   <input  type="email" placeholder="Your Email *" name="Email" onChange={ReqData}/>
                    <input type="number" placeholder="Your Phone *" name="MobileNumber" onChange={ReqData}/>
                    <input type="password" placeholder="Strong Password *"  name="Password" onChange={ReqData}/>
                    <input type="submit" value={"Register"} style={{background:'white',margin:'10px'}}/>
        </form> */}
        <div class="background">
  <div class="container">
    <div class="screen">
      <div class="screen-header">
        <div class="screen-header-left">
          <div class="screen-header-button close"></div>
          <div class="screen-header-button maximize"></div>
          <div class="screen-header-button minimize"></div>
        </div>
        <div class="screen-header-right">
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
        </div>
      </div>
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span>REQUEST FOR</span>
            <span>AN EVENT</span>
          </div>
          <div class="app-contact">CONTACT US : 9129872138</div>
        </div>
        <div class="screen-body-item">
          <div class="app-form">
            <div class="app-form-group">
              <input class="app-form-control" placeholder="Team Name"/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="First Name"/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="Last Name"/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" type="email" placeholder="Email"/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="Mobile Number"/>
            </div>
            <div class="app-form-group message">
              <input class="app-form-control" placeholder="MESSAGE"/>
            </div>
            <div class="app-form-group buttons">
              <button class="app-form-button">SEND</button>
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

export default Request;
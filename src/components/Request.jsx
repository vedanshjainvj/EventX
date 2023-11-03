import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
        <form onSubmit={ReqSubmit} method="POST" style={{color:'black',display:'flex',flexDirection:'column'}} >
                    <input type="text" placeholder="Group Name*" name="GroupName" onChange={ReqData}/>
                    <input type="text" placeholder="First Name *" name="Fname" onChange={ReqData}/>
                    <input type="text" placeholder="Last Name *" name="Lname" onChange={ReqData}/>
                   <input  type="email" placeholder="Your Email *" name="Email" onChange={ReqData}/>
                    <input type="number" placeholder="Your Phone *" name="MobileNumber" onChange={ReqData}/>
                    <input type="password" placeholder="Strong Password *"  name="Password" onChange={ReqData}/>
                    <input type="submit" value={"Register"} style={{background:'white',margin:'10px'}}/>
        </form>
        </>
    )
}

export default Request;
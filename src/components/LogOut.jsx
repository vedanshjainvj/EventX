import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";



const LogOut =()=>{
    const navigate = useNavigate(); 
     const getrequest = async(info)=>{
      try {
        await axios.get('http://127.0.0.1:4000/logout')
        navigate('/');
    } catch (error) {
        alert("They have some error please Log Out again");
    }
     }

     useEffect(async()=>{
        getrequest();
      },[])
  return(
    <>

    </>
  )
}


export default LogOut;
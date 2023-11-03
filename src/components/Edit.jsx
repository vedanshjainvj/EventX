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
    HostName:"",
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
    const { EventName, Discreption, Place,EDate,Time, HostName,Email,Password} = ini;
      try {
        const response = await Axios.post(`http://localhost:4000/edit/${id}`,{
          EventName, Discreption, Place,EDate,Time, HostName,Email,Password
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
         info.HostName = Rdata.HostName
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
        {console.log(ini.EventName)}
                <form onSubmit={EventSave} method="POST" style={{ color: 'black', display: 'flex', flexDirection: 'column' }} >
                <input type="text" placeholder="Event Name" name="EventName" onChange={EventData} value={ini.EventName} />
                <input type="text" placeholder="Event Detail" name="Discreption" onChange={EventData} value={ini.Discreption}  />
                <input type="text" placeholder="Vanue" name="Place" onChange={EventData} value={ini.Place} />
                <input type="date" placeholder="Date" name="EDate" onChange={EventData} value={ini.EDate} />
                <input type="time" placeholder="Time" name="Time" onChange={EventData} value={ini.Time} />
                <input type="text" placeholder="HostName" name="HostName" onChange={EventData} value={ini.HostName}  />
                <input type="email" placeholder="Email" name="Email" onChange={EventData} value={ini.Email}/>
                <input type="password" placeholder="Conform Password *" name="Password" onChange={EventData} />
                <input type="submit" value={"Save"} style={{ background: 'white', margin: '10px' }} />
                </form>
        </>
    )
}

export default Edit;
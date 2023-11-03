import React, { useEffect, useState } from "react";
import axios from "axios";


const Update =()=>{
   const [initial,final] = useState([
    {
      EventName: "",
      HostName: "",
      Discreption: "",
      EDate: "",
      Place: "",
      Time: ""
    }
   ]);
    

  const allupdate = async()=>{
    try {
    const response = await axios.get("http://127.0.0.1:4000/events");
    const data = response.data.data;
    data.map((object) => {
      final((sdata) => [
        ...sdata, {
          EventName: object.EventName,
          HostName: object.HostName,
          Discreption: object.Discreption,
          EDate: object.EDate,
          Place:object. Place,
          Time: object.Time
        }
      ])
    })
  } catch (error) {
      console.log(error)
  }
  }


   useEffect(()=>{
       allupdate();
   },[])



    return(
        <>
        <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
            {initial.map((info) => {
                     console.log(info.EventName)
           return(
              <>
            <div style={{color:'white',display:'flex',flexDirection:'column',border:'2px solid white',width:'600px',margin:'20px',}}>
            <td style={{margin:'15px',}}>{info.EventName}</td>
            <td style={{margin:'15px',}}>{info.HostName}</td>
            <td style={{margin:'15px',}}>{info.Discreption}</td>
            <td style={{margin:'15px',}}>{info.EDate}</td>
            <td style={{margin:'15px',}}>{info.Place}</td>
            <td style={{margin:'15px',}}>{info.Time}</td>
            </div>
            </>
            )
          })}
          </div>
        </>
    )
}
export default Update;
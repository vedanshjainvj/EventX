import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, redirect, useNavigate, useParams} from "react-router-dom";


const PersonalPage = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [initial, final] = useState([{
    id: "",
    EventName: "",
    HostName: "",
    Discreption: "",
    EDate: "",
    Place: "",
    Time: ""
  }]);

  const getdata = async () => {
    console.log(id);
    const response = await Axios.get(`http://127.0.0.1:4000/PersonalPage/${id}`,
      {
        withCredentials: true,
        credentials: 'include',
        headers: {
          'Access-Control-Allow-Origin': "http://localhost:4000",
          'Access-Control-Allow-Credentials': true,
          'Content-Type': 'application/json'
        }
      }
    );
    const data = response.data.data;
   
    console.log(response.data);
    data.map((object) => {
      final((sdata) => [
        ...sdata, {
          id: object._id,
          EventName: object.EventName,
          HostName: object.HostName,
          Discreption: object.Discreption,
          EDate: object.EDate,
          Place:object. Place,
          Time: object.Time
        }

      ])
    })

  }
  useEffect(() => {
    getdata();
  }, [])


  //for Edit
  const Editdata = (e)=>{
    console.log(e.id)
  }
   
  if(initial.length === 1){
    return(
      <>
       <button style={{ border: "2px solid white", padding: "10px" }}><Link to={`/AddEvent/${id}`}>Add Event</Link></button>
      </>
    )
  }

  return (
    <>
      <div>
        <button style={{ border: "2px solid white", padding: "10px" }}><Link to={`/AddEvent/${id}`}>Add Event</Link></button>
          <div>
          <table style={{display:'flex', flexDirection:"column",border:'2px solid white'}}>
          <tr>
            <th>EVENT NAME</th>
            <th>HOST NAME</th>
            <th>DISCREPTION</th>
            <th>EVENT DATE</th>
            <th>EVENT PLACE</th>
            <th>EVENT TIME</th>
            </tr>
          {initial.map((info) => {
            return(
              <>
            <tr style={{color:'white',display:'flex',margin:'20px',}}>
            <td style={{margin:'15px',}}>{info.EventName}</td>
            <td style={{margin:'15px',}}>{info.HostName}</td>
            <td style={{margin:'15px',}}>{info.Discreption}</td>
            <td style={{margin:'15px',}}>{info.EDate}</td>
            <td style={{margin:'15px',}}>{info.Place}</td>
            <td style={{margin:'15px',}}>{info.Time}</td>
            <td style={{margin:'15px',border:'2px solid white'}}><Link to={`/edit/${info.id}`} id="home">Edit</Link></td>
            <td style={{margin:'15px',border:'2px solid white'}}><button style={{padding:'5px'}} onClick={async()=>{
               console.log("Delete");
               const response = await Axios.delete(`http://127.0.0.1:4000/PersonalPage/${info.id}`);
               console.log(response);
               navigate(`/personalpage/${id}`)
            }}>Deleat</button></td>
            </tr>
            </>
            )
          })}

</table>
          </div>
      </div>
    </>
  )
}
export default PersonalPage;
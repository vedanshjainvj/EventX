import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link,useNavigate,useParams } from "react-router-dom";

const MainDashboard = ()=>{
    const {id} = useParams();
    const navigate = useNavigate();



    const [initial,final] = useState([{
        id:"",
        GroupName:"",
        Fname:"",
        Lname:"",
        Email:"",
        MobileNumber:"",
        Password:"",
    }])

const getdata = async()=>{
    const response = await axios.get(`http://127.0.0.1:4000/MainDashbord/${id}`);

   const requestData = response.data;

    requestData.map((object) => {
        final((info) => [
          ...info, {
            id:object._id,
            GroupName: object.GroupName,
            Fname: object.Fname,
            Lname: object.Lname,
            Email: object.Email,
            MobileNumber:object.MobileNumber,
            Password:object.Password,
          }
  
        ])
      })
}
useEffect(()=>{
 getdata();
},[])


 if(initial.length === 1){
    return(
    <>
  <div>
    <button style={{border:'2px solid white',padding:'10px',borderRadius:'10px',margin:'50px'}}><Link to={`/dashbord/${id}`}>Team Member</Link></button>
    <button style={{border:'2px solid white',padding:'10px',borderRadius:'10px'}}><Link to={`/register/${id}`}>Registration</Link></button>
 </div>
 </>
    )
 }
 else{
return(
    <>
     <div>
        <button style={{border:'2px solid white',padding:'10px',borderRadius:'10px',margin:'50px'}}><Link to={`/dashbord/${id}`}>Team Member</Link></button>
        <button style={{border:'2px solid white',padding:'10px',borderRadius:'10px'}}><Link to={`/register/${id}`}>Registration</Link></button>
     </div>

     <table>
     {   console.log(initial.length)}

     {initial.map((reqData)=>{
                    return(
                    <>
                <tr style={{border:'2px solid white'}}>
                <td style={{margin:'50px'}}>{reqData.GroupName}</td>
                <td>{reqData.Fname}</td>
                <td>{reqData.Lname}</td>
                <td>{reqData.Email}</td>
                <td>{reqData.MobileNumber}</td>
                <td>{reqData.Password}</td>
                <button style={{color:'white',margin:'15px',border:'2px solid white'}}><Link to={`/register/${reqData.id}/${id}/`}>Add</Link></button>
                <td><button id="deletebutton" onClick={async()=>{
                console.log("Delete");
                const response = await axios.delete(`http://127.0.0.1:4000/Request/${reqData.id}`);
                console.log(response);
                 navigate(`/maindashboard/${id}`)
            }} style={{margin:'20px',border:'2px solid white', padding:'5px'}}>Delete</button></td>
            </tr>
                </>)
            })}
     </table>
    </>
)
        }
}
export default MainDashboard;

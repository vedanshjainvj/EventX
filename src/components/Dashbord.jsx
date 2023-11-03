import React, { useEffect , useState} from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";


const Dashbord = ()=>{
const {id} = useParams();
const navigate = useNavigate();

const [initial,final] = useState([{
    Rid :"",
    GroupName:"",
    Fname:"",
    Lname:"",
    Email:"",
    MobileNumber:"",
 }])
  const mydata = async()=>{
    const response = await axios.get(`http://127.0.0.1:4000/Dashbord/${id}`);
    const registerData = response.data.data;
    registerData.map((object) => {
        final((info) => [
          ...info, {
            Rid: object._id,
            GroupName: object.GroupName,
            Fname: object.Fname,
            Lname: object.Lname,
            Email: object.Email,
            MobileNumber:object.MobileNumber,
          }
  
        ])
      })
  
 }
 
 useEffect(()=>{
  mydata();
 },[])

// const DeletAcount = async ()=>{
//     console.log("Delete");
//     // const response = await axios.delete(`http://127.0.0.1:4000/Dashbord/${id}`);
// }

    return(
        <>
        <h1>Total Registration :- {initial.length}</h1>
        <br/>
        <table>
                {initial.map((Personaldata)=>{
                    return(<>
            <tr style={{color:'white',border:'2px solid white',margin:'10px 20px'}}>
                <td>{Personaldata.GroupName}</td>
                <td>{Personaldata.Fname}</td>
                <td>{Personaldata.Lname}</td>
                <td>{Personaldata.Email}</td>
                <td><button onClick={async()=>{
                console.log("Delete");
                 const response = axios.delete(`http://127.0.0.1:4000/Dashbord/${Personaldata.Rid}`);
                // const response = await axios.delete(`http://127.0.0.1:4000/Dashbord/${Personaldata.Rid}`);
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

export default Dashbord;
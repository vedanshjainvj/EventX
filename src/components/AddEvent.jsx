import React, { useState } from "react";
import {useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const AddEvent = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [initial, final] = useState({
        EventName: "",
        Discreption: "",
        Place: "",
        EDate: "",
        Time: "",
        HostName: "",
        Email: "",
        Password: "",
    })
    const EventData = (e)=>{
        const {name,value} = e.target;
        final((Edata)=>{
             return{
                ...Edata,
                [name]:value
             }
        })
    } 
    const EventSave = async (event)=>{
        event.preventDefault();
        const {  EventName, Discreption,Place, Email,EDate,Password,Time,HostName} = initial;
        try {
            const response = await axios.post("http://127.0.0.1:4000/uplodeData",{
                EventName, Discreption,Place, Email,EDate,Password,Time,HostName
             })
             navigate(`/PersonalPage/${id}`)
             console.log(response)
        } catch (error) {
            console.log(error);
        } 
    }

    return (

        <>

            <form onSubmit={EventSave} method="POST" style={{ color: 'black', display: 'flex', flexDirection: 'column' }} >
                <input type="text" placeholder="Event Name" name="EventName" onChange={EventData} />
                <input type="text" placeholder="Event Detail" name="Discreption" onChange={EventData} />
                <input type="text" placeholder="Vanue" name="Place" onChange={EventData} />
                <input type="date" placeholder="Date" name="EDate" onChange={EventData} />
                <input type="time" placeholder="Time" name="Time" onChange={EventData} />
                <input type="text" placeholder="HostName" name="HostName" onChange={EventData} />
                <input type="email" placeholder="Email" name="Email" onChange={EventData} />
                <input type="password" placeholder="Conform Password *" name="Password" onChange={EventData} />
                <input type="submit" value={"Save"} style={{ background: 'white', margin: '10px' }} />
            </form>
        </>
    )
}
export default AddEvent;
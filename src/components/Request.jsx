import React, { useState,useRef } from "react";
import axios from "axios";
import { useNavigate,NavLink } from "react-router-dom";
import emailjs from '@emailjs/browser';
import './Request.css'

const Request = () => {
  const navigate = useNavigate();
  const form = useRef();

  const [initial, final] = useState({
    EventName:"",
    Discreption:"",
    Place:"",
    EDate:"",
    Time:"",
    Name:"",
    MobileNumber:"",
    RegLink:"",
    EventBanner:"",
    ReqEmail:"",
  })

  const ReqData = (item) => {
    const { name, value } = item.target;
    final((data) => {
      return {
        ...data,
        [name]: value
      }
    })
  }


  const ReqSubmit = async (event) => {
    event.preventDefault();
    const { ReqEmail,EventName,Discreption, Place, EDate, Time,Name,MobileNumber,RegLink, EventBanner} = initial;
    try {
    const response =  await axios.post(`http://localhost:4000/request`, {
      ReqEmail,EventName,Discreption, Place, EDate, Time,Name,MobileNumber,RegLink, EventBanner
      })
      if(response.status === 202){
        alert('Your Request Have Send,After verification It will added in Up-Comming Event')
        navigate(`/`)
        emailjs.sendForm('service_edl04xe','template_nok8by1', form.current, 'fA8kcfAFIvcziEYcA')
        .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }
      );
      }
    } catch (error) {
      alert(error);
    }
  }
  return (
    <>
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
                <NavLink to='/' className="ml-0 mt-3 max-[10rem] mx-auto border-2  text-white rounded-lg px-2 py-1 font-medium">
                    Back to home<span className="ml-2 "><i class="ri-home-8-line"></i></span>
                </NavLink> 
              </div>
              <form ref={form} onSubmit={ReqSubmit}>
              <div class="screen-body-item">
                <div class="app-form">
                  <div class="app-form-group">
                    <input class="app-form-control" autocomplete="off" placeholder="EventName *" name="EventName" onChange={ReqData} />
                  </div>
                  <div class="app-form-group">
                    <input class="app-form-control" autocomplete="off" type="date" placeholder="EDate *" name="EDate" onChange={ReqData} />
                  </div>

                  <div class="app-form-group">
                    <input class="app-form-control" autocomplete="off" type="time" placeholder="Time *" name="Time" onChange={ReqData} />
                  </div>
                  <div class="app-form-group">
                    <input class="app-form-control" autocomplete="off" placeholder="Place *" name="Place" onChange={ReqData} />
                  </div>
                  <div class="app-form-group">
                    <input class="app-form-control" autocomplete="off" placeholder="Descreption *" name="Discreption" onChange={ReqData} />
                  </div>
                  <div class="app-form-group">
                    <input class="app-form-control" autocomplete="off" type="text" placeholder="EventBanner" name="EventBanner" onChange={ReqData} />
                  </div>
                  <div class="app-form-group">
                    <input class="app-form-control" autocomplete="off" type="text" placeholder="Registration Link" name="RegLink" onChange={ReqData} />
                  </div>
                  <div class="">
                    <input class="app-form-control" autocomplete="off" type="text" placeholder="Requested By*" name="Name" onChange={ReqData} />
                  </div>
                  <div class="">
                    <input class="app-form-control" autocomplete="off" type="email" placeholder="ReqEmail *" name="ReqEmail" onChange={ReqData} />
                  </div>
                  <div class="app-form-group">
                    <input class="app-form-control" autocomplete="off" placeholder="Mobile Number *" name="MobileNumber" onChange={ReqData} />
                  </div>
                  <div class="app-form-group buttons">
                    <input type="submit" value={"SEND"} class="app-form-button"></input>
                  </div>
                  {/* <input name="Email" value={"shreyash123jain@gmail.com"} className="hidden"></input> */}
                </div>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Request;
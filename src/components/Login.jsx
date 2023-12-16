import React, { useState } from 'react';
import {useNavigate } from "react-router-dom";
import Axios from 'axios';
import './Login.css'

const Login = () => {
  const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
   
    const loginData = async (e) => {
      e.preventDefault();
      
       const Email = email;
       const Password = pass;
        try {
           Axios.create({
              baseURL:"http://127.0.0.1:4000",
              withCredentials:true
          })  

          const response = await Axios.post("http://localhost:4000/login",{
               Email,Password
              },
              {
                withCredentials: true,
                credentials: 'include',
                headers: {
                  'Access-Control-Allow-Origin':"http://localhost:4000",
                  'Access-Control-Allow-Credentials':true,
                   'Content-Type': 'application/json'    
                }
              }
              )
          const token = response.data.token;
          console.log(response);
          Axios.defaults.headers.common["Authorization"] = token;
          const Email2 = response.data.Email;
          const id = response.data.id;
          const HostEmail1 = response.data.HostEmail1;

          if(Email2===HostEmail1){
            navigate(`/maindashboard/${id}`);
          }
          else{
          navigate(`/personalpage/${id}`)
          }
      } 
      catch (error) {
          window.alert(error);
          navigate(`/login`)
      } 
     
  
    }
  return (
    <>
    <div class="login">
    <div src="assets/img/login-bg.png" alt="image" class="login__bg"/>
    <form   method="post" onSubmit={loginData} class="login__form">
       <h1 class="login__title">Login</h1>

       <div class="login__inputs">
          <div class="login__box">
             <input type="email"
                autoComplete='off'
                value={email}
                onChange={(e) => {setEmail(e.target.value)}} name="email"
             placeholder="Email ID" required class="login__input"/>
             <i class="ri-mail-fill"></i>
          </div>

          <div class="login__box">
             <input type="password"
             autoComplete='off'
                  name="password"
                  value={pass}
                  onChange={(e) => {setPass(e.target.value);}}
             placeholder="Password" required class="login__input"/>
             <i class="ri-lock-2-fill"></i>
          </div>
       </div>

       <div class="login__check">
          <div class="login__check-box">
             <input type="checkbox" class="login__check-input" id="user-check"/>
             <label for="user-check" class="login__check-label">Remember me</label>
          </div>

          <a href="#" class="login__forgot">Forgot Password?</a>
       </div>

       <button type="submit" class="login__button">Login</button>

       <div class="login__register">
          Don't have an account? <a href="#">Register</a>
       </div>
    </form>
    </div>
 </>
  )
}

export default Login
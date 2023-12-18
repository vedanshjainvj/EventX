import React, { useState,useEffect } from "react";
import Hero from "./Hero";
import Ourapp from "./Ourapp";
import Partners from "./Partners";
import Cards from "./Cards";
import SportsGroup from "./SportsGroup.jsx";
import Fest from "./Fest.jsx";
import Nss from './Nss'
import EventData from "./EventData.jsx";
import Team from "./Team";
import Footer from "./Footer";
import Navbar from "./Navbar.jsx";
import Inzio from "./Inzio";
import MemoriesGlimpses from "./MemoriesGlimpses.jsx";
import Placement from "./Placement.jsx";
import MainDashboard from "./MainDashboard.jsx";
import Update from "./Update.jsx";
import DepartmentalClubs from "./DepartmentalClubs";
import StartupsSection from "./StartupsSection.jsx";
import { useNavigate } from "react-router-dom";

const Home = () => {
//   const navigate = useNavigate();

//   const co =document.cookie.split('=');
//   const token = co[1];
  
//   const getdata =async(e)=>{
//     try{
//     const responce = await axios.get(`http://127.0.0.1:4000/${token}`)
//     const data = responce.data;
//     const Mid = data.id;
//     const Email = data.Email;
//     console.log(responce)
//     if(Email==='shreyash123jain@gmail.com'){
//     axios.defaults.headers.common["Authorization"] = token;
//     navigate(`/maindashboard/${Mid}`)
//    }else{
//     axios.defaults.headers.common["Authorization"] = token;
//     navigate(`/personalpage/${Mid}`)
//     }
//   }catch(error){
//     alert("They have some error please login again...")
//     navigate("/")
//   }
// }

//    if(token !== ''|| token==='undefined'){
//     useEffect(() => {
//       getdata();
//     },[])
//    }
  return (
    <>
    {/* <MainDashboard></MainDashboard> */}
    {/* <Update></Update> */}
    <Navbar></Navbar>
      <Hero></Hero>
      <Fest></Fest>
      <EventData></EventData>
      <Cards></Cards>
      <Inzio></Inzio>
      <Nss></Nss>
      <Ourapp></Ourapp>
      <DepartmentalClubs></DepartmentalClubs>
      <MemoriesGlimpses></MemoriesGlimpses>
      <StartupsSection></StartupsSection>
      <SportsGroup></SportsGroup>
      <Partners></Partners>
      <Placement></Placement>
      
      <Team></Team>
      <Footer></Footer>
    </>
  );
};

export default Home;

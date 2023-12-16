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
import Inzio from "./Inzio";
import MemoriesGlimpses from "./MemoriesGlimpses.jsx";
import Placement from "./Placement.jsx";
import MainDashboard from "./MainDashboard.jsx";
import Update from "./Update.jsx";
import DepartmentalClubs from "./DepartmentalClubs";

const Home = () => {
  return (
    <>
    {/* <MainDashboard></MainDashboard> */}
    {/* <Update></Update> */}
      <Hero></Hero>
      <Fest></Fest>
      <EventData></EventData>
      <Cards></Cards>
      <Inzio></Inzio>
      <Nss></Nss>
      <Ourapp></Ourapp>
      <DepartmentalClubs></DepartmentalClubs>
      <MemoriesGlimpses></MemoriesGlimpses>
      <SportsGroup></SportsGroup>
      <Partners></Partners>
      <Placement></Placement>
      
      <Team></Team>
      <Footer></Footer>
    </>
  );
};

export default Home;

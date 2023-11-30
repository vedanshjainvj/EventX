import React, { useState,useEffect } from "react";
import Hero from "./Hero";
import Ourapp from "./Ourapp";
import Partners from "./Partners";
import Cards from "./Cards";
import SportsGroup from "./SportsGroup.jsx";
import Fest from "./Fest.jsx";
import Nss from './Nss'
import Dataset from "./Dataset";
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
      <Placement></Placement>
      <Cards></Cards>
      <Fest></Fest>
      <Inzio></Inzio>
      <Nss></Nss>
      <DepartmentalClubs></DepartmentalClubs>
      <MemoriesGlimpses></MemoriesGlimpses>
      <SportsGroup></SportsGroup>
      <Partners></Partners>
      <Dataset></Dataset>
      <Ourapp></Ourapp>
      <Team></Team>
      <Footer></Footer>
    </>
  );
};

export default Home;

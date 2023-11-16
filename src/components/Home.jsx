import React, { useState,useEffect } from "react";
import Hero from "./Hero";
import Ourapp from "./Ourapp";
import Partners from "./Partners";
import Cards from "./Cards";
import Startups from "./Startups";
import Fest from "./Fest.jsx";
import Charty from "./Charty";
import Stats from "./Stats";
import Dataset from "./Dataset";
import Team from "./Team";
import Footer from "./Footer";
import Inzio from "./Inzio";
import VIdeographs from "./VIdeographs.jsx";


import { eveData } from "./Eve.js";


const Home = () => {
  const options = {
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          color: 'red', // Set the font color for x-axis labels
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: 'blue', // Set the font color for y-axis labels
        },
      },
    },
  };
  const [userData, setUserData] = useState({
    labels: eveData.map((data) => data.year),
    datasets: [
      {
        label: "Number of Events",
        data: eveData.map((data) => data.Events),
        backgroundColor: ["blue","darkorchid","blue","darkorchid"],
        borderColor: "black",
        borderWidth: 2,
        color: "#000",
        barPercentage: 0.3,
        
      },
    ],
    
  });
  return (
    <>
      <Hero></Hero>
      <Cards></Cards>
      <Fest></Fest>
      <Inzio></Inzio>
      <VIdeographs></VIdeographs>
      <Startups></Startups>
      {/* <Charty chartData={userData} options={options}></Charty> */}
      <Partners></Partners>
      <Dataset></Dataset>
      <Stats></Stats>
      <Ourapp></Ourapp>
      <Team></Team>
      {/* <VCMessage></VCMessage> */}
      <Footer></Footer>
    </>
  );
};

export default Home;

import React, { useState,useEffect } from "react";
import Hero from "./Hero";
import Ourapp from "./Ourapp";
import Partners from "./Partners";
import Cards from "./Cards";
import Startups from "./Startups";
import Fest from "./Fest.jsx";
import Nss from './Nss'
import Dataset from "./Dataset";
import Team from "./Team";
import Footer from "./Footer";
import Inzio from "./Inzio";
import VIdeographs from "./VIdeographs.jsx";
import Placement from "./Placement.jsx";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <Placement></Placement>
      <Cards></Cards>
      <Fest></Fest>
      <Inzio></Inzio>
      <Nss></Nss>
      <VIdeographs></VIdeographs>
      <Startups></Startups>
      <Partners></Partners>
      <Dataset></Dataset>
      <Ourapp></Ourapp>
      <Team></Team>
      <Footer></Footer>
    </>
  );
};

export default Home;

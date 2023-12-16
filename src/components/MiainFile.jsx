import React, { useState } from 'react';
import {NavLink,useNavigate} from 'react-router-dom';
import Router from './Router';
import SRegister from './SRegister';
import Cookie from "js-cookie";



function Navbar() {
  return (
    <Router/>
  );
}

export default Navbar;
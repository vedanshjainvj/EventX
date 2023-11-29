import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Register from "./Register";
import Update from "./Update";
import SRegister from "./SRegister";
import Login from "./Login";
import PersonalPage from "./PersonalPage";
import AddEvent from "./AddEvent";
import Edit from "./Edit";
import Dashbord from "./Dashbord";
import MainDashboard from "./MainDashboard";
import Request from "./Request";
import LogOut from "./LogOut";
import Hod from "./Hod.jsx";
import VCMessage from "./VCMessage";
import DirectorsMessage from './DirectorsMessage'
import Hostel from "./Hostel.jsx";
import StudentDataDashboard from './StudentsDataDashboard'
import NewClubRegister from './NewClubRegister';

const Router = () => {
  return (
    <>
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route exact path="/login" Component={Login}></Route>
          <Route exact path="/Update" Component={Update}></Route>
          <Route exact path="/register/:id/:Mid" Component={Register}></Route>
          <Route exact path="/sregister" Component={SRegister}></Route>
          <Route exact path="/AddEvent/:id" Component={AddEvent}></Route>
          <Route
            exact
            path="/personalpage/:id"
            Component={PersonalPage}
          ></Route>
          <Route exact path="/edit/:id" Component={Edit}></Route>
          <Route exact path="/dashbord/:id" Component={Dashbord}></Route>
          <Route
            exact
            path="/maindashboard/:id"
            Component={MainDashboard}
          >

          </Route>
          <Route exact path="/request" Component={Request}></Route>
          <Route exact path="/log_out" Component={LogOut}></Route>
        </Routes>
        <Routes>
          <Route exact path="/vice-chancellor-message" Component={VCMessage}></Route>
          <Route exact path="/director-message" Component={DirectorsMessage}></Route>
          <Route exact path="/head-of-departments" Component={Hod}></Route>
          <Route exact path="/hostel-info" Component={Hostel}></Route>
          <Route exact path="/students-data-record" Component={StudentDataDashboard}></Route>
          <Route exact path="/new-club-register" Component={NewClubRegister}></Route>
        </Routes>

    </>
  );
};
export default Router;

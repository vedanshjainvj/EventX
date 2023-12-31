import React, { useState, useRef } from 'react';
import {NavLink,useNavigate} from 'react-router-dom';
// import Router from './Router';
import SRegister from './SRegister';
import Cookie from "js-cookie";
import logo from '../assets/logo6.png'


function Navbar() {
  
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
  <>
  

   <div className="px-4 md:px-12 pt-6 navbar flex flex-col justify-center">
      <nav className="px-4 py-4 flex justify-between items-center  relative">
        <a className="text-4xl font-bold leading-none" href="#">
          <img src={logo} alt="" />
        </a>
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-blue-600 p-3" onClick={toggleMenu}>
            <h1 className='text-2xl text-white'><i class="ri-menu-3-line"></i></h1>
          </button>
        </div>
        <ul className={`hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6 ${isMenuOpen ? '' : 'hidden'}`}>
        <li>
            <NavLink onClick={() => {
            window.scrollTo(0, 0);
          }} to="/"  id="home">Home</NavLink>
          </li>
          <li>
          <NavLink onClick={() => {
            window.scrollTo(0, 0);
          }} to="/Update" className="events">New Events</NavLink>
          </li>  
          <li>
          <NavLink onClick={() => {
            window.scrollTo(0, 0);
          }} to="/start-ups" className="events">Start-ups</NavLink>
          </li>   
          {/* <li id="logout">
          <NavLink to="/log_out"  className="events" >Log Out</NavLink>
          </li>  */}
          <li>
          <NavLink onClick={() => {
            window.scrollTo(0, 0);
          }} to="/photogallery" className="events">Photo Gallery</NavLink>
          </li>
          
          <li>
          <NavLink onClick={() => {
            window.scrollTo(0, 0);
          }} to="/request" id="login" className="login">Request Events</NavLink>
          </li>
          
        </ul>
        <NavLink className="hidden btnnav lg:inline-block cursor-pointer lg:ml-auto lg:mr-3 py-2 px-6 text-sm text-white font-bold transition duration-200" to='/sregister'>Register</NavLink>
        <NavLink className="hidden btnnav lg:inline-block cursor-pointer py-2 px-6 text-sm text-white font-bold transition duration-200" to='/login'>Login</NavLink>
      </nav>
      <div className={`navbar-menu relative z-50 ${isMenuOpen ? '' : 'hidden'}`}>
        <div className="navbar-backdrop fixed inset-0 bg-black opacity-25" onClick={toggleMenu}></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6  max-w-sm py-6 px-6 mobile-navbar border-r overflow-y-auto">
          <div className="flex items-center mb-8">
          <a className="text-4xl mr-auto font-bold leading-none" href="#">
          <img src={logo} alt="" />        </a>
            <button className="navbar-close" onClick={toggleMenu}>
              <h1 className='text-2xl'><i class="ri-close-fill"></i></h1>
            </button>
          </div>
          <div >
          <ul className='flex flex-col'>
          <li className='my-3'>
            <NavLink to="/" className="events">Home</NavLink>
          </li>
          <li className='my-3'>
          <NavLink to="/Update" className="events">New Events</NavLink>
          </li>   
          <li className='my-3'>
            <NavLink to="/start-ups" className="events">Start-ups</NavLink>
          </li>
          <li className='my-3'>
            <NavLink to="/photogallery" className="events">Photo Gallery</NavLink>
          </li>
          <li className='my-3'>
            <NavLink to="/request" className="events">Request Events</NavLink>
          </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <NavLink className="block px-4 py-3 btnnav mb-3  text-sm text-center font-semibold leading-none rounded-xl ">Register</NavLink>
              <NavLink className="block px-4 py-3 btnnav mb-2  text-sm text-center text-white font-semibold  rounded-xl">Login</NavLink>
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © 2023</span>
            </p>
          </div>
        </nav>
      </div>
    </div>
    
    {/* <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='login' element={<Login />}></Route>
  </Routes> */}
   {/* <Router/> */}
  </>
    
  );
}

export default Navbar;
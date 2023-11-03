import React, { useState } from 'react';
import {NavLink,useNavigate} from 'react-router-dom';
import Router from './Router';
import SRegister from './SRegister';



function Navbar() {
  
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loginmodal,setLoginModal] = useState(false)
  const [registermodal,setRegisterModal] = useState(false)

  const toggleLogin = () => {
    setLoginModal(!loginmodal)
  }
  const toggleRegister = () => {
    setRegisterModal(!registermodal)
  }
  if(loginmodal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
  <>

    <div className="px-12 h-[15vh]  flex flex-col justify-center">
      <nav className="px-4 py-4 flex justify-between items-center  relative">
        <a className="text-4xl font-bold leading-none" href="#">
          <h1 className='logoname'>Link UP</h1>
        </a>
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-blue-600 p-3" onClick={toggleMenu}>
            <h1 className='text-2xl text-white'><i class="ri-menu-3-line"></i></h1>
          </button>
        </div>
        <ul className={`hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6 ${isMenuOpen ? '' : 'hidden'}`}>
        <li>
            <NavLink to="/" id="home">Home</NavLink>
          </li>
          <li>
          <NavLink to="/request" id="login" className="login">Request</NavLink>
          </li>
          <li>
          <NavLink to="/login" id="login" className="login">Login</NavLink>
          </li>
          <li>
          <NavLink to="/sregister" className="events">Stu Register</NavLink>
          </li>
          <li>
          <NavLink to="/Update" className="events">New Update</NavLink>
          </li>   
          {/* <li id="logout">
          <NavLink to="/log_out"  className="events" >Log Out</NavLink>
          </li>  */}
          <li>
            <a className="text-lg" href='#partners'>Events</a>
          </li>
          <li>
            <a className="text-lg " href="#">Gallery</a>
          </li>
          <li>
            <a className="text-lg " href="#">Contact</a>
          </li>
        </ul>
        <NavLink className="hidden btnnav lg:inline-block cursor-pointer lg:ml-auto lg:mr-3 py-2 px-6 text-sm text-white font-bold transition duration-200" to='/sregister'>Register</NavLink>
        <a className="hidden btnnav lg:inline-block cursor-pointer py-2 px-6 text-sm text-white font-bold transition duration-200" onClick={toggleLogin}>Login</a>
      </nav>
      <div className={`navbar-menu relative z-50 ${isMenuOpen ? '' : 'hidden'}`}>
        <div className="navbar-backdrop fixed inset-0 bg-black opacity-25" onClick={toggleMenu}></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-black border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
            <img className='w-[20vw]' src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" alt="" />
            </a>
            <button className="navbar-close" onClick={toggleMenu}>
              <h1 className='text-2xl'><i class="ri-close-fill"></i></h1>
            
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a className="block p-4 text-sm font-semibold text-white hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Home</a>
              </li>
              <li className="mb-1">
                <a className="block p-4 text-sm font-semibold text-white hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Home</a>
              </li>
              <li className="mb-1">
                <a className="block p-4 text-sm font-semibold text-white hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Home</a>
              </li>
              <li className="mb-1">
                <a className="block p-4 text-sm font-semibold text-white hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Home</a>
              </li>
              <li className="mb-1">
                <a className="block p-4 text-sm font-semibold text-white hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Home</a>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a className="block px-4 py-3 mb-3  text-xs text-center font-semibold leading-none bg-slate-700 hover-bg-gray-100 rounded-xl " onClick={toggleRegister}>Register</a>
              <a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover-bg-blue-700 rounded-xl" onClick={toggleLogin}>Login</a>
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © 2023</span>
            </p>
          </div>
        </nav>
      </div>
    </div>
    {loginmodal && (
      <Login/>
    )}
    {registermodal && (
      <SRegister/>
    )}
    {/* <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='login' element={<Login />}></Route>
  </Routes> */}
   <Router/>
  </>
    
  );
}

export default Navbar;

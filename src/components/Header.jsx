import { useState } from 'react';
import {logo} from '../utils/constant';

const Header=()=>{

  let [logBtn,setLogBtn]=useState("Login")

  function logFun(){
    (logBtn=="Login")?setLogBtn("Logout"):setLogBtn("Login")
  }

  return (
    <div className='header'>
      <div id="logo-container">
        <img className='logo' src={logo} alt="" />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>contact</li>
          <li>About Us</li>
          <li>Contact</li>
          <li><button className='login' onClick={()=>logFun()}>{logBtn}</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Header;
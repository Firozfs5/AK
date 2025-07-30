import { useState } from 'react';
import {logo} from '../utils/constant';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header=()=>{

  let [logBtn,setLogBtn]=useState("Login")

  let onlineStatus=useOnlineStatus();
  // console.log(onlineStatus);
  

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
          <li>{(onlineStatus)?'🟢':'🔴'}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/Grocery">Grocery</Link></li>
          <li><button className='login' onClick={()=>logFun()}>{logBtn}</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Header;
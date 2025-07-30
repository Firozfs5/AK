import { useState } from 'react';
import {logo} from '../utils/constant';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header=()=>{

  let [logBtn,setLogBtn]=useState("Login")

  let onlineStatus=useOnlineStatus();
  

  function logFun(){
    (logBtn=="Login")?setLogBtn("Logout"):setLogBtn("Login")
  }

  return (
    <div className='flex justify-between border-b-1 font-normal border-black'>
      <div>
        <img className='w-48 ml-4' src={logo} alt="" />
      </div>
      <div className='flex justify-center '>
        <ul className='flex items-center'>
          <li className='px-4 text-2xl text-center'>{(onlineStatus)?'🟢':'🔴'}</li>
          <li className='px-4 text-2xl text-center'><Link to="/">Home</Link></li>
          <li className='px-4 text-2xl text-center'><Link to="/contact">Contact</Link></li>
          <li className='px-4 text-2xl text-center'><Link to="/about">About Us</Link></li>
          <li className='px-4 text-2xl text-center'><Link to="/Grocery">Grocery</Link></li>
          <li className='px-4 text-2xl border-black w-[100px] text-center'><button className='login' onClick={()=>logFun()}>{logBtn}</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Header;
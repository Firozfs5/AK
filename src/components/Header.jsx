import { useState } from 'react';
import {logo} from '../utils/constant';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useContext } from 'react';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';
import React from 'react';

const Header=()=>{

  // let [logBtn,setLogBtn]=useState("Login")
  let onlineStatus=useOnlineStatus();
  let  {loggedInUser}=useContext(UserContext);
  let [logInfo,setLogInfo]=useState(true);

  // subscribing
  let cartItems=useSelector((store)=>store.cart.items)
  console.log(cartItems);
  
  function funcLogInfo(){
    setLogInfo(!logInfo);
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
          <li className='px-4 text-2xl text-center font-2xl'><Link to="/Cart">Cart-({cartItems.length} Items)</Link></li>
          <li className='px-4 text-2xl border-black  text-center'>
            <button onClick={()=>funcLogInfo()}>{(logInfo)?`${loggedInUser}`:"Login"}</button>
          </li>
        
        
        </ul>
      </div>
    </div>
  )
}

export default Header;
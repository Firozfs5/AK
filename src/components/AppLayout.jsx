import Header from '../components/Header'
import UserContext from '../utils/UserContext'
import { Provider } from 'react-redux'
import appStore from '../utils/appStore'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'


const AppLayout=()=>{

  const [name ,setName]=useState("Firoz");
   return (

    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:name,setName}}>
    <div className='app'>
      <Header />
      <Outlet />
    </div>      
    </UserContext.Provider>      
    </Provider>


   )
}

export default AppLayout;




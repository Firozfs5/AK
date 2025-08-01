import { createRoot } from 'react-dom/client'
import "../index.css"
import Header from './components/Header'
import {Body} from './components/Body'
// import About from ''
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Contact from './components/Contact'
import Error from './components/Error'
import RestaurantMenue from './components/RestaurantMenue'
import { lazy, Suspense, useState } from 'react'
import Shimmer from './components/Shimmer'
import UserContext from './utils/UserContext'

const Grocery=lazy(()=>import("./components/Grocery") );
const About=lazy(()=>import("./components/About"));

const AppLayout=()=>{

  const [name ,setName]=useState("Firoz");
  //  setName("hi")
   return (

    <UserContext.Provider value={{loggedInUser:name,setName}}>
    <div className='app'>
      <Header />
      <Outlet />
    </div>      
    </UserContext.Provider>

   )
}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children:[
      {
        path:"/",
        element:<Body />
      },
      {
       path:"/about",
       element:<Suspense fallback={<Shimmer />}><About /></Suspense>
      },
      {
       path:"/Contact",
       element:<Contact />
      },
      {
        path:'/restaurants/:resId',
        element:<RestaurantMenue />
      },
    {
        path:"/Grocery",
        element:<Suspense fallback={<Shimmer />} ><Grocery /></Suspense>
      }        
    ],
    errorElement:<Error />
  },

])

createRoot(document.getElementById('root')).render(<RouterProvider router={appRouter} />)

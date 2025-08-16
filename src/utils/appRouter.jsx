import {Body} from '../components/Body'
import { createBrowserRouter } from 'react-router-dom'
import Contact from '../components/Contact'
import Error from '../components/Error'
import RestaurantMenue from '../components/RestaurantMenue'
import { lazy, Suspense } from 'react'
import Shimmer from '../components/Shimmer'
import Cart from '../components/Cart'
const Grocery=lazy(()=>import("../components/Grocery") );
const About=lazy(()=>import("../components/About"));
import AppLayout from '../components/AppLayout'

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
        path:"/cart",
        element:<Cart />
      },
      {
        path:"/Grocery",
        element:<Suspense fallback={<Shimmer />} ><Grocery /></Suspense>
      }        
    ],
    errorElement:<Error />
  },

])

export default appRouter
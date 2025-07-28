import { createRoot } from 'react-dom/client'
import "../index.css"
import Header from './components/Header'
import {Body} from './components/Body'
import About from './components/About'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Contact from './components/Contact'
import Error from './components/Error'
import RestaurantMenue from './components/RestaurantMenue'

const AppLayout=()=>{
   return (
    <div className='app'>
      <Header />
      <Outlet />
    </div>
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
       element:<About />
      },
      {
       path:"/Contact",
       element:<Contact />
      },
      {
        path:'/restaurants/:resId',
        element:<RestaurantMenue />
      }      
    ],
    errorElement:<Error />
  },

])

createRoot(document.getElementById('root')).render(<RouterProvider router={appRouter} />)

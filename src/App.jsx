import { createRoot } from 'react-dom/client'
import "../index.css"
import appRouter from './utils/appRouter'
import {RouterProvider} from "react-router-dom"


createRoot(document.getElementById('root')).render(<RouterProvider router={appRouter} />)

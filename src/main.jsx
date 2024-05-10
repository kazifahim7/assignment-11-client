import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from './mainlayout/Mainlayout';
import Error from './Error/Error';
import Home from './page/Home';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Error></Error>,
    element: <Mainlayout></Mainlayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
        

    },
  ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />

    </HelmetProvider>

    
  </React.StrictMode>,
)

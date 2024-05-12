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
import LogIn from './components/LogIn';
import Register from './components/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import AddServices from './page/AddServices';
import AllServices from './page/AllServices';
import ServiceDetails from './components/ServiceDetails';

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
    {
      path:'/login',
      element:<LogIn></LogIn>
    },
    {
      path:'/registration',
      element:<Register></Register>
    },
    {
      path:'/AddService',
      element:<AddServices></AddServices>
    },
    {
      path:'/allServices',
      element:<AllServices></AllServices>
    },
    {
      path:'/services/:id',
      element:<ServiceDetails></ServiceDetails>,
      loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
    }
  ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />

      </AuthProvider>
      

    </HelmetProvider>

    
  </React.StrictMode>,
)

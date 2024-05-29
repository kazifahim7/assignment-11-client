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
import ManageService from './page/ManageService';
import Update from './components/Update';
import Private from './PrivateRoutes/Private';
import BookedServices from './page/BookedServices';
import Todo from './page/Todo';


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>


      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/registration',
        element: <Register></Register>
      },
      {
        path: '/AddService',
        element: <Private><AddServices></AddServices></Private>
      },
      {
        path: '/allServices',
        element: <AllServices></AllServices>
      },
      {
        path: '/single/:id',
        element: <Private><ServiceDetails></ServiceDetails></Private>,
        loader: ({ params }) => fetch(`https://assigment11-five.vercel.app/single/${params.id}`)
      },
      {
        path: '/ManageService',
        element: <Private><ManageService></ManageService></Private>
      },
      {
        path: '/update/:id',
        element: <Private><Update></Update></Private>,
        loader: ({ params }) => fetch(`https://assigment11-five.vercel.app/single/${params.id}`)
      },
      {
        path: '/BookedServices',
        element: <Private><BookedServices></BookedServices></Private>
      },
      {
        path: '/todo',
        element: <Private><Todo></Todo></Private>
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

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import App from './App.jsx'
import Auth from './pages/Auth/Auth.jsx';
import Register from './pages/Register/Register.jsx'
import ChangePassword from './pages/ChangePassword/ChangePassword.jsx';

import './index.css'
import UserDetail from './pages/UserDetail/UserDetail.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/auth-register",
    element: <Register />,
  },
  {
    path: "/change-password",
    element: <ChangePassword />,
  },
  {
    path: "/user-detail/:id",
    element: <UserDetail />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

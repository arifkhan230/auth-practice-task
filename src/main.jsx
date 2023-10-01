import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MyLayout from './components/MyLayout/MyLayout';
import ErrorPage from './ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Register from './components/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyLayout></MyLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path:'register',
        element:<Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

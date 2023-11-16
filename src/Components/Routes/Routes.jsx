import {
    createBrowserRouter
  } from "react-router-dom";
import MainBody from "../MainBody/MainBody";
import Home from "../HomePage/Home";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainBody></MainBody>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        
      ]
    },
  ]);
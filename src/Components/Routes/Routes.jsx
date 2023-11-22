import {
  createBrowserRouter
} from "react-router-dom";
import MainBody from "../MainBody/MainBody";
import Home from "../HomePage/Home";
import OurMenu from "../Menus/OurMenu/OurMenu";
import OurShop from "../OurShop/OurShop";
import Login from "../Login/Login";
import Register from "../Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainBody></MainBody>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/ourmenu',
        element: <OurMenu></OurMenu>
      },
      {
        path: '/ourshop/:category',
        element:<OurShop></OurShop>,
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    

    ]
  },
]);
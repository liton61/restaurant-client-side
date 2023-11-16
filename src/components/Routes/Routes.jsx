import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Error from "../Error/Error";
import Dashboard from "../Dashboard/Dashboard";
import Menu from "../Menu/Menu";
import Order from "../Order/Order";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Cart from "../Dashboard/Cart";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "cart",
        element: <Cart></Cart>
      }
    ]
  }
]);

export default router;
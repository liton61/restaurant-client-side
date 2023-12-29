import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Review from "../pages/Review/Review";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";



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
        element: <Menu></Menu>
      },
      {
        path: "/order",
        element: <Order></Order>
      },
      {
        path: "/review",
        element: <Review></Review>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ],
  },

]);

export default router;
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Review from "../pages/Review/Review";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
// import Dashboard from "../pages/Dashboard/Dashboard";
import Cart from "../pages/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import ManageBooking from "../pages/Dashboard/ManageBooking/ManageBooking";



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
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "cart",
        element: <Cart></Cart>
      },
      {
        path: "addItems",
        element: <AllUsers></AllUsers>
      },
      {
        path: "manageItems",
        element: <ManageItems></ManageItems>
      },
      {
        path: "manageBooking",
        element: <ManageBooking></ManageBooking>
      },
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>
      }
    ]
  }

]);

export default router;
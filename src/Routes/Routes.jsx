import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Menu from "../pages/Menu/Menu";
import Review from "../pages/Review/Review";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Cart from "../pages/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import UpdateItem from "../pages/UpdateItem/UpdateItem";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Order from "../pages/Order/Order";



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
        path: "/order/:category",
        element: <Order></Order>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
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

      // user dashboard
      {
        path: "cart",
        element: <Cart></Cart>
      },
      {
        path: "review",
        element: <Review></Review>
      },

      // admin dashboard
      {
        path: "addItems",
        element: <AddItems></AddItems>
      },
      {
        path: "manageItems",
        element: <ManageItems></ManageItems>
      },
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>
      },
      {
        path: "updateItem/:id",
        element: <UpdateItem></UpdateItem>,
        loader: ({ params }) => fetch(`https://restaurant-server-side-azure.vercel.app/menu/${params.id}`)
      },
      {
        path: "adminHome",
        element: <AdminHome></AdminHome>
      },
      {
        path: "userHome",
        element: <UserHome></UserHome>
      }
    ]
  }

]);

export default router;
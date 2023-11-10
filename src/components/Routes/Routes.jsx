import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
      ],
    },
  ]);

export default router;
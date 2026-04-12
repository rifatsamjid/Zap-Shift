import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AboutUs from "../Pages/AboutUs/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayouts,
    children: [
        {   index:true,
            Component:Home
        },
        {
          path: "/coverage",
          Component: Coverage,
          loader:()=>fetch("/serviceCenter.json").then(res=>res.json())
        },
        {
          path:"/about",
          Component:AboutUs,
        }
    ]
  },
]);
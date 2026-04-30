import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import PrivateRouter from "./PrivateRouter";
import Rider from "../Pages/RIder/Rider";
import ForgotPassword from "../Pages/Auth/ForgotPassword/ForgotPassword";
import SendParcel from "../Pages/SendParcel/SendParcel";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
      { index: true, Component: Home },
      {
        path: "/coverage",
        Component: Coverage,
        loader: () => fetch("/serviceCenter.json").then((res) => res.json()),
      },
      {
        path: "/rider",
        element: (
          <PrivateRouter>
            <Rider></Rider>
          </PrivateRouter>
        ),
      },
      {
        path: "/send_parcel",
        element: (
          <PrivateRouter>
            <SendParcel></SendParcel>
          </PrivateRouter>
        ),
        loader: () => fetch("/serviceCenter.json").then((res) => res.json()),
      },
      {
        path: "/about",
        Component: AboutUs,
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/forgot_password",
        Component: ForgotPassword,
      },
    ],
  },
]);

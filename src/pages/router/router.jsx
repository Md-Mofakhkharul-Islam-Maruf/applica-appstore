import { createBrowserRouter } from "react-router";
import RootLayOut from "../rootlayout/RootLayOut";
import Home from "../home/Home";
import Apps from "../apps/Apps";
import MyProfile from "../myProfile/MyProfile";
import Error from "../shared/Error";
import Login from "../shared/Login";
import Register from "../shared/Register";
import PrivateRoutes from "../shared/PrivateRoutes";
import AppDetails from "../appDetails/AppDetails";
import GamePage from "../gamePage/GamePage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayOut,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "apps",
        Component: Apps,
      },
      {
        path: "myProfile",
        Component: MyProfile,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "*",
        Component: Error,
      },
      {
        path: "/app/:id",
        element: <PrivateRoutes><AppDetails></AppDetails></PrivateRoutes>
      },
      {
        path: "/GamePage",
        Component: GamePage
      },

    ],
  },
]);

export default router;

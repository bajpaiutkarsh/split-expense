import Group from "./components/Group/Group";
import "./styles.css";
import Root from "./components/page/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Friends from "./components/Friends/Friends";
import Activity from "./components/Activity/Activity";
import Expenses from "./components/Expenses/Expenses";
import Error from "./components/page/Error";
import Account from "./components/Account/Account";
import FriendDetails from "./components/Friends/FriendDetails";
export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Expenses></Expenses>,
        },
        {
          path: "/group",
          element: <Group></Group>,
        },
        {
          path: "/friends",
          element: <Friends></Friends>,
        },
        {
          path: "/friend/:id",
          element: <FriendDetails></FriendDetails>,
        },
        {
          path: "/activity",
          element: <Activity></Activity>,
        },
        {
          path: "/account",
          element: <Account></Account>,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

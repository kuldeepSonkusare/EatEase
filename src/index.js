import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Header";
import Body from "./Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./About";
import Contact from "./ContactUs";
import RestaurantMenu from "./RestaurantMenu";
import { lazy, Suspense } from "react";
import ShimmerBody from "./ShimmerBody";
import { useState } from "react";
import UserContext from "./UserContext";
import { Provider } from "react-redux";
import AppStore from "./AppStore";
import Cart from './Cart';

const Instamart = lazy(() => import("./Instamart"));


const root = ReactDOM.createRoot(document.getElementById("root"));
const AppLayout = () => {
  const [userName, setUserName] = useState("Abhishek Parmar");
  return (
    <Provider store={AppStore}>
      <UserContext.Provider value={{ loggedInuser: userName, setUserName }}>
        <div>
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/restaurants/:res_id", //res_id will be given as a props to the useParams or create dynamic routes
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<ShimmerBody />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);
root.render(<RouterProvider router={AppRouter} />);

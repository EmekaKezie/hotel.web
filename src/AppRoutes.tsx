import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import HomePage from "./pages/HomePage";
//import About from "./pages/About";
import { useMenuExplore } from "./hooks/useMenuExplore";
import { IMenu } from "./interfaces/IAppbase";

// type routeProps = {
//   exact: boolean;
//   path: string;
//   component: ReactNode;
// };

export default function AppRoutes() {
  const exploreMenu: IMenu[] = useMenuExplore();

  const menu = [...exploreMenu];
  return (
    <BrowserRouter>
      <Routes>
        {menu.map((route, index) => (
          <Route key={index} path={route.url} element={route.component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

// const routeList: routeProps[] = [
//   {
//     exact: true,
//     path: "/",
//     component: <HomePage />,
//   },
//   {
//     exact: true,
//     path: "/about",
//     component: <About />,
//   },
//   // {
//   //   exact: true,
//   //   path: "/service",
//   //   component: <ServicePage />,
//   // },
// ];

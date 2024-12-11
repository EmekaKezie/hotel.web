import React, { ReactNode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

type routeProps = {
  exact: boolean;
  path: string;
  component: ReactNode;
};

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {routeList.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

const routeList: routeProps[] = [
  {
    exact: true,
    path: "/",
    component: <Home />,
  },
  {
    exact: true,
    path: "/about",
    component: <About />,
  },
];

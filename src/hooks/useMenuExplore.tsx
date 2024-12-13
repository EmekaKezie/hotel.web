import React from "react";
import { IMenu } from "../interfaces/IAppbase";
import HomePage from "../pages/HomePage";

export function useMenuExplore() {
  const menu: IMenu[] = [
    {
      url: "/",
      displayName: "Home",
      visible: true,
      //icon: <ShoppingCartOutlined fontSize="small" />,
      component: <HomePage />,
      hash: "",
    },
    {
      url: "/#service",
      displayName: "Service",
      visible: true,
      //icon: <ShoppingCartOutlined fontSize="small" />,
      //component: <ServicesPage />,
      hash: "#service",
    },
  ];

  return menu;
}

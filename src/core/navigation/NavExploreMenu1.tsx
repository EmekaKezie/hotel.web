import React from "react";
import { Box, Typography } from "@mui/material";
import { IMenu } from "../../interfaces/IAppbase";
import { useMenuExplore } from "../../hooks/useMenuExplore";
import { useLocation } from "react-router-dom";

export default function NavExploreMenu1() {
  const menu: IMenu[] = useMenuExplore();
  const location = useLocation();
  const currentLocationHash = location?.hash;

  return (
    <Box
      component={"nav"}
      sx={{
        marginLeft: "5%",
        display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
        gap: 2,
      }}>
      {menu?.map((item, index) => {
        if (item.visible) {
          const isCurrent = currentLocationHash === item?.hash;
          return (
            <a href={item.url} style={{ textDecoration: "none" }} key={index}>
              <Typography
                color={isCurrent ? "warning.main" : "text.primary"}
                sx={{
                  padding: "0.5rem",
                  fontWeight: isCurrent ? "bold" : "none",
                  "&:hover": {
                    color: "info.dark",
                  },
                  "&:active": {
                    color: "info.light",
                  },
                }}>
                {item.displayName}
              </Typography>
            </a>
          );
        } else return null;
      })}
    </Box>
  );
}

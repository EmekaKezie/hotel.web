import React from "react";
import { Box } from "@mui/material";

import LayoutExplore from "../core/layout/LayoutExplore";
import HomeHero from "../components/Home/HomeHero";
import NavExplore from "../core/navigation/NavExplore";
import ServiceView from "../components/service/ServiceView";

export default function HomePage() {
  return (
    <LayoutExplore>
      <Box>
        <NavExplore />
        <br />
        <HomeHero />
        <ServiceView/>
        {/* <MainMenu />
        <IconButton onClick={() => dispatch(onToggleExploreDarkMode())}>
          {themeStore.darkMode ? (
            <LightMode sx={{ color: "white" }} />
          ) : (
            <DarkMode />
          )}
        </IconButton>

        <Box>
          <p>{testStore.count}</p>
          <button onClick={() => dispatch(onTestIncrement())}>increment</button>
          <button onClick={() => dispatch(onTestDecrement())}>
            decerement
          </button>
          <button onClick={() => dispatch(onTestReset())}>reset</button>
        </Box>
        <Box>
          <Typography variant="h1">This is Roboto 700 (Bold)</Typography>
          <Typography variant="body1">This is Roboto 400 (Regular)</Typography>
        </Box> */}
      </Box>
    </LayoutExplore>
  );
}

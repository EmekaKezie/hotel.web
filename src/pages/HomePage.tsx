import React from "react";
import { Box } from "@mui/material";

import LayoutExplore from "../core/layout/LayoutExplore";
import HomeView from "../components/Home/HomeView";
import NavExplore from "../core/navigation/NavExplore";
import ServiceView from "../components/Service/ServiceView";

export default function HomePage() {
  
  return (
    <LayoutExplore>
      <Box>
        <NavExplore />
        <br />
        <div id="home">
          <HomeView />
        </div>
        <div id="service">
          <ServiceView />
        </div>
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

import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React, { ReactNode } from "react";
import { useAppSelector } from "../../redux/useReduxhooks";
import { exploreDarkTheme } from "../themes/exploreDarkTheme";
import { exploreLightTheme } from "../themes/exploreLightTheme";

type props = {
  children: ReactNode;
};

export default function LayoutExplore(props: props) {
  const themeStore = useAppSelector((state) => state.themeReducer.darkMode);
  const exploreTheme = themeStore ? exploreDarkTheme : exploreLightTheme;

  return (
    <ThemeProvider theme={exploreTheme}>
      <CssBaseline /> {/* Ensure the global baseline styles are applied */}
      <ThemeProvider theme={theme}>
        <Box>{props.children}</Box>
      </ThemeProvider>
    </ThemeProvider>
  );
}

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    body1: {
      fontWeight: 400, // Regular font
    },
  },
});

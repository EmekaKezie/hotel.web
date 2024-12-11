import { createTheme } from "@mui/material";

export const exploreDarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#8C9AB2" },
    secondary: { main: "#C0C8D0" },
    error: { main: "#D32F2F" },
    info: { main: "#4C85F8" },
    success: { main: "#28a745" },
    warning: { main: "#FFAB00" },
    common: {
      black: "#ffffff",
      white: "#111111",
    },
    background: { default: "#121212", paper: "#1A1A1A" },
    text: { primary: "#C4C4C4", secondary: "#616F83", disabled: "#6D6D6D" },
  },
});

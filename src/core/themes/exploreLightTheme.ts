import { createTheme } from "@mui/material";

export const exploreLightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#616F83" },
    secondary: { main: "#082651" },
    error: { main: "#D32F2F" },
    info: { main: "#4C85F8" },
    success: { main: "#28a745" },
    warning: { main: "#FFAB00" },
    common: {
      black: "#000000",
      white: "#ffffff",
    },
    background: {
      default: "#F6F9FD",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#4E5053",
      secondary: "#616F83",
      disabled: "#BDBDBD",
    },
  },
});

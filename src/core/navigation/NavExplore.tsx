import React from "react";
import { AppBar, Box, Chip, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavExplore() {
  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: "transparent",
        height: "9vh",
        display: "flex",
        alignItems: "center",
        padding: "0 3rem",
        "& .MuiDrawer-paper": {
          border: 0,
          zIndex: 1000,
        },
      }}>
      <Toolbar
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
        }}>
        {/* Left Section */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography color="common.black" variant="h5">
            <strong>Hotel</strong>
          </Typography>
        </Box>

        {/* Center Section */}
        <Box
          component={"nav"}
          sx={{
            marginLeft: "5%",
            display: "flex",
            gap: 4,
          }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography color="warning.main">Home</Typography>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <Typography color="text.primary">About</Typography>
          </Link>
          <Link to="/service" style={{ textDecoration: "none" }}>
            <Typography color="text.primary">Services</Typography>
          </Link>
        </Box>

        {/* Right Section */}
        <Box
          component={"nav"}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            marginLeft: "auto",
          }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography color={"text.primary"}>Login</Typography>
          </Link>
          <Link to="/">
            <Chip label="Sign up" color="warning" onClick={() => {}} />
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

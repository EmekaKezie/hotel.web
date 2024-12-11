import React, { useEffect, useState } from "react";
import { AppBar, Box, Chip, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavExplore() {
  const [bgColor, setBgColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      // Change the background color when the scroll reaches 100px
      if (window.scrollY > 100) {
        setBgColor("#FFFFFF"); // Change to any color you want
      } else {
        setBgColor("transparent");
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: bgColor,
        height: "9vh",
        display: "flex",
        alignItems: "center",
        padding: {
          lg: "0 3rem",
          md: "0 3rem",
          sm: "0 3rem",
          xs: "0 1rem",
        },
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
            display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
            gap: 4,
          }}>
          <a href="/#home" style={{ textDecoration: "none" }}>
            {/* <Link to="/#home" style={{ textDecoration: "none" }}> */}
            <Typography color="warning.main">Home</Typography>
            {/* </Link> */}
          </a>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <Typography color="text.primary">About</Typography>
          </Link>
          <a href="/#service" style={{ textDecoration: "none" }}>
            {/* <Link to="/#service" style={{ textDecoration: "none" }}> */}
            <Typography color="text.primary">Services</Typography>
            {/* </Link> */}
          </a>
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

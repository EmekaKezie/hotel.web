import React from "react";
import { Box, Grid } from "@mui/material";
import HomeViewImage from "./HomeViewImage";
import HomeViewHero from "./HomeViewHero";

export default function HomeView() {
  return (
    <Box
      sx={{
        padding: {
          lg: "4rem",
          md: "4rem",
          sm: "4rem 2rem",
          xs: "6rem 2rem",
        },
      }}>
      <Grid
        container
        spacing={2}
        sx={{ height: "100%" }} // Ensure the container itself has height
      >
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            border: "0px solid gray",
          }}>
          <HomeViewHero />
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            border: "0px solid gray",
          }}>
          <HomeViewImage />
        </Grid>
      </Grid>
    </Box>
  );
}

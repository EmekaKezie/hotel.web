import React from "react";
import { Box, Grid } from "@mui/material";
import HomeHeroImage from "./HomeHeroImage";
import HomeHeroText from "./HomeHeroText";

export default function HomeHero() {
  return (
    <Box sx={{ padding: "4rem" }}>
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
          }}
        >
          <HomeHeroText />
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
          }}
        >
          <HomeHeroImage />
        </Grid>
      </Grid>
    </Box>
  );
}

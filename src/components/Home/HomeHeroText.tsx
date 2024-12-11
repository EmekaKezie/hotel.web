import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

export default function HomeHeroText() {
  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Typography
          variant="h2"
          sx={{ wordSpacing: "-5px", fontSize: { xs: "3rem" } }}
          color={"common.black"}>
          {`Best Apartment & Hotel`}{" "}
          <Typography
            component={"span"}
            variant="h2"
            color="warning.main"
            sx={{ fontSize: { xs: "3rem" } }}>
            {`Service`}
          </Typography>
        </Typography>
      </Box>
      <br />
      <Box>
        <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
          {`Experience the perfect blend of comfort, luxury, and personalized
          service that makes every stay unforgettable.`}
        </Typography>
      </Box>
      <br />
      <br />
      <Button
        variant="contained"
        color="warning"
        size="large"
        sx={{ padding: "1rem", width: "200px", textTransform: "none" }}
        endIcon={<ArrowForward />}>
        Book Now
      </Button>
    </Box>
  );
}

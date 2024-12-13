import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import BookingForm from "../booking/BookingForm";

export default function VisitorBooking() {
  return (
    <Box>
      <Box>
        <CardMedia
          component="img"
          height="140"
          image={
            "https://res.cloudinary.com/ddae5tiwv/image/upload/v1733939089/hotel/dd0ldiwmmr04zwelwujy.jpg"
          }
          alt="green iguana"
        />
      </Box>
      <br />
      <br />
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontSize: "1.7rem" }}>
          Booking Apartment
        </Typography>
        <Typography variant="body1" color={"warning.main"}>
          Experience something new every moment
        </Typography>
      </Box>
      <br />
      <br />
      <Box>
        <BookingForm />
      </Box>
    </Box>
  );
}

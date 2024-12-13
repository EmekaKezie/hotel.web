import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import AppDialog from "../../core/utility/AppDialog";
import VisitorBooking from "./VisitorBooking";

export default function HomeViewHero() {
  const [bookingDialog, setBookingDialog] = useState<boolean>(false);



  return (
    <Box>
      <Box
        sx={{
          paddingRight: { lg: "3rem", md: "3rem", sm: "2rem", xs: "0" },
        }}>
        <Box
          sx={{
            display: "flex",
            border: "0px solid gray",
            width: { lg: "60%", md: "60%", sm: "100%", xs: "100%" },
          }}>
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
        <Box sx={{ display: "flex", gap: 2, height: "90px" }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="body2"
              color="secondary"
              sx={{ fontWeight: "600" }}>
              Active Days
            </Typography>
            <Typography variant="h2" color="primary">
              7
            </Typography>
          </Box>
          <Box
            sx={{
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "lightgray",
              height: "100%",
            }}></Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="body2"
              color="secondary"
              sx={{ fontWeight: "600" }}>
              Active Hours
            </Typography>
            <Typography variant="h2" color="primary">
              24
            </Typography>
          </Box>
        </Box>
        <br />
        <br />
        <Button
          variant="contained"
          color="warning"
          size="large"
          sx={{ padding: "1rem", width: "200px", textTransform: "none" }}
          endIcon={<ArrowForward />}
          onClick={() => setBookingDialog(true)}>
          Book Now
        </Button>
      </Box>

      {bookingDialog && (
        <AppDialog
          open={bookingDialog}
          width="md"
          title={<Box sx={{ padding: "1rem" }}></Box>}
          content={<VisitorBooking />}
          onClose={() => setBookingDialog(false)}
          actions={
            <Box sx={{ padding: "1rem 2rem" }}>
              <Button
                size="large"
                color="warning"
                variant="contained"
                sx={{ textTransform: "none" }}>
                Submit Booking
              </Button>
            </Box>
          }
        />
      )}
    </Box>
  );
}

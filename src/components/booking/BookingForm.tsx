import React from "react";
import { Box, Grid, MenuItem, TextField, Typography } from "@mui/material";

export default function BookingForm() {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <TextField
            label="Name"
            fullWidth
            required
            focused
            placeholder="Enter your full name"
          />
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={6}>
          <TextField
            label="Email address"
            fullWidth
            required
            focused
            placeholder="Enter your email address"
            type="email"
          />
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={6}>
          <TextField
            label="Phone No."
            fullWidth
            focused
            placeholder="Enter your phone number"
            type="tel"
          />
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={6}>
          <TextField
            label="Room type"
            fullWidth
            select
            focused
            placeholder="Select room type">
            <MenuItem>
              <Typography>Delux</Typography>
            </MenuItem>
            <MenuItem>
              <Typography>Exclusive</Typography>
            </MenuItem>
          </TextField>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={6}>
          <TextField
            label="Nunber of Guests"
            fullWidth
            required
            focused
            placeholder="Enter the number of guests"
          />
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={6}>
          <TextField
            label="Arrival date & time"
            type="datetime-local"
            fullWidth
            required
            focused
          />
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={6}>
          <TextField
            label="Departure date & time"
            type="datetime-local"
            fullWidth
            required
            focused
          />
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <TextField
            label="Special request"
            fullWidth
            required
            focused
            multiline
            rows={4}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

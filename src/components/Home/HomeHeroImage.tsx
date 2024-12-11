import React from "react";
import { Box, ImageList, ImageListItem } from "@mui/material";

export default function HomeHeroImage() {
  return (
    <Box>
      <ImageList
        //sx={{ width: 500, height: 450 }}
        variant="standard"
        cols={4}
        rowHeight={121}
        gap={16}>
        <ImageListItem cols={2} rows={4}>
          <img
            alt="banner1"
            src="https://res.cloudinary.com/ddae5tiwv/image/upload/v1733939087/hotel/q80eawn1rjdxv9wvp6b0.jpg"
            style={{ borderRadius: "30px" }}></img>
        </ImageListItem>
        <ImageListItem cols={2} rows={2}>
          <img
            alt="banner2"
            src="https://res.cloudinary.com/ddae5tiwv/image/upload/v1733939089/hotel/dd0ldiwmmr04zwelwujy.jpg"
            style={{ borderRadius: "30px" }}></img>
        </ImageListItem>
        <ImageListItem cols={2} rows={2}>
          <img
            alt="banner2"
            src="https://res.cloudinary.com/ddae5tiwv/image/upload/v1733939087/hotel/uzxgnyysvs52gzr4hvxt.jpg"
            style={{ borderRadius: "30px" }}></img>
        </ImageListItem>
      </ImageList>
    </Box>
  );
}

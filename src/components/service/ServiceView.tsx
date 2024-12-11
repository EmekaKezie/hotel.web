import React, { ReactNode } from "react";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Check } from "@mui/icons-material";

type dataProps = {
  imageUrl: string;
  apartmentType: string;
  amount: number;
  description: string | ReactNode;
};

export default function ServiceView() {
  return (
    <Box sx={{ height: "100%" }}>
      <Paper
        elevation={0}
        sx={{
          padding: { lg: "4rem", md: "4rem", sm: "4rem 2rem", xs: "4rem 2rem" },
        }}>
        <br />
        <Box>
          <Typography variant="h4">Discover our luxury apartments</Typography>
          <Typography variant="body1">
            {`Discover our luxury apartments Discover our luxury apartments
            Discover our luxury apartments`}
          </Typography>
        </Box>
        <br />
        <br />
        <Box
          sx={{
            border: "0px solid gray",
            display: { lg: "flex", md: "flex" },
            flexdirection: { lg: "row", md: "row", sm: "row", xs: "column" },
            justifyContent: "space-between",
            gap: 4,
          }}>
          {data?.map((item, index) => (
            <Box
              key={index}
              sx={{
                maxWidth: { lg: 345, md: 345, sm: 345, xs: "100%" },
                marginBottom: { xs: "2rem" },
              }}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.imageUrl}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Stack direction={"row"} alignItems={"center"}>
                      <Typography
                        gutterBottom
                        variant="body1"
                        component="div"
                        color={"warning.main"}
                        sx={{
                          flexGrow: 1,
                          fontSize: "1.2rem",
                          fontWeight: "bold",
                        }}>
                        {item.apartmentType}
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                        {Intl.NumberFormat("en-NG", {
                          style: "currency",
                          currency: "NGN",
                        }).format(item.amount)}
                      </Typography>
                    </Stack>
                    <br />
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}>
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          ))}
        </Box>
        <br />
        <br />
      </Paper>

      <Box
        sx={{
          backgroundColor: "#f9f5ec ",
          padding: { lg: "8rem", md: "8rem", sm: "8rem", xs: "4rem 2rem" },
        }}>
        <Grid container spacing={10}>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <br></br>
            <Typography variant="h4">
              Discover beautiful places with our tips
            </Typography>
            <br />
            <Typography variant="body1">
              {`Discover beautiful places with our tips Discover beautiful places
              with our tipsDiscover beautiful places with our tipsDiscover
              beautiful places with our tipsDiscover beautiful places with our
              tips`}
            </Typography>
            <br />
            <List>
              <ListItem>
                <ListItemAvatar sx={{}}>
                  <Avatar sx={{ backgroundColor: "warning.main" }}>
                    <Check />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.1rem",
                    }}>{`img elements must have an alt prop, either with meaningful text, or an empty string for decorative images`}</Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemAvatar sx={{}}>
                  <Avatar sx={{ backgroundColor: "warning.main" }}>
                    <Check />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.1rem",
                    }}>{`img elements must have an alt prop, either with meaningful text, or an empty string for decorative images`}</Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemAvatar sx={{}}>
                  <Avatar sx={{ backgroundColor: "warning.main" }}>
                    <Check />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.1rem",
                    }}>{`img elements must have an alt prop, either with meaningful text, or an empty string for decorative images`}</Typography>
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <ImageList
              //sx={{ width: 500, height: 450 }}
              variant="standard"
              cols={1}
              rowHeight={121}
              gap={16}>
              <ImageListItem cols={2} rows={4}>
                {/* eslint-disable-next-line*/}
                <img
                  src="https://res.cloudinary.com/ddae5tiwv/image/upload/v1733939087/hotel/q80eawn1rjdxv9wvp6b0.jpg"
                  style={{ borderRadius: "30px" }}></img>
              </ImageListItem>
            </ImageList>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

const data: dataProps[] = [
  {
    imageUrl:
      "https://res.cloudinary.com/ddae5tiwv/image/upload/v1733939087/hotel/q80eawn1rjdxv9wvp6b0.jpg",
    apartmentType: "Delux",
    amount: 50000,
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/ddae5tiwv/image/upload/v1733939089/hotel/dd0ldiwmmr04zwelwujy.jpg",
    apartmentType: "Delux",
    amount: 50000,
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/ddae5tiwv/image/upload/v1733939087/hotel/uzxgnyysvs52gzr4hvxt.jpg",
    apartmentType: "Delux",
    amount: 50000,
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/ddae5tiwv/image/upload/v1733939087/hotel/uzxgnyysvs52gzr4hvxt.jpg",
    apartmentType: "Delux",
    amount: 50000,
    description:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  },
];

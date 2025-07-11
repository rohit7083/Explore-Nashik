import React from "react";
import { Box, Grid, Card, CardMedia, Typography } from "@mui/material";

const photos = [
  "src/assets/image/slider-sula.jpg",
  "src/assets/image/sllider-caves.jpg",
  "src/assets/image/slider-coin.jpg",
  "src/assets/image/slider-backwater.jpg",
  "src/assets/image/Slider-Mountaiin.jpg",
  "src/assets/image/silder-sinner.jpg",
  "src/assets/image/slider-sula2.jpg",

  "src/assets/image/slider-fort.jpg",

  "src/assets/image/silder-backwater2.jpg",
];

const GallerySection = () => {
  return (
    <>
      <Box sx={{ padding: 4, backgroundColor: "#f5f5f5" }}>
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          gutterBottom
          mb={4}
        >
          Gallery
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {photos.map((url, idx) => {
            const isMiddle = idx === 4; // 5th photo (0-based index)
            return (
              <Grid
                key={idx}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card
                  sx={{
                    borderRadius: isMiddle ? "50%" : 3,
                    width: isMiddle ? 180 : "100%",
                    height: isMiddle ? 180 : "auto",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    overflow: "hidden",
                    cursor: "pointer",
                    "&:hover img": {
                      transform: "scale(1.05)",
                      transition: "transform 0.4s ease",
                    },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  elevation={2}
                >
                  <CardMedia
                    component="img"
                    height={isMiddle ? 180 : 180}
                    image={url}
                    alt={`Gallery Image ${idx + 1}`}
                    sx={{
                      objectFit: "cover",
                      borderRadius: isMiddle ? "50%" : 3,
                      transition: "transform 0.3s ease",
                      width: isMiddle ? 180 : "100%",
                      height: isMiddle ? 180 : 180,
                    }}
                  />
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default GallerySection;

import { Box, Card, CardActionArea, Typography,CardMedia ,  CardContent,CardActions ,Button   } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StarIcon from "@mui/icons-material/Star";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";

function ToursAndTravels() {
  return (
    <>

      <Typography
        variant="h4"
        sx={{
          display: "flex",
          fontWeight: "bold",
          justifyContent: "center",
          marginTop: "1em",
        }}
        component="div"
      >
        Top
        <span
          style={{
            color: "#ee685f",
            marginRight: "0.2em",
            marginLeft: "0.2em",
          }}
        >
          {" "}
          Tour And Travelers{" "}
        </span>{" "}
      </Typography>
      <Typography
        className=""
        component="div"
        sx={{
          mb: 8,
          marginTop: "1em",
          textAlign: "center",
        }}
      >
         Must-Visit Attractions
Explore ancient temples, scenic vineyards, historical caves, and breathtaking natural beauty
    
    
      </Typography>
    <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
       <Card
  sx={{
    maxWidth: { xs: "100%", sm: "48%", md: "25%", lg: "25%" },
    borderRadius: "1em",
    marginRight: "1em",
    marginBottom: "1em",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)", // softer bigger shadow
    border: "2px solid black", // coral-ish border for highlight
    transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      boxShadow: "0 8px 24px rgba(0,0,0,0.3)", // stronger shadow on hover
      borderColor: "#2a90d9", // change border color on hover to blue
      transform: "scale(1.03)",
    },
  }}
>

        <CardActionArea>
          {/* Image container with overlays */}
          <Box sx={{ position: "relative" }}>
            <CardMedia
              component="img"
              height="190"
              image="https://images.unsplash.com/photo-1665888002987-eb5a29ee775c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hc2hpa3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Sadhana Restaurant"
              sx={{
                objectFit: "cover",
                borderTopLeftRadius: "1em",
                borderTopRightRadius: "1em",
              
              }}
            />

            {/* Category Label (top-left) */}
            <Box
              sx={{
                position: "absolute",
                top: 12,
                left: 12,
                backgroundColor: "#2a90d9", // softened coral with alpha
                color: "white",
                borderRadius: "1em",
                px: 2,
                py: 0.6,
                fontWeight: "600",
                fontSize: "0.9em",
                userSelect: "none",
                boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
              }}
            >
              Maharashtrian Food
            </Box>

            {/* Rating Badge (top-right) */}
            <Box
              sx={{
                position: "absolute",
                top: 12,
                right: 12,
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                color: "white",
                borderRadius: "1em",
                px: 1.5,
                py: 0.3,
                display: "flex",
                alignItems: "center",
                fontSize: "0.95em",
                boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
                fontWeight: "600",
              }}
            >
              <StarIcon sx={{ color: "#ffb400", fontSize: "1.2em", mr: 0.5 }} />
              4.5
            </Box>
          </Box>

          <CardContent sx={{ backgroundColor: "#fff9f8" /* very subtle coral tint */ }}>
            <Typography
              gutterBottom
              variant="h5"
              sx={{
                color: "#ee685f",
                fontWeight: "700",
                letterSpacing: "0.02em",
              }}
              component="div"
            >
              Sadhana Restaurant
            </Typography>

            <Typography
              variant="body2"
              sx={{ fontSize: "1em", mb: 2, color: "text.secondary" }}
            >
              Speciality: Maharashtrian Food & Misal Paav
            </Typography>

            <Typography variant="body2" sx={{ mb: 1, color: "text.secondary" }}>
              <Box display="flex" alignItems="center" gap={1}>
                <LocationOnOutlinedIcon
                  sx={{ color: "#2a90d9", fontSize: "1.3em" }}
                />
                Panchavati, Nashik
              </Box>
            </Typography>

            <Typography variant="body2" sx={{ mb: 1, color: "text.secondary" }}>
              <Box display="flex" alignItems="center" gap={1}>
                <AccessTimeOutlinedIcon
                  sx={{ color: "#2a90d9", fontSize: "1.1em" }}
                />
                7.00 AM - 8.00 PM
              </Box>
            </Typography>

            <Typography variant="body2" sx={{ mb: 1, color: "text.secondary" }}>
              <Box display="flex" alignItems="center" gap={1}>
                <CallOutlinedIcon
                  sx={{ color: "#2a90d9", fontSize: "1.1em" }}
                />
                +91 7856985423
              </Box>
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions sx={{ px: 2, pb: 2 }}>
          <Button size="small" color="primary" sx={{ fontWeight: "600" }}>
            Share
          </Button>
          <Button size="small" color="primary" sx={{ fontWeight: "600" }}>
            Know More
          </Button>
        </CardActions>
      </Card>
        </Box>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 4,
        mb: 4,
      }}
    >
      <Button
        variant="contained"
        color="success"
        size="small"
        endIcon={<ArrowForwardIcon />}
        sx={{
          borderRadius: "25px", // More rounded
          textTransform: "none", // Keep "View More" readable
          fontWeight: "bold",
          px: 4, // Extra horizontal padding
          boxShadow: 3, // Subtle shadow
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "success.dark",
            boxShadow: 6,
          },
        }}
      >
        View More
      </Button>
    </Box>
    </>
  )
}

export default ToursAndTravels
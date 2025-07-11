import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Stack, Box, CardActionArea, Typography ,IconButton } from "@mui/material";
import Button from "@mui/material/Button";
// import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
export default function SliderFood() {
    const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };
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
          Foods{" "}
        </span>{" "}
        Places
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
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias cumque
        eveniet illum doloremque minima quis officia nobis dolore aliquid! Hic,
        aspernatur? Molestiae, molestias. Voluptatem, quos.
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
        {/* <Card
          sx={{
            maxWidth: { xs: "100%", sm: "48%", md: "25%", lg: "25%" },
            borderRadius: "1em",
            marginRight: "1em",
            marginBottom: "1em",
            boxShadow: 3,
            "&:hover": {
              boxShadow: 6,
              transform: "scale(1.02)",
              transition: "all 0.3s ease-in-out",
            },
             borderTopLeftRadius: "2em",
                borderTopRightRadius: "2em",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="190"
              image="https://images.unsplash.com/photo-1665888002987-eb5a29ee775c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hc2hpa3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Sadhana Restaurant"
              sx={{
                objectFit: "cover",
                borderTopLeftRadius: "2em",
                borderTopRightRadius: "2em",
              }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                sx={{ color: "#ee685f", fontWeight: "bold" }}
                component="div"
              >
                Sadhana Restaurant
              </Typography>

              <Typography
                variant="body2"
                sx={{ fontSize: "1em", mb: "1em", color: "text.secondary" }}
              >
                Speciality: Maharashtrian Food & Misal Paav
              </Typography>



              <Typography
                variant="body2"
                sx={{ mb: "0.5em", color: "text.secondary" }}
              >
                <Box display="flex" alignItems="center" gap={1}>
                  <LocationOnOutlinedIcon
                    sx={{ color: "#2a90d9", fontSize: "1.2em" }}
                  />
                  Panchavati, Nashik
                </Box>
              </Typography>

              <Typography
                variant="body2"
                sx={{ mb: "0.5em", color: "text.secondary" }}
              >
                <Box display="flex" alignItems="center" gap={1}>
                  <AccessTimeOutlinedIcon
                    sx={{ color: "#2a90d9", fontSize: "1em" }}
                  />
                  7.00 AM - 8.00 PM
                </Box>
              </Typography>

              <Typography
                variant="body2"
                sx={{ mb: "0.5em", color: "text.secondary" }}
              >
                <Box display="flex" alignItems="center" gap={1}>
                  <CallOutlinedIcon
                    sx={{ color: "#2a90d9", fontSize: "1em" }}
                  />
                  +91 7856985423
                </Box>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card> */}

     
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

            {/* <Typography variant="body2" sx={{ mb: 1, color: "text.secondary" }}>
              <Box display="flex" alignItems="center" gap={1}>
                <LocationOnOutlinedIcon
                  sx={{ color: "#2a90d9", fontSize: "1.3em" }}
                />
                Panchavati, Nashik
              </Box>
            </Typography> */}


<Typography variant="body2" sx={{ mb: 1, color: "text.secondary" }}>
  <a
    href="https://www.google.com/maps/place/Sadhana+Chulivarchi+Misal/@20.0216608,73.7182947,17z/data=!3m1!4b1!4m6!3m5!1s0x3bddec3ef7737e75:0x6158d3bc86aa2eba!8m2!3d20.0216608!4d73.7208696!16s%2Fg%2F11b6j67zv7?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: "none", color: "inherit" }}
  >
    <Box display="flex" alignItems="center" gap={1}>
      <LocationOnOutlinedIcon
        sx={{ color: "#2a90d9", fontSize: "1.3em" }}
      />
      Gangapur Road, Nashik
    </Box>
  </a>
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

      <CardActions sx={{ px: 2, pb: 2, justifyContent: "space-between", alignItems: "center" }}>
  <Box>
    <Button size="small" color="primary" sx={{ fontWeight: 600 }}>
      Share
    </Button>
    <Button size="small" color="primary" sx={{ fontWeight: 600 }}>
      Know More
    </Button>
  </Box>
  {/* <FavoriteBorderIcon onClick={handleLike} sx={{ color: "red" }} /> */}

 <IconButton onClick={handleLikeClick}>
        {liked ? (
          <FavoriteIcon sx={{ color: "red" }} />
        ) : (
          <FavoriteBorderIcon sx={{ color: "red" }} />
        )}
      </IconButton>
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
  );
}

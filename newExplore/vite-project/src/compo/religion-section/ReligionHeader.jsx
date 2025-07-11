import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

function ReligionHeader() {
  const religiousPlaces = [
    {
      name: "Trimbakeshwar Temple",
      image:
        "https://img.freepik.com/free-photo/architecture-ancient-monument-world-heritage-day-celebration_23-2151297193.jpg?uid=R204278767&ga=GA1.1.1282347371.1741701492&semt=ais_hybrid&w=740",
    },
    {
      name: "Kalaram",
      image:
        "https://img.freepik.com/free-photo/architecture-ancient-monument-world-heritage-day-celebration_23-2151297193.jpg?uid=R204278767&ga=GA1.1.1282347371.1741701492&semt=ais_hybrid&w=740",
    },
    {
      name: "Muktidham Temple",
      image:
        "https://img.freepik.com/free-photo/architecture-ancient-monument-world-heritage-day-celebration_23-2151297193.jpg?uid=R204278767&ga=GA1.1.1282347371.1741701492&semt=ais_hybrid&w=740",
    },
    {
      name: "Saptashrungi Temple",
      image:
        "https://img.freepik.com/free-photo/architecture-ancient-monument-world-heritage-day-celebration_23-2151297193.jpg?uid=R204278767&ga=GA1.1.1282347371.1741701492&semt=ais_hybrid&w=740",
    },
    {
      name: "Sundarnarayan Temple",
      image:
        "https://img.freepik.com/free-photo/architecture-ancient-monument-world-heritage-day-celebration_23-2151297193.jpg?uid=R204278767&ga=GA1.1.1282347371.1741701492&semt=ais_hybrid&w=740",
    },
     {
      name: "Sundarnarayan Temple",
      image:
        "https://img.freepik.com/free-photo/architecture-ancient-monument-world-heritage-day-celebration_23-2151297193.jpg?uid=R204278767&ga=GA1.1.1282347371.1741701492&semt=ais_hybrid&w=740",
    },
   
  ];

  return (
    <div>
      {" "}
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        border="2px solid black"
        borderRadius="1em"
        pt={3}
        sx={{ pl: "2em" }}
      >
        <Box flex={1} mb={{ xs: 2, md: 0 }}>
          <Typography variant="h4" component="h1" fontWeight="bold">
            Walk the Path of Faith,{" "}
          </Typography>
          <Typography
            variant="h4"
            color="#ee685f"
            fontWeight="bold"
            gutterBottom
          >
            One Place at a Time{" "}
          </Typography>
          <Box
            display="flex"
            gap={2}
            mt={2}
            sx={{
              flexDirection: { xs: "column", md: "row" },
              marginRight: { xs: "1em", md: "0em" },
            }}
          >
            <TextField
              label="Search Your favorite religious places..."
              variant="outlined"
              size="small"
              sx={{
                backgroundColor: "white",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "4em",
                  paddingRight: "5em",
                },
              }}
            />
            <Button
              variant="contained"
              sx={{ borderRadius: "8em" }}
              color="primary"
            >
              Search
            </Button>
          </Box>
        </Box>
        <Box
          flex={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={2}
          pr="2em"
        >
          {/* <img
              src="src/assets/image/pizzaGirl.png"
              style={{display:"", maxHeight: "200px" }}
            />
            <img
              // src="https://img.freepik.com/free-vector/sliced-vegetables-realistic-concept-with-tomato-pepper-onion-vector-illustration_1284-16245.jpg?ga=GA1.1.1282347371.1741701492&semt=ais_hybrid&w=740"
              // src="https://img.freepik.com/free-vector/healthy-food-concept-with-chicken-salad_1308-106459.jpg?ga=GA1.1.1282347371.1741701492&semt=ais_hybrid&w=740"
              src="https://img.freepik.com/free-vector/cooking-pizza-concept_1284-19977.jpg?ga=GA1.1.1282347371.1741701492&semt=ais_hybrid&w=740"
              alt="Eating burger"
              style={{ maxHeight: "200px" }}
            /> */}

          {/* <Box
            component="img"
            // src="src/assets/image/pizzaGirl.png"
src="https://cdn.dribbble.com/userupload/26516009/file/original-a2c10d3f2867c8473e0844a4a88c4ce0.jpg?resize=1504x1128&vertical=center" 
           alt="Pizza Girl"
            sx={{
              maxHeight: "200px",
              display: "block", // always show
            }}
          /> */}

          <Box
            component="img"
            src="https://img.freepik.com/free-vector/asean-buildings-illustration_52683-49260.jpg?uid=R204278767&ga=GA1.1.1282347371.1741701492&semt=ais_hybrid&w=740"
            alt="Cooking pizza"
            sx={{
              maxHeight: "200px",
              display: { xs: "none", md: "block" }, // Hide on xs and sm, show on md+
            }}
          />
        </Box>
      </Box>
      <Box mt={4} sx={{}}>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Popular Religious Place
        </Typography>
        <Grid container sx={{display: "flex", justifyContent:"space-around"}} spacing={2}>
          {religiousPlaces.map((restaurant, index) => (
            <Grid  item xs={6} sm={4} md={2} key={index}>
           
              <Card
                sx={{
                  textAlign: "center",
                  borderRadius: "1em",
                  maxWidth: 160,
                  margin: "auto",
                  
                }}
              >
                <CardMedia
                  component="img"
                  height="150"
                  image={restaurant.image}
                  alt={restaurant.name}
                />
                <CardContent
                  sx={{
                    backgroundColor: "#fc8a06",
                    borderBottomLeftRadius: "1em",
                    borderBottomRightRadius: "1em",
                    height: 40,
                  }}
                >
                  <Typography variant="body1" fontWeight="bold">
                    {restaurant.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default ReligionHeader;

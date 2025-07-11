

import * as React from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import {
  Search as SearchIcon,
  FilterAlt as FilterAltIcon,
  Sort as SortIcon,
  Star as StarIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  LocationOnOutlined as LocationOnOutlinedIcon,
  AccessTimeOutlined as AccessTimeOutlinedIcon,
  CallOutlined as CallOutlinedIcon,
  ArrowForward as ArrowForwardIcon,
  ArrowDownward,
} from "@mui/icons-material";
import { useState } from "react";

export default function SliderFood({
  value,
  onChange,
  onSearch,
  placeholder = "Search...",
  onSortChange,
}) {
  const [liked, setLiked] = useState(false);
  const [sortOption, setSortOption] = useState("");

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    onSortChange && onSortChange(event.target.value);
  };

  return (
    <>
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          display: "flex",
          fontWeight: "bold",
          justifyContent: "center",
          mt: "2em",
          mb: "2em",
          textAlign: "center",
          flexWrap: "wrap",
        }}
      >
        All
        <span style={{ color: "#ee685f", margin: "0 0.2em" }}>Religious </span> Places
      </Typography>

      {/* Search, Filter, Sort Container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "stretch", sm: "center" },
          justifyContent: "space-between",
          gap: 4,
          flexWrap: "wrap",
          mb: 2,
        }}
      >
        {/* Search */}
        <Box sx={{ flex: 1, minWidth: "220px" }}>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && onSearch) {
                onSearch(value);
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
              endAdornment: onSearch && (
                <InputAdornment position="end">
                  <IconButton onClick={() => onSearch(value)}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Filter and Sort */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            flexWrap: "wrap",
          }}
        >
          {/* Filter */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#2a90d9" }}>
            <FilterAltIcon />
            <Typography>Filter</Typography>
          </Box>

          {/* Sort */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#2a90d9" }}>
            <SortIcon />
            <FormControl size="small" sx={{ minWidth: "150px" }}>
              <InputLabel id="sort-label">Sort By</InputLabel>
              <Select
                labelId="sort-label"
                id="sort-dropdown"
                value={sortOption}
                label="Sort By"
                onChange={handleSortChange}
              >
                <MenuItem value="name_asc">Name (A-Z)</MenuItem>
                <MenuItem value="name_desc">Name (Z-A)</MenuItem>
                <MenuItem value="date_asc">Date (Oldest)</MenuItem>
                <MenuItem value="date_desc">Date (Newest)</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Box>

      {/* Card Container */}
      <Box
        sx={{
          marginTop:"4em",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { xs: "center", md: "flex-start" },
          gap: 2,
        }}
      >
        {/* Card */}
        <Card
          sx={{
            flex: "1 1 250px",
            maxWidth: "300px",
            borderRadius: "1em",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            border: "2px solid black",
            transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
            "&:hover": {
              boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
              borderColor: "#2a90d9",
              transform: "scale(1.03)",
            },
          }}
        >
          <CardActionArea>
            {/* Image */}
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

              {/* Category */}
              <Box
                sx={{
                  position: "absolute",
                  top: 12,
                  left: 12,
                  backgroundColor: "#2a90d9",
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

              {/* Rating */}
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

            {/* Card Content */}
            <CardContent sx={{ backgroundColor: "#fff9f8" }}>
              <Typography
                gutterBottom
                variant="h5"
                sx={{ color: "#ee685f", fontWeight: "700", letterSpacing: "0.02em" }}
              >
                Sadhana Restaurant
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
                Speciality: Maharashtrian Food & Misal Paav
              </Typography>

              {/* Location */}
              <Typography variant="body2" sx={{ mb: 1, color: "text.secondary" }}>
                <a
                  href="https://www.google.com/maps/place/Sadhana+Chulivarchi+Misal/@20.0216608,73.7182947,17z/data=!3m1!4b1!4m6!3m5!1s0x3bddec3ef7737e75:0x6158d3bc86aa2eba!8m2!3d20.0216608!4d73.7208696!16s%2Fg%2F11b6j67zv7?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Box display="flex" alignItems="center" gap={1}>
                    <LocationOnOutlinedIcon sx={{ color: "#2a90d9", fontSize: "1.3em" }} />
                    Gangapur Road, Nashik
                  </Box>
                </a>
              </Typography>

              {/* Time */}
              <Typography variant="body2" sx={{ mb: 1, color: "text.secondary" }}>
                <Box display="flex" alignItems="center" gap={1}>
                  <AccessTimeOutlinedIcon sx={{ color: "#2a90d9", fontSize: "1.1em" }} />
                  7.00 AM - 8.00 PM
                </Box>
              </Typography>

              {/* Contact */}
              <Typography variant="body2" sx={{ mb: 1, color: "text.secondary" }}>
                <Box display="flex" alignItems="center" gap={1}>
                  <CallOutlinedIcon sx={{ color: "#2a90d9", fontSize: "1.1em" }} />
                  +91 7856985423
                </Box>
              </Typography>
            </CardContent>
          </CardActionArea>

          {/* Actions */}
          <CardActions sx={{ px: 2, pb: 2, justifyContent: "space-between" }}>
            <Box>
              <Button size="small" color="primary" sx={{ fontWeight: 600 }}>
                Share
              </Button>
              <Button size="small" color="primary" sx={{ fontWeight: 600 }}>
                Know More
              </Button>
            </Box>
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

      {/* View More */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4, mb: 4 }}>
        <Button
          variant="contained"
          color="success"
          size="small"
          endIcon={<ArrowDownward />}
          sx={{
            borderRadius: "25px",
            textTransform: "none",
            fontWeight: "bold",
            px: 4,
            boxShadow: 3,
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

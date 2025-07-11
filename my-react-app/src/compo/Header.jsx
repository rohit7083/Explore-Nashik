import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Slider from "./Slider";
import SliderFood from "./SliderFood";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = ["Home", "Hotels", "Street Food", "Gallery"];

  return (
    <>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "white", boxShadow: "none" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Box display="flex" alignItems="center" gap={1}>
            <Typography
              variant="h5"
              sx={{ color: "rgb(67, 157, 221)", fontWeight: "bold" }}
            >
              Explore
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "rgb(238, 104, 95)", fontWeight: "bold" }}
            >
              Nashik
            </Typography>
          </Box>

          {/* Menu Items */}
          {isMobile ? (
            <>
              {/* Mobile Menu Icon */}
              <IconButton
                color="inherit"
                edge="end"
                onClick={handleDrawerToggle}
              >
                <MenuIcon sx={{ color: "black" }} />
              </IconButton>
            </>
          ) : (
            <Box display="flex" alignItems="center" gap={2}>
              {menuItems.map((item) => (
                <Button
                  key={item}
                  sx={{ color: "black" }}
                >
                  {item}
                </Button>
              ))}
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                onClick={handleAvatarClick}
                sx={{ cursor: "pointer", height: 30, width: 30 }}
              />
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>Login</MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        <Box
          sx={{ width: 200 }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

       <Slider />
      <SliderFood />
    </>
  );
}

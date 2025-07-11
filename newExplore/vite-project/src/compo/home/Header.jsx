

// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   IconButton,
//   Menu,
//   MenuItem,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   Avatar,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import MenuIcon from "@mui/icons-material/Menu";
// import { useNavigate } from "react-router-dom"; // <-- added import
// import Slider from "./Slider";
// import SliderFood from "./SliderFood";
// import TopAttractions from "./TopAttractions";
// import Footer from "./Footer";
// import Testimonials from "./Testonomial";
// import ToursAndTravels from "./ToursAndTravels";
// import Gallery from "./Gallery";

// export default function Header() {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

//   const navigate = useNavigate(); // <-- added

//   const handleAvatarClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   // List of Menu Items and their corresponding routes
//   const menuItems = [
//     { label: "Home", path: "/" },
//     { label: "Religion", path: "/religion" },
//     { label: "Food", path: "/food" },
//     { label: "Tours & Travels", path: "/toursAnd-travels" },
//   ];

//   return (
//     <>
//       <AppBar
//         position="sticky"
//         sx={{ backgroundColor: "white", boxShadow: "none" }}
//       >
//         <Toolbar
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//           }}
//         >
//           {/* Logo */}
//           <Box display="flex" alignItems="center" gap={1}>
//             <Typography
//               variant="h5"
//               sx={{ color: "rgb(67, 157, 221)", fontWeight: "bold" }}
//             >
//               Explore
//             </Typography>
//             <Typography
//               variant="h5"
//               sx={{ color: "rgb(238, 104, 95)", fontWeight: "bold" }}
//             >
//               Nashik
//             </Typography>
//           </Box>

//           {/* Menu Items */}
//           {isMobile ? (
//             <IconButton color="inherit" edge="end" onClick={handleDrawerToggle}>
//               <MenuIcon sx={{ color: "black" }} />
//             </IconButton>
//           ) : (
//             <Box display="flex" alignItems="center" gap={2}>
//               {menuItems.map((item) => (
//                 <Button
//                   key={item.label}
//                   sx={{ color: "black" }}
//                   onClick={() => navigate(item.path)} // <-- added
//                 >
//                   {item.label}
//                 </Button>
//               ))}

//               <FavoriteBorderIcon sx={{ color: "red" }} />

//               {/* <Avatar
//                 alt="Remy Sharp"
//                 src="https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?ga=GA1.1.1282347371.1741701492&semt=ais_hybrid&w=740"
//                 onClick={handleAvatarClick}
//                 sx={{ cursor: "pointer", height: 30, width: 30 }}
//               />
//               <Menu
//                 anchorEl={anchorEl}
//                 open={Boolean(anchorEl)}
//                 onClose={handleMenuClose}
//               >
//                 <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//                 <MenuItem onClick={handleMenuClose}>Favorite</MenuItem>

//                 <MenuItem onClick={handleMenuClose}>Login</MenuItem>
//               </Menu> */}
//             </Box>
//           )}
//         </Toolbar>
//       </AppBar>

//       {/* Drawer for Mobile */}
//       <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
//         <Box
//           sx={{ width: 200 }}
//           role="presentation"
//           onClick={handleDrawerToggle}
//           onKeyDown={handleDrawerToggle}
//         >
//           <List>
//             {menuItems.map((item) => (
//               <ListItem key={item.label} disablePadding>
//                 <ListItemButton onClick={() => navigate(item.path)}>
//                   {/* <-- added */}

//                   <ListItemText primary={item.label} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Drawer>

//       {/* Your page content */}
//     </>
//   );
// }




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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom"; // <-- updated
import Slider from "./Slider";
import SliderFood from "./SliderFood";
import TopAttractions from "./TopAttractions";
import Footer from "./Footer";
import Testimonials from "./Testonomial";
import ToursAndTravels from "./ToursAndTravels";
import Gallery from "./Gallery";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();
  const location = useLocation(); // <-- added

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Religion", path: "/religion" },
    { label: "Food", path: "/food" },
    { label: "Tours & Travels", path: "/toursAnd-travels" },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "white", boxShadow: "none" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
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
            <IconButton color="inherit" edge="end" onClick={handleDrawerToggle}>
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
          ) : (
            <Box display="flex" alignItems="center" gap={2}>
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => navigate(item.path)}
                  sx={{
                    color:
                      location.pathname === item.path
                        ? "rgb(238, 104, 95)"
                        : "black",
                    fontWeight:
                      location.pathname === item.path ? "bold" : "normal",
                    borderBottom:
                      location.pathname === item.path
                        ? "2px solid rgb(238, 104, 95)"
                        : "none",
                    borderRadius: 0,
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <FavoriteBorderIcon sx={{ color: "red" }} />
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{ width: 200 }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  onClick={() => navigate(item.path)}
                  selected={location.pathname === item.path}
                  sx={{
                    "&.Mui-selected": {
                      backgroundColor: "rgba(238, 104, 95, 0.1)",
                      color: "rgb(238, 104, 95)",
                    },
                  }}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

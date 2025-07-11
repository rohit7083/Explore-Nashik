// import React from "react";
// import { Box, Typography, Container } from "@mui/material";

// function Footer() {
//   return (
//     <Box
//       component="footer"
//       sx={{
//         py: 2,
//         px: 2,
//         mt: "auto",
//         backgroundColor: (theme) =>
//           theme.palette.mode === "light"
//             ? theme.palette.grey[200]
//             : theme.palette.grey[800],
//         // textAlign: "center",
//       }}
//     >
//       <Container maxWidth="lg">
//         <Typography variant="body2" sx={{ mb: 2, mt:4 }} color="text.secondary">
//           <strong>Pages</strong>
//         </Typography>
//         <Typography variant="body2" sx={{ mb: 1 }} color="text.secondary">
//           Food{" "}
//         </Typography>
//         <Typography variant="body2" sx={{ mb: 1 }} color="text.secondary">
//           Historical{" "}
//         </Typography>
//         <Typography variant="body2" sx={{ mb: 2 }} color="text.secondary">
//           Hotels{" "}
//         </Typography>
//         <hr />
//         <Box
//           display="flex"
//           alignItems="center"
//           justifyContent="space-between"
//           flexWrap="wrap"
//           gap={1}
//         >
//           <Box display="flex" alignItems="center" gap={1}>
//             <Typography
//               variant="h5"
// sx={{ color: "rgb(67, 157, 221)", fontWeight: "bold" }}
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
//           <Typography variant="body2" color="text.secondary">
//             © {new Date().getFullYear()} All rights reserved.
//           </Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// }

// export default Footer;
import React from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  Divider,
  Stack,
} from "@mui/material";
import { LocationOn, Phone, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      id="contact"
      sx={{
        backgroundColor: "#f3f2f0",
        py: 6,
        
      }}
    >
      <Container maxWidth="lg">
        {/* Top Section */}
        <Box
          sx={{
            overflowX: "auto",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "nowrap",
              minWidth: "800px", // Ensure wide enough to trigger scroll
              gap: 4,
            }}
          >
            {/* Explore Nashik */}
            <Box>
              <Box display="flex" alignItems="center" gap={1}>
                <Typography
                  variant="h5"
                  fontWeight="bold"
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
              <Typography variant="body2" color="#0f0e0d" mt={2}>
                Your gateway to discovering the wine capital of India with its
                rich heritage, spiritual significance, and modern attractions.
              </Typography>
            </Box>

            {/* Quick Links */}
            <Box sx={{ flex: "0 0 auto", minWidth: "200px" 
             }}>
              <Typography variant="subtitle1" fontWeight="bold" color="black">
                Quick Links
              </Typography>
              <Stack spacing={1} mt={2}>
                {[
                  "Top Attractions",
                  "Local Food",
                  "Best Hotels",
                  "Travel Guide",
                ].map((text, i) => (
                  <Link
                    key={i}
                    href="#"
                    color="#0f0e0d"
                    underline="hover"
                    sx={{ "&:hover": { color: "#2a90d9" } }}
                  >
                    {text}
                  </Link>
                ))}
              </Stack>
            </Box>

            {/* Categories */}
            <Box sx={{ flex: "0 0 auto", minWidth: "200px" }}>
              <Typography variant="subtitle1" fontWeight="bold" color="black">
                Categories
              </Typography>
              <Stack spacing={1} mt={2}>
                {[
                  "Vineyards & Wine Tours",
                  "Temples & Heritage",
                  "Adventure Sports",
                  "Local Shopping",
                ].map((text, i) => (
                  <Link
                    key={i}
                    href="#"
                    color="#0f0e0d"
                    underline="hover"
                    sx={{ "&:hover": { color: "#2a90d9" } }}
                  >
                    {text}
                  </Link>
                ))}
              </Stack>
            </Box>

            {/* Contact Info */}
            <Box sx={{ flex: "0 0 auto", minWidth: "250px" }}>
              <Typography variant="subtitle1" fontWeight="bold" color="black">
                Contact Info
              </Typography>
              <Stack spacing={1} mt={2}>
                <Box display="flex" alignItems="center" gap={1}>
                  <LocationOn fontSize="small" sx={{ color: "#2a90d9" }} />
                  <Typography variant="body2" color="#0f0e0d">
                    Nashik, Maharashtra, India
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                  <Phone fontSize="small" sx={{ color: "#2a90d9" }} />
                  <Typography variant="body2" color="#0f0e0d">
                    +91 253 XXX XXXX
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                  <Email fontSize="small" sx={{ color: "#2a90d9" }} />
                  <Typography variant="body2" color="#0f0e0d">
                    info@explorenashik.com
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>

        {/* Divider */}
        <Divider sx={{ borderColor: "#334155", my: 4 }} />

        {/* Bottom Section */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            color="#0f0e0d"
            textAlign={{ xs: "center", md: "left" }}
          >
            &copy; 2024 Explore Nashik. All rights reserved.
          </Typography>
          <Stack
            direction="row"
            spacing={3}
            justifyContent={{ xs: "center", md: "flex-end" }}
            flexWrap="wrap"
          >
            {["Privacy Policy", "Terms of Service", "Contact Us"].map(
              (text, i) => (
                <Link
                  key={i}
                  href="#"
                  color="#0f0e0d"
                  underline="hover"
                  sx={{ "&:hover": { color: "#2a90d9" } }}
                >
                  {text}
                </Link>
              )
            )}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

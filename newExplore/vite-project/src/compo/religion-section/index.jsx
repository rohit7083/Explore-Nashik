import React from "react";
import Header from "../home/Header";
import Footer from "../home/Footer";
import ReligionCard from "./ReligionCard";
import ReligionHeader from "./ReligionHeader";
import { Container } from "@mui/material";

function index() {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ mb: 4 }}>
        <ReligionHeader />

        <ReligionCard />
      </Container>
        <Footer />
    </>
  );
}

export default index;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./compo/home/index";
import FoodSection from "./compo/food-section";
import TT from "./compo/tours-section";
import Rilligion from "./compo/religion-section";

function App() {

const [liked,setLiked]=useState(false);


  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/food" element={<FoodSection />} />
        <Route path="/toursAnd-travels" element={<TT />} />
        <Route path="/religion" element={<Rilligion />} />
      </Routes>
    </Router>
  );
}

export default App;

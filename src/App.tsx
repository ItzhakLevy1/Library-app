import React from "react";
import "./App.css";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { ExplorTopBooks } from "./layouts/HomePage/ExploreTopBook";
import { Carousel } from "./layouts/HomePage/Carousel";
import { Heros } from "./layouts/HomePage/Heros";

function App() {
  return (
    <div>
      <Navbar />
      <ExplorTopBooks />
      <Carousel />
      <Heros />
    </div>
  );
}

export default App;

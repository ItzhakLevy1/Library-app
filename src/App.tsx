import React from "react";
import "./App.css";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { ExplorTopBooks } from "./layouts/HomePage/ExploreTopBook";
import { Carousel } from "./layouts/HomePage/Carousel";

function App() {
  return (
    <div>
      <Navbar />
      <ExplorTopBooks />
      <Carousel />
    </div>
  );
}

export default App;

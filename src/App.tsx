import React from "react";
import "./App.css";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { ExplorTopBooks } from "./layouts/HomePage/ExploreTopBook";
import { Carousel } from "./layouts/HomePage/Carousel";
import { Heros } from "./layouts/HomePage/Heros";
import { LibraryServices } from "./layouts/HomePage/LibraryServices";

function App() {
  return (
    <div>
      <Navbar />
      <ExplorTopBooks />
      <Carousel />
      <Heros />
      <LibraryServices />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { ExplorTopBooks } from "./layouts/HomePage/ExploreTopBook";
import { Carousel } from "./layouts/HomePage/Carousel";
import { Heros } from "./layouts/HomePage/Heros";
import { LibraryServices } from "./layouts/HomePage/LibraryServices";
import { Footer } from "./layouts/NavbarAndFooter/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <ExplorTopBooks />
      <Carousel />
      <Heros />
      <LibraryServices />
      <Footer />
    </div>
  );
}

export default App;

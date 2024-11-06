import React from "react";
import "./App.css";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { ExplorTopBooks } from "./layouts/HomePage/ExploreTopBook";

function App() {
  return (
    <div>
      <Navbar />
      <ExplorTopBooks />
    </div>
  );
}

export default App;

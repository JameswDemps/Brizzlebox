import React from "react";
import logo from "./logo.svg";

// import "./components/css/Navbar.css";

import "./App.css";
import Navigationbar from "./components/Navigationbar";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Navigationbar />
      <Home />
    </div>
  );
}

export default App;

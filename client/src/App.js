import React, { Component } from "react";
import Welcome from "./components/pages/Welcome";
import Nav from "./components/Nav.js";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Welcome />
      </div>
      
    );
  }
}

export default App;

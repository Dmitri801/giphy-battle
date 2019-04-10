import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from "./components/Layout/Navbar";
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import "./main.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/favorites" component={Favorites} />
      </Router>
    );
  }
}

export default App;

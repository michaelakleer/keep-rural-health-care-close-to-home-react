import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";

import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
        <Switch>
          <Route path="/about" exact component={About} />
        </Switch>
      </div>
    </Router>
  );
}

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "react-bulma-components/dist/react-bulma-components.min.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Research from "./pages/Research/Research";
import Resources from "./pages/Resources/Resources";
import Community from "./pages/Community/Community";
import Events from "./pages/Events/Events";
import Footer from "./components/Footer/Footer";

import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/research" component={Research} />
          <Route path="/resources" component={Resources} />
          <Route path="/community" component={Community} />
          <Route path="/events" component={Events} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

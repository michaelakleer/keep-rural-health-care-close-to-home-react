import React from "react";
import { Switch, Route } from "react-router-dom";
import "react-bulma-components/dist/react-bulma-components.min.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Research from "./components/Research/Research";
import Resources from "./components/Resources/Resources";
import Community from "./components/Community/Community";
import Events from "./components/Events/Events";
import Contact from "./components/Contact/Contact";
import Archive from "./components/Archive/Archive";
import IndividualNews from "./components/News/IndividualNews";
import Footer from "./components/Footer/Footer";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/research" component={Research} />
        <Route path="/resources" component={Resources} />
        <Route path="/community" component={Community} />
        <Route path="/events" component={Events} />
        <Route path="/contact" component={Contact} />
        <Route path="/archive" component={Archive} />
        <Route path="/news/:id" component={IndividualNews} />
      </Switch>
      <Footer />
    </div>
  );
}

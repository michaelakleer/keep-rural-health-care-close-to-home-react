import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import News from "./components/News";
import Archive from "./components/Archive";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path="/" component={News} />
          <Route exact path="/news/:id" component={Archive} />
        </Fragment>
      </Router>
    );
  }
}

export default App;

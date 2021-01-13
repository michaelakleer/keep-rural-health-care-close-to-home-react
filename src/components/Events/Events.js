import React, { Component } from "react";
import axios from "axios";

export class Events extends Component {
  state = {
    events: [],
    isLoaded: false,
  };

  componentDidMount() {
    axios
      .get("http://localhost:8000/wp-json/tribe/events/v1/events")
      .then((res) =>
        this.setState({
          events: res.event.events[0],
          isLoaded: true,
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    console.log(this.state);
    const { isLoaded } = this.state;
    if (isLoaded) {
      return <div></div>;
    }

    return <h3>Loading...</h3>;
  }
}

export default Events;

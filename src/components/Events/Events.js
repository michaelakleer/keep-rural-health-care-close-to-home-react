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
          events: res.data,
          isLoaded: true,
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    console.log(this.state);
    const { events, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <div>
          {events.map((event) => (
            <h4>{event.title.rendered}</h4>
          ))}
        </div>
      );
    }

    return <h3>Loading...</h3>;
  }
}

export default Events;

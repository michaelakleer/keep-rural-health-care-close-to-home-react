import React, { Component } from "react";
import EventsItem from "./EventsItem";
import axios from "axios";
import "./Events.css";

export class Events extends Component {
  state = {
    events: [],
    isLoaded: false,
  };

  componentDidMount() {
    axios
      .get("http://localhost:8000/wp-json/tribe/events/v1/events")
      .then((res) => this.setState({ events: res.data, isLoaded: true }))
      .catch((err) => console.log(err));
  }

  render() {
    const { events, isLoaded } = this.state;
    if (isLoaded) {
      <div>
        <h1>Events</h1>
        {events.map((events) => (
          <EventsItem key={events.id} events={events} />
        ))}
      </div>;
    }
    return <h3>Loading...</h3>;
  }
}

export default Events;

import React, { Component } from "react";

export class EventsItem extends Component {
  render() {
    const { title } = this.props.events;
    return (
      <div>
        <h2>{title.rendered}</h2>
      </div>
    );
  }
}

export default EventsItem;

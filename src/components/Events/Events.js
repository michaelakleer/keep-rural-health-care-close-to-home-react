import React from "react";
import EventsItem from "./EventsItem";
import { Link } from "react-router-dom";
import { Button } from "react-bulma-components";
import "./Events.css";

export default function Events(props) {
  return (
    <div className="Events">
      <section className="eventsOne">
        <h2 className="month">February 2021</h2>
        <hr />
        <EventsItem />
        <h2 className="month">March 2021</h2>
        <hr />
        <EventsItem />
        <EventsItem />
        <h2 className="month">April 2021</h2>
        <hr />
        <EventsItem />
        <Link to="/events/archive">
          <Button className="button is-large">Past Events</Button>
        </Link>
      </section>
    </div>
  );
}

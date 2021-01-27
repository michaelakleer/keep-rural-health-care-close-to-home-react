import React from "react";
import EventsItem from "./EventsItem";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import { Button } from "react-bulma-components";
import "./../../images/tree.jpg";
import PastEvents from "./PastEvents";

import "./Events.css";

export default function Events(props) {
  props = {
    eventOne: {
      id: "feb-9",
      day: "Tue",
      date: 9,
      fullDate: "February 9 @ 8:00 am - 5:00 pm",
      title: "Title (link to individual page)",
      location: "Location (Link to google maps page??",
      description: "Description (excerpt)",
      imageSource: "tree.jpg",
      photoTitle: "Tree",
    },
    eventTwo: {
      id: "mar-10",
      day: "Wed",
      date: 10,
      fullDate: "March 10 @ 8:00 am - 5:00 pm",
      title: "Title (link to individual page)",
      location: "Location (Link to google maps page??",
      description: "Description (excerpt)",
      imageSource: "tree.jpg",
      photoTitle: "Tree",
    },
    eventThree: {
      id: "mar-12",
      day: "Fri",
      date: 12,
      fullDate: "March 12 @ 8:00 am - 5:00 pm",
      title: "Title (link to individual page)",
      location: "Location (Link to google maps page??",
      description: "Description (excerpt)",
      imageSource: "tree.jpg",
      photoTitle: "Tree",
    },
    eventFour: {
      id: "apr-9",
      day: "Fri",
      date: 9,
      fullDate: "April 9 @ 8:00 am - 5:00 pm",
      title: "Title (link to individual page)",
      location: "Location (Link to google maps page??",
      description: "Description (excerpt)",
      imageSource: "tree.jpg",
      photoTitle: "Tree",
    },
  };

  const { path, url } = useRouteMatch();

  return (
    <div className="Events">
      <section className="eventsOne">
        <h2 className="month">February 2021</h2>
        <hr />
        <EventsItem {...props.eventOne} />
        <h2 className="month">March 2021</h2>
        <hr />
        <EventsItem {...props.eventTwo} />
        <EventsItem {...props.eventThree} />
        <h2 className="month">April 2021</h2>
        <hr />
        <EventsItem {...props.eventFour} />
        <Link to={`${url}/archive`}>
          <Button className="button is-large">Past Events</Button>
        </Link>
      </section>

      <Switch>
        <Route path={`${path}/archive`}>
          <PastEvents />
        </Route>
      </Switch>
    </div>
  );
}

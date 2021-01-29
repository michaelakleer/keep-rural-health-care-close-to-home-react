import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import IndividualEvents from "./IndividualEvents";
import "./EventsItem.css";

export default function EventsItem(props) {
  return (
    <div className="EventsItem">
      <div className="eventContainer">
        <div className="date">
          <div>{props.day}</div>
          <div className="dateNumber">{props.date}</div>{" "}
        </div>
        <div className="info">
          <div className="fullDate">{props.fullDate}</div>
          <div className="eventTitle">
            <Link to={`/event-info/${props.id}`}>{props.title}</Link>
          </div>
          <div className="location">{props.location}</div>
          <div className="description">{props.description}</div>
        </div>
        <div className="image">
          <img
            src={props.imageSource}
            alt={props.photoTitle}
            className="treeImage"
          />
        </div>
      </div>
      <Switch>
        <Route path="/event-info/:id">
          <IndividualEvents />
        </Route>
      </Switch>
    </div>
  );
}

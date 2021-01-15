import React from "react";
import "./EventsItem.css";
import Tree from "./../images/tree.jpg";

export default function EventsItem() {
  return (
    <div className="EventsItem">
      <div className="eventContainer">
        <div className="date">
          <div>Tues</div>
          <div className="dateNumber">9</div>{" "}
        </div>
        <div className="info">
          <div className="fullDate">February 9 @ 8:00 am - 5:00 pm</div>
          <div className="eventTitle">Title (link to individual page)</div>
          <div className="location">Location (Link to google maps page??)</div>
          <div className="description">Description (excerpt)</div>
        </div>
        <div className="image">
          <img src={Tree} alt="Tree" className="treeImage" />
        </div>
      </div>
    </div>
  );
}

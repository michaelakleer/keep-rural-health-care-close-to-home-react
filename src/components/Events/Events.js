import React from "react";
import EventsItem from "./EventsItem";
import Tree from "../../images/tree.jpg";
import "./Events.css";

export default function Events(props) {
  return (
    <div className="Events">
      <section className="eventsOne">
        <h2 className="month">February 2021</h2>
        <hr />
        <EventsItem
          id="feb-9"
          day="Tue"
          date={9}
          fullDate="February 9 @ 8:00 am - 5:00 pm"
          title="Title (link to individual page)"
          location="Location (Link to google maps page??"
          description="Description (excerpt)"
          photoTitle="Tree"
          imageSource={Tree}
        />
        <h2 className="month">March 2021</h2>
        <hr />
        <EventsItem
          id="mar-10"
          day="Wed"
          date={10}
          fullDate="March 10 @ 8:00 am - 5:00 pm"
          title="Title (link to individual page)"
          location="Location (Link to google maps page??"
          description="Description (excerpt)"
          photoTitle="Tree"
          imageSource={Tree}
        />
        <EventsItem
          id="mar-12"
          day="Fri"
          date={12}
          fullDate="March 12 @ 8:00 am - 5:00 pm"
          title="Title (link to individual page)"
          location="Location (Link to google maps page??"
          description="Description (excerpt)"
          photoTitle="Tree"
          imageSource={Tree}
        />
        <h2 className="month">April 2021</h2>
        <hr />
        <EventsItem
          id="apr-9"
          day="Fri"
          date={9}
          fullDate="April 9 @ 8:00 am - 5:00 pm"
          title="Title (link to individual page)"
          location="Location (Link to google maps page??"
          description="Description (excerpt)"
          photoTitle="Tree"
          imageSource={Tree}
        />
      </section>
    </div>
  );
}

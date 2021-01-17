import React from "react";
import { data } from "./EventData";
import "./EventsItem.css";

export const EventsItem = () => {
  return (
    <>
      <div className="eventContainer">
        {data.map((data, key) => {
          return (
            <div key={key}>
              <Event
                key={key}
                id={data.id}
                day={data.day}
                date={data.date}
                fullDate={data.fullDate}
                title={data.title}
                location={data.location}
                description={data.description}
              />
            </div>
          );
        })}
      </div>
    </>
  );
      };

  const Event = ({ id, day, date, fullDate, title, location, description }) => {
    if (!id) return <div />;
    return (
      <div className="EventItem">
        <div className="date">
          <div>{data.day}</div>
          <div className="dateNumber">{data.date}</div>{" "}
        </div>
        <div className="info">
          <div className="fullDate">{data.fullDate}</div>
          <div className="eventTitle">
            <Link to={`/events/${data.id}`}>{data.title}</Link>
          </div>
          <div className="location">{data.location}</div>
          <div className="description">{data.description}</div>
        </div>
        <div className="image">
          <img src={data.imageSource} alt={data.photoTitle} className="image" />
        </div>
      </div>
    );
  };
};

export default EventsItem;
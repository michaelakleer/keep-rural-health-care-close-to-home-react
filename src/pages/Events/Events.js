import React from "react";
import "./Events.css";

export default function Events() {
  return (
    <div className="Events">
      <section className="eventsOne">
        <h1>Petitions</h1>
        <div className="petitions">
          <p>
            <a href="/">Lorem ipsum dolor sit amet.</a>
          </p>
          <p>
            <a href="/">Lorem ipsum dolor sit amet.</a>
          </p>
        </div>
      </section>
      <section className="eventsTwo">
        <h1>Activations</h1>
        <div className="activations">
          <p>
            <a href="/">Lorem ipsum dolor sit amet.</a>
          </p>
          <p>
            <a href="/">Lorem ipsum dolor sit amet.</a>
          </p>
        </div>
      </section>
      <section className="eventsThree">
        <h1>Past Events</h1>
        <div className="containerOne">
          <div className="left">
            <h2>Petitions</h2>
            <div className="leftUrls">
              <p>
                <a href="/">Lorem ipsum dolor sit amet.</a>
              </p>
              <p>
                <a href="/">Lorem ipsum dolor sit amet.</a>
              </p>
              <p>
                <a href="/">Lorem ipsum dolor sit amet.</a>
              </p>
              <p>
                <a href="/">Lorem ipsum dolor sit amet.</a>
              </p>
            </div>
          </div>
          <div className="right">
            <h2>Activations</h2>
            <div className="rightUrls">
              <p>
                <a href="/">Lorem ipsum dolor sit amet.</a>
              </p>
              <p>
                <a href="/">Lorem ipsum dolor sit amet.</a>
              </p>
              <p>
                <a href="/">Lorem ipsum dolor sit amet.</a>
              </p>
              <p>
                <a href="/">Lorem ipsum dolor sit amet.</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

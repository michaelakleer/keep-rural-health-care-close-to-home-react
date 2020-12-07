import React from "react";
import "./Resources.css";

export default function Resources() {
  return (
    <div className="Resources">
      <section className="resourcesOne">
        <h1>News Articles</h1>
        <div className="url">
          <ul className="left">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>
          <ul className="right">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>
        </div>
      </section>
      <section className="resourcesTwo">
        <h1>Web Articles</h1>
        <div className="url">
          <ul className="left">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>
          <ul className="right">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>
        </div>
      </section>
      <section className="resourcesThree">
        <div className="container">
          <div className="report">
            <figure class="image is-128x128">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
                alt="image1"
              />
            </figure>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div className="execSummary">
            <figure class="image is-128x128">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
                alt="image2"
              />
            </figure>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </section>
    </div>
  );
}

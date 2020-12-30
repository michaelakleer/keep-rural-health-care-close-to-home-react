import React from "react";
import "./Community.css";

export default function Community() {
  return (
    <div className="Community">
      <section className="communityOne">
        <ul>
          <li>
            <a href="http://grandviewmanitoba.com/default.asp">
              {" "}
              Grandview News and Views Website
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/gvhomecoming/">
              Grandview News and Views Facebook Page
            </a>
          </li>
        </ul>
      </section>
      <section className="communityTwo">
        <h1>Community Health Resources</h1>
        <div className="containerOne">
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
      </section>
      <section className="communityThree">
        <h1>Mental Health Resources</h1>
        <div className="containerOne">
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

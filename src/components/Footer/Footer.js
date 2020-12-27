import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <div className="container">
          <div className="boxOne">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/research">Research</Link>
                </li>
                <li>
                  <Link to="/resources">Resources</Link>
                </li>
                <li>
                  <Link to="/community">Community</Link>
                </li>
                <li>
                  <Link to="/events">Events</Link>
                </li>
                <li>
                  <Link to="/contact">Contacts</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="boxTwo">
            <ul>
              <li>
                <Link to="/">Lorem</Link>
              </li>
              <li>
                <Link to="/">Lorem</Link>
              </li>
              <li>
                <Link to="/">Lorem</Link>
              </li>
              <li>
                <Link to="/">Lorem</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

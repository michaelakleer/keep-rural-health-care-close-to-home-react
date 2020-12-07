import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <section className="homeOne">
        <h1>
          Etiam pellentesque tortor eu erat iaculis, a efficitur odio pretium.
          Nunc sed justo lacus. Nam a faucibus tortor, quis venenatis ligula.
          Curabitur fermentum ac dolor vel rhoncus. Pellentesque pretium neque
          felis, in tempus lectus pellentesque eget. Vivamus a lobortis metus.
          Donec vehicula lacinia turpis, quis tristique eros condimentum
          sodales.
        </h1>
      </section>
      <section>
        <section className="homeTwo">
          <div>Hi poop</div>
        </section>
        <section className="homeThree">
          <div>Hello!</div>
        </section>
      </section>
      <section className="homeFour">
        <div className="newsOne">
          <h2>Lorem Ipsum</h2>
          <p>
            Etiam pellentesque tortor eu erat iaculis, a efficitur odio pretium.
            Nunc sed justo lacus. Nam a faucibus tortor, quis venenatis ligula.
            Curabitur fermentum ac dolor vel rhoncus. Pellentesque pretium neque
            felis, in tempus lectus pellentesque eget. Vivamus a lobortis metus.
            Donec vehicula lacinia turpis, quis tristique eros condimentum
            sodales. Fusce aliquam justo vitae nulla tempus, nec tincidunt erat
            elementum. Nullam at pulvinar turpis. Pellentesque facilisis ligula
            id arcu accumsan, vitae auctor augue egestas. Fusce vitae ultricies
            turpis. Nam a sodales urna. Vestibulum placerat ex eu ex euismod, in
            consequat nulla accumsan. Pellentesque et neque vel est eleifend
            feugiat eget ac libero.
          </p>
        </div>
        <div className="newsTwo">
          <h2>Lorem Ipsum</h2>
          <p>
            Etiam pellentesque tortor eu erat iaculis, a efficitur odio pretium.
            Nunc sed justo lacus. Nam a faucibus tortor, quis venenatis ligula.
            Curabitur fermentum ac dolor vel rhoncus. Pellentesque pretium neque
            felis, in tempus lectus pellentesque eget. Vivamus a lobortis metus.
            Donec vehicula lacinia turpis, quis tristique eros condimentum
            sodales. Fusce aliquam justo vitae nulla tempus, nec tincidunt erat
            elementum. Nullam at pulvinar turpis. Pellentesque facilisis ligula
            id arcu accumsan, vitae auctor augue egestas. Fusce vitae ultricies
            turpis. Nam a sodales urna. Vestibulum placerat ex eu ex euismod, in
            consequat nulla accumsan. Pellentesque et neque vel est eleifend
            feugiat eget ac libero.
          </p>
        </div>
        <div className="newsThree">
          <h2>Lorem Ipsum</h2>
          <p>
            Etiam pellentesque tortor eu erat iaculis, a efficitur odio pretium.
            Nunc sed justo lacus. Nam a faucibus tortor, quis venenatis ligula.
            Curabitur fermentum ac dolor vel rhoncus. Pellentesque pretium neque
            felis, in tempus lectus pellentesque eget. Vivamus a lobortis metus.
            Donec vehicula lacinia turpis, quis tristique eros condimentum
            sodales. Fusce aliquam justo vitae nulla tempus, nec tincidunt erat
            elementum. Nullam at pulvinar turpis. Pellentesque facilisis ligula
            id arcu accumsan, vitae auctor augue egestas. Fusce vitae ultricies
            turpis. Nam a sodales urna. Vestibulum placerat ex eu ex euismod, in
            consequat nulla accumsan. Pellentesque et neque vel est eleifend
            feugiat eget ac libero.
          </p>
        </div>
        <button>
          {" "}
          <a href="/">Archive</a>{" "}
        </button>
      </section>
      <footer>
        <div className="container">
          <div className="boxOne">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Research</li>
              <li>Resources</li>
              <li>Community</li>
              <li>Events</li>
            </ul>
          </div>
          <div className="boxTwo">
            <button>
              <a href="/">Contact</a>
            </button>
          </div>
          <div className="boxThree">
            <ul>
              <li>
                <a href="/">Poop</a>
              </li>
              <li>
                <a href="/">Fart</a>
              </li>
              <li>
                <a href="/">Pee</a>
              </li>
              <li>
                <a href="/">Bidet</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bulma-components";
import News from "./../News/News";

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
          <div>Downloadable pdfs</div>
        </section>
        <section className="homeThree">
          <div>Events</div>
        </section>
      </section>
      <News />
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
        <Link>
          <Button className="button is-large is-fullwidth">Archive</Button>
        </Link>
      </section>
    </div>
  );
}

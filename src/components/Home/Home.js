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
        <section className="homeThree">Events</section>
      </section>
      <section className="homeFour">
        <News />
        <Link to="/archive">
          <Button className="button is-large is-fullwidth">Archive</Button>
        </Link>
      </section>
    </div>
  );
}

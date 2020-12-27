import React from "react";
import "./Research.css";

export default function Research() {
  return (
    <div className="Research">
      <section className="researchOne">
        <h1>
          Donec mattis maximus leo, sit amet vestibulum orci. Aliquam fringilla
          nec orci sed dignissim. Nullam vitae sapien sed purus mollis mollis.
          Vestibulum dignissim tellus quis magna pellentesque gravida. Morbi
          blandit dolor et pretium volutpat. Sed at est in urna pulvinar
          accumsan. Proin euismod scelerisque nisi vitae lacinia. Nam ac
          sollicitudin nisl, ut bibendum elit. Vestibulum quis lorem tristique,
          mollis ligula quis, scelerisque justo. Donec eu ipsum id nunc mollis
          pharetra ut eget ligula.
        </h1>
      </section>
      <section className="researchTwo">
        <div className="containerOne">
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

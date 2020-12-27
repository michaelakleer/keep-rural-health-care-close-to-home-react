import React from "react";

import "./About.css";

export default function About() {
  return (
    <div className="About">
      <section className="aboutOne">
        <h1>
          {" "}
          Mauris volutpat tempus gravida. Nulla aliquam enim quis fermentum
          posuere. Nunc mattis nisl eu velit posuere, sit amet facilisis turpis
          fermentum. Ut facilisis posuere erat, euismod aliquet lacus lacinia
          ac. Ut sit amet risus vitae lectus pharetra tempor. Nulla id maximus
          orci. Sed et felis at massa sodales semper. Nulla libero tellus,
          dignissim nec ullamcorper at, mattis et tortor.
        </h1>
      </section>
      <section className="aboutTwo">
        <div className="containerOne">
          <div className="imageOne">
            <figure className="image is-128x128">
              <img
                className="is-rounded"
                src="https://bulma.io/images/placeholders/128x128.png"
                alt="portrait"
              />
            </figure>
          </div>
          <div className="bioOne">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse scelerisque non velit in aliquam. Sed feugiat, arcu et
              porta iaculis, erat ligula iaculis dolor, vitae eleifend massa
              metus sed mi. Morbi semper dolor at quam faucibus, in fermentum
              leo pellentesque. Integer vel gravida ligula, ac tristique odio.
              Cras vehicula condimentum sollicitudin. Pellentesque eu semper
              magna. Etiam a semper ligula. Sed vel maximus velit. Aenean
              iaculis mattis velit, ut molestie eros mattis id. Nam eu metus ex.
              Phasellus quis risus non erat aliquet mattis. Aliquam eleifend
              quis nibh laoreet euismod.
            </p>
          </div>
        </div>
      </section>
      <section className="aboutThree">
        <div className="containerTwo">
          <div className="imageTwo">
            <figure className="image is-128x128">
              <img
                className="is-rounded"
                src="https://bulma.io/images/placeholders/128x128.png"
                alt="portrait"
              />
            </figure>
          </div>
          <div className="bioTwo">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse scelerisque non velit in aliquam. Sed feugiat, arcu et
              porta iaculis, erat ligula iaculis dolor, vitae eleifend massa
              metus sed mi. Morbi semper dolor at quam faucibus, in fermentum
              leo pellentesque. Integer vel gravida ligula, ac tristique odio.
              Cras vehicula condimentum sollicitudin. Pellentesque eu semper
              magna. Etiam a semper ligula. Sed vel maximus velit. Aenean
              iaculis mattis velit, ut molestie eros mattis id. Nam eu metus ex.
              Phasellus quis risus non erat aliquet mattis. Aliquam eleifend
              quis nibh laoreet euismod.
            </p>
          </div>
        </div>
      </section>
      <section className="aboutFour">
        <div className="containerThree">
          <div className="bioBox">
            <div className="imageThree">
              <figure className="image is-128x128 imgRow">
                <img
                  className="is-rounded"
                  src="https://bulma.io/images/placeholders/128x128.png"
                  alt="portrait"
                />
              </figure>
            </div>
            <div className="bioThree">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse scelerisque non velit in aliquam. Sed feugiat, arcu
                et porta iaculis, erat ligula iaculis dolor, vitae eleifend
                massa metus sed mi.
              </p>
            </div>
          </div>
          <div className="bioBox">
            <div className="imageFour">
              <figure className="image is-128x128 imgRow">
                <img
                  className="is-rounded"
                  src="https://bulma.io/images/placeholders/128x128.png"
                  alt="portrait"
                />
              </figure>
            </div>
            <div className="bioFour">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse scelerisque non velit in aliquam. Sed feugiat, arcu
                et porta iaculis, erat ligula iaculis dolor, vitae eleifend
                massa metus sed mi.
              </p>
            </div>
          </div>
          <div className="bioBox">
            <div className="imageFive">
              <figure className="image is-128x128 imgRow">
                <img
                  className="is-rounded"
                  src="https://bulma.io/images/placeholders/128x128.png"
                  alt="portrait"
                />
              </figure>
            </div>
            <div className="bioFive">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse scelerisque non velit in aliquam. Sed feugiat, arcu
                et porta iaculis, erat ligula iaculis dolor, vitae eleifend
                massa metus sed mi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

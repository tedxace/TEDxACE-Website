import React from "react";

import "../../sponsor.css";

const Sponsors = ({ sponsors }) => {
  console.log(sponsors);
  return (
    <section id="sponsors" className="image">
      <header id="header">
        <h2 className="heading">Sponsors</h2>
      </header>
      <div className="image-overlay">
        <div className="container">
          <div className="row">
            {sponsors?.map((sponsor) => {
              return (
                <a
                  className="card"
                  key={sponsor.name}
                  href={sponsor.link}
                  rel="noreferrer"
                  target={"_blank"}
                >
                  <img
                    loading="lazy"
                    src={sponsor.image}
                    alt={sponsor.name}
                    className={``}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;

import React from "react";

const Sponsors = ({ sponsors }) => {
  return (
    <section id="sponsors" className="image pt-3">
      <header id="header">
        <h2 className="heading">Sponsors</h2>
      </header>
      <div className="image-overlay">
        <div className="container grid place-content-center">
          <div className="h-auto w-full flex justify-between max-w-2xl gap-5">
            {sponsors?.map((sponsor) => {
              return (
                <a
                  className="grid place-items-center rounded-full border-2 border-dashed border-tedx-white"
                  key={sponsor.name}
                  href={sponsor.link}
                  rel="noreferrer"
                  target={"_blank"}
                >
                  <img
                    loading="lazy"
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="object-contain aspect-square h-[60px] md:h-[100px]"
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

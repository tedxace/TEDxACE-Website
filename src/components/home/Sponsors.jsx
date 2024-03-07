import React from "react";

const Sponsors = ({ sponsors }) => {
  return (
    <section id="sponsors" className="image pt-3 flex flex-col flex-wrap items-center h-[800px]">
      <header id="header">
        <h2 className="heading text-4xl mt-10 font-eczar">SPONSORS</h2>
      </header>
      <div className="image-overlay">
        <div className=" ">
          <div className="sponsorsbg flex flex-wrap justify-center items-center h-[450px] ">
            {sponsors?.map((sponsor) => {
              return (
                <a
                  className="rounded-full border-2 border-dashed border-tedx-white m-5"
                  key={sponsor.name}
                  href={sponsor.link}
                  rel="noreferrer"
                  target={"_blank"}
                >
                  <img
                    loading="lazy"
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="object-contain aspect-square h-[100px] md:h-[150px]"
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

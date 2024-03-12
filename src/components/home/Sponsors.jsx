import React from "react";

const Sponsors = ({ sponsors }) => {
  return (
    <section id="sponsors" className="pt-10 pb-24 ">
      <header >
        <h2 className="heading text-4xl mt-10 text-center font-eczar">SPONSORS</h2>
      </header>
      <div className="image-overlay">
          <div className="h-auto w-full flex flex-wrap  justify-center ">
            {sponsors?.map((sponsor) => {
              return (
                <a
                  className="grid place-items-center m-2 lg:m-10 rounded-full border-4 border-tedx-heading p-2 hover:scale-[105%] ease-in-out"
                  key={sponsor.name}
                  href={sponsor.link}
                  rel="noreferrer"
                  target={"_blank"}
                >
                  <img
                    loading="lazy"
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="object-contain aspect-square w-[120px] lg:w-[180px]"
                  />
                </a>
              );
            })}
          </div>
      </div>
    </section>
  );
};

export default Sponsors;

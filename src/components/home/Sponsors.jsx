import React from "react";

const Sponsors = ({ sponsors }) => {
  return (
    <section id="sponsors" className="image pt-24 pb-32 ">
      <header id="header">
        <h2 className="heading text-4xl mt-10 font-eczar">SPONSORS</h2>
      </header>
      <div className="image-overlay">
        <div className="grid place-content-center w-full">
          <div className="h-auto w-full flex justify-between  gap-5 mb-10 md:gap-10 ">
            {sponsors?.map((sponsor) => {
              return (
                <a
                  className="grid place-items-center rounded-full border-2 border-dashed bg-slate-200 border-tedx-white p-2"
                  key={sponsor.name}
                  href={sponsor.link}
                  rel="noreferrer"
                  target={"_blank"}
                >
                  <img
                    loading="lazy"
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="object-contain aspect-square w-[150px]"
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

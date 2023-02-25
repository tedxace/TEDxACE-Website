import React from "react";

const Sponsors = ({ sponsors }) => {
  return (
    <section
      id="sponsors"
      className="flex flex-col flex-wrap md:px-24 lg-px-32 w-full justify-center gap-3 items-center py-10"
    >
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Sponsors</h2>
      <div className="flex items-center justify-center flex-wrap gap-6 md:gap-10">
        {sponsors?.map((sponsor) => {
          return (
            <a
              key={sponsor.name}
              href={sponsor.link}
              rel="noreferrer"
              target={"_blank"}
            >
              <img
                loading="lazy"
                src={sponsor.image}
                alt={sponsor.name}
                className={`h-[125px] w-[125px] md:w-[150px] object-contain md:h-[150px] lg:h-[200px] lg:w-[200px] ease-in-out`}
              />
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Sponsors;
